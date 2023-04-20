/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

export default function save( { attributes: { title } } ) {
	return (
		<li { ...useBlockProps.save() }>
			<RichText.Content tagName="a" value={ title } />
			<ul
				{ ...useInnerBlocksProps.save( { className: 'submenu' } ) }
			></ul>
		</li>
	);
}
