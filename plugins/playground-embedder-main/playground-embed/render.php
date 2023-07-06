<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$blueprint    = $attributes['blueprint'];
$width        = $attributes['width'];
$height       = $attributes['height'];
$start_button = $attributes['startButton'];

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> >
<?php
echo do_shortcode( '[wp_playground width="' . $width . '" height="' . $height . '" start_button="' . $start_button . '"]' . $blueprint . '[/wp_playground]' );
?>
</div>
