<?php
/**
 * Plugin Name:       Find Entry Points
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       find-entry-points
 *
 * @package           twitchstreams
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function twitchstreams_find_entry_points_block_init() {
	register_block_type( __DIR__ . '/build/block-one/' );
	register_block_type( __DIR__ . '/build/block-two/' );
	register_block_type( __DIR__ . '/build/block-three/' );
}
add_action( 'init', 'twitchstreams_find_entry_points_block_init' );
