/**
 * External dependencies
 */
import htm from 'htm';
// Bind the `html` function to the `React.createElement` function.
const html = htm.bind(React.createElement);

/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;
const { __ } = wp.i18n;

const Edit = ({ attributes: { message = 'Default value' }, setAttributes }) => {
	return html`
		<${RichText}
			...${useBlockProps()}
			value="${message}"
			tagName="p"
			onChange="${(message) => setAttributes({ message })}"
		/>
	`;
};

export default Edit;
