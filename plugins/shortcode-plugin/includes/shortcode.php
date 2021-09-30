<?php


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
		TWITCH_SHORTCODE_PLUGIN_URL . 'assets/css/example-shortcode.css',
    );

	// Generate the defaults
	$attributes = shortcode_atts( array(
		'photos'    => 6,
		'title'     => 'Random Photos',
		'fullwidth' => true,
	), $atts );

    // Render the shortcode output.
    ob_start();

    // Grab the attributes
    $photos  = $attributes['photos'];
    $title   = isset( $attributes['title'] ) ? $attributes['title'] : false;
    $classes = $attributes['fullwidth'] ? 'twitch-example-shortcode alignfull' : 'twitch-example-shortcode';
    ?>
    <section class="<?php echo esc_attr( $classes ); ?>">
    <?php if ( $title ) : ?>
        <h3><?php echo esc_html( $title );?></h1>
    <?php endif; ?>
        <div class="twitch-example-shortcode-days">
        <?php for( $i = 1; $i <= $photos; $i++ ) : ?>
            <div class="twitch-example-shortcode-day">
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
