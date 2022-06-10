/**
 * WordPress dependencies
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';
import { attrs } from '@wordpress/shortcode';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';

const { name, ...settings } = json;

registerBlockType(name, {
	edit,
	save: () => null,
	transforms: {
		from: [
			{
				type: 'shortcode',
				tag: 'twitch_example',
				attributes: {
					photos: {
						type: 'string',
						shortcode: ({ named: { photos } }) => photos,
					},
					title: {
						type: 'string',
						shortcode: ({ named: { title } }) => title,
					},
					align: {
						shortcode: ({ named: { align = 'alignnone' } }) => {
							return align.replace('align', '');
						},
					},
				},
			},
			{
				type: 'block',
				blocks: ['core/shortcode'],
				isMatch: ({ text }) => {
					return text && text.startsWith('[twitch_example');
				},
				transform: ({ text }) => {
					const shortcode = attrs( text );
					return createBlock(name, shortcode.named);
				},
			},
		],
		to: [],
	},
	...settings,
});
