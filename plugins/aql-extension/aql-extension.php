<?php
/**
 * Plugin Name:       Aql Extension
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       aql-extension
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
\add_action(
	'enqueue_block_editor_assets',
	function() {
		// Variations.
		$variations_assets_file = plugin_dir_path( __FILE__ ) . 'build/plugin.asset.php';
		if ( file_exists( $variations_assets_file ) ) {
			$assets = include $variations_assets_file;
			\wp_enqueue_script(
				'aql-extension',
				plugin_dir_url( __FILE__ ) . 'build/plugin.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}

	}
);



\add_filter(
	'aql_query_vars',
	// 'aql_query_vars_inherited',
	function( $query_vars, $custom_query ) {
		if (
			isset( $custom_query['authorContent'] ) &&
			true === filter_var( $custom_query['authorContent'], FILTER_VALIDATE_BOOLEAN )
		) {
			$query_vars['author'] = get_current_user_id();
		}
		return $query_vars;
	},
	10,
	3
);

