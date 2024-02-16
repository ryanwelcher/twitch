<?php
/**
 * Plugin Name:       Dev Hours
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dev-hours
 *
 * @package           dev-hours
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
function dev_hours_dev_hours_block_init() {

	$people = array( 'nick', 'justin', 'kevin', 'terrance' );

	[ $first] = $people;

	$more_people = array( ...$people, 'justin' ); // Spread operator as of 7.4

	// echo '<pre>';
	// var_dump( $first );
	// var_dump( $people );
	// var_dump( $more_people );
	// echo '</pre>';
	// die();

	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'dev_hours_dev_hours_block_init' );
