/**
 * WordPress dependencies
 */
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { uploadImageToMediaLibrary } from './helpers';

export const ImagePreviews = ( { imageSrcs, prompt } ) => {
	const [ isOpen, setOpen ] = useState( false );
	const [ activeImage, setActiveImage ] = useState( 0 );
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
						/>
					}
					{ /* <img
						src="http://twitchstreams.local/wp-content/uploads/2023/02/four-people-holding-hands-in-the-park.jpg"
						width="100%"
					/> */ }
					<div className="components-modal__footer">
						<div className="components-modal__footer-container">
							<Button
								variant="primary"
								onClick={ () =>
									uploadImageToMediaLibrary(
										activeImage,
										prompt
									)
								}
							>
								Upload image
							</Button>
						</div>
					</div>
				</Modal>
			) }
			{ imageSrcs.map( ( imageSrc ) => {
				return (
					<Button
						variant="link"
						className="image-preview"
						onClick={ () => {
							setActiveImage( imageSrc[ 'b64_json' ] );
							openModal();
							// const blob = await convertImageToBlob(
							// 	imageSrc[ 'b64_json' ]
							// );
							// uploadMedia( {
							// 	filesList: [
							// 		new File(
							// 			[ blob ],
							// 			`${ cleanForSlug( prompt ) }.png`
							// 		),
							// 	],
							// 	onFileChange: ( [ fileObj ] ) =>
							// 		console.log( fileObj.url ),
							// 	onError: console.error,
							// } );
						} }
					>
						<img
							src={ `data:image/png;base64,${ imageSrc[ 'b64_json' ] }` }
							width="100"
						/>
					</Button>
				);
			} ) }
			{ /* <Button onClick={ () => openModal() }>
				<img
					src="http://twitchstreams.local/wp-content/uploads/2023/02/four-people-holding-hands-in-the-park.jpg"
					width="100"
				/>
			</Button> */ }
		</div>
	);
};
