<?php

add_action(
	'enqueue_block_editor_assets',
	function() {

		$assets_file = get_stylesheet_directory() . '/build/stream-meta-panel/index.asset.php';

		if ( file_exists( $assets_file ) ) {
			$assets = include $assets_file;
			wp_enqueue_script(
				'twitch-stream-meta',
				get_stylesheet_directory_uri() . '/build/stream-meta-panel/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}

		$assets_file = get_stylesheet_directory() . '/build/stream-meta-block/index.asset.php';

		if ( file_exists( $assets_file ) ) {
			$assets = include $assets_file;
			wp_enqueue_script(
				'twitch-stream-block',
				get_stylesheet_directory_uri() . '/build/stream-meta-block/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);
