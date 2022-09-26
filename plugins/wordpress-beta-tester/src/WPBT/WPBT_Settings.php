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
 * WPBT_Settings
 */
class WPBT_Settings {
	/**
	 * Placeholder for main class.
	 *
	 * @var WP_Beta_Tester
	 */
	protected $wp_beta_tester;

	/**
	 * Placeholder for saved options.
	 *
	 * @var array
	 */
	protected static $options;

	/**
	 * Constructor.
	 *
	 * @param  WP_Beta_Tester $wp_beta_tester Instance of class WP_Beta_Tester.
	 * @param  mixed          $options        Saved site options.
	 * @return void
	 */
	public function __construct( WP_Beta_Tester $wp_beta_tester, $options ) {
		self::$options        = $options;
		$this->wp_beta_tester = $wp_beta_tester;
	}

	/**
	 * Load up the Settings.
	 *
	 * @return void
	 */
	public function run() {
		$this->load_hooks();
		( new WPBT_Core( $this->wp_beta_tester, self::$options ) )->load_hooks();
		( new WPBT_Extras( $this->wp_beta_tester, self::$options ) )->load_hooks();
		( new WPBT_Extras( $this->wp_beta_tester, self::$options ) )->skip_autoupdate_email();
		( new WPBT_Help() )->load_hooks();
	}

	/**
	 * Load hooks.
	 *
	 * @return void
	 */
	public function load_hooks() {
		add_action( 'admin_init', array( $this, 'add_settings' ) );
		add_action( is_multisite() ? 'network_admin_menu' : 'admin_menu', array( $this, 'add_plugin_menu' ) );
		add_action( 'network_admin_edit_wp_beta_tester', array( $this, 'update_settings' ) );
		add_action( 'admin_init', array( $this, 'update_settings' ) );

		add_action( 'admin_head-plugins.php', array( $this->wp_beta_tester, 'action_admin_head_plugins_php' ) );
		add_action( 'admin_head-update-core.php', array( $this->wp_beta_tester, 'action_admin_head_plugins_php' ) );
	}

	/**
	 * Add plugin menu to Tools or Settings.
	 *
	 * @return void
	 */
	public function add_plugin_menu() {
		$parent     = is_multisite() ? 'settings.php' : 'tools.php';
		$capability = is_multisite() ? 'manage_network_options' : 'manage_options';

		add_submenu_page(
			$parent,
			esc_html__( 'Beta Testing WordPress', 'wordpress-beta-tester' ),
			esc_html_x( 'Beta Testing', 'Menu item', 'wordpress-beta-tester' ),
			$capability,
			'wp-beta-tester',
			array( $this, 'create_settings_page' )
		);
	}

	/**
	 * Calls individuals settings class save methods.
	 *
	 * @return void
	 */
	public function update_settings() {
		/**
		 * Save $options in add-on classes.
		 *
		 * @since 2.0.0
		 */
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		do_action( 'wp_beta_tester_update_settings', $_POST );

		$this->redirect_on_save();
	}

