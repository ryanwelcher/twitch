/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEntityRecord } from '@wordpress/core-data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit( { attributes: { id, postType } } ) {
	console.log( id, postType );
	const { record, isResolving } = useEntityRecord( 'postType', postType, id );

	return (
		<p { ...useBlockProps() }>
			{ isResolving ? 'Loading' : record?.title?.rendered }
		</p>
	);
}
