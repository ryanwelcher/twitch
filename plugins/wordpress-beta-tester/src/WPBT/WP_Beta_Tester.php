<?php
/**
 * WordPress Beta Tester
 *
 * @package WordPress_Beta_Tester
 * @author Andy Fragen, original author Peter Westwood.
 * @license GPLv2+
 * @copyright 2009-2016 Peter Westwood (email : peter.westwood@ftwr.co.uk)
 */

/**
 * WP_Beta_Tester
 */
class WP_Beta_Tester {
	/**
	 * Holds main plugin file.
	 *
	 * @var string
	 */
	public $file;

	/**
	 * Holds plugin options.
	 *
	 * @var array
	 */
	public static $options;

	/**
	 * Holds WP_AUTO_UPDATE_CORE if set.
	 *
	 * @var string|bool
	 */
	public static $core_update_stream_constant;

	/**
	 * Holds WP_AUTO_UPDATE_CORE if set.
	 *
	 * @var string|bool
	 */
	public static $core_update_channel_constant;

	/**
	 * Constructor.
	 *
	 * @param  string $file    Main plugin file.
	 * @param  array  $options Plugin options.
	 * @return void
	 */
	public function __construct( $file, $options ) {
		$this->file                         = $file;
		self::$options                      = $options;
		self::$core_update_stream_constant  = defined( 'WP_AUTO_UPDATE_CORE' ) && in_array( \WP_AUTO_UPDATE_CORE, array( 'beta', 'rc' ), true ) ? \WP_AUTO_UPDATE_CORE : false;
		self::$core_update_channel_constant = defined( 'WP_AUTO_UPDATE_CORE' ) && in_array( \WP_AUTO_UPDATE_CORE, array( 'development', 'branch-development' ), true ) ? \WP_AUTO_UPDATE_CORE : false;

	}

	/**
	 * Rev up the engines.
	 *
	 * @return void
	 */
	public function run() {
		$this->load_hooks();
		( new WPBT_Settings( $this, self::$options ) )->run();
	}

	/**
	 * Load hooks.
	 *
	 * @return void
	 */
	protected function load_hooks() {
		add_action(
			'update_option_wp_beta_tester_stream',
			array(
				$this,
				'action_update_option_wp_beta_tester_stream',
			)
		);
		add_filter( 'pre_http_request', array( $this, 'filter_http_request' ), 10, 3 );

		// Fixed in https://core.trac.wordpress.org/changeset/49708.
		if ( version_compare( get_bloginfo( 'version' ), '5.6-RC1-49708', '<=' )
			&& preg_match( '/alpha|beta|RC/', get_bloginfo( 'version' ) )
		) {
			// set priority to 11 so that we fire after the function core hooks into this filter.
			add_filter( 'update_footer', array( $this, 'update_footer' ), 11 );
		}

		// Add dashboard widget.
		add_action( 'wp_dashboard_setup', array( $this, 'add_dashboard_widget' ) );
		add_action( 'wp_network_dashboard_setup', array( $this, 'add_dashboard_widget' ) );

		// Delete development RSS feed transient for dashboard widget on core upgrade.
		add_action( 'upgrader_process_complete', array( $this, 'delete_feed_transient_on_upgrade' ), 10, 2 );
	}

	/**
	 * Check and display notice if 'update' really downgrade.
	 *
	 * @return void
	 */
	public function action_admin_head_plugins_php() {
		// Workaround the check throttling in wp_version_check().
		$st = get_site_transient( 'update_core' );
		if ( is_object( $st ) ) {
			$st->last_checked = 0;
			set_site_transient( 'update_core', $st );
		}
		wp_version_check();

		// Can output an error here if current config drives version backwards.
		if ( $this->check_if_settings_downgrade() ) {
			echo '<div id="message" class="notice notice-warning"><p>';
			$admin_page = is_multisite() ? network_admin_url( 'settings.php' ) : admin_url( 'tools.php' );
			$admin_page = add_query_arg(
				array(
					'page' => 'wp-beta-tester',
					'tab'  => 'wp_beta_tester_core',
				),
				$admin_page
			);
			/* translators: %s: link to setting page */
			printf(
				/* translators: %s: WordPress Beta Tester Settings page URL */
				wp_kses_post( __( '<strong>Warning:</strong> Your current <a href="%s">WordPress Beta Tester plugin configuration</a> will downgrade your installation to a previous version - please reconfigure it.', 'wordpress-beta-tester' ) ),
				esc_url( $admin_page )
			);
			echo '</p></div>';
		}
	}

