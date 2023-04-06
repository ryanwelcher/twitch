/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	SelectControl,
	TextControl,
	ComboboxControl,
} from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as coreStore, useEntityRecords } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import { useDebounce } from '@wordpress/compose';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit( { clientId } ) {
	const [ postType, setPostType ] = useState();
	const [ selectedPost, setSelectedPost ] = useState( '' );
	const [ searchTerm, setSearchTerm ] = useState( '' );
	const { insertBlocks } = useDispatch( blockEditorStore );
	const { getBlocksByClientId } = useSelect( ( select ) =>
		select( blockEditorStore )
	);

	const debouncedSetSearchTerm = useDebounce( ( term ) => {
		setSearchTerm( term );
	}, 500 );

	// Get the available post types
	const postTypes = useSelect( ( select ) =>
		select( coreStore ) //'core'
			.getPostTypes()
			?.filter( ( { viewable } ) => viewable )
			.map( ( { slug } ) => {
				return { label: slug, value: slug };
			} )
	);

	// Query the posts
	const { records } = useEntityRecords( 'postType', postType, {
		per_page: 30,
		search: searchTerm,
	} );
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ [ 'twitch/post-placeholder' ] }
				renderAppender={ false }
			/>
			<InspectorControls>
				<PanelBody title="Post Picker">
					{ postTypes ? (
						<>
							<SelectControl
								placeholder="Test"
								label={ __(
									'Post Type',
									' bring-me-your-issues-mar-23-2023'
								) }
								value={ postType }
								options={ [
									{ label: 'Choose', value: '' },
									...postTypes,
								] }
								onChange={ ( newPostType ) =>
									setPostType( newPostType )
								}
								__nextHasNoMarginBottom
							/>
							<TextControl
								label={ __(
									'Search',
									' bring-me-your-issues-mar-23-2023'
								) }
								onChange={ ( term ) =>
									debouncedSetSearchTerm( term )
								}
							/>
							<SelectControl
								value={ selectedPost }
								options={ records?.map(
									( { title: { rendered }, id } ) => {
										return { label: rendered, value: id };
									}
								) }
								onChange={ ( newSelectedPost ) =>
									setSelectedPost( newSelectedPost )
								}
							/>
						</>
					) : (
						<p>Loading...</p>
					) }

					<Button
						variant="primary"
						onClick={ () => {
							const newPost = createBlock(
								'twitch/post-placeholder',
								{ id: Number( selectedPost ), postType }
							);
							const [ { innerBlocks } ] =
								getBlocksByClientId( clientId );
							insertBlocks(
								newPost,
								innerBlocks.length, //getBlocksByClientId( clientId )[0].innerBlocks.length,
								clientId
							);
						} }
					>
						Insert post
					</Button>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
