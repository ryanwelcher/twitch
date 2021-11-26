const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		poll: './includes/block-editor/blocks/poll',
		'poll-item': './includes/block-editor/blocks/poll-item',
	},
};
