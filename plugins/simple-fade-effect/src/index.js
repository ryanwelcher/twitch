/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';

/**
 * Internal dependencies
 */
import './index.scss';

domReady( function () {
	const els = document.querySelectorAll( '.fader' );

	const observerOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
	};

	function observerCallback( entries ) {
		entries.forEach( ( entry ) => {
			if ( entry.isIntersecting ) {
				entry.target.classList.add( 'loaded' );
			}
		} );
	}

	const observer = new IntersectionObserver(
		observerCallback,
		observerOptions
	);

	els.forEach( ( el ) => observer.observe( el ) );
} );
