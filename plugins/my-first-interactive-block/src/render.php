<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$unique_id = uniqid( 'p-' );
?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive
	data-wp-context='{ "create-block": { "isOpen": false } }'
	data-wp-effect="effects.create-block.logIsOpen"
>
	<button
		data-wp-on--click="actions.create-block.toggle"
		data-wp-bind--aria-expanded="context.create-block.isOpen"
		aria-controls="p-<?php echo esc_attr( $unique_id ); ?>"
	>
		<?php esc_html_e( 'Toggle', 'my-first-interactive-block' ); ?>
	</button>

	<p
		id="p-<?php echo esc_attr( $unique_id ); ?>"
		data-wp-bind--hidden="!context.create-block.isOpen"
	>
		<?php
			esc_html_e( 'My First Interactive Block - hello from an interactive block!', 'my-first-interactive-block' );
		?>
	</p>
</div>
