/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { omit } from 'lodash';

const v5 = {
	attributes: {
		message: {
			type: 'string',
			default: 'Default message',
		},
		content: {
			type: 'string',
		},
	},
	save({ attributes: { message, content } }) {
		return (
			<div {...useBlockProps.save()}>
				<RichText.Content tagName="h2" value={message} />
				<RichText.Content tagName="p" value={content} />
			</div>
		);
	},
};

const v4 = {
	attributes: {
		message: {
			type: 'string',
			default: 'Default message',
		},
		content: {
			type: 'string',
		},
	},
	migrate(attributes) {
		const { message } = attributes;
		return {
			...omit(attributes, ['message']),
			title: message,
		};
	},
	save({ attributes: { message, content } }) {
		<div {...useBlockProps.save()}>
			<RichText.Content tagName="h2" value={message} />
			<RichText.Content tagName="p" value={content} />
		</div>;
	},
};

const v3 = {
	save({ attributes: { message } }) {
		<RichText.Content
			{...useBlockProps.save()}
			tagName="h2"
			value={message}
		/>;
	},
};

const v2 = {
	attributes: {
		message: {
			type: 'string',
			default: 'Default message',
		},
	},
	save() {
		return (
			<h2 {...useBlockProps.save()}>
				{__(
					'Block Deprecations – hello from the saved content!',
					'block-deprecations'
				)}
			</h2>
		);
	},
};

const v1 = {
	save() {
		return (
			<p {...useBlockProps.save()}>
				{__(
					'Block Deprecations – hello from the saved content!',
					'block-deprecations'
				)}
			</p>
		);
	},
};

export default [v5, v4, v3, v2, v1];
