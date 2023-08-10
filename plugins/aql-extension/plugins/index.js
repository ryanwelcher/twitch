/**
 * WordPress dependencies
 */
import { AQLControls, AQLNotInherited } from '@wordpress/advanced-query-loop';
import { registerPlugin } from '@wordpress/plugins';
import { TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerPlugin( 'aql-extension', {
	render: () => {
		return (
			<>
				<AQLNotInherited>
					{ ( { attributes, setAttributes } ) => {
						const { query: { authorContent = false } = {} } =
							attributes;
						return (
							<>
								<ToggleControl
									label={ __(
										'Show content for logged in user only'
									) }
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
					} }
				</AQLNotInherited>
			</>
		);
	},
} );