	/**
	 * Filter 'pre_http_request' to add beta-tester API check.
	 *
	 * @param  mixed  $result $result from filter.
	 * @param  array  $args   Array of filter args.
	 * @param  string $url    URL from filter.
	 * @return /stdClass Output from wp_remote_get().
	 */
	public function filter_http_request( $result, $args, $url ) {
		if ( $result || isset( $args['_beta_tester'] ) ) {
			return $result;
		}
		if ( false === strpos( $url, '//api.wordpress.org/core/version-check/' ) ) {
			return $result;
		}

		// It's a core-update request.
		$args['_beta_tester'] = true;

		$url = empty( self::$options['stream-option'] )
			? add_query_arg( 'channel', self::$options['channel'], $url )
			: add_query_arg( 'channel', self::$options['stream-option'], $url );

		// Use WP_AUTO_UPDATE_CORE if set.
		$url = self::$core_update_stream_constant ? add_query_arg( 'channel', self::$core_update_stream_constant, $url ) : $url;
		$url = self::$core_update_channel_constant ? add_query_arg( 'channel', self::$core_update_channel_constant, $url ) : $url;

		// Make adjustments for switching between channels.
		$url = $this->channel_switching_modification( $url );

		// phpcs:ignore Squiz.PHP.CommentedOutCode.Found
		// $url = add_query_arg( 'pretend_releases', array( '5.6-beta2' ), $url );

		return wp_remote_get( $url, $args );
	}

	/**
	 * Modify URL to version check to return expected API response.
	 *
	 * @param string $url Version check URL.
	 *
	 * @return string $url
	 */
	private function channel_switching_modification( $url ) {
		$next_versions = ( new WPBT_Core( $this, static::$options ) )->calculate_next_versions();
		$wp_version    = get_bloginfo( 'version' );
		$channel       = self::$core_update_channel_constant ? self::$core_update_channel_constant : self::$options['channel'];

		switch ( $channel ) {
			case 'branch-development':
				$url = add_query_arg( 'version', $next_versions['point'] . '-alpha', $url );
				break;
			case 'development':
				if ( false !== strpos( $wp_version, $next_versions['point'] )
				|| version_compare( $wp_version, $next_versions['point'], '<' )
				) {
					$url = add_query_arg( 'version', $next_versions['release'] . '-alpha', $url );
				}
				break;
		}

		return $url;
	}

	/**
	 * Our option has changed so update the cached information pronto.
	 *
	 * @return void
	 */
	public function action_update_option_wp_beta_tester_stream() {
		do_action( 'wp_version_check' );
	}

	/**
	 * Get preferred update version from core.
	 *
	 * @return /stdClass
	 */
	public function get_preferred_from_update_core() {
		if ( ! function_exists( 'get_preferred_from_update_core' ) ) {
			require_once ABSPATH . 'wp-admin/includes/update.php';
		}

		// Validate that we have api data and if not get the normal data so we always have it.
		$preferred = get_preferred_from_update_core();
		if ( false === $preferred ) {
			wp_version_check();
			$preferred = get_preferred_from_update_core();
		}

		return $preferred;
	}

	/**
	 * Get current WP release version.
	 *
	 * @since 3.1.0
	 * @return string $wp_version
	 */
	public function get_current_wp_release() {
		$response = get_site_transient( 'current_wp_release' );

		if ( ! $response ) {
			$response = wp_remote_get( 'https://api.wordpress.org/core/stable-check/1.0/' );
			$response = wp_remote_retrieve_body( $response );

			if ( is_wp_error( $response ) ) {
				return null;
			}

			$response = (array) json_decode( $response );
			$response = array_keys( $response, 'latest', true );
			$response = array_pop( $response );
			set_site_transient( 'current_wp_release', $response, DAY_IN_SECONDS );
		}

		return $response;
	}

