<?php
/**
 * Plugin Name: PrePublish Checklist
 * Description: A pre-publish checklist for content that includes a customizable settings page.
 * Textdomain: pre-publish-checklist
 *
 * @package PrePublishChecklist
 */

namespace PrePublishChecklist;

/**
 * Registers the settings pave
 */
function register_plugin_settings_page() {
	add_menu_page(
		__( 'Pre-publish Settings', 'pre-publish-checklist' ),
		__( 'Pre-publish Settings', 'pre-publish-checklist' ),
		'manage_options',
		'pre-publish-checklist',
		__NAMESPACE__ . '\render_settings_page',
		'dashicons-yes'
	);
}

add_action( 'admin_menu', __NAMESPACE__ . '\register_plugin_settings_page' );

/**
 * Renders the settings page
 */
function render_settings_page() {
	?>
	<div id="twitch-pre-publish-checklist">
		<?php esc_html_e( 'Requires JavaScript', 'pre-publish-checklist' ); ?>
	</div>
	<?php
}


/**
 * Enqueue our script on the settings page,
 */
add_action(
	'admin_enqueue_scripts',
	function( $suffix ) {
		$asset_file_page = plugin_dir_path( __FILE__ ) . 'build/settings/index.asset.php';
		if ( file_exists( $asset_file_page ) && 'toplevel_page_pre-publish-checklist' === $suffix ) {
			$assets = require_once $asset_file_page;
			wp_enqueue_script(
				'pre-publish-settings-script',
				plugin_dir_url( __FILE__ ) . 'build/settings/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}

		foreach ( $assets['dependencies'] as $style ) {
			wp_enqueue_style( $style );
		}
	}
);

// Enqueue the plugin.
add_action(
	'enqueue_block_editor_assets',
	function() {
		$asset_file_path = plugin_dir_path( __FILE__ ) . 'build/plugin/index.asset.php';
		if ( file_exists( $asset_file_path ) ) {
			$assets = require_once $asset_file_path;
			wp_enqueue_script(
				'pre-publish-plugin-script',
				plugin_dir_url( __FILE__ ) . 'build/plugin/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);


add_action( 'admin_init', __NAMESPACE__ . '\register_my_setting' );
add_action( 'rest_api_init', __NAMESPACE__ . '\register_my_setting' );

/**
 * Register some settings.
 */
function register_my_setting() {
	register_setting(
		'pre-publish-checklist',
		'pre-publish-checklist_data',
		array(
			'type'         => 'object',
			'default'      => array(
				'wordcount'             => 500,
				'requiredFeaturedImage' => false,
				'requiredCategory'      => true,
			),
			'show_in_rest' => array(
				'schema' => array(
					'type'       => 'object',
					'properties' => array(
						'wordcount'             => array(
							'type' => 'integer',
						),
						'requiredFeaturedImage' => array(
							'type' => 'boolean',
						),
						'requiredCategory'      => array(
							'type' => 'boolean',
						),
					),
				),
		),
		)
	);
}
