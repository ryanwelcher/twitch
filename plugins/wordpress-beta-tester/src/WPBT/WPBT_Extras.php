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
 * WPBT_Extras
 */
class WPBT_Extras {
	/**
	 * Placeholder for saved options.
	 *
	 * @var array
	 */
	protected static $options;

	/**
	 * Holds `wp-config.php` file path.
	 *
	 * @var string
	 */
	protected static $config_path;

	/**
	 * Holds config args for WPConfigTransformer.
	 *
	 * @var array
	 */
	protected static $config_args;

	/**
	 * Constructor.
	 *
	 * @param  WP_Beta_Tester $wp_beta_tester Instance of class WP_Beta_Tester.
	 * @param  array          $options        Site options.
	 * @return void
	 */
	public function __construct( WP_Beta_Tester $wp_beta_tester, $options ) {
		$this->wp_beta_tester = $wp_beta_tester;
		self::$options        = $options;
		self::$config_path    = $this->get_config_path();
		self::$config_args    = array(
			'raw'       => true,
			'normalize' => true,
		);
		if ( false === strpos( file_get_contents( self::$config_path ), "/* That's all, stop editing!" ) ) {
			if ( 1 === preg_match( '@\$table_prefix(.*;)@', file_get_contents( self::$config_path ), $matches ) ) {
				self::$config_args = array_merge(
					self::$config_args,
					array(
						'anchor'    => "$matches[0]",
						'placement' => 'after',
					)
				);
			}
		}
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
	 * Get the `wp-config.php` file path.
	 *
	 * The config file may reside one level above ABSPATH but is not part of another installation.
	 *
	 * @see wp-load.php#L26-L42
	 *
	 * @return string $config_path
	 */
	public function get_config_path() {
		$config_path = ABSPATH . 'wp-config.php';

		if ( ! file_exists( $config_path ) ) {
			if ( @file_exists( dirname( ABSPATH ) . '/wp-config.php' ) && ! @file_exists( dirname( ABSPATH ) . '/wp-settings.php' ) ) {
				$config_path = dirname( ABSPATH ) . '/wp-config.php';
			}
		}

		/**
		 * Filter the config file path.
		 *
		 * @since 2.0.0
		 *
		 * @param string $config_path
		 */
		return apply_filters( 'wp_beta_tester_config_path', $config_path );
	}

	/**
	 * Add class settings tab.
	 *
	 * @param  array $tabs Settings tabs.
	 * @return array
	 */
	public function add_settings_tab( $tabs ) {
		return array_merge( $tabs, array( 'wp_beta_tester_extras' => esc_html__( 'Extra Settings', 'wordpress-beta-tester' ) ) );
	}

	/**
	 * Setup Settings API.
	 *
	 * @return void
	 */
	public function add_settings() {
		register_setting(
			'wp_beta_tester',
			'wp_beta_tester_extras',
			array( 'WPBT_Settings', 'sanitize' )
		);

		add_settings_section(
			'wp_beta_tester_email',
			null,
			null,
			'wp_beta_tester_extras'
		);

		add_settings_section(
			'wp_beta_tester_new_feature_testing',
			esc_html__( 'New Feature Testing', 'wordpress-beta-tester' ),
			array( $this, 'print_new_feature_testing_top' ),
			'wp_beta_tester_extras'
		);

		add_settings_field(
			'skip_autoupdate_email',
			null,
			array( 'WPBT_Settings', 'checkbox_setting' ),
			'wp_beta_tester_extras',
			'wp_beta_tester_email',
			array(
				'id'          => 'skip_autoupdate_email',
				'title'       => esc_html__( 'Skip successful autoupdate emails.', 'wordpress-beta-tester' ),
				'description' => esc_html__( 'Disable sending emails to the admin user for successful autoupdates. Only emails indicating failures of the autoupdate process are sent.', 'wordpress-beta-tester' ),
			)
		);

			// Example.
		add_settings_field(
			'example',
			null,
			array( 'WPBT_Settings', 'checkbox_setting' ),
			'wp_beta_tester_extras',
			'wp_beta_tester_new_feature_testing',
			array(
				'id'          => 'example',
				'title'       => esc_html__( 'Just an example.', 'wordpress-beta-tester' ),
				'description' => esc_html__( 'Look in `wp-config.php` for results.', 'wordpress-beta-tester' ),
				'class'       => is_writable( self::$config_path ) ? '' : 'hidden',
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
		if ( ! isset( $_POST['_wpnonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['_wpnonce'] ) ), 'wp_beta_tester_extras-options' )
		) {
			return;
		}

		if ( isset( $post_data['option_page'] )
			&& 'wp_beta_tester_extras' === $post_data['option_page']
		) {
			$options = isset( $post_data['wp-beta-tester'] )
				? $post_data['wp-beta-tester']
				: array();
			$options = WPBT_Settings::sanitize( $options );
			$this->update_constants( self::$options, $options );
			$filtered_options = array_filter( self::$options, array( $this, 'get_unchecked_options' ) );
			$options          = array_merge( $filtered_options, $options );
			update_site_option( 'wp_beta_tester', (array) $options );
			add_filter( 'wp_beta_tester_save_redirect', array( $this, 'save_redirect_page' ) );
		}
	}

	/**
	 * Filter saved setting to remove unchecked checkboxes.
	 *
	 * @param  array $checked Options.
	 * @return bool
	 */
	private function get_unchecked_options( $checked ) {
		return '1' !== $checked;
	}

	/**
	 * Run on activation hook.
	 *
	 * @return void
	 */
	public function activate() {
		$add = array_filter( self::$options, array( $this, 'get_checked_options' ) );
		if ( ! empty( $add ) ) {
			$this->add_constants( $add );
		}
	}

	/**
	 * Run on deactivation hook.
	 *
	 * @return void
	 */
	public function deactivate() {
		$remove = array_filter( self::$options, array( $this, 'get_checked_options' ) );
		if ( ! empty( $remove ) ) {
			$this->remove_constants( $remove );
		}
	}

	/**
	 * Filter saved settings to get checked options.
	 *
	 * @param  mixed $checked Option.
	 * @return bool
	 */
	private function get_checked_options( $checked ) {
		return '1' === $checked;
	}

	/**
	 * Update Feature Flag constants in wp-config.php.
	 *
	 * @param  array $old Current value of self::$options.
	 * @param  array $new New value of $options.
	 * @return void
	 */
	private function update_constants( $old, $new ) {
		unset( $new['skip_autoupdate_email'], $old['skip_autoupdate_email'] );

		$remove = array_diff_assoc( $old, $new );
		$add    = array_diff_assoc( $new, $old );

		if ( ! empty( $add ) ) {
			$this->add_constants( $add );
		}
		if ( ! empty( $remove ) ) {
			$this->remove_constants( $remove );
		}
	}

	/**
	 * Add constants to wp-config.php file.
	 *
	 * @uses https://github.com/wp-cli/wp-config-transformer
	 *
	 * @param  array $add Constants to add to wp-config.php.
	 * @return void|array
	 */
	private function add_constants( $add ) {
		try {
			$config_transformer = new \WPConfigTransformer( self::$config_path );
			foreach ( array_keys( $add ) as $constant ) {
				$feature_flag = strtoupper( 'wp_beta_tester_' . $constant );
				$config_transformer->update( 'constant', $feature_flag, 'true', self::$config_args );
			}
		} catch ( \Exception $e ) {
			$messsage = 'Caught Exception: \WPBT_Extras::add_constants() - ' . $e->getMessage();
			// phpcs:ignore Squiz.PHP.CommentedOutCode.Found,Squiz.Commenting.InlineComment.InvalidEndChar
			// error_log( $messsage );
			wp_die( esc_html( $messsage ) );
		}
	}

	/**
	 * Remove constants from wp-config.php file.
	 *
	 * @uses https://github.com/wp-cli/wp-config-transformer
	 *
	 * @param  array $remove Constants to remove from wp-config.php.
	 * @return void
	 */
	private function remove_constants( $remove ) {
		try {
			$config_transformer = new \WPConfigTransformer( self::$config_path );
			foreach ( array_keys( $remove ) as $constant ) {
				$feature_flag = strtoupper( 'wp_beta_tester_' . $constant );
				$config_transformer->remove( 'constant', $feature_flag );
			}
		} catch ( \Exception $e ) {
			$messsage = 'Caught Exception: \WPBT_Extras::remove_constants() - ' . $e->getMessage();
			// phpcs:ignore Squiz.PHP.CommentedOutCode.Found,Squiz.Commenting.InlineComment.InvalidEndChar
			// error_log( $messsage );
			wp_die( esc_html( $messsage ) );
		}
	}

	/**
	 * Redirect page/tab after saving options.
	 *
	 * @param  mixed $option_page Settings page.
	 * @return array
	 */
	public function save_redirect_page( $option_page ) {
		return array_merge( $option_page, array( 'wp_beta_tester_extras' ) );
	}

	/**
	 * Print new feature testing section information.
	 *
	 * @return void
	 */
	public function print_new_feature_testing_top() {
		esc_html_e( 'This area is for extra special beta testing. If nothing is present there are no additional features that need testing or the `wp-config.php` file is not writable. Features will set constants in the `wp-config.php` file.', 'wordpress-beta-tester' );
	}

	/**
	 * Create core settings page.
	 *
	 * @param  array  $tab    Settings tab.
	 * @param  string $action Form action.
	 * @return void
	 */
	public function add_admin_page( $tab, $action ) {
		?>
		<div>
		<?php if ( 'wp_beta_tester_extras' === $tab ) : ?>
			<form method="post" action="<?php echo esc_attr( $action ); ?>">
				<?php settings_fields( 'wp_beta_tester_extras' ); ?>
				<?php do_settings_sections( 'wp_beta_tester_extras' ); ?>
				<?php submit_button(); ?>
			</form>
			<?php endif; ?>
		</div>
		<?php
	}

	/**
	 * Skip successful autoupdate emails.
	 *
	 * @since 2.1.0
	 *
	 * @return void
	 */
	public function skip_autoupdate_email() {
		if ( ! isset( self::$options['skip_autoupdate_email'] ) ) {
			return;
		}
		// Disable update emails on success.
		add_filter(
			'auto_core_update_send_email',
			function ( $true, $type ) {
				$true = 'success' === $type ? false : $true;

				return $true;
			},
			10,
			2
		);

		// Disable sending debug email if no failures.
		add_filter(
			'automatic_updates_debug_email',
			function ( $email, $failures ) {
				$empty_email = array(
					'to'      => null,
					'subject' => null,
					'body'    => null,
					'headers' => null,
				);
				$email       = 0 === $failures ? $empty_email : $email;

				return $email;
			},
			10,
			2
		);
	}
}
