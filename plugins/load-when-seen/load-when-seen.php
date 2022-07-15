<?php
/**
 * Plugin Name:       Load When Seen
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       load-when-seen
 *
 * @package           create-block
 */

function create_block_load_when_seen_block_init() {

	register_block_type(
		plugin_dir_path( __FILE__ ) . 'build',
		array(
			'render_callback' => 'create_block_load_when_seen_render_callback',
		)
	);
}
add_action( 'init', 'create_block_load_when_seen_block_init' );


function create_block_load_when_seen_render_callback( $atts, $content, $block) {
	// Naming convention: '{namespace}-{blockname}-view-script
	wp_enqueue_script( 'create-block-load-when-seen-view-script' );

	ob_start();
	require plugin_dir_path( __FILE__ ) . 'build/template.php';
	return ob_get_clean();
}
