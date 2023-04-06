/**
 * External dependencies
 */
import useSWR from 'swr';

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
	const fetcher = ( ...args ) =>
		fetch( ...args ).then( ( res ) => res.json() );
	const { data, error, isLoading } = useSWR(
		'https://api.imgflip.com/get_memes',
		fetcher
	);
	const retrievedData = data?.data?.memes;

	return (
		<p { ...useBlockProps() }>
			{ ! isLoading
				? `Loaded ${ retrievedData.length } items`
				: 'Loading...' }
		</p>
	);
}
