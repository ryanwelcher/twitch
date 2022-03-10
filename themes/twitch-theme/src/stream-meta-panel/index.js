/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { TextControl, DatePicker } from '@wordpress/components';

const StreamMeta = () => {
	// Get post type.
	const postType = useSelect(
		(select) => select('core/editor').getCurrentPostType(),
		[]
	);

	// Get the value of meta and a function for updating meta from useEntityProp.
	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');

	if (postType !== 'twitch-stream') {
		return null;
	}

	const {
		'stream-date': streamDate = new Date(),
		'stream-duration': streamDuration,
	} = meta;
	console.log(meta);

	return (
		<PluginDocumentSettingPanel
			name="Stream Metadata"
			title="Stream Metadata"
			className="stream-meta"
		>
			<DatePicker
				currentDate={streamDate}
				onChange={(newDate) => {
					setMeta({
						...meta,
						'stream-date': newDate,
					});
				}}
			/>
			<TextControl
				label=" Stream Duration"
				value={streamDuration}
				onChange={(newText) => {
					setMeta({
						...meta,
						'stream-duration': newText,
					});
				}}
			/>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin('twitch-stream-stream-meta', {
	render: StreamMeta,
	icon: 'format-video',
});
