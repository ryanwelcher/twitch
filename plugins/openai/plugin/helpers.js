import apiFetch from '@wordpress/api-fetch';
import { uploadMedia } from '@wordpress/media-utils';
import { cleanForSlug } from '@wordpress/url';
import { API_KEY } from './constants';

// Faster way to convert a base64 image to a Blob (up to 5x faster than convertImageToBlobOld).
export const convertImageToBlob = ( base64Image ) => {
	// Your base64 encoded image string
	const base64ImageSrc = `data:image/png;base64,${ base64Image }`;

	// Convert the base64 string to binary data
	const binaryData = atob( base64ImageSrc.split( ',' )[ 1 ] );

	// Create a Uint8Array from the binary data
	const uint8Array = new Uint8Array( binaryData.length );
	for ( let i = 0; i < binaryData.length; i++ ) {
		uint8Array[ i ] = binaryData.charCodeAt( i );
	}

	// Create and return a image Blob
	return new Blob( [ uint8Array ], { type: 'image/png' } );
};

// This has been replaced by convertImageToBlob() as it is significantly faster.
export const convertImageToBlobOld = async ( base64Image ) => {
	const image = new Image();
	image.src = `data:image/png;base64,${ base64Image }`;
	image.crossOrigin = 'anonymous';
	await loadImage( image );

	const canvas = document.createElement( 'canvas' );
	canvas.width = image.width;
	canvas.height = image.height;

	const ctx = canvas.getContext( '2d' );
	if ( ! ctx ) return;
	ctx.drawImage( image, 0, 0 );

	const blob = await new Promise( ( resolve ) => {
		canvas.toBlob( ( blob ) => {
			blob && resolve( blob );
		}, 'image/jpeg' );
	} );
	return blob;
};

// Not currently used, as the core uploadMedia function is used instead of the REST API to add images to the media library.
export const importImage = async ( base64Image, metadata ) => {
	const image = new Image();
	image.src = `data:image/png;base64,${ base64Image }`;
	image.crossOrigin = 'anonymous';
	await loadImage( image );

	const canvas = document.createElement( 'canvas' );
	canvas.width = image.width;
	canvas.height = image.height;

	const ctx = canvas.getContext( '2d' );
	if ( ! ctx ) return;
	ctx.drawImage( image, 0, 0 );

	const blob = await new Promise( ( resolve ) => {
		canvas.toBlob( ( blob ) => {
			blob && resolve( blob );
		}, 'image/jpeg' );
	} );

	const formData = new FormData();
	formData.append( 'file', new File( [ blob ], metadata.filename ) );
	formData.append( 'alt_text', metadata.alt ?? '' );
	formData.append( 'caption', metadata.caption ?? '' );
	formData.append( 'status', 'publish' );

	return await apiFetch( {
		path: 'wp/v2/media',
		method: 'POST',
		body: formData,
	} );
};

const loadImage = ( img ) => {
	return new Promise( ( resolve ) => ( img.onload = resolve ) );
};

export async function makeRequest( {
	prompt = '',
	numberOfImages = 4,
	size = '256x256',
	format = 'b64_json',
} ) {
	const request = await fetch(
		'https://api.openai.com/v1/images/generations',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ API_KEY }`,
			},
			body: JSON.stringify( {
				prompt,
				n: numberOfImages,
				size,
				response_format: format,
			} ),
		}
	);
	const json = await request.json();
	return json.data;
}

export const uploadImageToMediaLibrary = async (
	imageSrc,
	prompt,
	uploadCallback
) => {
	const blob = await convertImageToBlob( imageSrc );
	const status = await uploadMedia( {
		filesList: [ new File( [ blob ], `${ cleanForSlug( prompt ) }.png` ) ],
		onFileChange: ( [ fileObj ] ) => uploadCallback( fileObj ),
		onError: console.error,
	} );
	return status;
};
