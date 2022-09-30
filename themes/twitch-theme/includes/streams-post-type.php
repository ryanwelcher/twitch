<?php
/**
 * File that handles all of the CPT things.
 *
 * @package TwitchTheme
 */

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
		'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields', 'author' ),
		'taxonomies'         => array( 'category', 'post_tag' ),
		'show_in_rest'       => true,
		'menu_icon'          => 'dashicons-format-video',
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
add_action( 'init', 'register_stream_post_type' );
