<?php
/**
 * Plugin Name:       Custom Field Block
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-field-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_custom_field_block_block_init() {
	register_block_type( __DIR__ . '/build', array(
		'render_callback' => 'create_block_custom_field_block_render_callback',
	));
}
add_action( 'init', 'create_block_custom_field_block_block_init' );

function create_block_custom_field_block_render_callback() {
	ob_start();
	?>
	<p>Date: <?php echo get_post_meta( get_the_ID(), 'stream-date', true ); ?></p>
	<p>Duraction: <?php echo get_post_meta( get_the_ID(), 'stream-duration', true ); ?></p>

	<?php
	return ob_get_clean();
}
