/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import {
	InspectorControls,
	useBlockBindingsUtils,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEntityRecord } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import {
	getBlockBindingsSources,
	registerBlockBindingsSource,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import excerpt from './excerpt';

// Register the bindings sources.

// registerBlockBindingsSource( excerpt );

registerBlockBindingsSource( {
	label: __( 'Excerpt' ),
	name: 'twitch/excerpt',
	getValues( { select, context, bindings } ) {
		return {
			content:
				select( 'core/editor' ).getEditedPostAttribute( 'excerpt' ),
		};
	},

	setValues( { select, dispatch, context, bindings } ) {
		dispatch( 'core/editor' ).editPost( {
			excerpt: bindings?.content?.newValue,
		} );
	},

	canUserEditValue( { select, context } ) {
		return true;
	},
} );

/**
 *
 * @param {*} BlockEdit
 * @returns
 */
const withBlockBindingsSelector = ( BlockEdit ) => ( props ) => {
	const {
		context: { postId, postType },
		attributes,
		setAttributes,
		clientId,
	} = props;

	const { updateBlockBindings, removeAllBlockBindings } =
		useBlockBindingsUtils( clientId );

	const [ selectedFramework, setSelectedFramework ] = useState(
		attributes?.metadata?.bindings?.content?.source
	);

	const sources = getBlockBindingsSources();

	const { record, isResolving } = useEntityRecord(
		'postType',
		postType,
		postId
	);

	// PODS fields.
	// const podsFields = window.PodsDFV.getFields( postType, postId );

	// // ACF fields.
	// const [ acfMeta ] = useEntityProp( 'postType', postType, 'acf', postId );

	// // Native meta
	// const [ nativeMeta ] = useEntityProp(
	// 	'postType',
	// 	postType,
	// 	'meta',
	// 	postId
	// );

	if ( props.name !== 'core/image' ) {
		return <BlockEdit { ...props } />;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Binding selector', 'twitch-streams' ) }>
					<Button
						variant="primary"
						onClick={ () => removeAllBlockBindings() }
					>
						Remove bindings
					</Button>
					<Button
						variant="primary"
						onClick={ () =>
							updateBlockBindings( {
								alt: undefined,
							} )
						}
					>
						Add native binding
					</Button>
					<SelectControl
						label={ __( 'Binding source', 'twitch-streams' ) }
						value={ selectedFramework }
						options={ [
							{ label: 'Choose', value: '' },
							{ label: 'ACF', value: 'twitch/acf' },
							{ label: 'PODS', value: 'twitch/pods' },
							{ label: 'Native', value: 'core/post-meta' },
						] }
						onChange={ ( value ) => {
							setAttributes( {
								metadata: {
									...attributes.metadata,
									bindings: {
										content: {
											...attributes?.metadata?.bindings
												?.content,
											source: value,
										},
									},
								},
							} );
						} }
					/>
					<SelectControl
						label={ __( 'Key to bind', 'twitch-streams' ) }
						options={ [
							{ label: 'Choose', value: '' },
							{ label: 'PODS String', value: 'pods_string' },
							{ label: 'ACF String', value: 'paragraph_content' },
							{ label: 'Native String', value: 'string_binding' },
						] }
						value={
							attributes?.metadata?.bindings?.content?.args?.key
						}
						onChange={ ( value ) => {
							setAttributes( {
								metadata: {
									...attributes.metadata,
									bindings: {
										content: {
											...attributes?.metadata?.bindings
												?.content,
											args: { key: value },
										},
									},
								},
							} );
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<BlockEdit { ...props } />
		</>
	);
};

addFilter( 'editor.BlockEdit', 'core/query', withBlockBindingsSelector );
