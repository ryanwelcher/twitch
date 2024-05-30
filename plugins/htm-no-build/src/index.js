/**
 * External dependencies
 */
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(React.createElement);

/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;
const { useBlockProps, RichText } = wp.blockEditor;
const { __ } = wp.i18n;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('twitch-streams/htm-no-build', {
	title: __('HTM No Build', 'htm-no-build'),
	icon: 'smiley',
	version: '0.1.0',
	category: 'widgets',
	icon: 'smiley',
	description: __(
		'Example block scaffolded with Create Block tool.',
		'htm-no-build'
	),
	example: {},
	supports: {
		html: false,
	},
	attributes: {
		message: {
			type: 'string',
			default: 'NO BUILD!',
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes: { message = 'Default value' }, setAttributes }) => {
		return html`
			<${RichText}
				...${useBlockProps()}
				value="${message}"
				tagName="p"
				onChange="${(message) => setAttributes({ message })}"
			/>
		`;
	},

	/**
	 * @see ./save.js
	 */
	save: () => null,
});
