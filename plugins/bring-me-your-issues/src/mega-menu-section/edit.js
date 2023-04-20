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
	useInnerBlocksProps,
	RichText,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/navigation-link',
	'core/search',
	'core/social-links',
	'core/page-list',
	'core/spacer',
	'core/home-link',
	'core/site-title',
	'core/site-logo',
	'core/navigation-submenu',
];

export default function Edit( { attributes: { title }, setAttributes } ) {
	return (
		<li { ...useBlockProps( { className: 'menu-item' } ) }>
			<RichText
				placeholder={ __( 'Add title…', 'bring-me-your-issues' ) }
				tagName="a"
				value={ title }
				onChange={ ( newText ) => setAttributes( { title: newText } ) }
				disableLineBreaks={ true }
			/>
			<ul
				{ ...useInnerBlocksProps(
					{ className: 'submenu' },
					{ allowedBlocks: ALLOWED_BLOCKS }
				) }
			></ul>
		</li>
	);
}
``;
