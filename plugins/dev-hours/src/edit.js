/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';
import { TabsPanelControl } from './components';

export default function Edit( {
	attributes: { message, list },
	setAttributes,
} ) {
	const [ counter, setCounter ] = useState( 0 );

	useEffect( () => {
		console.log( 'run' );

		return () => alert( 'cleanup' );
	}, [ message ] );

	return (
		<>
			<div { ...useBlockProps() }>Message will display here</div>
			<Button
				variant="secondary"
				onClick={ () => {
					const newCounter = counter + 1;
					setCounter( newCounter );
				} }
			>
				Click me!
			</Button>
		</>
	);
}
