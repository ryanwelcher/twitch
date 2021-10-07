const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'multiple-custom-template':
			'./includes/block-editor/blocks/multiple-custom-template',
	},
};
