<?php
/**
 * Front end
 */

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<h2>
		<?php
			echo wp_kses_post( get_the_title( $attributes['id'] ) );
		?>
	</h2>
</div>
