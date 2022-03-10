<?php
/**
 * Block markup
 *
 * @package blocks
 */

$date     = get_post_meta( get_the_ID(), 'stream-date', true );
$duration = get_post_meta( get_the_ID(), 'stream-duration', true );
?>
<ul <?php echo get_block_wrapper_attributes(); ?>>
	<li>Stream Date: <?php echo esc_html( date_i18n( get_option( 'date_format' ), strtotime( $date ) ) ); ?></li>
	<li>Duration: <?php echo esc_html( $duration ); ?></li>
</ul>
