<section <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php
	foreach ( $attributes['postList'] as $id_of_the_damn_post ) {
		echo '<div class="card">' . esc_html( get_the_title( $id_of_the_damn_post ) ) . '</div>';
	}
	?>
</section>


