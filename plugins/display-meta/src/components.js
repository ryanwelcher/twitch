/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

export const MetaInterfaceType = ({
	metaKey,
	metaType,
	nativeMeta,
	acfMeta,
	acfTypes,
	onChange,
}) => {
	if (metaType === 'native') {
		return (
			<h1>
				This is dumb!
				{metaType && metaType === 'native'
					? nativeMeta[metaKey]
					: acfMeta[metaKey]}
			</h1>
		);
	} else {
		return (
			<RichText
				value={
					metaType && metaType === 'native'
						? nativeMeta[metaKey]
						: acfMeta[metaKey]
				}
				onChange={onChange}
			/>
		);
	}
};
