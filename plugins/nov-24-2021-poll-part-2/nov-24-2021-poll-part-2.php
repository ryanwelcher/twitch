<?php
/**
 * Plugin Name:       Poll Block Part 2 - Nov 24, 2021
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       nov-24-2021-poll-part-2
 *
 * @package           create-block
 */

function create_block_nov_24_2021_poll_part_2_block_init() {

	$blocks = array(
		'poll',
		'poll-item'
	);

	foreach ( $blocks as $block ) {

		$function_name = str_replace('-', '_', $block);
		register_block_type(
			plugin_dir_path( __FILE__ ) . trailingslashit( 'includes/block-editor/blocks/' . $block ),
			array( 'render_callback' => "{$function_name}_render_callback" )
		);
	}


}
add_action( 'init', 'create_block_nov_24_2021_poll_part_2_block_init' );

/**
 * Render the poll block on the frontend.
 */
function poll_render_callback( $attributes, $content, $block ) {

	wp_enqueue_script( 'poll-front-end' );
	$title = isset( $attributes['title'] )  ? $attributes['title'] : '';
	ob_start();

	?>
	<div class="poll-block">
		<h2 class="poll-block__title"><?php echo esc_html_e( $title ); ?></h2>
		<ul class="poll-block__content">
			<?php echo $content; ?>
		</ul>
		<span class="message"></span>
	</div>
	<?php
	return ob_get_clean();
}

/**
 * Render the poll item block on the frontend.
 */
function poll_item_render_callback( $attributes, $content, $block ) {
	$name = isset( $attributes['name'] )  ? $attributes['name'] : '';
	$color = $block->context['mycustomcontext/poll'] ?? '#000';
	$width = random_int(1,99);
	ob_start();
	?>
	<li class="poll-item" style="border:<?php echo $color;?> solid 1px">
		<button class="vote-button" data-option-name="<?php echo esc_attr( $name );?>" aria-label="Vote for <?php echo $name;?>">Vote</button>
		<span class="option-name"><?php echo esc_html_e( $name ); ?></span>
		<span class="vote-bar" data-count="<?php echo esc_attr( rand( 1, 10 ) );?>" style="background-color:<?php echo $color;?>"></span>
	</li>
	<?php
	return ob_get_clean();
}
