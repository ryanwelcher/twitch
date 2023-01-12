/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextareaControl, PanelBody } from '@wordpress/components';

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
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<TextareaControl
				value="With prop"
				label="With prop"
				onChange={ ( val ) => console.log( val ) }
				help="The description will be displayed in the menu if the current theme supports it."
			/>
			<TextareaControl
				__nextHasNoMarginBottom
				value="Without prop"
				label="Without  prop"
				onChange={ ( val ) => console.log( val ) }
				help="The description will be displayed in the menu if the current theme supports it."
			/>
			<InspectorControls>
				<PanelBody>
					<TextareaControl
						__nextHasNoMarginBottom
						value="With prop"
						label="With prop"
						onChange={ ( val ) => console.log( val ) }
						help="The description will be displayed in the menu if the current theme supports it."
					/>
					<h3>This is athing</h3>
					<TextareaControl
						__nextHasNoMarginBottom
						value="Without prop"
						label="Without  prop"
						onChange={ ( val ) => console.log( val ) }
						help="The description will be displayed in the menu if the current theme supports it."
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
