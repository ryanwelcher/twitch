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
import {
	useBlockProps,
	RichText,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';

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
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { title, color } = attributes;
	return (
		<>
			<div {...useBlockProps({ className: 'poll-block' })}>
				<RichText
					className="poll-block__title"
					value={title}
					tagName="h2"
					allowedFormats={[
						'core/bold',
						'core/italic',
						'core/strikethrough',
					]}
					onChange={(newTitleValue) =>
						setAttributes({ title: newTitleValue })
					}
				/>
				<InnerBlocks
					allowedBlocks={['create-block/poll-item']}
					template={[
						[
							'create-block/poll-item',
							{ name: __('Option 1', 'nov-24-2021-poll-part-2') },
						],
					]}
					__experimentalCaptureToolbars={true}
				/>
			</div>
			<InspectorControls>
				<PanelBody title={__('Poll Bar Color')} initialOpen={true}>
					<PanelRow>
						<ColorPalette
							colors={[
								{ name: 'red', color: '#f00' },
								{ name: 'white', color: '#fff' },
								{ name: 'blue', color: '#00f' },
							]}
							value={color}
							onChange={(newColor) =>
								setAttributes({ color: newColor })
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
