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
 * WPBT_Bootstrap
 */
class WPBT_Bootstrap {
	/**
	 * Holds main plugin file.
	 *
	 * @var string
	 */
	protected $file;

	/**
	 * Holds plugin options.
	 *
	 * @var array
	 */
	protected static $options;

	/**
	 * Constructor.
	 *
	 * @param  string $file Main plugin file.
	 * @return void
	 */
	public function __construct( $file ) {
		$this->file = $file;
	}

	/**
	 * Let's get started.
	 *
	 * @return void
	 */
	public function run() {
		$this->deactivate_die_wordpress_develop();
		$this->load_hooks();
		self::$options = get_site_option(
			'wp_beta_tester',
			array(
				'channel'       => 'branch-development',
				'stream-option' => '',
			)
		);
		$this->v2_v3_settings_migrator();

		( new WP_Beta_Tester( $this->file, self::$options ) )->run();
	}

	/**
	 * Gracefully transfer v2 settings to v4.
	 *
	 * @since 3.0.0
	 * @return void
	 */
	private function v2_v3_settings_migrator() {
		if ( isset( self::$options['stream'] ) && ! isset( self::$options['channel'] ) ) {
			switch ( self::$options['stream'] ) {
				case 'point':
					self::$options['channel']       = 'branch-development';
					self::$options['stream-option'] = '';
					break;
				case 'beta-rc-point':
					self::$options['channel']       = 'branch-development';
					self::$options['stream-option'] = 'beta';
					break;
				case 'unstable':
					self::$options['channel']       = 'development';
					self::$options['stream-option'] = '';
					break;
				case 'beta-rc-unstable':
					self::$options['channel']       = 'development';
					self::$options['stream-option'] = 'beta';
					break;
			}
			update_site_option( 'wp_beta_tester', (array) self::$options );
		}
	}

	/**
	 * Deactivate and die if trying to use with `wordpress-develop`.
	 *
	 * @return void
	 */
	private function deactivate_die_wordpress_develop() {
		$wp_version    = get_bloginfo( 'version' );
		$version_regex = '@(\d+\.\d+(\.\d+)?)-(alpha|beta|RC)(\d+)?-(\d+-src|\d{8}\.\d{6})@';
		$is_wp_develop = preg_match( $version_regex, $wp_version );

		if ( $is_wp_develop ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
			deactivate_plugins( $this->file );
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( new \WP_Error( 'deactivate', esc_html__( 'Cannot run WordPress Beta Tester plugin in `wordpress-develop`', 'wordpress-beta-tester' ) ) );
		}
	}

	/**
	 * Load hooks.
	 *
	 * @return void
	 */
	public function load_hooks() {
		add_action( 'init', array( $this, 'load_textdomain' ) );
		register_activation_hook( $this->file, array( $this, 'activate' ) );
		register_deactivation_hook( $this->file, array( $this, 'deactivate' ) );
	}

	/**
	 * Load textdomain.
	 *
	 * @return void
	 */
	public function load_textdomain() {
		load_plugin_textdomain( 'wordpress-beta-tester' );
	}

	/**
	 * Run on plugin activation.
	 *
	 * Delete 'update_core' transient and add any saved extra settings to wp-config.php.
	 *
	 * @return void
	 */
	public function activate() {
		delete_site_transient( 'update_core' );
		( new WPBT_Extras( new WP_Beta_Tester( $this->file, self::$options ), self::$options ) )->activate();
	}

	/**
	 * Run on plugin deactivation.
	 *
	 * Delete 'update_core' transient and remove any extras settings from wp-config.php.
	 *
	 * @return void
	 */
	public function deactivate() {
		delete_site_transient( 'update_core' );
		( new WPBT_Extras( new WP_Beta_Tester( $this->file, self::$options ), self::$options ) )->deactivate();
	}
}
