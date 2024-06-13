/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEntityProp, useEntityRecord } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import { useSelect, dispatch } from '@wordpress/data';
import { store as blocksStore } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { unlock } from './unlock-lock';
import podsBinding from './pods-binding';
import acfBinding from './acf-binding';

const { registerBlockBindingsSource } = unlock( dispatch( blocksStore ) );

// Register the bindings sources.
// registerBlockBindingsSource( podsBinding );
// registerBlockBindingsSource( acfBinding );

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
	} = props;

	const [ selectedFramework, setSelectedFramework ] = useState(
		attributes?.metadata?.bindings?.content?.source
	);

	const sources = useSelect( ( select ) =>
		unlock( select( blocksStore ) ).getAllBlockBindingsSources()
	);

	console.log( sources );

	const { record, isResolving } = useEntityRecord(
		'postType',
		postType,
		postId
	);

	// PODS fields.
	const podsFields = window.PodsDFV.getFields( postType, postId );

	// ACF fields.
	const [ acfMeta ] = useEntityProp( 'postType', postType, 'acf', postId );

	// Native meta
	const [ nativeMeta ] = useEntityProp(
		'postType',
		postType,
		'meta',
		postId
	);

	if ( props.name !== 'core/paragraph' ) {
		return <BlockEdit { ...props } />;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Binding selector', 'twitch-streams' ) }>
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
