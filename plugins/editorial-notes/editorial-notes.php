<?php
/**
 * Plugin Name:       Editorial Notes
 * Requires at least: 6.4
 * Requires PHP:      7.0
 * Version:           1.0.2
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       editorial-notes
 *
 * @package block-developers-cookbook
 */

namespace BlockDevelopersCookbook;

/**
 * Enqueue the JS containing our filters
 */
function editorial_notes_enqueue_scripts() {
	$notes_field_file = plugin_dir_path( __FILE__ ) . '/build/notes-field.asset.php';

	if ( file_exists( $notes_field_file ) ) {
		$assets = include $notes_field_file;

		// Enqueue the JavaScript that contains our filters.
		wp_enqueue_script(
			'notes-field',
			plugin_dir_url( __FILE__ ) . '/build/notes-field.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);

		// Enqueue the CSS for the has-notes class.
		wp_enqueue_style(
			'notes-class',
			plugin_dir_url( __FILE__ ) . '/build/notes-field.css',
			array(),
			$assets['version'],
		);
	}
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\editorial_notes_enqueue_scripts' );

/**
 * Enqueue the editor only style
 */
function editorial_notes_enqueue_block_editor_css() {
	$notes_field_file = plugin_dir_path( __FILE__ ) . '/build/notes-field.asset.php';
	if ( file_exists( $notes_field_file ) ) {
		$assets = include $notes_field_file;
		// Enqueue the CSS for the has-notes class.
		wp_enqueue_style(
			'notes-class',
			plugin_dir_url( __FILE__ ) . '/build/notes-field.css',
			array(),
			$assets['version'],
		);
	}
}
add_action( 'enqueue_block_assets', __NAMESPACE__ . '\editorial_notes_enqueue_block_editor_css' );

