<?php
/**
 * Plugin Name:       Poll - Nov-18-2021
 * Description:       A block that displays a Poll
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ryan Welcher
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       poll
 *
 * @package           twitchstreams
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function twitchstreams_poll_block_init() {
	register_block_type( __DIR__, array(
		'render_callback' => 'twitchstreams_poll_block_render',
	));

	// Register the post meta field the meta box will save to.
	register_post_meta(
		'post',
		'twitch_poll_data',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}
add_action( 'init', 'twitchstreams_poll_block_init' );

/**
 * Render the block.
 */
function twitchstreams_poll_block_render( $attributes, $content, $block ) {
	ob_start();
	?>
		<div id="twitch-poll-block"><?php esc_html_e( 'Requires JavaScript', 'poll' );?></div>
	<?php
	return ob_get_clean();
}
