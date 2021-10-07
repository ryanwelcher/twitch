const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		'block-one': './includes/block-editor/blocks/block-one',
		'block-two': './includes/block-editor/blocks/block-two',
		'block-three': './includes/block-editor/blocks/block-three',
	},
};
