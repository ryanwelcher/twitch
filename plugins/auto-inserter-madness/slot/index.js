import { store as blockEditorStore } from "@wordpress/block-editor";
import { createBlock, serialize } from "@wordpress/blocks";
import { Button } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { useEffect, useRef } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { registerPlugin } from "@wordpress/plugins";
import { count } from "@wordpress/wordcount";

// Block info.
import metadata from "../blocks/ad-block/block.json";

const AutoInserterInterface = () => {
	const blockInterval = 3;
	const blockCount = useRef(null);
	const blocks = useSelect((select) =>
		select(blockEditorStore)
			.getBlocks()
			.filter(({ name }) => name == "core/paragraph")
	);
	const { insertBlock } = useDispatch(blockEditorStore);

	useEffect(() => {
		const currentWordCount = count(serialize(blocks), "words");
		if (currentWordCount === 300) {
			insertBlock(createBlock(metadata.name));
		}
		// if (blockCount.current && blocks.length % blockInterval === 0) {
		// 	insertBlock(createBlock(metadata.name));
		// }
		// blockCount.current = blocks.length;
	}, [blocks]);

	return (
		<PluginDocumentSettingPanel title={__("Auto Inserter Settings")}>
			Custom Panel Contents
			<Button onClick={() => insertBlock(createBlock(metadata.name))}>
				Insert Block
			</Button>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin("twitchstreams-auto-inserter", {
	render: AutoInserterInterface,
});
