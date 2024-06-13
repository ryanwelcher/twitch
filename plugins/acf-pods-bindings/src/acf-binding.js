/**
 * WordPress dependencies
 */
import { store as coreDataStore } from '@wordpress/core-data';
import { _x } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { debounce } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { store as editorStore } from '@wordpress/block-editor';

export default {
	name: 'twitch/acf',
	label: _x( 'ACF', 'twitch' ),
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
			).acf?.[ args?.key ];
	},
	setValue( { registry, context, args, value } ) {
		const { postId, postType } = context;

		registry.dispatch( 'acf' ).updateField( postId, args.key, value );

		const { acf } = registry
			.select( coreDataStore )
			.getEntityRecord( 'postType', postType, postId );

		const debounced = debounce( () => {
			apiFetch( {
				path: `/wp/v2/posts/${ postId }`,
				method: 'POST',
				data: {
					acf: {
						[ args.key ]: value,
					},
				},
			} ).then( ( res ) => console.log( res ) );
		}, 1000 );
		debounced();
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
		)?.acf?.[ args.key ];

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
