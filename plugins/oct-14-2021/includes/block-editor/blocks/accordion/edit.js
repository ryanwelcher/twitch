/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {
		setAttributes,
		attributes: { title },
		clientId,
	} = props;

	const innerBlockCount = useSelect(
		(select) => select('core/block-editor').getBlock(clientId).innerBlocks
	);

	const appenderToUse = () => {
		if (innerBlockCount.length < 10) {
			return <InnerBlocks.DefaultBlockAppender />;
		}
		return false;
	};
	return (
		<div {...useBlockProps()}>
			<RichText
				tagName="h3"
				placeholder="Title RichText"
				value={title}
				allowedFormats={['core/bold']}
				onChange={(newText) => setAttributes({ title: newText })}
			/>
			<ul className="inner-content">
				<InnerBlocks
					allowedBlocks={['oct-14-2021/accordion-item']}
					template={[['oct-14-2021/accordion-item']]}
					renderAppender={() => appenderToUse()}
				/>
			</ul>
		</div>
	);
}
