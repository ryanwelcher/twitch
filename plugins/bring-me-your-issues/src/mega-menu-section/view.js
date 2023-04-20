import domReady from '@wordpress/dom-ready';

domReady( () => {
	const links = document.querySelectorAll(
		'.wp-block-twitch-mega-menu-section a'
	);

	links.forEach( ( link ) => {
		link.addEventListener( 'click', () => {
			link.nextSibling.classList.toggle( 'show' );
		} );
	} );
} );
