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
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl, ToggleControl, SelectControl} from "@wordpress/components";

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
export default function Edit( { attributes, setAttributes, clientId } ) {

	const {
		width,
		height,
		startButton,
		blueprint
	} = attributes;


	// Build URL with parameters
	let queryParams = {
		start_button: startButton,
		height: height,
		width: width,
		mode: 'seamless'
	};

	Object.fromEntries(Object.entries(queryParams).filter(x => x[1] !==''));
	const urlParams = new URLSearchParams(queryParams);

	// Add blueprint support
	let cleanedBlueprint = blueprint.replace(/<br\s*\/?>/gi, '\n');
	// Replace nice typography quotes with double quotes.
	cleanedBlueprint = cleanedBlueprint.replace(/&#8220;|&#8221;/g, '"');
	// Remove unneeded newlines etc.
	cleanedBlueprint = cleanedBlueprint.replace(/\s+/g, ' ');
	// Parse as JSON.
	JSON.parse(cleanedBlueprint);
	JSON.stringify(cleanedBlueprint, null, 4);


	const url = `https://playground.wordpress.net/?${urlParams}#${cleanedBlueprint}`;

	return (
		<div { ...useBlockProps() }className="wordress-playground wp-block">
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={ true }>
					<TextControl
						label="Width"
						value={ width }
						onChange={ (val) => setAttributes( {width: val }) }
					/>
					<TextControl
						label="Height"
						value={ height }
						onChange={ (val) => setAttributes( {height: val }) }
					/>
					<ToggleControl
						label="Start button"
						help={startButton ? "Show start button" : "Hide start button"}
						checked={startButton}
						onChange={() => setAttributes({ startButton: startButton === 0 ? 1 : 0 })}
					/>
				</PanelBody>
				<PanelBody title="Options" initialOpen={ true }>
					<TextareaControl
						label="Blueprint"
						value={ blueprint }
						rows="26"
						onChange={ (val) => setAttributes( {blueprint: val }) }
					/>
				</PanelBody>
			</InspectorControls>
			<iframe id={`wp-${clientId}`} src={url} width={width} height={height}></iframe>
		</div>
	);
}
