<?php
/**
 * Plugin name: Query Loop Variations
 * Description: Adds a new block variation to the Query Loop block.
 *
 * @package WhatTheDeuce
 */

add_action(
	'enqueue_block_editor_assets',
	function() {

		// Variations.
		$variations_assets_file = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

		if ( file_exists( $variations_assets_file ) ) {
			$assets = include $variations_assets_file;
			wp_enqueue_script(
				'twitch-stream-variations-from-plugin',
				plugin_dir_url( __FILE__ ) . '/build/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}

	}
);



add_filter(
	'pre_render_block',
	function( $pre_render, $parsed_block ) {
		if ( 'plugin-query-loop-variation' === $parsed_block['attrs']['namespace'] ) {
			add_filter(
				'query_loop_block_query_vars',
				function( $query, $block ) use ( $parsed_block ) {
					/** You can read your block custom query parameters here and build your query */
					$query['meta_key']   = 'stream-duration';
					$query['meta_value'] = $parsed_block['attrs']['query']['stream-duration'];
					return $query;
				},
				10,
				2
			);
		}

		return $pre_render;

	},
	10,
	2
);


add_filter(
	'rest_twitch-stream_query',
	function( $args, $request ) {
		/** We can access our custom parameters from here */
		$duration = $request->get_param( 'stream-duration' );

		/** ...your custom query logic */
		$args['meta_key']   = 'stream-duration';
		$args['meta_value'] = $duration;

		return $args;
	},
	10,
	2
);
