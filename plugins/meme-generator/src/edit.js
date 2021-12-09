/*global fetch,sessionStorage */
/* eslint-disable import/no-extraneous-dependencies */
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	Placeholder,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { useEffect, useState, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { image, topText, bottomText } = attributes;
	const [storedImages, setStoredImages] = useState([]);
	const blockProps = useBlockProps();

	useEffect(() => {
		const loadImages = async () => {
			const sessionImages = sessionStorage.getItem('meme_images');
			if (sessionImages) {
				setStoredImages(JSON.parse(sessionImages));
			} else {
				const { success, data } = await fetch(
					'https://api.imgflip.com/get_memes'
				)
					.then((res) => res.json())
					.catch((error) => console.error('Error:', error));

				if (success) {
					const filteredMemes = data.memes.filter(
						(meme) => meme.box_count === 2
					);
					setStoredImages(filteredMemes);
					sessionStorage.setItem(
						'meme_images',
						JSON.stringify(filteredMemes)
					);
				}
			}
		};
		loadImages();
	}, []);

	// If we don't have an image, show this.
	if (!image) {
		return (
			<section {...blockProps}>
				<Placeholder
					icon="smiley"
					label={__(
						'Choose an image for your meme:',
						'twitch-steams'
					)}
				>
					{storedImages.length < 1 ? (
						<div>Loading...</div>
					) : (
						<div className="image-select-wrapper">
							{storedImages.map((meme) => {
								const { id, url, name } = meme;
								return (
									<button
										className="image-select"
										key={id}
										onClick={() =>
											setAttributes({
												image: meme,
											})
										}
									>
										<img src={url} width="100" alt={name} />
									</button>
								);
							})}
						</div>
					)}
				</Placeholder>
			</section>
		);
	}

	// Show the interface
	return (
		<Fragment>
			<section {...blockProps}>
				<div className="meme-wrapper">
					<RichText
						tagName="div"
						className="text-overlay text-overlay__top"
						value={topText}
						placeholder={__('Setup', 'twitch-streams')}
						onChange={(newTopText) =>
							setAttributes({ topText: newTopText })
						}
						allowedFormats={[]}
					/>
					<RichText
						tagName="div"
						className="text-overlay text-overlay__bottom"
						value={bottomText}
						placeholder={__('Punchline', 'twitch-streams')}
						onChange={(newBottomText) =>
							setAttributes({ bottomText: newBottomText })
						}
						allowedFormats={[]}
					/>
					<img src={image.url} alt={image.name} />
				</div>
			</section>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="remove"
						label={__('Remove Meme Image', 'twitch-streams')}
						onClick={() => setAttributes({ image: false })}
					/>
				</ToolbarGroup>
			</BlockControls>
		</Fragment>
	);
}
