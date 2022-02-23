<?php
/**
 * Plugin Name:       Block Deprecations
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-deprecations
 *
 * @package           twitch-streams
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function twitch_streams_block_deprecations_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'twitch_streams_block_deprecations_block_render_block',
		)
	);
}
add_action( 'init', 'twitch_streams_block_deprecations_block_init' );

/**
 * Annoying!
 */
function twitch_streams_block_deprecations_block_render_block( $attributes, $content, $block_instance ) {
	$message = isset( $attributes['message'] ) ? $attributes['message'] : false;
	$content = isset( $attributes['content'] ) ? $attributes['content'] : false;
	ob_start();
	?>
	<div <?php echo esc_attr( get_block_wrapper_attributes() ); ?>>
	<?php if ( $message ) : ?>
		<h2><?php echo esc_html( $message ); ?></h2>
	<?php endif; ?>
	<?php if ( $content ) : ?>
		<p><?php echo esc_html( $content ); ?></p>
	<?php endif; ?>
	</div>
	<?php
	return ob_get_clean();

}
