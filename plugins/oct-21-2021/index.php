<?php
/**
 * Plugin Name:       Oct 21, 2021
 * Description:       Building a pre-publish checklist plugin for Gutenberg
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       example-plugin
 */

 add_action( 'enqueue_block_assets', 'oct_21_2021_enqueue_block_assets' );

function oct_21_2021_enqueue_block_assets() {

	$assets_path = __DIR__ . '/build/index.asset.php' ;

	if ( file_exists( $assets_path  ) ) {
		$assets = require( $assets_path );
		wp_enqueue_script(
			'oct-21-2021-script',
			plugins_url( 'build/index.js', __FILE__ ),
			$assets['dependencies'],
			$assets['version']
		);
	}
}
