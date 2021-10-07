<?php
/**
 * Plugin Name:       twitchstreams
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multiple-custom-template
 *
 * @package           twitchstreams
 */

function twitchstreams_multiple_custom_template_block_init() {

	$blocks = array(
		'multiple-custom-template/'
	);

	foreach ( $blocks as $block ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'includes/block-editor/blocks/' . $block);
	}
}
add_action( 'init', 'twitchstreams_multiple_custom_template_blocks_block_init' );