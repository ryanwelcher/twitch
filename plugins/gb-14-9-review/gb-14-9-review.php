<?php
/**
 * Plugin Name:       Gb 14 9 Review
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gb-14-9-review
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
function create_block_gb_14_9_review_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_gb_14_9_review_block_init' );


// Enqueue variation-icon from a plugin.
add_action(
	'enqueue_block_editor_assets',
	function() {
		$assets_file = plugin_dir_path( __FILE__ ) . '/build/variation-icon.asset.php';

		if ( file_exists( $assets_file ) ) {
			$assets = include $assets_file;
			wp_enqueue_script(
				'script-handle',
				plugin_dir_url( __FILE__ ) . '/build/variation-icon.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);

register_block_pattern(
	'query/template-type-test',
	array(
		'title'         => __( 'Template type test', 'gutenberg' ),
		'templateTypes' => array( '404' ),
		'content'       => '<!-- wp:paragraph {"align":"center","fontSize":"x-large"} -->
						<p class="has-text-align-center has-x-large-font-size">404</p>
						<!-- /wp:paragraph -->',
	)
);
