/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Button, Placeholder, TextControl } from '@wordpress/components';
import { uploadMedia } from '@wordpress/media-utils';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';
import { convertImageToBlob, makeRequest } from './helpers';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const [ imageSrcs, setImageSrcs ] = useState( [] );
	const [ prompt, setPrompt ] = useState();

	return (
		<div { ...useBlockProps() }>
			{ imageSrcs.map( ( imageSrc ) => (
				<img
					src={ `data:image/png;base64,${ imageSrc[ 'b64_json' ] }` }
					width="100"
				/>
			) ) }
			<Placeholder label={ __( 'Generate an image' ) }>
				<TextControl
					value={ prompt }
					onChange={ ( newPrompt ) => setPrompt( newPrompt ) }
				/>
				<Button
					variant="secondary"
					b
					onClick={ async () => {
						if ( prompt ) {
							const imageRequest = await makeRequest( prompt );
							setImageSrcs( imageRequest );
							console.log( imageRequest );
							// setImageSrc(
							// 	`data:image/png;base64,${ imageRequest[ 0 ][ 'b64_json' ] }`
							// );
						}
						return;

						// const image = await importImage( imageRequest, {
						// 	filename: 'fish.png',
						// 	alt: 'I am fish with a hat',
						// 	caption: 'I am fish with a hat',
						// } );
						// setImageSrc( image.source_url );

						const testBlob = await convertImageToBlob(
							imageRequest
						);

						uploadMedia( {
							filesList: [
								new File(
									[ testBlob ],
									'yet-another-fish.png'
								),
							],
							onFileChange: ( [ fileObj ] ) =>
								alert( fileObj.url ),
							onError: console.error,
						} );
					} }
				>
					{ __( 'Generate images' ) }
				</Button>
			</Placeholder>
		</div>
	);
}
