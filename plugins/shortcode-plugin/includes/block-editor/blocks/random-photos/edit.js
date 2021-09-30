/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { Fragment } from '@wordpress/element';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
	const { title, photos } = attributes;
	const blockProps = useBlockProps({ className: 'twitch-example-shortcode' });

	const renderPhotos = (count) => {
		const photosArray = [];
		for (let i = 0; i < count; i++) {
			photosArray.push(
				<div className="twitch-example-shortcode-day">
					<img
						src={`https://picsum.photos/150?random=${i}`}
						width="150"
						loading="lazy"
						alt=""
					/>
				</div>
			);
		}
		return photosArray;
	};
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label="Photos"
						value={photos}
						onChange={(newCount) =>
							setAttributes({ photos: newCount })
						}
						min={3}
						max={12}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps}>
				<RichText
					tagName="h3"
					value={title}
					allowedFormats={[]}
					onChange={(newTitle) => setAttributes({ title: newTitle })}
				/>
				<div className="twitch-example-shortcode-days">
					{renderPhotos(photos)}
				</div>
			</section>
		</Fragment>
	);
};

export default Edit;
