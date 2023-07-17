<?php
/**
 * Plugin Name:       Gb 15 6 16 1
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gb-15-6-16-1
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
function create_block_gb_15_6_16_1_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_gb_15_6_16_1_block_init' );

// Enqueue filename from a plugin
add_action(
	'admin_enqueue_scripts',
	function( $hook ) {

		if ( 'site-editor.php' !== $hook ) {
			return;
		}

		$assets_file = plugin_dir_path( __FILE__ ) . '/build/plugin.asset.php';

		if ( file_exists( $assets_file ) ) {
			$assets = include $assets_file;
			wp_enqueue_script(
				'command-center-commands',
				plugin_dir_url( __FILE__ ) . '/build/plugin.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);
