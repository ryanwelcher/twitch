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
import { useBlockProps } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';

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
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	// Get the value of meta and a function for updating meta from useEntityProp.
	const [meta] = useEntityProp('postType', 'twitch-stream', 'meta');

	const { 'stream-date': streamDate, 'stream-duration': streamDuration } =
		meta;

	const displayDate = new Date(streamDate);
	return (
		<ul {...useBlockProps()}>
			{streamDate && (
				<li>
					{__('Stream Date: ', 'stream-post-types')}
					{new Intl.DateTimeFormat('en-US', {
						dateStyle: 'long',
					}).format(displayDate)}
				</li>
			)}
			{streamDuration && (
				<li>
					{__('Duration: ', 'stream-post-types')}
					{streamDuration}
				</li>
			)}
		</ul>
	);
}
