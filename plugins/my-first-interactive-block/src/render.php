<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$unique_id = uniqid( 'p-' );
?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive
	data-wp-context='{ "create-block": { "isOpen": false } }'
	data-wp-init="effects.create-block.logInit"
	data-wp-effect="effects.create-block.logIsOpen"
>
	<button
		data-wp-on--click="actions.create-block.toggle"
		data-wp-bind--aria-expanded="context.create-block.isOpen"
		aria-controls="p-<?php echo esc_attr( $unique_id ); ?>"
		data-wp-class--class-one="context.create-block.isOpen"
		data-wp-class--class-two="context.create-block.isOpen"

	>
		<?php esc_html_e( 'Toggle22', 'my-first-interactive-block' ); ?>
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
