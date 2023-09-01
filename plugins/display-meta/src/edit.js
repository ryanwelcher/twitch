/**
 * External dependencies
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import isEqual from 'lodash/isEqual';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import {
	SelectControl,
	PanelBody,
	TextControl,
	Button,
} from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useDispatch, useSelect } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import { useState, useRef, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { MetaInterfaceType, MyDraggable } from './components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Edit
 */
export default function Edit( {
	attributes: { metaType, metaKey },
	setAttributes,
	context: { postType, postId, queryId },
} ) {
	const [ nativeMeta, setNativeMeta ] = useEntityProp(
		'postType',
		postType,
		'meta',
		postId
	);

	const [ acfMeta, setACFMeta ] = useEntityProp(
		'postType',
		postType,
		'acf',
		postId
	);

	const { isSaving, edited, saved } = useSelect( ( select ) => {
		return {
			isSaving: select( 'core/editor' ).isSavingPost(),
			edited: select( 'core/editor' ).getEditedPostAttribute( 'acf' ),
			saved: select( 'core/editor' ).getCurrentPostAttribute( 'acf' ),
		};
	} );

	const [ acfTypes, setAcfTypes ] = useState();

	useEffect( () => {
		apiFetch( {
			path: `/wp/v2/twitch-stream/${ postId }`,
			method: 'OPTIONS',
		} ).then( ( options ) => {
			setAcfTypes( options?.schema?.properties?.acf?.properties );
		} );
	}, [] );

	// Save the ACF meta when the post is saved
	useEffect( () => {
		if ( isSaving && ! isEqual( edited, saved ) ) {
			return () =>
				apiFetch( {
					path: `/wp/v2/posts/${ postId }`,
					method: 'POST',
					data: {
						acf: {
							...acfMeta,
						},
					},
				} );
		}
	}, [ isSaving ] );

	const mapMetaToSelect = ( metaObject ) => {
		if ( ! metaObject ) {
			return [];
		}
		return Object.entries( metaObject ).map( ( [ key ] ) => {
			return {
				label: key,
				value: key,
			};
		} );
	};
	return (
		<div { ...useBlockProps() }>
			<MetaInterfaceType
				metaKey={ metaKey }
				metaType={ metaType }
				nativeMeta={ nativeMeta }
				acfMeta={ acfMeta }
				acfTypes={ acfTypes }
				onChange={ ( value ) => {
					if ( metaType && metaType === 'native' ) {
						setNativeMeta( {
							...nativeMeta,
							[ metaKey ]: value,
						} );
					} else {
						setACFMeta( {
							...acfMeta,
							[ metaKey ]: value,
						} );
					}
				} }
			/>
			<InspectorControls>
				<PanelBody
					title={ __( 'Meta Fields Settings', 'display-meta' ) }
				>
					<SelectControl
						label={ __( 'Meta Type' ) }
						value={ metaType }
						options={ [
							{ label: 'Native', value: 'native' },
							{ label: 'ACF', value: 'acf' },
						] }
						onChange={ ( newType ) => {
							setAttributes( { metaType: newType } );
							setAttributes( { metaKey: '' } );
						} }
					/>
					<SelectControl
						label={ __( 'Meta Field', 'display-meta' ) }
						value={ metaKey }
						options={ [
							{
								label: 'Please Select',
								value: '',
							},
							...mapMetaToSelect(
								metaType && metaType === 'native'
									? nativeMeta
									: acfMeta
							),
						] }
						onChange={ ( newKey ) => {
							setAttributes( { metaKey: newKey } );
						} }
					/>
					{ metaType === 'native' ? (
						<TextControl
							label={ __( 'Native Meta Value', 'display-meta' ) }
							value={ nativeMeta[ metaKey ] }
							onChange={ ( value ) => {
								setNativeMeta( {
									...nativeMeta,
									[ metaKey ]: value,
								} );
							} }
						/>
					) : (
						<TextControl
							label={ __( 'ACF Meta Value', 'display-meta' ) }
							value={ acfMeta[ metaKey ] }
							onChange={ ( value ) => {
								setACFMeta( {
									...acfMeta,
									[ metaKey ]: value,
								} );
							} }
						/>
					) }
				</PanelBody>
			</InspectorControls>
		</div>
	);
}

// export default function Edit() {
// 	return (
// 		<div { ...useBlockProps() }>
// 			{ __(
// 				'Inspector Control Groups Block',
// 				'inspector-control-groups'
// 			) }
// 			<InspectorAdvancedControls>
// 				{ __(
// 					"I'm in the advanced group!",
// 					'inspector-control-groups'
// 				) }
// 			</InspectorAdvancedControls>

// 			<InspectorControls group="advanced">
// 				{ __(
// 					"I'm in the advanced group!",
// 					'inspector-control-groups'
// 				) }
// 			</InspectorControls>
// 		</div>
// 	);
// }
