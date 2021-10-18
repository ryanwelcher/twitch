const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		accordion: './includes/block-editor/blocks/accordion',
		'accordion-item': './includes/block-editor/blocks/accordion-item',
	},
};
