/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';
import { useEntityProp } from '@wordpress/core-data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes: { metaType, metaKey },
	setAttributes,
	context: { postType, postId, queryId },
}) {
	const [nativeMeta, setNativeMeta] = useEntityProp(
		'postType',
		postType,
		'meta',
		postId
	);
	const [acfMeta] = useEntityProp('postType', postType, 'acf', postId);

	const mapMetaToSelect = (metaObject) => {
		if (!metaObject) {
			return [];
		}
		return Object.entries(metaObject).map(([key]) => {
			return {
				label: key,
				value: key,
			};
		});
	};

	return (
		<div {...useBlockProps()}>
			<p>
				Meta value:{' '}
				{metaType && metaType === 'native'
					? nativeMeta[metaKey]
					: acfMeta[metaKey]}
			</p>
			<InspectorControls>
				<PanelBody title={__('Meta Fields Settings', 'display-meta')}>
					<SelectControl
						label={__('Meta Type')}
						value={metaType}
						options={[
							{ label: 'Native', value: 'native' },
							{ label: 'ACF', value: 'acf' },
						]}
						onChange={(newType) => {
							setAttributes({ metaType: newType });
							setAttributes({ metaKey: '' });
						}}
					/>
					<SelectControl
						label={__('Meta Field', 'display-meta')}
						value={metaKey}
						options={[
							{
								label: 'Please Select',
								value: '',
							},
							...mapMetaToSelect(
								metaType && metaType === 'native'
									? nativeMeta
									: acfMeta
							),
						]}
						onChange={(newKey) => {
							setAttributes({ metaKey: newKey });
						}}
					/>
					{metaType === 'native' && (
						<TextControl
							label={__('Native Meta Value', 'display-meta')}
							value={nativeMeta[metaKey]}
							onChange={(value) => {
								setNativeMeta({
									...nativeMeta,
									[metaKey]: value,
								});
							}}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
