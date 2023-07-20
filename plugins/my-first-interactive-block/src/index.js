/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './editor.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( metadata.name, {
	/**
	 * Used to construct a preview for the block to be shown in the block inserter.
	 */
	example: {
		attributes: {
			message: 'My First Interactive Block',
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	save: () => {
		return (
			<div
				{ ...useBlockProps.save() }
				data-wp-interactive
				data-wp-context='{ "create-block": { "isOpen": false } }'
				data-wp-effect="effects.create-block.logIsOpen"
			>
				<button
					data-wp-on--click="actions.create-block.toggle"
					data-wp-bind--aria-expanded="context.create-block.isOpen"
				>
					Toggle
				</button>

				<p data-wp-bind--hidden="!context.create-block.isOpen">
					My First Interactive Block STATIC
				</p>
			</div>
		);
	},
} );
