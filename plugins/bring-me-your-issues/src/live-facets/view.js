/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { createRoot, render } from '@wordpress/element';

/**
 *  Internal dependencies
 */
import FrontEnd from './front-end';

domReady( () => {
	// This code runs after the DOM is loaded.
	const container = document.getElementById( 'live-facets' );
	if ( createRoot ) {
		const root = createRoot( container );
		//render app to root
		root.render( <FrontEnd /> );
	} else {
		render( <FrontEnd />, container );
	}
} );
