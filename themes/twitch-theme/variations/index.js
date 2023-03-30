import { registerBlockVariation } from '@wordpress/blocks';

const MY_VARIATION_NAME = 'twitch-streams-variation';

registerBlockVariation( 'core/query', {
	name: MY_VARIATION_NAME,
	title: 'Query Twitch Streams',
	description: 'Displays a list of my streams.',
	isActive: [ 'namespace' ],
	attributes: {
		query: {
			perPage: 6,
			pages: 0,
			offset: 0,
			postType: 'twitch-stream',
			order: 'desc',
			orderBy: 'title',
			author: 2,
			search: '',
			sticky: '',
			inherit: false,
			metaKey: 'color',
		},
		namespace: MY_VARIATION_NAME,
	},
	allowedControls: [
		// 'inherit',
		// 'postType',
		'order',
		'sticky',
		// 'taxQuery',
		// 'search',
		// 'author',
	],
	innerBlocks: [
		[
			'core/post-template',
			{},
			[
				[ 'core/post-title' ],
				[ 'core/post-excerpt' ],
				[ 'twitch/edit-post-block' ],
			],
		],
		[ 'core/query-pagination' ],
		[ 'core/query-no-results' ],
	],
} );
