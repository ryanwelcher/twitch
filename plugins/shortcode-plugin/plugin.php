<?php

/**
 * Plugin Name: Shortcode Plugin
 * Description: A plugin to demonstrate how to convert an existing shortcode into a block.
 */

// Add a namespace to avoid conflicts with other plugins.
namespace Twitch\ShortcodePlugin;

// Init the plugin
add_action( 'init', __NAMESPACE__.'\register_shortcodes' );
function register_shortcodes() {
    // Register the shortcode.
    add_shortcode(
        'twitch_example',
        __NAMESPACE__.'\render_example_shortcode'
    );
}


// Render the shortcode on the frontend.
function render_example_shortcode( $atts ) {

    // Lets enqueue some styles for this shortcode
    wp_enqueue_style(
        'twitch-example-shortcode-css',
        plugins_url( '/css/example-shortcode.css', __FILE__ )
    );
    
    // Render the shortcode output.
    ob_start(); 

    // Grab the attributes
    $photos  = $atts['photos'] ?? 1;
    $title   = isset( $atts['title'] ) ? $atts['title'] : false;
    $classes = isset( $atts['fullwidth'] ) ? 'twitch-example-shortcode alignfull' : 'twitch-example-shortcode';
    ?>
    <section class="<?php echo esc_attr( $classes ); ?>">
    <?php if ( $title ) : ?>
        <h3><?php echo esc_html( $title );?></h1>
    <?php endif; ?>
        <div class="twitch-example-shortcode__days">
        <?php for( $i = 1; $i <= $photos; $i++ ) : ?>
            <div class="twitch-example-shortcode__day">
                <img
                    src="<?php echo esc_url( add_query_arg( 'random', $i, 'https://picsum.photos/150' ) ); ?>"
                    width="150"
                    loading="lazy"
                    alt="Example image from https://picsum.photos/"
                />
            </div>
        <?php endfor; ?>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

?>