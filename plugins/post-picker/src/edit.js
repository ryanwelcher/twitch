/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { useEntityRecords } from '@wordpress/core-data';
import { FormTokenField, Placeholder } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit( {
	attributes: { postList = [] },
	setAttributes,
	isSelected,
} ) {
	const streamsRequest = useEntityRecords( 'postType', 'post' );
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(
		{ className: 'post-list' },
		{
			// allowedBlocks: [ '' ],
			// template: [ [ 'twitch/mega-menu-section', {} ] ],
		}
	);

	if ( streamsRequest.isResolving ) {
		return <div { ...blockProps }>Loading....</div>;
	}

	const getPostTitle = ( id, data ) => {
		return data?.records?.filter( ( { id: postID } ) => {
			return id === postID;
		} )[ 0 ]?.title?.rendered;
	};

	return (
		<section { ...blockProps }>
			{ isSelected ? (
				<Placeholder label={ __( 'Post Picker', 'post-picker' ) }>
					<FormTokenField
						label={ __( 'Posts to display', 'post-picker' ) }
						__experimentalShowHowTo={ false }
						value={ postList.map( ( id ) =>
							getPostTitle( id, streamsRequest )
						) }
						suggestions={ streamsRequest?.records?.map(
							( { title: { rendered } } ) => rendered
						) }
						onChange={ ( newList ) => {
							const postIDToSave =
								streamsRequest?.records
									?.filter( ( { title: { rendered } } ) =>
										newList.includes( rendered )
									)
									.map( ( { id } ) => id )[ 0 ] || '';

							setAttributes( {
								postList: [ ...postList, postIDToSave ],
							} );
						} }
					/>
				</Placeholder>
			) : (
				<section>
					{ postList?.map( ( id ) => {
						return (
							<li key={ id } className="card">
								{ getPostTitle( id, streamsRequest ) }
							</li>
						);
					} ) }
				</section>
			) }
			<div { ...innerBlockProps }></div>
		</section>
	);
}
