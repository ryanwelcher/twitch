<?php
/**
 * Load the custom blocks for this theme
 */

add_action(
	'init',
	function() {
		// Filter the plugins url to find the blocks.
		add_filter( 'plugins_url', 'filter_plugins_url', 10, 2 );
		// Register the blocks.
		register_block_type( dirname( __DIR__ ) . '/build/stream-meta-block/' );

		// Remove the filter.
		remove_filter( 'plugins_url', 'filter_plugins_url', 10, 2 );
	}
);

/**
 * Filter the plugins_url to allow us to use assets from theme.
 *
 * @param string $url  The plugins url.
 * @param string $path The path to the asset.
 *
 * @return string The overridden url to the block asset.
 */
function filter_plugins_url( $url, $path ) {
	$file = preg_replace( '/\.\//', '', $path );
	return get_stylesheet_directory_uri() . '/build/stream-meta-block/' . $file;
	die( var_dump( get_stylesheet_directory_uri() . '/build/stream-meta-block/' . $file ) );
	return get_stylesheet_directory_uri() . $file;
}
