<?php
/**
 * Plugin Name:       Native Multiple Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       native-multiple-blocks
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
function create_block_native_multiple_blocks_block_init() {
	register_block_type( __DIR__ . '/build/block-one' );
	register_block_type( __DIR__ . '/build/block-two' );
	register_block_type( __DIR__ . '/build/block-three' );
	register_block_type( __DIR__ . '/build/block-three', array( 'render_callback' => 'render_dynamic_block' ) );
}
add_action( 'init', 'create_block_native_multiple_blocks_block_init' );

function render_dynamic_block() {
	require_once __DIR__ . '/build/dynamic/template.php';
}