	/**
	 * Returns whether 'update' is really downgrade.
	 *
	 * @return bool
	 */
	public function check_if_settings_downgrade() {
		$wp_version      = get_bloginfo( 'version' );
		$wp_real_version = explode( '-', $wp_version );
		$wpbt_core       = new WPBT_Core( $this, self::$options );
		$next_versions   = $wpbt_core->calculate_next_versions();
		if ( empty( $next_versions ) ) {
			return false;
		}

		return version_compare( $next_versions['release'], $wp_real_version[0], 'lt' );
	}

	/**
	 * Add dashboard widget for beta testing information.
	 *
	 * @since 2.2.3
	 *
	 * @return void
	 */
	public function add_dashboard_widget() {
		$wp_version = get_bloginfo( 'version' );
		$beta_rc    = preg_match( '/alpha|beta|RC/', $wp_version );

		if ( $beta_rc ) {
			wp_add_dashboard_widget( 'beta_tester_dashboard_widget', __( 'WordPress Beta Testing', 'wordpress-beta-tester' ), array( $this, 'beta_tester_dashboard' ) );
		}
	}

	/**
	 * Setup dashboard widget.
	 *
	 * @since 2.2.3
	 *
	 * @return void
	 */
	public function beta_tester_dashboard() {
		$wp_version   = get_bloginfo( 'version' );
		$next_version = explode( '-', $wp_version );
		$milestone    = array_shift( $next_version );

		/* translators: %s: WordPress version */
		printf( wp_kses_post( '<p>' . __( 'Please help test <strong>WordPress %s</strong>.', 'wordpress-beta-tester' ) . '</p>' ), esc_attr( $milestone ) );

		echo wp_kses_post( $this->add_dev_notes_field_guide_links( $milestone ) );
		echo wp_kses_post( $this->parse_development_feed( $milestone ) );

		/* translators: %1: link to closed and reopened trac tickets on current milestone */
		printf( wp_kses_post( '<p>' . __( 'Here are the <a href="%s" target="_blank">commits for the milestone</a>.', 'wordpress-beta-tester' ) . '</p>' ), esc_url( "https://core.trac.wordpress.org/query?status=closed&status=reopened&milestone=$milestone" ) );

		/* translators: %s: link to trac search */
		printf( wp_kses_post( '<p>' . __( '&#128027; Did you find a bug? Search for a <a href="%s" target="_blank">trac ticket</a> to see if it has already been reported.', 'wordpress-beta-tester' ) . '</p>' ), 'https://core.trac.wordpress.org/search' );

		$capability = is_multisite() ? 'manage_network_options' : 'manage_options';
		if ( current_user_can( $capability ) ) {
			$parent             = is_multisite() ? 'settings.php' : 'tools.php';
			$wpbt_settings_page = add_query_arg( 'page', 'wp-beta-tester', network_admin_url( $parent ) );

			/* translators: %s: WP Beta Tester settings URL */
			printf( wp_kses_post( '<p>' . __( 'Head over to your <a href="%s">WordPress Beta Tester Settings</a> and make sure the <strong>beta/RC</strong> stream is selected.', 'wordpress-beta-tester' ) . '</p>' ), esc_url( $wpbt_settings_page ) );
		}
	}

	/**
	 * Parse development RSS feed for list of milestoned items.
	 *
	 * @since 2.2.3
	 * @param string $milestone Milestone version.
	 *
	 * @return string HTML unordered list.
	 */
	private function parse_development_feed( $milestone ) {
		$rss_args = array(
			'show_summary' => 0,
			'items'        => 10,
		);
		ob_start();
		wp_widget_rss_output( 'https://wordpress.org/news/category/development/feed/', $rss_args );
		$feed = ob_get_contents();
		ob_end_clean();

		$milestone = preg_quote( $milestone, '.' );
		$li_regex  = "#<li>.*$milestone.*?<\/li>#";
		preg_match( $li_regex, $feed, $matches );
		$match = array_pop( $matches );
		$list  = empty( $match ) ? '' : "<ul>$match</ul>";

		return $list;
	}

