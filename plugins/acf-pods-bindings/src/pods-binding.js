/**
 * WordPress dependencies
 */
import { store as coreDataStore } from '@wordpress/core-data';
import { _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { store as editorStore } from '@wordpress/block-editor';

export default {
	name: 'twitch/pods',
	label: _x( 'PODS', 'twitch' ),
	getPlaceholder( { args } ) {
		return args?.key;
	},
	getValue( { registry, context, args } ) {
		return registry
			.select( coreDataStore )
			.getEditedEntityRecord(
				'postType',
				context?.postType,
				context?.postId
			)?.[ args?.key ];
	},
	setValue( { context, args, value } ) {
		// we need to use the PODS api to set this value.
		window.PodsDFVAPI.setFieldValue( args?.key, value, context?.postType );
	},
	canUserEditValue( { select, context, args } ) {
		const postType =
			context?.postType || select( editorStore ).getCurrentPostType();

		// Check that editing is happening in the post editor and not a template.
		if ( postType === 'wp_template' ) {
			return false;
		}

		// Check that the custom field is not protected and available in the REST API.
		const isFieldExposed = !! select( coreDataStore ).getEntityRecord(
			'postType',
			postType,
			context?.postId
		)?.[ args?.key ];

		if ( ! isFieldExposed ) {
			return false;
		}

		// Check that the user has the capability to edit post meta.
		const canUserEdit = select( coreDataStore ).canUserEditEntityRecord(
			'postType',
			context?.postType,
			context?.postId
		);
		if ( ! canUserEdit ) {
			return false;
		}

		return true;
	},
};
