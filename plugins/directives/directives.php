<?php
/**
 * Plugin Name:       Directives
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       directives
 *
 * @package           twitch
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function directives_directives_block_init() {

	if ( function_exists( 'wp_interactivity_state' ) ) {
		register_block_type( __DIR__ . '/build/data-wp-text' );
		register_block_type( __DIR__ . '/build/data-wp-on' );
		register_block_type( __DIR__ . '/build/data-wp-bind' );
	}
}
add_action( 'init', 'directives_directives_block_init' );
