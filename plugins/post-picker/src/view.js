import domReady from '@wordpress/dom-ready';
import Glide from '@glidejs/glide';
domReady( function () {
	new Glide( '#slider' ).mount();
} );
