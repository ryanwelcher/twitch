/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { registerBlockType } from '@wordpress/blocks';

import json from '../block.json';
const { name, settings } = json;

import edit from './edit';

registerBlockType(name, {
	edit,
	save: () => null,
	...settings,
});
