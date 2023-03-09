<?php
/**
 * Plugin Name:       Openai
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       openai
 *
 * @package           twitch
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function twitch_openai_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'twitch_openai_block_init' );

// Enqueue index from a plugin.
add_action(
	'enqueue_block_editor_assets',
	function() {
		$assets_file = plugin_dir_path( __FILE__ ) . '/build/index.asset.php';

		if ( file_exists( $assets_file ) ) {
			$assets = include $assets_file;
			wp_enqueue_script(
				'openai-image-generator',
				plugin_dir_url( __FILE__ ) . 'build/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);

			wp_enqueue_style(
				'openai-image-generator-styles',
				plugin_dir_url( __FILE__ ) . 'build/index.css',
				array(),
				$assets['version']
			);
		}
	}
);
