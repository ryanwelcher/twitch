/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

addFilter(
	'blocks.registerBlockType',
	'my-great-icon-block',
	(settings, name) => {
		if (name === 'core/navigation') {
			console.log(settings.allowedBlocks);
			return {
				...settings,
				allowedBlocks: [
					...(settings.allowedBlocks ?? []),
					'core/avatar',
				],
			};
		}
		return settings;
	}
);
🤠
