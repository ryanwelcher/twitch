/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

// eslint-disable-next-line import/no-unresolved This is added to an import map.
import Edit from 'edit';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('twitch-streams/htm-no-build', {
	apiVersion: 3,
	title: __('HTM No Build', 'htm-no-build'),
	icon: 'smiley',
	version: '0.1.0',
	category: 'widgets',
	icon: 'smiley',
	description: __(
		'A block that uses the HTM package instead of JSX.',
		'htm-no-build'
	),
	example: {},
	supports: {
		html: false,
	},
	attributes: {
		message: {
			type: 'string',
			default: 'I use htm instead of JSX! Try updating this message.',
		},
	},
	edit: Edit,
	save: () => null,
});
