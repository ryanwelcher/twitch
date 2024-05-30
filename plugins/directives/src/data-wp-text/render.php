<?php
/**
 * Render file for the block
 */

wp_interactivity_state(
	'data-wp-text',
	array(
		'message' => __( 'Default message from state', 'directives' ),
	)
);

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> data-wp-interactive='{ "namespace": "data-wp-text" }'>
	<p data-wp-text="state.message"></p>
	<button data-wp-on--click="actions.toggleMessage"><?php esc_html_e( 'Change the message', 'directives' ); ?></button>
</div>
