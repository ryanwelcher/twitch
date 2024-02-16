import { useBlockProps, RichText } from '@wordpress/block-editor';

const v1 = {
	save() {
		return <p>{ 'Deprecations – hello from the saved content!' }</p>;
	},
};

const v2 = {
	save() {
		return (
			<div>
				<h2>{ 'Deprecations – hello from the saved content!' }</h2>
				<span>{ 'This is a span element.' }</span>
			</div>
		);
	},
};
const v3 = {
	save: () => <h1>Deprecations – hello from the saved content!!!!!</h1>,
};

const v4 = {
	attributes: {
		message: {
			type: 'string',
			default: 'Hello, deprecations',
		},
	},
	save( { attributes: { message } } ) {
		return (
			<RichText.Content { ...useBlockProps.save() } value={ message } />
		);
	},
};

export default [ v1, v2, v3 ];
