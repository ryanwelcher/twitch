<?php
/**
 * Example directive
 */

?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> data-wp-interactive="data-wp-text">
	<button
		data-wp-text="state.message"
		data-wp-on--click="actions.toggleMessage">
	</button>
</div>
