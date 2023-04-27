/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { store as editorStore } from '@wordpress/editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { Placeholder, Button } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit( {
	clientId,
	setAttributes,
	attributes: { useFeaturedImage },
	context: { postId, postType },
} ) {
	const { insertBlocks } = useDispatch( blockEditorStore );

	const [ featuredImage ] = useEntityProp(
		'postType',
		postType,
		'featured_media',
		postId
	);

	// The useSelect hook is better for retrieving data from the store.
	const featuredImageID = useSelect( ( select ) =>
		select( editorStore ).getEditedPostAttribute( 'featured_media' )
	);

	const media = useSelect(
		( select ) =>
			featuredImageID &&
			select( coreStore ).getMedia( featuredImageID, {
				context: 'view',
			} ),
		[ featuredImageID ]
	);

	return (
		<div { ...useBlockProps() }>
			{ useFeaturedImage && featuredImageID && media ? (
				<figure>
					<img
						src={ media.source_url }
						alt={ media.alt_text }
						className="wp-block-cover__image-background"
					/>
				</figure>
			) : (
				<Placeholder
					label={ __(
						'Featured Image block',
						'bring-me-your-issues'
					) }
					instructions={ __(
						'Drag and drop onto this block, upload, or select existing media from your library.',
						'bring-me-your-issues'
					) }
				>
					<Button
						variant="tertiary"
						onClick={ () => {
							setAttributes( {
								useFeaturedImage: true,
								mediaID: featuredImageID,
							} );
						} }
					>
						{ __( 'Use Featured Image', 'bring-me-your-issues' ) }
					</Button>
				</Placeholder>
			) }
		</div>
	);
}
