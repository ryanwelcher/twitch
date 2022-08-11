<?php
/**
 * Plugin Name:       Auto Inserter Madness
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       auto-inserter-madness
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
function create_block_auto_inserter_madness_block_init() {
	register_block_type( __DIR__ . '/build/blocks/ad-block' );
}
add_action( 'init', 'create_block_auto_inserter_madness_block_init' );



add_action(
	'enqueue_block_editor_assets',
	function() {
	$assets = require __DIR__ . '/build/slot/index.asset.php';
	wp_enqueue_script(
		'auto-inserter',
		plugin_dir_url(__FILE__) . 'build/slot/index.js',
		$assets['dependencies'],
		$assets['version'],
		true
	);
});
