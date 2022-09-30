
<p <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>

<?php
global $post;
if ( 'acf' === $attributes['metaType'] ) {
	echo esc_html( get_field( $attributes['metaKey'] ) );
} else {
	echo esc_html( get_post_meta( $post->ID, $attributes['metaKey'], true ) );
}
?>
</p>
