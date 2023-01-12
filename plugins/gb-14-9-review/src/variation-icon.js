import { registerBlockVariation } from '@wordpress/blocks';
import { Icon } from '@wordpress/components';

registerBlockVariation('core/query', {
	description: 'Variation',
	name: 'variation_query_loop',
	title: 'Variation Query Loop',
	icon: {
		src: (
			<Icon
				icon={'admin-appearance'}
				className="wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks"
			/>
		),
	},
	allowedControls: ['taxQuery', 'search'],
	attributes: {
		allowedControls: ['taxQuery', 'search'],
		displayLayout: {
			type: 'flex',
			columns: 3,
		},
		namespace: 'variation_query_loop',
		query: {
			perPage: 9,
			pages: 0,
			offset: 0,
			postType: 'page',
			order: 'desc',
			orderBy: 'date',
			author: '',
			search: '',
			exclude: [],
			sticky: '',
			inherit: false,
		},
	},
	innerBlocks: [
		[
			'core/post-template',
			{},
			[
				['core/post-title'],
				['core/query-pagination'],
				['core/query-no-results'],
			],
		],
	],
	scope: ['inserter', 'block'],
});
