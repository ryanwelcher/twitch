/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './notes.scss';
/**
 * Filter the block settings to add the notes attribute.
 *
 * @param {Object} settings Settings for the block.
 * @param {string} name     The name of the block.
 *
 * @return {Object} he modified settings.
 */
function addNotesAttribute( settings, name ) {
	return {
		...settings,
		attributes: {
			...settings.attributes,
			notes: {
				type: 'string',
				default: '',
			},
		},
	};
}

addFilter(
	'blocks.registerBlockType',
	'block-developer-cookbook/notes-field',
	addNotesAttribute
);

/**
 * Add a custom control to the block inspector controls for every block.
 *
 * @param {WPElement} BlockEdit The original block edit component.
 *
 * @return {WPElement} Element to render.
 */
function addEditorNotesField( BlockEdit ) {
	return ( props ) => {
		const {
			attributes: { notes },
			setAttributes,
			isSelected,
		} = props;
		return (
			<>
				<BlockEdit { ...props } />
				{ isSelected && (
					<InspectorControls>
						<PanelBody>
							<TextareaControl
								label={ __(
									'Editorial Notes',
									'block-developer-cookbook'
								) }
								value={ notes }
								onChange={ ( notes ) =>
									setAttributes( { notes } )
								}
								help={ __(
									'Add some editorial notes for this block'
								) }
							/>
						</PanelBody>
					</InspectorControls>
				) }
			</>
		);
	};
}

addFilter(
	'editor.BlockEdit',
	'block-developer-cookbook/notes-field-control',
	addEditorNotesField
);

/**
 * Add a custom class and CSS to show when a block has notes.
 *
 * @param {WPElement} BlockListBlock The original block list block component.
 *
 * @return {WPElement} Element to render.
 */
function addNotesDisplayClass( BlockListBlock ) {
	return ( props ) => {
		const { notes } = props.attributes;
		return (
			<BlockListBlock
				{ ...props }
				className={ notes.length ? 'has-notes' : '' }
			/>
		);
	};
}
addFilter(
	'editor.BlockListBlock',
	'block-developer-cookbook/notes-field-class',
	addNotesDisplayClass
);
