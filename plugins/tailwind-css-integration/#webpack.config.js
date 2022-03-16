const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		'tailwind-css-styles': './src/tailwind/style.css',
		'tailwind-css-editor': './src/tailwind/editor.css',
	},
};
