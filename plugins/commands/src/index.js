/**
 * WordPress dependencies
 */
import { store as commandsStore } from '@wordpress/commands';
import { replace } from '@wordpress/icons';
import { dispatch, select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import { getPathAndQueryString } from '@wordpress/url';

function submitCustomFieldsForm() {
	const customFieldsForm = document.getElementById(
		'toggle-custom-fields-form'
	);

	// Ensure the referrer values is up to update with any
	customFieldsForm
		.querySelector( '[name="_wp_http_referer"]' )
		.setAttribute( 'value', getPathAndQueryString( window.location.href ) );

	customFieldsForm.submit();
}

dispatch( commandsStore ).registerCommand( {
	name: 'twitch-streams/my-command-name',
	label: __( 'Toggle Custom Fields' ),
	icon: replace,
	callback: ( { close } ) => {
		submitCustomFieldsForm();
		close();
	},
} );
