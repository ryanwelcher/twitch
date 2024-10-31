<?php
/**
 * Render file for the block
 */

wp_interactivity_state(
	'data-wp-text',
	array(
		'message' => __( 'Hello, world!', 'directives' ),
	)
);

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> data-wp-interactive="data-wp-text">
	<h2 data-wp-text="state.message"></h2>
	<button data-wp-on--click="actions.toggleMessage">Click to change the message</button>
</div>
