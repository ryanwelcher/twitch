<?php
/**
 * Template
 *
 * @package PHPCS is a PITA
 */

var_dump( $attributes, $content, $block );

wp_enqueue_script( 'create-block-load-when-seen-view-script' );

?>
<p <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> id="app">
	<?php esc_html_e( 'Dynamic Block Examples', 'load-when-seen' ); ?>
</p>
