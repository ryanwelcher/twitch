<?php
/**
 * Plugin Name:       Oct 14, 2021
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       example-plugin
 *
 * @package           create-block
 */

function create_block_example_plugin_block_init() {

	$blocks = array(
		'accordion',
		'accordion-item'
	);

	foreach ( $blocks as $block ) {
		$callback = str_replace( '-', '_', $block );
		register_block_type(
			plugin_dir_path( __FILE__ ) . 'includes/block-editor/blocks/' . $block . '/',
			array( 'render_callback' => "render_{$callback }_block" )
		);
	}

	wp_enqueue_script(
		'accordion-script',
		plugin_dir_url(__FILE__) . '/assets/custom-script.js',
		array(),
		'1.0.0',
		true
	);
}
add_action( 'init', 'create_block_example_plugin_block_init' );

function render_accordion_block( $attributes, $inner_block_content, $block ) {

	$title = isset( $attributes['title'] ) ? $attributes['title'] : '';
	ob_start();
	?>
	<div>
		<h3><?php echo esc_html( $title );?></h3>
		<ul>
			<?php echo wp_kses_post($inner_block_content) ?>
		</ul>
	</div>
	<?php
	return ob_get_clean();
}

function render_accordion_item_block( $attributes, $content, $block ) {
	$title   = isset( $attributes['title'] ) ? $attributes['title'] : '';
	$content = isset( $attributes['content'] ) ? $attributes['content'] : '';
	ob_start();
	?>
		<li>
			<h4><?php echo esc_html( $title );?></h4>
			<p><?php echo wp_kses_post( $content );?></p>
		</li>
	<?php
	return ob_get_clean();
}
