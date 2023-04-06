
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * Edit function
 */
export default function Edit() {
	const [ retrievedData, setRetrievedData ] = useState();
	const [ isLoading, setIsLoading ] = useState( true );

	useEffect( () => {
		const hitApi = async () => {
			const { success, data } = await fetch(
				'https://api.imgflip.com/get_memes'
			)
				.then( ( res ) => res.json() )
				.catch( ( error ) => console.error( 'Error:', error ) );
			if ( success ) {
				console.log( data );
				setRetrievedData( data.memes );
				setIsLoading( false );
			}
		};

		hitApi();
	}, [] );


	return (
		<p { ...useBlockProps() }>
			{ ! isLoading
				? `Loaded ${ retrievedData.length } items`
				: 'Loading...' }
		</p>
	);
}
