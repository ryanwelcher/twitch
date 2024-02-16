<?php
/**
 * Front end
 */
?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<h2>
		<a href="<?php echo esc_attr( get_the_permalink( $attributes['id'] ) ); ?>">
			<?php echo wp_kses_post( get_the_title( $attributes['id'] ) ); ?>
		</a>
	</h2>
</div>
