<?php
/**
 * Plugin Name:       Translations
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       translations
 *
 * @package           create-block
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
function translations_translations_block_init() {
	register_block_type( __DIR__ . '/build' );

	// Set the translations
	wp_set_script_translations( 'create-block-translations-editor-script', 'translations', plugin_dir_path( __FILE__ ) . 'languages/' ); // works in editor.

	load_plugin_textdomain( 'translations', false,  dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'init', 'translations_translations_block_init' );
