/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { useEntityProp } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	// Get post type.
	const postType = useSelect(
		(select) => select("core/editor").getCurrentPostType(),
		[]
	);

	// Get the value of meta and a function for updating meta from useEntityProp.
	const [meta, setMeta] = useEntityProp("postType", postType, "meta");

	if (!meta) {
		return (
			<>
				<p>Date: Date Appear here</p>
				<p>Duration: Appears here</p>
			</>
		);
	}

	const {
		"stream-date": streamDate = new Date(),
		"stream-duration": streamDuration,
	} = meta;

	return (
		<p {...useBlockProps()}>
			<RichText
				tagName="p"
				value={streamDate}
				onChange={(newDate) =>
					setMeta({
						...meta,
						"stream-date": newDate,
					})
				}
			/>
			<RichText
				tagName="p"
				value={streamDuration}
				onChange={(newText) =>
					setMeta({
						...meta,
						"stream-duration": newText,
					})
				}
			/>
		</p>
	);
}
