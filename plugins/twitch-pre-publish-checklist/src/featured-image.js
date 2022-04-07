/**
 *  WordPress dependencies
 */
import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';

import { STORE_NAME } from './datastore';

const FeaturedImage = () => {
	// Get the count from the state.
	const imageRequired = useSelect((select) =>
		select(STORE_NAME).getFeatureImageIsRequired()
	);

	// Update the state.
	const { setFeaturedImageIsRequired } = useDispatch(STORE_NAME);
	return (
		<PanelBody
			title="Featured Image Options"
			initialOpen={true}
			onToggle={(status) => console.log(status)}
		>
			<PanelRow>
				<ToggleControl
					label={__(
						'Require Featured Image',
						'pre-publish-checklist'
					)}
					checked={imageRequired}
					onChange={() => {
						setFeaturedImageIsRequired(!imageRequired);
					}}
				/>
			</PanelRow>
		</PanelBody>
	);
};
export default FeaturedImage;
