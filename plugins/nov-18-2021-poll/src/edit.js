/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	PanelRow,
	TextControl,
} from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';

import PollDisplay from './poll-display';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.attributes.title
 * @param  root0.setAttributes
 * @param  root0.attributes.options
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes: { title, options },
	setAttributes,
}) {
	// Get the value of meta and a function for updating meta from useEntityProp.
	const [meta, setMeta] = useEntityProp('postType', 'post', 'meta');
	const blockProps = useBlockProps();

	const updatePollData = () => {
		setMeta({
			...meta,
			twitch_poll_data: JSON.stringify(options),
		});
	};

	console.log(meta);

	return (
		<div {...blockProps}>
			<PollDisplay title={title} options={options} />
			<InspectorControls>
				<PanelBody title="Options" initialOpen={true}>
					<PanelRow>
						<TextControl
							label="Title"
							value={title}
							onChange={(newTitle) =>
								setAttributes({ title: newTitle })
							}
						/>
					</PanelRow>
					<Button
						isSecondary
						onClick={() => {
							updatePollData();
						}}
					>
						Update Data
					</Button>

					{options.map((item, index) => (
						<PanelRow key={item[0]}>
							<TextControl
								label="Name"
								value={item[0]}
								onChange={(newTextValue) => {
									const updatedOptions = options.map(
										(entry) => {
											if (item[0] === entry[0]) {
												return [newTextValue, entry[1]];
											}
											return entry;
										}
									);
									setAttributes({ options: updatedOptions });
								}}
							/>
						</PanelRow>
					))}
					<Button
						isSecondary
						onClick={() => {
							const updatedOptions = [...options, ['', 0]];
							setAttributes({ options: updatedOptions });
						}}
					>
						Add New Option
					</Button>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
