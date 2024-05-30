import { createBlock } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { select } from '@wordpress/data';
const v1 = {
	attributes: {
		blockCustomTitle: {
			type: 'string',
		},
		pageHeaderTitle: {
			type: 'string',
		},
	},
	migrate( attributes, innerBlocks ) {
		const pageTitle =
			select( 'core/editor' ).getCurrentPostAttribute( 'title' );
		console.log( pageTitle );

		return [
			attributes,
			[
				createBlock( 'core/heading', {
					placeholder: 'Titre de section',
					content: attributes.blockCustomTitle,
					level: 1,
					className: 'section_titling__title',
				} ),
				createBlock( 'core/paragraph', {
					content: attributes.pageHeaderTitle,
					fontSize: 'small',
				} ),
				...innerBlocks,
			],
		];
	},
	save( { attributes } ) {
		return (
			<div { ...useBlockProps.save() }>
				<h2>
					Block Custom Title:
					<RichText.Content value={ attributes.blockCustomTitle } />
				</h2>
				<p>
					Page Header Title:
					<RichText.Content value={ attributes.pageHeaderTitle } />
				</p>
				<p>What is this?</p>
			</div>
		);
	},
};

const v2 = {
	attributes: {
		blockCustomTitle: {
			type: 'string',
		},
		pageHeaderTitle: {
			type: 'string',
		},
	},
	save( { attributes } ) {
		return (
			<div { ...useBlockProps.save() }>
				<h2>
					Block Custom Title:
					<RichText.Content value={ attributes.blockCustomTitle } />
				</h2>
				<p>
					Page Header Title:
					<RichText.Content value={ attributes.pageHeaderTitle } />
				</p>
			</div>
		);
	},
};

const deprecated = [ v2, v1 ];

export default deprecated;
