/**
 * WordPress dependencies
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';

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
					return text.startsWith('[twitch_example');
				},
				transform: ({ text }) => {
					const attributes = text
						.replace(/\[twitch_example|]|/g, '') //remove the shortcode tags
						.replace(/"\s/g, '|')
						.replace(/"/g, '')
						.split('|'); //split the attributes

					const atts = {};
					attributes.map((item) => {
						const split = item.trim().split('=');
						atts[[split[0]]] = split[1];
					});
					return createBlock(name, atts);
				},
			},
		],
		to: [],
	},
	...settings,
});
