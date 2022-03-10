<?php
/**
 * Plugin Name:       Stream Post Types
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       stream-post-types
 *
 * @package           twitch-streams
 */

function twitch_streams_stream_post_types_block_init() {

	register_block_type(
		plugin_dir_path( __FILE__ ) . 'build/block',
		array(
			'render_callback' => 'twitch_streams_stream_post_types_render_callback',
		)
	);
	// Register post type.
	register_stream_post_type();
}
add_action( 'init', 'twitch_streams_stream_post_types_block_init' );


function twitch_streams_stream_post_types_render_callback( $atts, $content, $block ) {
	ob_start();
	require plugin_dir_path( __FILE__ ) . 'build/block/template.php';
	return ob_get_clean();
}

/**
 * Register the post type
 */
function register_stream_post_type() {
	$labels = array(
		'name'                  => _x( 'Streams', 'Post type general name', 'twitch-theme' ),
		'singular_name'         => _x( 'Stream', 'Post type singular name', 'twitch-theme' ),
		'menu_name'             => _x( 'Streams', 'Admin Menu text', 'twitch-theme' ),
		'name_admin_bar'        => _x( 'Stream', 'Add New on Toolbar', 'twitch-theme' ),
		'add_new'               => __( 'Add New', 'twitch-theme' ),
		'add_new_item'          => __( 'Add New Stream', 'twitch-theme' ),
		'new_item'              => __( 'New Stream', 'twitch-theme' ),
		'edit_item'             => __( 'Edit Stream', 'twitch-theme' ),
		'view_item'             => __( 'View Stream', 'twitch-theme' ),
		'all_items'             => __( 'All Stream', 'twitch-theme' ),
		'search_items'          => __( 'Search Streams', 'twitch-theme' ),
		'parent_item_colon'     => __( 'Parent Stream:', 'twitch-theme' ),
		'not_found'             => __( 'No Streams found.', 'twitch-theme' ),
		'not_found_in_trash'    => __( 'No Streams found in Trash.', 'twitch-theme' ),
		'featured_image'        => _x( 'Stream Thumbnail', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'twitch-theme' ),
		'set_featured_image'    => _x( 'Set stream thumbnail', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'twitch-theme' ),
		'remove_featured_image' => _x( 'Remove stream thumbnail', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'twitch-theme' ),
		'use_featured_image'    => _x( 'Use as stream thumbnail', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'twitch-theme' ),
		'archives'              => _x( 'Stream archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'twitch-theme' ),
		'insert_into_item'      => _x( 'Insert into Stream', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'twitch-theme' ),
		'uploaded_to_this_item' => _x( 'Uploaded to this Stream', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'twitch-theme' ),
		'filter_items_list'     => _x( 'Filter Stream list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'twitch-theme' ),
		'items_list_navigation' => _x( 'Streams list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'twitch-theme' ),
		'items_list'            => _x( 'Streams list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'twitch-theme' ),
	);

	$args = array(
		'labels'             => $labels,
		'description'        => 'Stream custom post type.',
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'streams' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 20,
		'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
		'taxonomies'         => array( 'category', 'post_tag' ),
		'show_in_rest'       => true,
		'menu_icon'          => 'dashicons-format-video',
		'template'           => array(
			array( 'twitch-streams/stream-details' ),
			array( 'core/embed', array( 'providerNameSlug' => 'youtube' ) ),
			array(
				'core/heading',
				array(
					'content' => 'Steam Overview',
					'level'   => 3,
				),
			),
			array( 'core/paragraph', array( 'placeholder' => 'Stream details here...' ) ),
		),
		'template_lock'      => 'all',
	);

	register_post_type( 'twitch-stream', $args );

	// Register some post meta.
	register_post_meta(
		'twitch-stream',
		'stream-duration',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);

	register_post_meta(
		'twitch-stream',
		'stream-date',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}

add_action(
	'enqueue_block_editor_assets',
	function() {

		$stream_panel_assets_path = plugin_dir_path( __FILE__ ) . 'build/plugin/stream-meta-panel.asset.php';
		if ( file_exists( $stream_panel_assets_path ) && 'twitch-stream' === get_post_type() ) {
			$assets = require $stream_panel_assets_path;
			wp_enqueue_script(
				'streams-meta-panel',
				plugin_dir_url( __FILE__ ) . '/build/plugin/stream-meta-panel.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);
