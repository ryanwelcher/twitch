/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { Fragment } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

const Edit = ( props ) => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const { numberOfPosts } = attributes;

	const posts = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'post', {
			// per_page: parseInt( numberOfPosts ),/
			per_page: 10,
		} );
	} );

	const isResolving = useSelect( ( select ) => {
		return select( 'core/data' ).isResolving( 'core', 'getEntityRecords', [
			'postType',
			'post',
			// { per_page: parseInt( numberOfPosts ) },
			{ per_page: 10 },
		] );
	} );

	const { invalidateResolution } = useDispatch( 'core/data' );

	const reQuery = () => {
		invalidateResolution( 'core', 'getEntityRecords', [
			'postType',
			'post',
			// { per_page: parseInt( numberOfPosts ) },
			{ per_page: 10 },
		] );
	};

	if ( isResolving ) {
		return <p { ...blockProps }>{ parseInt( numberOfPosts ) }.</p>;
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody>
					<TextControl
						value={ numberOfPosts }
						onChange={ ( newValue ) => {
							setAttributes( { numberOfPosts: newValue } );
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				{ posts &&
					posts.map( ( post ) => {
						return <p>{ post.title.rendered }</p>;
					} ) }
				<button onClick={ reQuery }>Re-Query</button>
			</div>
		</Fragment>
	);
};

export default Edit;
