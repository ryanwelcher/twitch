/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';

const { name, ...settings } = json;

registerBlockType(name, {
	edit,
	save: () => null,
	...settings,
});
