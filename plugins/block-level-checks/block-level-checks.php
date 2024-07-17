<?php
/**
 * Plugin Name:       Block Level Checks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-level-checks
 *
 * @package           block-developers-cookbook
 */

// Enqueue filename from a plugin.
add_action(
	'enqueue_block_editor_assets',
	function() {
		$assets_file = plugin_dir_path( __FILE__ ) . '/build/hooks.asset.php';

		if ( file_exists( $assets_file ) ) {
			$assets = include $assets_file;
			wp_enqueue_script(
				'script-handle',
				plugin_dir_url( __FILE__ ) . '/build/hooks.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);

			wp_enqueue_style(
				'css-handle',
				plugin_dir_url( __FILE__ ) . '/build/index.css',
				array(),
				$assets['version'],
				true
			);

		}
	}
);
