/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useEntityProp } from '@wordpress/core-data';
import { TextControl, DatePicker } from '@wordpress/components';

const StreamMeta = () => {
	// Get the value of meta and a function for updating meta from useEntityProp.
	const [meta, setMeta] = useEntityProp('postType', 'twitch-stream', 'meta');

	const { 'stream-date': streamDate, 'stream-duration': streamDuration } =
		meta;

	return (
		<PluginDocumentSettingPanel
			name={__('Stream Metadata', 'stream-post-types')}
			title={__('Stream Metadata', 'stream-post-types')}
			className="stream-meta"
		>
			<h3>{__('Stream Date', 'stream-post-types')}</h3>
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
				label={__('Stream Duration', 'stream-post-types')}
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
