<?php

/**
 * Plugin Name: Shortcode Plugin
 * Description: A plugin to demonstrate how to convert an existing shortcode into a block.
 */

// Add a namespace to avoid conflicts with other plugins.
namespace Twitch\ShortcodePlugin;

// Useful global constants.
define( 'TWITCH_SHORTCODE_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'TWITCH_SHORTCODE_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'TWITCH_SHORTCODE_PLUGIN_INC', TWITCH_SHORTCODE_PLUGIN_PATH . 'includes/' );


// Include the files that make up the plugin.
require_once TWITCH_SHORTCODE_PLUGIN_INC . '/shortcode.php';
require_once TWITCH_SHORTCODE_PLUGIN_INC . '/block-editor/blocks/random-photos/block.php';
