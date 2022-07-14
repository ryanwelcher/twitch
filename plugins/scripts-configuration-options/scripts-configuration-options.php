<?php
/**
 * Plugin Name:       Scripts Configuration Options
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       scripts-configuration-options
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_scripts_configuration_options_block_init() {
	register_block_type( __DIR__ . '/dist/block-1/' );
	register_block_type( __DIR__ . '/dist/block-2/', array( 'render_callback' => 'render_the_block' ) );
}
add_action( 'init', 'create_block_scripts_configuration_options_block_init' );

function render_the_block() {
	// Enqueue the front end script.
	// Naming convention: '{namespace}-{blockname}-view-script
	wp_enqueue_script( 'twitch-streams-scripts-configuration-options-dynamic-view-script' );


	return '<div>OUTPUT!</div>';
}

add_action(
	'enqueue_block_editor_assets',
	function() {
		$assets = include plugin_dir_path( __FILE__ ) . '/dist/plugins.assets.php';
		wp_enqueue_script(
			'test',
			plugin_dir_url( __FILE__ ) . 'dist/plugins.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
);
