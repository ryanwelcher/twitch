/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { blockCustomTitle, pageHeaderTitle } = attributes;
	const pageTitle = useSelect( ( select ) => {
		const { getEditedPostAttribute } = select( 'core/editor' );
		return getEditedPostAttribute( 'title' );
	} );

	// Update the attribute when the post title changes.
	useEffect( () => {
		setAttributes( { blockCustomTitle: pageTitle } );
	}, [ pageTitle ] );

	return (
		<div { ...useBlockProps() }>
			<div { ...useInnerBlocksProps() }></div>
		</div>
	);
}
