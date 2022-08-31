<?php
/**
 * Load the custom blocks for this theme
 */

add_action(
	'init',
	function() {
		// Register the blocks.
		register_block_type( dirname( __DIR__ ) . '/build/stream-meta-block/' );
	}
);

