const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		'block-one': './src/block-one',
		'block-two': './src/block-two',
	},
};
