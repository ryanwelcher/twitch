/**
 * WordPress dependencies
 */
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
/**
 * Internal dependencies
 */
import { uploadImageToMediaLibrary } from './helpers';

export const ImagePreviews = ( { imageSrcs, prompt } ) => {
	const [ isOpen, setOpen ] = useState( false );
	const [ activeImage, setActiveImage ] = useState( 0 );
	const { insertBlocks } = useDispatch( blockEditorStore );
	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );

	if ( ! imageSrcs ) {
		return null;
	}
	return (
		<div className="image-previews">
			{ isOpen && (
				<Modal
					title="This is my modal"
					onRequestClose={ closeModal }
					className="image-modal"
				>
					{
						<img
							src={ `data:image/png;base64,${ activeImage }` }
							width="height: 100%;"
							alt="Generated from openai"
						/>
					}
					<div className="components-modal__footer">
						<div className="components-modal__footer-container">
							<Button
								variant="primary"
								onClick={ () =>
									uploadImageToMediaLibrary(
										activeImage,
										prompt,
										( { id, url } ) => {
											if ( id ) {
												const newBlock = createBlock(
													'core/image',
													{
														id,
														url,
													}
												);
												insertBlocks( newBlock );
												closeModal();
											}
										}
									)
								}
							>
								Upload image
							</Button>
						</div>
					</div>
				</Modal>
			) }
			{ imageSrcs.map( ( { b64_json: b64JSON } ) => {
				return (
					<Button
						key={ b64JSON }
						variant="link"
						className="image-preview"
						onClick={ () => {
							setActiveImage( b64JSON );
							openModal();
						} }
					>
						<img
							src={ `data:image/png;base64,${ b64JSON }` }
							width="100"
							alt="Generated from openai"
						/>
					</Button>
				);
			} ) }
		</div>
	);
};
