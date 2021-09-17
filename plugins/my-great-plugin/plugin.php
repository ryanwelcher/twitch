<?php
/**
 * Plugin Name: My Great Plugin
 */

function register_block() {
	register_block_type( __DIR__, array(
        'render_callback' => 'my_great_plugin_render_callback',
    ));
}

function my_great_plugin_render_callback( $attributes, $content, $block) {
    $post_count = isset( $attributes['numberOfPosts'] ) ? $attributes['numberOfPosts'] : 'NOT SET!';
    return "<p>Post count is {$post_count}!</p>";
}

add_action( 'init', 'register_block' );