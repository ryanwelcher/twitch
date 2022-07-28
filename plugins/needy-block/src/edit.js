/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	InspectorControls,
	store as blockStore,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { useState } from "@wordpress/element";

import "./editor.scss";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const [selectedBlock, setSelectedBlock] = useState();

	const { blocks, attributes } = useSelect(
		(select) => {
			const blocks = select(blockStore)
				.getBlocks()
				.filter((block) => {
					console.log(block);
					return block.name === "core/embed";
				});
			return {
				blocks,
				attributes:
					blocks && select(blockStore).getBlockAttributes(selectedBlock),
			};
		},
		[selectedBlock]
	);

	return (
		<>
			<div {...useBlockProps()}>
				{attributes && (
					<ul>
						{Object.entries(attributes).map(
							([attributeName, attributeValue]) => (
								<li
									key={attributeName}
								>{`${attributeName} : ${attributeValue}`}</li>
							)
						)}
					</ul>
				)}
			</div>
			<InspectorControls>
				<PanelBody
					title="Panel Title"
					opened
					className="panel-body-class"
					icon="smiley"
					initialOpen
				>
					<SelectControl
						label={__("Select some users:")}
						value={selectedBlock}
						onChange={(clientId) => {
							setSelectedBlock(clientId);
						}}
						options={blocks.map((block) => {
							return { value: block.clientId, label: block.name };
						})}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
