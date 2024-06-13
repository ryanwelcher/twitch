<?php
/**
 * Plugin Name: ACF/PODS bindings
 * Description: Examples on creating custom bindings for ACF and PODS.
 * Requires at least: 6.5
 * Requires Plugins:   gutenberg
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-bindings
 *
 * @package           twitch-streams
 */

add_action( 'init', 'twitch_register_block_bindings' );

function twitch_register_block_bindings() {

	// Register post meta to the post type of "post"
	register_post_meta(
		'post',
		'string_binding',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
			'default'      => 'Message from meta',
		)
	);


	// Block binding for Pods
	register_block_bindings_source(
		'twitch/pods',
		array(
			'label'              => __( 'PODS', 'custom-bindings' ),
			'get_value_callback' => 'twitch_user_data_bindings',
			'uses_context'       => [ 'postId', 'postType' ],
		)
	);

	register_block_bindings_source(
		'twitch/acf',
		array(
			'label'              => __( 'Advanced Custom Fields', 'custom-bindings' ),
			'get_value_callback' => 'twitch_acf_data_bindings',
			'uses_context'       => [ 'postId', 'postType' ],
		)
	);
}


function twitch_user_data_bindings( $source_args, $block_instance ) {
	$post_id   = $block_instance->context['postId'];
	$post_type = $block_instance->context['postType'];
	// Get Pods stuff
	$product_fields = pods( $post_type, $post_id );

	// If there are no PODs bail.
	if ( ! $product_fields ) {
		return null;
	}
	// Return the data based on the key argument.
	$data = $product_fields->display( $source_args['key'] );
	return $data;


	// switch ( $source_args['key'] ) {
	// 	case 'price':
	// 		$price = $product_fields->field( 'price', null, true );
	// 		return '<p>' . $price . '</p>';
	// 	case 'sale_price':
	// 		return $product_fields->field( $source_args['key'] );
	// 	case 'release_date':
	// 		return $product_fields->field( $source_args['key'] );
	// 	default:
	// 		return $product_fields->field( $source_args['key'] );
	// }
}

function twitch_acf_data_bindings( $source_args, $block_instance ) {
	$post_id   = $block_instance->context['postId'];
	$post_type = $block_instance->context['postType'];

	// Get the ACF field
	$value = get_field( $source_args['key'] );

	// Don't do this. Check for things and be better
	return $value;

}


// Enqueue filename from a plugin
add_action(
	'enqueue_block_editor_assets',
	function() {
		$assets_file = plugin_dir_path( __FILE__ ) . '/build/index.asset.php';

		if ( file_exists( $assets_file ) ) {
			$assets = include $assets_file;
			wp_enqueue_script(
				'script-handle',
				plugin_dir_url( __FILE__ ) . '/build/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);
