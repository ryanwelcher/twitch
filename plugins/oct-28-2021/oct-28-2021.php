<?php
/**
 * Plugin Name:       Oct 28 2021
 * Description:       The @wordpress/create-blocks package now supports local templates - let's give it a spin!
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       oct-28-2021
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_oct_28_2021_block_init() {
	register_block_type( plugin_dir_path( __FILE__ ) . 'src/block-one' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'src/block-two' );
}
add_action( 'init', 'create_block_oct_28_2021_block_init' );
