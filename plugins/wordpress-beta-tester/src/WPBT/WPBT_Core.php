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
 * WPBT_Core
 */
class WPBT_Core {
	/**
	 * Placeholder for saved options.
	 *
	 * @var array
	 */
	protected static $options;

	/**
	 * Holds the WP_Beta_Tester instance.
	 *
	 * @var WP_Beta_Tester
	 */
	protected $wp_beta_tester;

	/**
	 * Holds $core_update_stream_constant from WP_Beta_Tester.
	 *
	 * @var string|bool
	 */
	protected static $core_update_stream_constant;

	/**
	 * Holds $core_update_channel_constant from WP_Beta_Tester.
	 *
	 * @var string|bool
	 */
	protected static $core_update_channel_constant;

	/**
	 * Constructor.
	 *
	 * @param  WP_Beta_Tester $wp_beta_tester Instance of class WP_Beta_Tester.
	 * @param  array          $options        Site options.
	 * @return void
	 */
	public function __construct( WP_Beta_Tester $wp_beta_tester, $options ) {
		self::$options                      = $options;
		$this->wp_beta_tester               = $wp_beta_tester;
		self::$core_update_stream_constant  = $wp_beta_tester::$core_update_stream_constant;
		self::$core_update_channel_constant = $wp_beta_tester::$core_update_channel_constant;
	}

	/**
	 * Load hooks.
	 *
	 * @return void
	 */
	public function load_hooks() {
		add_filter( 'wp_beta_tester_add_settings_tabs', array( $this, 'add_settings_tab' ) );
		add_action( 'wp_beta_tester_add_settings', array( $this, 'add_settings' ) );
		add_action( 'wp_beta_tester_add_admin_page', array( $this, 'add_admin_page' ), 10, 2 );
		add_action( 'wp_beta_tester_update_settings', array( $this, 'save_settings' ) );
	}

	/**
	 * Add settings tab for class.
	 *
	 * @param  array $tabs Settings tabs.
	 * @return array
	 */
	public function add_settings_tab( $tabs ) {
		return array_merge( (array) $tabs, array( 'wp_beta_tester_core' => esc_html__( 'WP Beta Tester Settings', 'wordpress-beta-tester' ) ) );
	}

	/**
	 * Setup Settings API.
	 *
	 * @return void
	 */
	public function add_settings() {
		register_setting(
			'wp_beta_tester',
			'wp_beta_tester_core',
			array( 'WPBT_Setting', 'sanitize' )
		);

		add_settings_section(
			'wp_beta_tester_core',
			esc_html__( 'Core Settings', 'wordpress-beta-tester' ),
			array( $this, 'print_core_settings_top' ),
			'wp_beta_tester_core'
		);

		add_settings_field(
			'channel_settings',
			__( 'Select the update channel you would like this website to use:', 'wordpress-beta-tester' ),
			array( $this, 'channel_radio_group' ),
			'wp_beta_tester_core',
			'wp_beta_tester_core',
			array( 'class' => 'wpbt-settings-title' )
		);

		add_settings_field(
			'stream_settings',
			__( 'Select one of the stream options below:', 'wordpress-beta-tester' ),
			array( $this, 'stream_radio_group' ),
			'wp_beta_tester_core',
			'wp_beta_tester_core',
			array(
				'class' => 'wpbt-settings-title' . ( ! self::$core_update_channel_constant ? '' : 'hidden' ),
			)
		);
	}

