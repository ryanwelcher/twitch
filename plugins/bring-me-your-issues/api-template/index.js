const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'my-api-block',
		title: 'My Api Block',
		dashicon: 'twitter',
		version: '1.2.3',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
	},
	pluginTemplatesPath: join( __dirname, 'plugin-files' ),
	blockTemplatesPath: join( __dirname, 'block-files' ),
	variants: {
		useEffect: {},
		swr: {
			npmDevDependencies: [ 'swr' ],
		},
	},
};
