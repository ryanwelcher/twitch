<?php

add_action( 'init', 'register_block' );

function register_block() {
	register_block_type( __DIR__, array(
		'render_callback' => 'render_random_photos_block'
	));
}

function render_random_photos_block( $attributes, $content, $block) {

	$title  = $attributes['title'] ? $attributes['title'] : 'Random Photos';
	$photos = $attributes['photos'];
	$classes = isset( $attributes['align'] ) ? "twitch-example-shortcode align{$attributes['align']}"  : 'twitch-example-shortcode';
	ob_start();

	/**
	 * This works too and might be a better way if your shortcode is more complex.
	 * echo do_shortcode( '[twitch_example title="' . $title . '" photos="' . $photos . '" align="'. $attributes['align'] . '"]' );
	 */

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
