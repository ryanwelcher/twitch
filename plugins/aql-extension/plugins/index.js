/**
 * WordPress dependencies
 */
const { AQLControls, AQLControlsInheritedQuery } = window.aql;
import { registerPlugin } from '@wordpress/plugins';
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const LoggedInUserControl = ( { attributes, setAttributes } ) => {
	const { query: { authorContent = false } = {} } = attributes;
	return (
		<>
			<ToggleControl
				label={ __( 'Show content for logged in user only' ) }
				checked={ authorContent === true }
				onChange={ () => {
					setAttributes( {
						query: {
							...attributes.query,
							authorContent: ! authorContent,
						},
					} );
				} }
			/>
		</>
	);
};

registerPlugin( 'aql-extension', {
	render: () => {
		return (
			<>
				<AQLControls>
					{ ( props ) => <LoggedInUserControl { ...props } /> }
				</AQLControls>
				<AQLControlsInheritedQuery>
					{ ( props ) => <LoggedInUserControl { ...props } /> }
				</AQLControlsInheritedQuery>
			</>
		);
	},
} );
