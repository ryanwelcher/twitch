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
import {
	useBlockProps,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';

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
	const settings = useSelect( ( select ) => {
		return select( blockEditorStore ).getSettings();
	}, [] );
	const { updateSettings } = useDispatch( blockEditorStore );

	console.log( settings );

	const [ showTabs, setShowTabs ] = useState( false );

	return (
		<>
			<p { ...useBlockProps() }>
				{ __(
					'Gb 15 0 Review – hello from the editor!',
					'gb-15-0-review'
				) }
			</p>
			<InspectorControls>
				<PanelBody title="Standard Stuff">
					<Button
						variant="primary"
						onClick={ () => {
							setShowTabs( ! showTabs );
							updateSettings( {
								...settings,
								blockInspectorTabs: {
									...settings.blockInspectorTabs,
									'create-block/gb-15-0-review': showTabs,
								},
							} );
						} }
					>
						{ ! showTabs
							? 'Turn off the tabs for this block'
							: 'Turn on the tabs for this block' }
					</Button>
				</PanelBody>
			</InspectorControls>
			<InspectorControls __experimentalGroup="color">
				I'm in the color group!
			</InspectorControls>
			<InspectorControls __experimentalGroup="typography">
				I'm in the typography group!
			</InspectorControls>
			<InspectorControls __experimentalGroup="dimensions">
				I'm in the dimensions group!
			</InspectorControls>
			<InspectorControls __experimentalGroup="border">
				I'm in the border group!
			</InspectorControls>
			<InspectorControls __experimentalGroup="advanced">
				I'm in the advanced group!
			</InspectorControls>
			<InspectorControls __experimentalGroup="list">
				I'm in the LIST?!
			</InspectorControls>
		</>
	);
}
