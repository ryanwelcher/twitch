<?php
/**
 * Plugin Name:       Bring Me Your Issues!
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bring-me-your-issues
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
function twitch_bring_me_your_issues_mar_23_2023_block_init() {
	register_block_type( __DIR__ . '/build/edit-post-block' );
	register_block_type( __DIR__ . '/build/post-picker' );
	register_block_type( __DIR__ . '/build/post-placeholder' );
	register_block_type( __DIR__ . '/build/use-effect' );
	register_block_type( __DIR__ . '/build/swr' );
}
add_action( 'init', 'twitch_bring_me_your_issues_mar_23_2023_block_init' );
