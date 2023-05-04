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
	register_block_type( __DIR__ . '/build/live-facets' );
	register_block_type( __DIR__ . '/build/mega-menu' );
	register_block_type( __DIR__ . '/build/mega-menu-section' );
	register_block_type( __DIR__ . '/build/featured-image' );
}
add_action( 'init', 'twitch_bring_me_your_issues_mar_23_2023_block_init' );


add_action(
	'rest_api_init',
	function() {
		register_rest_route(
			'twitch/v1',
			'memes',
			array(
				'methods'              => \WP_REST_Server::READABLE,
				'permissions_callback' => '__return_true',
				'callback'             => function() {

					// wp_cache_add(); // uses object cache if available otherwise does nothing (like the googles).
					// set_transient(); // uses options if no caching layer exists on the server.

					if( $data = get_transient( 'twitch_memes' ) ) {
						return $data;
					} else {
						$options  = array();
						$response = wp_remote_get( 'https://api.imgflip.com/get_memes', $options );
						if ( ! is_wp_error( $response ) ) {
							$api_response = json_decode( wp_remote_retrieve_body( $response ), true );
							if ( isset( $api_response['success'] ) && $api_response['success'] ) {
								set_transient( 'twitch_memes', $api_response['data']['memes'], 60 * 60 * 24 );
								return $api_response['data']['memes'];
							} else {
								return new \WP_Error( 'Memes', 'Could not retrieve memes' );
							}
						} else {
							return $response;
						}
					}
				},
			)
		);
	}
);