	/**
	 * Add milestone dev notes and field guide when on RC version.
	 *
	 * @since 2.2.3
	 * @param string $milestone Milestone version.
	 *
	 * @return string HTML unordered list.
	 */
	private function add_dev_notes_field_guide_links( $milestone ) {
		$wp_version       = get_bloginfo( 'version' );
		$beta_rc          = preg_match( '/beta|RC/', $wp_version );
		$rc               = preg_match( '/RC/', $wp_version );
		$milestone_dash   = str_replace( '.', '-', $milestone );
		$dev_note_link    = '';
		$field_guide_link = '';

		if ( $beta_rc ) {
			$dev_note_link = sprintf(
			/* translators: %1$s Link to dev notes, %2$s: Link title */
				'<a href="%1$s">%2$s</a>',
				"https://make.wordpress.org/core/tag/$milestone_dash+dev-notes/",
				/* translators: %s: Milestone version */
				sprintf( __( 'WordPress %s Dev Notes', 'wordpress-beta-tester' ), $milestone )
			);
			$dev_note_link = "<li>$dev_note_link</li>";
		}
		if ( $rc ) {
			$field_guide_link = sprintf(
			/* translators: %1$s Link to field guide, %2$s: Link title */
				'<a href="%1$s">%2$s</a>',
				"https://make.wordpress.org/core/tag/$milestone_dash+field-guide/",
				/* translators: %s: Milestone version */
				sprintf( __( 'WordPress %s Field Guide', 'wordpress-beta-tester' ), $milestone )
			);
			$field_guide_link = "<li>$field_guide_link</li>";
		}
		$links = $beta_rc || $rc ? "<ul> $dev_note_link $field_guide_link </ul>" : null;

		return $links;
	}

	/**
	 * Delete development RSS feed transient on core upgrade.
	 *
	 * @uses filter 'upgrader_process_complete'.
	 *
	 * @param \Core_Upgrader $obj        \Core_Upgrader object.
	 * @param array          $hook_extra $hook_extra array from filter.
	 *
	 * @return void
	 */
	public function delete_feed_transient_on_upgrade( $obj, $hook_extra ) {
		if ( $obj instanceof \Core_Upgrader && 'core' === $hook_extra['type'] ) {
			$transient = md5( 'https://wordpress.org/news/category/development/feed/' );
			delete_transient( "feed_{$transient}" );
			delete_transient( "feed_mod_{$transient}" );
		}
	}

	/**
	 * Ensure core still displays "You are using a development verison..." in the admin
	 * footer, even if we've removed the `development` update response because the next
	 * beta/RC package is not available.
	 *
	 * @since 2.2.0
	 *
	 * @return string
	 *
	 * @filter update_footer
	 */
	public function update_footer() {
		add_filter( 'pre_site_transient_update_core', array( $this, 'add_minimal_development_response' ), 10, 0 );

		$content = core_update_footer();

		remove_filter( 'pre_site_transient_update_core', array( $this, 'add_minimal_development_response' ) );

		return $content;
	}

	/**
	 * Add a minimal development response as the preferred update.
	 *
	 * @since 2.2.0
	 *
	 * @return object
	 *
	 * @filter pre_site_transient_update_core
	 */
	public function add_minimal_development_response() {
		$from_api = new stdClass();
		$update   = new stdClass();
		// a "minimal" response is one with the `response`, `current` and `locale` properties.
		$update->response = 'development';
		$update->current  = get_bloginfo( 'version' );
		$update->version  = $update->current;
		$update->locale   = get_locale();

		$from_api->updates = array(
			$update,
		);

		return $from_api;
	}
}
