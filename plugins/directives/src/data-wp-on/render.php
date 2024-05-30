<?php
/**
 * Render file for the block
 */

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> data-wp-interactive='{ "namespace": "data-wp-on" }'>
	<input
		type="text"
		data-wp-on--click="actions.showClickedStatus"
		data-wp-on--blur="actions.showBlurStatus"
		data-wp-on--keyup="actions.updateMessage"
		data-wp-bind--placeholder="state.placeholder"
	/>
	<h2 data-wp-text="state.messageToDisplay"></h2>
</div>
