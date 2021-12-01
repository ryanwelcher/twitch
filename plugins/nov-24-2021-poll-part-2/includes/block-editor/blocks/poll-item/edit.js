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
import { useBlockProps, RichText, PlainText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

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
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @param  root0.isSelected
 * @param  root0.context
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes,
	setAttributes,
	isSelected,
	context,
}) {
	const { name } = attributes;
	const { 'mycustomcontext/poll': bgColor } = context;
	const blockProps = useBlockProps({
		className: 'poll-item',
		style: { border: `solid 1px ${bgColor}` },
	});

	return (
		<li {...blockProps}>
			<button>Vote</button>
			<span
				className="vote-bar"
				style={{
					backgroundColor: bgColor,
					borderColor: bgColor,
					width: '100%',
				}}
			>
				{isSelected ? (
					<PlainText
						value={name}
						onChange={(newNameValue) =>
							setAttributes({ name: newNameValue })
						}
					/>
				) : (
					<>{name}</>
				)}
			</span>
		</li>
	);
}
