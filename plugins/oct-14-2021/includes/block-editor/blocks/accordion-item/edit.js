/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

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
 * @param  props.setAttributes
 * @param  props.attributes
 * @param  props.attributes.title
 * @param  props.attributes.content
 * @param  props.isSelected
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({
	setAttributes,
	attributes: { title, content },
	isSelected,
}) {
	return (
		<li {...useBlockProps()}>
			{(isSelected || title) && (
				<RichText
					tagName="h4"
					value={title}
					allowedFormats={[]}
					placeholder={__('Item title', 'oct-14-2021')}
					onChange={(newTitle) => setAttributes({ title: newTitle })}
				/>
			)}
			{isSelected && (
				<RichText
					tagName="p"
					value={content}
					placeholder={__('Item content', 'oct-14-2021')}
					onChange={(newContent) =>
						setAttributes({ content: newContent })
					}
				/>
			)}
		</li>
	);
}