	/**
	 * Redirect to correct Settings/Tools tab on Save.
	 */
	protected function redirect_on_save() {
		if ( ! isset( $_POST['_wpnonce'] )
			|| ! ( ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['_wpnonce'] ) ), 'wp_beta_tester_core-options' )
			|| ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['_wpnonce'] ) ), 'wp_beta_tester_extras-options' ) )
		) {
			return;
		}

		/**
		 * Filter to add to $option_page array.
		 *
		 * @since 2.0.0
		 * @param array Default array.
		 */
		$option_page = apply_filters( 'wp_beta_tester_save_redirect', array( 'wp-beta-tester' ) );
		$update      = false;

		if ( ( isset( $_POST['action'] ) && 'update' === $_POST['action'] )
			&& ( isset( $_POST['option_page'] ) && in_array( $_POST['option_page'], $option_page, true ) )
		) {
			$update = true;
		}

		$redirect_url = is_multisite() ? network_admin_url( 'settings.php' ) : admin_url( 'tools.php' );

		if ( $update ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.parse_url_parse_url
			$query = isset( $_POST['_wp_http_referer'] ) ? parse_url( sanitize_url( wp_unslash( $_POST['_wp_http_referer'] ) ), PHP_URL_QUERY ) : null;
			parse_str( $query, $arr );
			$arr['tab'] = ! empty( $arr['tab'] ) ? $arr['tab'] : 'wp_beta_tester_core';

			$location = add_query_arg(
				array(
					'page'    => 'wp-beta-tester',
					'tab'     => $arr['tab'],
					'updated' => $update,
				),
				$redirect_url
			);
			$location = add_query_arg( '_wpnonce', wp_create_nonce( 'wpbt_redirect' ), $location );
			wp_safe_redirect( $location );
			exit;
		}
	}

	/**
	 * Define tabs for Settings page.
	 *
	 * @return array
	 */
	private function settings_tabs() {
		/**
		 * Filter settings tabs.
		 *
		 * @since 2.0.0
		 *
		 * @param array $tabs Array of default tabs.
		 */
		return apply_filters( 'wp_beta_tester_add_settings_tabs', array() );
	}

	/**
	 * Renders setting tabs.
	 *
	 * Walks through the object's tabs array and prints them one by one.
	 * Provides the heading for the settings page.
	 *
	 * @access private
	 * @return void
	 */
	private function options_tabs() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$current_tab = isset( $_GET['tab'] ) ? sanitize_title_with_dashes( wp_unslash( $_GET['tab'] ) ) : 'wp_beta_tester_core';
		echo '<nav class="nav-tab-wrapper" aria-label="Secondary menu">';
		foreach ( $this->settings_tabs() as $key => $name ) {
			$active = ( $current_tab === $key ) ? 'nav-tab-active' : '';
			echo wp_kses_post( '<a class="nav-tab ' . $active . '" href="?page=wp-beta-tester&tab=' . $key . '">' . $name . '</a>' );
		}
		echo '</nav>';
	}

	/**
	 * Create 'Saved' notice for saved settings.
	 *
	 * @return void
	 */
	private function saved_settings_notice() {
		if ( ! isset( $_GET['_wpnonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_GET['_wpnonce'] ) ), 'wpbt_redirect' ) ) {
			return;
		}

		if ( ( isset( $_GET['updated'] ) && '1' === $_GET['updated'] ) ||
		( isset( $_GET['settings-updated'] ) && '1' === $_GET['settings-updated'] )
		) {
			echo '<div class="updated"><p>';
			esc_html_e( 'Saved.', 'wordpress-beta-tester' );
			echo '<span style="padding:0 2em;">' . wp_kses_post( __( 'Why don&#8217;t you <a href="update-core.php">head on over and upgrade now</a>.', 'wordpress-beta-tester' ) ) . '</span>';
			echo '</p></div>';
		}
	}

	/**
	 * Creates a placeholder for added classes settings.
	 *
	 * @return void
	 */
	public function add_settings() {
		/**
		 * Action hook to add settings.
		 *
		 * @since 2.0.0
		 */
		do_action( 'wp_beta_tester_add_settings' );
	}

	/**
	 * Create the template for all settings pages.
	 *
	 * @return void
	 */
	public function create_settings_page() {
		$this->saved_settings_notice();
		$action = is_multisite() ? 'edit.php?action=wp-beta-tester' : 'options.php';
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$tab = isset( $_GET['tab'] ) ? sanitize_title_with_dashes( wp_unslash( $_GET['tab'] ) ) : 'wp_beta_tester_core';
		?>
		<div class="wrap">
			<h1><?php esc_html_e( 'Beta Testing WordPress', 'wordpress-beta-tester' ); ?></h1>
			<?php $this->options_tabs(); ?>
			<div class="updated fade">
				<p><?php echo wp_kses_post( __( '<strong>Please note:</strong> Once you have switched your website to one of these beta versions of software, it will not always be possible to downgrade as the database structure may be updated during the development of a major release.', 'wordpress-beta-tester' ) ); ?></p>
			</div>
		<?php

		/**
		 * Action hook to add admin page data to appropriate $tab.
		 *
		 * @since 2.0.0
		 *
		 * @param string $tab    Name of tab.
		 * @param string $action Save action for appropriate WordPress installation.
		 *                       Single site or Multisite.
		 */
		do_action( 'wp_beta_tester_add_admin_page', $tab, $action );
		echo '</div>';
	}

	/**
	 * Sanitize each setting field as needed.
	 *
	 * @param array $input Contains all settings fields as array keys.
	 *
	 * @return array
	 */
	public static function sanitize( $input ) {
		$new_input = array();
		if ( ! is_array( $input ) ) {
			$new_input = sanitize_text_field( $input );
		} else {
			foreach ( array_keys( (array) $input ) as $id ) {
				$new_input[ sanitize_text_field( $id ) ] = sanitize_text_field( $input[ $id ] );
			}
		}

		return $new_input;
	}

	/**
	 * Get the settings option array and print one of its values.
	 *
	 * @param array $args 'id' and 'title'.
	 */
	public static function checkbox_setting( $args ) {
		$checked = isset( self::$options[ $args['id'] ] ) ? self::$options[ $args['id'] ] : null;
		?>
		<style> .form-table th { display:none; } </style>
		<label for="<?php echo esc_attr( $args['id'] ); ?>">
			<input type="checkbox" id="<?php echo esc_attr( $args['id'] ); ?>" name="wp-beta-tester[<?php echo esc_attr( $args['id'] ); ?>]" value="1" <?php checked( '1', $checked ); ?> >
			<?php echo esc_attr( $args['title'] ); ?>
			<?php
			if ( isset( $args['description'] ) ) {
				echo '<p class="description">' . esc_attr__( $args['description'] ) . '</p>';
			}
			?>
		</label>
		<?php
	}
}
