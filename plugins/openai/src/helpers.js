import apiFetch from '@wordpress/api-fetch';
import { API_KEY } from './constants';

export const convertImageToBlob = async ( base64Image ) => {
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
