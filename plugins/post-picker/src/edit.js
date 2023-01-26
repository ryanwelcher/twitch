/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEntityRecords } from '@wordpress/core-data';
import { FormTokenField, Placeholder } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {
	attributes: { postList },
	setAttributes,
	isSelected,
} ) {
	const streamsRequest = useEntityRecords( 'postType', 'twitch-stream' );
	const blockProps = useBlockProps();

	if ( streamsRequest.isResolving ) {
		return <div { ...blockProps }>Loading....</div>;
	}

	return (
		<section { ...blockProps }>
			{ isSelected ? (
				<Placeholder label={ __( 'Post Picker', 'post-picker' ) }>
					<FormTokenField
						label={ __( 'Posts to display', 'post-picker' ) }
						__experimentalShowHowTo={ false }
						value={ streamsRequest?.records
							?.filter( ( { id } ) => postList?.includes( id ) )
							.map( ( { title: { rendered } } ) => rendered ) }
						suggestions={ streamsRequest?.records?.map(
							( { title: { rendered } } ) => rendered
						) }
						onChange={ ( newList ) => {
							setAttributes( {
								postList: streamsRequest?.records
									?.filter( ( { title: { rendered } } ) =>
										newList.includes( rendered )
									)
									.map( ( { id } ) => id ),
							} );
						} }
					/>
				</Placeholder>
			) : (
				<>
					{ postList?.map( ( post ) => {
						return <div className="card">{ post }</div>;
					} ) }
				</>
			) }
		</section>
	);
}
