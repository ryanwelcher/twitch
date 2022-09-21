/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType, createBlock } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("create-block/no-plugin-demo", {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	deprecated: [
		{
			save() {
				return (
					<p {...useBlockProps.save()}>
						{__(
							"No Plugin Demo – hello from the saved content!",
							"no-plugin-demo"
						)}
					</p>
				);
			},
		},
		{
			save() {
				return (
					<p {...useBlockProps.save()} className="test another-test">
						{__(
							"No Plugin Demo – hello from the saved content!",
							"no-plugin-demo"
						)}
					</p>
				);
			},
		},
	],
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				transform: () => {
					return createBlock("create-block/no-plugin-demo");
				},
			},
		],
		to: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				transform: () => {
					return createBlock("core/paragraph");
				},
			},
		],
	},
});
