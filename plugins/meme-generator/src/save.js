/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param  root0
 * @param  root0.attributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const {
		topText,
		bottomText,
		image: { url: src, name: imageAlt, width, height } = {},
	} = attributes;
	return (
		<section {...useBlockProps.save()}>
			<div className="meme-wrapper">
				<RichText.Content
					value={topText}
					tagName="div"
					className="text-overlay text-overlay__top"
				/>
				<RichText.Content
					value={bottomText}
					tagName="div"
					className="text-overlay text-overlay__bottom"
				/>
				<img src={src} alt={imageAlt} width={width} height={height} />
			</div>
		</section>
	);
}
