/**
 * WordPress dependencies
 */
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { uploadImageToMediaLibrary } from './helpers';
import { testData } from './test';

export const ImagePreviews = ( { imageSrcs, prompt } ) => {
	const [ isOpen, setOpen ] = useState( false );
	const [ activeImage, setActiveImage ] = useState( 0 );
	const { insertBlocks } = useDispatch( blockEditorStore );
	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );

	const createGallery = async ( images ) => {
		// Upload all of the images and get their urls.
		const urls = [];
		const imageBlocks = [];
		await images.forEach( async ( { b64_json: b64JSON } ) => {
			await uploadImageToMediaLibrary( b64JSON, 'test', ( { url } ) => {
				urls.push( url );
			} );
		} );
		imageBlocks.forEach( ( url ) => {
			// if ( ! url.match( /blob:/ ) ) {
			imageBlocks.push( createBlock( 'core/image', { url } ) );
			// }
		} );
		console.log( '1', imageBlocks );
		const newGallery = createBlock( 'core/gallery', {}, imageBlocks );
		insertBlocks( newGallery );
		console.log( '2', newGallery );

		// const newGallery = createBlock( 'core/gallery', {}, [
		// 	createBlock( 'core/image', {
		// 		url: images[ 0 ].b64_json,
		// 	} ),
		// ] );
		// insertBlocks( newGallery );
	};

	if ( ! imageSrcs ) {
		return null;
	}
	return (
		<div className="image-previews">
			<Button
				variant="secondary"
				onClick={ () => {
					createGallery( imageSrcs );
				} }
			>
				{ __( 'Create gallery', 'openai' ) }
			</Button>
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
