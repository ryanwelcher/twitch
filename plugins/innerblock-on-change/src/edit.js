/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const childBlocks = useSelect(
		(select) =>
			select('core/block-editor').getBlocksByClientId(props.clientId)[0]
				?.innerBlocks
	);

	useEffect(() => {
		if (!childBlocks) return;
		console.log('effect ran', childBlocks);
	}, [childBlocks]);

	// console.log('childBlocks', childBlocks);
	return (
		<>
			<p {...useBlockProps()}>
				{__(
					'Innerblock On Change – hello from the editor!',
					'innerblock-on-change'
				)}
			</p>
			<InnerBlocks />
		</>
	);
}
