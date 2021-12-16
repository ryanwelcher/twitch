/**
 *  WordPress dependencies
 */
import { Button, Spinner } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { ImageDisplay } from './index';

/**
 *
 * @param  root0
 * @param  root0.setAttributes
 * @return
 */
const CustomImageSelect = ({ setAttributes }) => {
	const { images, isResolving, currentPost } = useSelect((select) => {
		const thePost = select('core/editor').getCurrentPostId();

		return {
			currentPost: thePost,
			images: select('core').getEntityRecords('postType', 'attachment', {
				per_page: 10,
				parent: thePost,
			}),
			isResolving: select('core/data').isResolving(
				'core',
				'getEntityRecords',
				['postType', 'attachment', { per_page: 10, parent: thePost }]
			),
		};
	});

	const { invalidateResolution } = useDispatch('core/data');

	const reQuery = () => {
		invalidateResolution('core', 'getEntityRecords', [
			'postType',
			'attachment',
			{ per_page: 10, parent: currentPost },
		]);
	};

	return (
		<>
			{isResolving ? (
				<Spinner />
			) : (
				<ImageDisplay {...{ setAttributes, images }} />
			)}
			<MediaUploadCheck>
				<MediaUpload
					onSelect={({ id, url, width, height, title: name }) =>
						setAttributes({
							image: {
								id,
								name,
								url,
								width,
								height,
							},
						})
					}
					onClose={() => reQuery()}
					allowedTypes={['image']}
					render={({ open }) => (
						<Button variant="secondary" isPrimary onClick={open}>
							{__('Upload new images', 'twitch-streams')}
						</Button>
					)}
				/>
			</MediaUploadCheck>
		</>
	);
};
export default CustomImageSelect;
