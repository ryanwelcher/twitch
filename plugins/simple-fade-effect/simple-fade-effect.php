<?php
/**
 * Plugin Name:       Simple Fade Effect
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           2.0.2
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       simple-fade-effect
 *
 * @package           block-developers-cookbook
 */

namespace BlockDevelopersCookbook;

// Hooks.
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\register_custom_js_script' );
add_filter( 'render_block', __NAMESPACE__ . '\enqueue_files_for_core_blocks', 10, 2 );
// add_filter( 'render_block_core/cover', __NAMESPACE__ . '\enqueue_files_for_one_core_block' );
// add_filter( 'render_block_core/image', __NAMESPACE__ . '\enqueue_files_for_one_core_block' );


/**
 * Register the script we want to load with the core blocks
 */
function register_custom_js_script() {
	$js_file = plugin_dir_path( __FILE__ ) . '/build/index.asset.php';
	if ( file_exists( $js_file ) ) {
		// Register the custom script to be used later.
		$js_assets = include $js_file;
		wp_register_script(
			'custom-script-for-core-block',
			plugin_dir_url( __FILE__ ) . '/build/index.js',
			$js_assets['dependencies'],
			$js_assets['version'],
			true
		);

		wp_register_style(
			'test-styles',
			plugin_dir_url( __FILE__ ) . '/build/index.css',
			array(),
			$js_assets['version'],
		);
	}
}

/**
 * Enqueue our custom script for the core blocks.
 *
 * @see https://developer.wordpress.org/reference/hooks/render_block/
 *
 * @param string $block_content The block content.
 * @param array  $block         The full block, including name and attributes.
 */
function enqueue_files_for_core_blocks( $block_content, $block ) {
	// Enqueue the same script for more than one block type.
	if ( 'core/cover' === $block['blockName'] || 'core/image' === $block['blockName'] ) {
		// Append the the fader class to to the block wrapper.
		$tag = new \WP_HTML_Tag_Processor( $block_content );
		if ( $tag->next_tag() ) {
			$tag->add_class( 'fader' );
		}
		$block_content = $tag->get_updated_html();
		wp_enqueue_script( 'custom-script-for-core-block' );
		wp_enqueue_style( 'test-styles' );
	}
	// Be sure to sure the return the block content.
	return $block_content;
}


/**
 * Enqueue our custom script for a single core block by using the specific hook
 *
 * @see https://developer.wordpress.org/reference/hooks/render_block_this-name/
 *
 * @param string $block_content The block content.
 * @param array  $block         The full block, including name and attributes.
 */
function enqueue_files_for_one_core_block( $block_content ) {
	// Enqueue the script for a single block type.
	// Append the the fader class to to the block wrapper.
	$tag = new WP_HTML_Tag_Processor( $block_content );
	if ( $tag->next_tag() ) {
		$tag->add_class( 'fader' );
	}
	$block_content = $tag->get_updated_html();
	wp_enqueue_script( 'custom-script-for-core-block' );
	wp_enqueue_style( 'test-styles' );
	// Be sure to sure the return the block content.
	return $block_content;
}