	/**
	 * Save settings.
	 *
	 * @param  mixed $post_data $_POST data.
	 * @return void
	 */
	public function save_settings( $post_data ) {
		if ( ! isset( $_POST['_wpnonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['_wpnonce'] ) ), 'wp_beta_tester_core-options' )
		) {
			return;
		}

		if ( isset( $post_data['option_page'] )
			&& 'wp_beta_tester_core' === $post_data['option_page']
		) {
			$option_channel     = isset( $post_data['wp-beta-tester'] ) ? $post_data['wp-beta-tester'] : 'branch-development';
			$options['channel'] = WPBT_Settings::sanitize( $option_channel );

			$option_beta_rc           = isset( $post_data['wp-beta-tester-beta-rc'] ) ? $post_data['wp-beta-tester-beta-rc'] : '';
			$options['stream-option'] = WPBT_Settings::sanitize( $option_beta_rc );

			$options = $this->channel_settings_migrator( $options );
			$options = array_merge( self::$options, (array) $options );

			update_site_option( 'wp_beta_tester', (array) $options );
			add_filter( 'wp_beta_tester_save_redirect', array( $this, 'save_redirect_page' ) );
		}
	}

	/**
	 * Redirect page/tab after saving options.
	 *
	 * @param  array $option_page Settings tabs.
	 * @return array
	 */
	public function save_redirect_page( $option_page ) {
		return array_merge( $option_page, array( 'wp_beta_tester_core' ) );
	}

	/**
	 * Print settings section information.
	 *
	 * @return void
	 */
	public function print_core_settings_top() {
		$this->wp_beta_tester->action_admin_head_plugins_php(); // Check configuration.
		$preferred = $this->wp_beta_tester->get_preferred_from_update_core();
		if ( 'development' !== $preferred->response ) {
			echo '<div class="updated fade">';
			echo '<p>' . wp_kses_post( __( '<strong>Please note:</strong> There are no development builds available for the beta stream you have chosen, so you will receive normal update notifications.', 'wordpress-beta-tester' ) ) . '</p>';
			echo '</div>';
		}

		$version = $this->get_next_version( $preferred->version );

		echo '<div><p>';
		printf(
			/* translators: 1: link to backing up database, 2: link to make.wp.org/core, 3: link to beta support forum */
			wp_kses_post( __( 'By their nature, these releases are unstable and should not be used anyplace where your data is important. So please <a href="%1$s">back up your database</a> before upgrading to a test release. In order to hear about the latest beta releases, your best bet is to watch the <a href="%2$s">development blog</a> and the <a href="%3$s">beta forum</a>.', 'wordpress-beta-tester' ) ),
			esc_url( _x( 'https://wordpress.org/support/article/wordpress-backups/', 'URL to database backup instructions on HelpHub', 'wordpress-beta-tester' ) ),
			'https://make.wordpress.org/core/',
			esc_url( _x( 'https://wordpress.org/support/forum/alphabeta', 'URL to beta support forum', 'wordpress-beta-tester' ) )
		);
		echo '</p><p>';
		printf(
			/* translators: %s: link to new trac ticket */
			wp_kses_post( __( 'Thank you for helping test WordPress. Please <a href="%s">report any bugs you find</a>.', 'wordpress-beta-tester' ) ),
			'https://core.trac.wordpress.org/newticket'
		);
		echo '</p><p>';
		echo wp_kses_post( __( 'By default, your WordPress installation uses the stable update channel. To return to this, please deactivate this plugin and re-install from the <a href="update-core.php">WordPress Updates</a> page.', 'wordpress-beta-tester' ) );
		echo '</p><p>';
		printf(
			/* translators: %s: update version */
			wp_kses_post( __( 'Currently your site is set to update to %s.', 'wordpress-beta-tester' ) ),
			'<strong>' . esc_attr( $version ) . '</strong>'
		);
		echo '</p></div>';
	}

	/**
	 * Create channel settings radio button options.
	 *
	 * @return void
	 */
	public function channel_radio_group() {
		$next_versions = $this->calculate_next_versions();
		if ( self::$core_update_channel_constant ) {
			?>
			<fieldset>
			<tr>
				<th><label></label></th>
				<td><?php esc_html_e( 'Channel options are overridden by the `WP_AUTO_UPDATE_CORE` constant.', 'wordpress-beta-tester' ); ?><p>
				<?php
				printf(
					/* translators: %s: WP_AUTO_UPDATE_CORE setting */
					esc_html__( '`WP_AUTO_UPDATE_CORE` is defined as `%s`.', 'wordpress-beta-tester' ),
					esc_attr( self::$core_update_channel_constant )
				);
				?>
				</p></td>
			</tr>
			</fieldset>
			<?php
		} else {
			?>
			<fieldset>
			<tr>
				<th><label><input name="wp-beta-tester" id="update-stream-point-nightlies" type="radio" value="branch-development" class="tog" <?php checked( 'branch-development', self::$options['channel'] ); ?> />
				<?php esc_html_e( 'Point release', 'wordpress-beta-tester' ); ?>
				</label></th>
				<td>
				<?php
				printf(
					/* translators: %s: Current WordPress version base, eg 5.5 */
					esc_html__( 'This contains the work that is occurring on a branch in preparation for a %s point release. This should also be fairly stable but will be available before the branch is ready for release.', 'wordpress-beta-tester' ),
					esc_attr( $next_versions['point'] )
				);
				?>
				</td>
			</tr>
			<tr>
				<th><label><input name="wp-beta-tester" id="update-stream-bleeding-nightlies" type="radio" value="development" class="tog" <?php checked( 'development', self::$options['channel'] ); ?> />
				<?php esc_html_e( 'Bleeding edge', 'wordpress-beta-tester' ); ?>
				</label></th>
				<td><?php echo wp_kses_post( __( 'This is the bleeding edge development code from `trunk` which may be unstable at times. <em>Only use this if you really know what you are doing</em>.', 'wordpress-beta-tester' ) ); ?></td>
			</tr>
			</fieldset>
			<?php
		}
	}

	/**
	 * Create stream settings radio button options.
	 *
	 * @return void
	 */
	public function stream_radio_group() {
		if ( self::$core_update_stream_constant ) {
			?>
			<fieldset>
			<tr>
				<th><label></label></th>
				<td><?php esc_html_e( 'Stream options are overridden by the `WP_AUTO_UPDATE_CORE` constant.', 'wordpress-beta-tester' ); ?><p>
				<?php
				printf(
					/* translators: %s: WP_AUTO_UPDATE_CORE setting */
					esc_html__( '`WP_AUTO_UPDATE_CORE` is defined as `%s`.', 'wordpress-beta-tester' ),
					esc_attr( self::$core_update_stream_constant )
				);
				?>
				</p></td>
			</tr>
			</fieldset>
			<?php
		} else {
			?>
			<fieldset>
			<tr>
				<th><label><input name="wp-beta-tester-beta-rc" id="update-stream-beta" type="radio" value="" class="tog" <?php checked( false, self::$options['stream-option'] ); ?> />
				<?php esc_html_e( 'Nightlies', 'wordpress-beta-tester' ); ?>
				</label></th>
				<td><?php esc_html_e( 'Latest daily updates.', 'wordpress-beta-tester' ); ?></td>
			</tr>

			<?php if ( 'development' === self::$options['channel'] ) : ?>
			<tr>
				<th><label><input name="wp-beta-tester-beta-rc" id="update-stream-beta" type="radio" value="beta" class="tog" <?php checked( 'beta', self::$options['stream-option'] ); ?> />
				<?php esc_html_e( 'Beta/RC Only', 'wordpress-beta-tester' ); ?>
				</label></th>
				<td><?php esc_html_e( 'This is for the Beta/RC releases only of the selected channel.', 'wordpress-beta-tester' ); ?></td>
			</tr>
			<tr>
				<th><label><input name="wp-beta-tester-beta-rc" id="update-stream-rc" type="radio" value="rc" class="tog" <?php checked( 'rc', self::$options['stream-option'] ); ?> />
				<?php esc_html_e( 'Release Candidates Only', 'wordpress-beta-tester' ); ?>
				</label></th>
				<td><?php esc_html_e( 'This is for the Release Candidate releases only of the selected channel.', 'wordpress-beta-tester' ); ?></td>
			</tr>
			<?php endif; ?>

			<?php if ( false && 'branch-development' === self::$options['channel'] ) : ?>
			<tr>
				<th><label><input name="wp-beta-tester-beta-rc" id="update-stream-beta" type="radio" value="branch-beta" class="tog" <?php checked( 'branch-beta', self::$options['stream-option'] ); ?> />
				<?php esc_html_e( 'Beta/RC Only', 'wordpress-beta-tester' ); ?>
				</label></th>
				<td><?php esc_html_e( 'This is for the Beta/RC releases only of the selected channel.', 'wordpress-beta-tester' ); ?></td>
			</tr>
			<tr>
				<th><label><input name="wp-beta-tester-beta-rc" id="update-stream-rc" type="radio" value="branch-rc" class="tog" <?php checked( 'branch-rc', self::$options['stream-option'] ); ?> />
				<?php esc_html_e( 'Release Candidates Only', 'wordpress-beta-tester' ); ?>
				</label></th>
				<td><?php esc_html_e( 'This is for the Release Candidate releases only of the selected channel.', 'wordpress-beta-tester' ); ?></td>
			</tr>
			<?php endif; ?>
			</fieldset>
			<?php
		}
	}

	/**
	 * Create core settings page.
	 *
	 * @param  array  $tab    Settings tab.
	 * @param  string $action Settings form action.
	 * @return void
	 */
	public function add_admin_page( $tab, $action ) {
		?>
		<div>
			<?php if ( 'wp_beta_tester_core' === $tab ) : ?>
			<form method="post" action="<?php echo esc_attr( $action ); ?>">
				<?php settings_fields( 'wp_beta_tester_core' ); ?>
				<?php do_settings_sections( 'wp_beta_tester_core' ); ?>
				<?php submit_button(); ?>
			</form>
			<?php endif; ?>
		</div>
		<script>jQuery('tr.wpbt-settings-title th').attr('colspan',2);</script>
		<?php
	}

	/**
	 * Get the next version(s) the site will be updated to.
	 *
	 * @since 2.2.0
	 *
	 * @param  string $preferred_version The preferred version.
	 * @return string
	 */
	public function get_next_version( $preferred_version ) {
		$beta_rc      = ! empty( self::$options['stream-option'] );
		$next_version = $this->calculate_next_versions();
		unset( $next_version['point'] );

		// Site is not on a beta/RC stream so use the preferred version.
		if ( ! $beta_rc && ! empty( $next_version ) && ! self::$core_update_stream_constant ) {
			/* translators: %s: version number */
			return sprintf( __( 'version %s', 'wordpress-beta-tester' ), $preferred_version );
		}

		if ( 1 === count( $next_version ) ) {
			$next_version = array_shift( $next_version );
		} elseif ( empty( $next_version ) ) {
			$next_version = __( 'next development version', 'wordpress-beta-tester' );
		} else {
			// show all versions that may come next.
			add_filter( 'wp_sprintf_l', array( $this, 'wpbt_sprintf_or' ) );
			/* translators: %l: next version numbers */
			$next_version = wp_sprintf( __( 'version %l', 'wordpress-beta-tester' ), $next_version ) . ', ' . __( 'whichever is released first', 'wordpress-beta-tester' );
			remove_filter( 'wp_sprintf_l', array( $this, 'wpbt_sprintf_or' ) );
		}

		return $next_version;
	}

	/**
	 * Calculate next versions.
	 *
	 * @since 3.0.0
	 * @return array $next_versions
	 */
	public function calculate_next_versions() {
		$wp_version             = get_bloginfo( 'version' );
		$exploded_version       = explode( '-', $wp_version );
		$current_release        = $this->wp_beta_tester->get_current_wp_release();
		$next_release           = array_map( 'intval', explode( '.', $current_release ) );
		$is_development_version = preg_match( '/alpha|beta|RC/', $wp_version );

		// User on a current release.
		if ( ! $is_development_version ) {
			unset( $next_release[2] );
			$next_release[1] = $next_release[1] + 1;

			// x.10 moves to (x+1).0 as core doesn't follow semver.
			if ( 10 === $next_release[1] ) {
				$next_release[0] = $next_release[0] + 1;
				$next_release[1] = 0;
			}
			$next_release        = implode( '.', $next_release );
			$exploded_version[0] = $next_release;
			$exploded_version[1] = null;
		}

		// Set base version for development channel if necessary.
		$current_exploded = array_map( 'intval', explode( '.', $exploded_version[0] ) );
		if ( 'development' === self::$options['channel'] && isset( $current_exploded[2] ) ) {
			$current_exploded[1] = ++$current_exploded[1];
			unset( $current_exploded[2] );
			$exploded_version[0] = implode( '.', $current_exploded );
			$exploded_version[1] = 'alpha';
		}

		preg_match( '/beta(\d+)/', $exploded_version[1], $current_beta );
		preg_match( '/RC(\d+)/', $exploded_version[1], $current_rc );
		$next_beta = ! empty( $current_beta ) ? $current_beta[1] + 1 : 1;
		$next_rc   = ! empty( $current_rc ) ? $current_rc[1] + 1 : 1;

		// Make next point release.
		$next_point    = array_map( 'intval', explode( '.', $current_release ) );
		$next_point[2] = isset( $next_point[2] ) ? ++$next_point[2] : 1;
		$next_point    = implode( '.', $next_point );

		// Set base version for branch-development channel.
		if ( 'branch-development' === self::$options['channel'] ) {
			$exploded_version = (array) $next_point;
		}

		$next_versions = array(
			'point'   => $next_point,
			'beta'    => $exploded_version[0] . '-beta' . $next_beta,
			'rc'      => $exploded_version[0] . '-RC' . $next_rc,
			'release' => $exploded_version[0],
		);
		if ( ! $next_versions['beta'] || 'rc' === self::$options['stream-option']
			|| 'rc' === self::$core_update_stream_constant || 1 < $next_rc
		) {
			unset( $next_versions['beta'] );
		}

		return $next_versions;
	}

	/**
	 * Change the delimiters used by wp_sprintf_l().
	 *
	 * Placeholders (%s) are included to assist translators and then
	 * removed before the array of strings reaches the filter.
	 *
	 * Please note: Ampersands and entities should be avoided here.
	 *
	 * @since 2.2.1
	 *
	 * @param array $delimiters An array of translated delimiters.
	 */
	public function wpbt_sprintf_or( $delimiters ) {
		$delimiters = array(
			/* translators: Used to join items in a list with more than 2 items. */
			'between'          => sprintf( __( '%1$s, %2$s', 'wordpress-beta-tester' ), '', '' ),
			/* translators: Used to join last two items in a list with more than 2 times. */
			'between_last_two' => sprintf( __( '%1$s, or %2$s', 'wordpress-beta-tester' ), '', '' ),
			/* translators: Used to join items in a list with only 2 items. */
			'between_only_two' => sprintf( __( '%1$s or %2$s', 'wordpress-beta-tester' ), '', '' ),
		);

		return $delimiters;
	}

	/**
	 * Migrate stream during channel switch.
	 *
	 * @param array $options Array of channel and stream options.
	 *
	 * @return array
	 */
	private function channel_settings_migrator( $options ) {
		if ( isset( $options['channel'], $options['stream-option'] ) ) {
			switch ( $options['channel'] ) {
				case 'development':
					if ( 'branch-beta' === $options['stream-option'] ) {
						$options['stream-option'] = 'beta';
					} elseif ( 'branch-rc' === $options['stream-option'] ) {
						$options['stream-option'] = 'rc';
					}
					break;
				case 'branch-development':
					if ( 'beta' === $options['stream-option'] ) {
						$options['stream-option'] = 'branch-beta';
					} elseif ( 'rc' === $options['stream-option'] ) {
						$options['stream-option'] = 'branch-rc';
					}
					$options['stream-option'] = ''; // Hard set to Nightlies until API updated.
					break;
			}
		}

		return $options;
	}
}
