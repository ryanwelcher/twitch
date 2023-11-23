// Import the original config from the @wordpress/scripts package.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Import the helper to find and generate the entry points in the src directory
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );

const CopyPlugin = require( 'copy-webpack-plugin' );

function modify( buffer ) {
	// copy-webpack-plugin passes a buffer
	var manifest = JSON.parse( buffer.toString() );

	// make any modifications you like, such as
	manifest.version = package.version;

	// pretty print to JSON with two spaces
	manifest_JSON = JSON.stringify( manifest, null, 2 );
	return manifest_JSON;
}

// Add any a new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		variations: './variations/index.js',
		'stream-meta-panel': './stream-meta-panel/index.js',
	},
};
