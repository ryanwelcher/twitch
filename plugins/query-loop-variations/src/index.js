import { registerBlockVariation } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
const MY_VARIATION_NAME = 'plugin-query-loop-variation';

registerBlockVariation('core/query', {
	name: MY_VARIATION_NAME,
	title: 'PLUGIN: Query Twitch Streams',
	description: 'Displays a list of my streams - from a plugin',
	isActive: ['namespace'],
	attributes: {
		namespace: MY_VARIATION_NAME,
		query: {
			postType: 'twitch-stream',
			perPage: 5,
			offset: 0,
		},
	},
	allowedControls: [],
	innerBlocks: [
		[
			'core/post-template',
			{},
			[['core/post-title'], ['core/post-excerpt']],
		],
		['core/query-pagination'],
		['core/query-no-results'],
	],
});

const isMySteamsVariation = (props) => {
	const {
		attributes: { namespace },
	} = props;
	return namespace && namespace === MY_VARIATION_NAME;
};

const DurationSelector = ({ props }) => {
	const [duration, setDuration] = useState();

	return (
		<PanelBody title="Duration">
			<TextControl
				label=" Stream Duration"
				value={duration}
				onChange={(newText) => {
					setDuration(newText);
					props.setAttributes({
						query: {
							...props.attributes.query,
							'stream-duration': newText,
						},
					});
				}}
			/>
		</PanelBody>
	);
};

export const withDurationControls = (BlockEdit) => (props) => {
	// We only want to add these controls if it is our variation,
	// so here we can implement a custom logic to check for that, similar
	// to the `isActive` function described above.
	// The following assumes that you wrote a custom `isMySteamsVariation`
	// function to handle that.

	return isMySteamsVariation(props) ? (
		<>
			<BlockEdit {...props} />
			<InspectorControls>
				<DurationSelector props={props} />
				{/** Our custom component */}
			</InspectorControls>
		</>
	) : (
		<BlockEdit {...props} />
	);
};

addFilter('editor.BlockEdit', 'core/query', withDurationControls);
