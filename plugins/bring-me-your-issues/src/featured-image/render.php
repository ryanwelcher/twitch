<?php
/**
 * Leave me alone.
 */

$image_id = $attributes['mediaID'];
?>

<figure <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> >
	<?php echo wp_get_attachment_image( $image_id ); ?>
</figure>
