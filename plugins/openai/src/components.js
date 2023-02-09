/**
 * WordPress dependencies
 */
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { convertImageToBlob } from './helpers';

export const ImagePreviews = ( { imageSrcs } ) => {
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
				<Modal title="This is my modal" onRequestClose={ closeModal }>
					<img
						src={ `data:image/png;base64,${ activeImage }` }
						width="height: 100%;"
					/>
					<div style={ { position: 'absolute', bottom: '0px' } }>
						THIS IS AT THE BOTTOM
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
		</div>
	);
};
