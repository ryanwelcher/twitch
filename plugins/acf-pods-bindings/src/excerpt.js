/**
 * Internal dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
let settings;
export default {
	label: __( 'Excerpt' ),
	name: 'twitch/excerpt',
	getValues( { select, context, bindings } ) {
		if ( settings === undefined ) {
			apiFetch( { path: '/wp/v2/settings' } ).then( ( res ) => {
				console.log( 'calling' );
				settings = res;
			} );
		}

		return {
			content: settings?.description,
		};
		// return {
		// 	content:
		// 		select( 'core/editor' ).getEditedPostAttribute( 'excerpt' ),
		// };
	},

	setValues( { select, dispatch, context, bindings } ) {
		// dispatch( 'core/editor' ).editPost( {
		// 	excerpt: bindings?.content?.newValue,
		// } );
	},

	canUserEditValue( { select, context } ) {
		return true;
	},
};
