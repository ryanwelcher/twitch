<?php
/**
 * Render file for the block
 */

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> data-wp-interactive='{"namespace":"data-wp-bind"}'>
	<label>Toggle button status: <input type="checkbox" data-wp-on--click="actions.toggleButton" /></label><br>
	<button data-wp-bind--disabled="state.disabled"><?php esc_html_e( 'Click', 'directives' ); ?></button>
</div>
