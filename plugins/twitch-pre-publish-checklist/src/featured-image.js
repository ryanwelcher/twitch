/**
 *  WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';

import { STORE_NAME } from './datastore';
import SettingsSection from './settings-section';

const FeaturedImage = () => {
	// Get the count from the state.
	const imageRequired = useSelect((select) =>
		select(STORE_NAME).getFeatureImageIsRequired()
	);
	const userPreferences = useSelect((select) =>
		select(STORE_NAME).getUserPreferences()
	);

	// Update the state.
	const { setFeaturedImageIsRequired, setUserPreferences } =
		useDispatch(STORE_NAME);

	const { showFeaturedImage } = userPreferences || {
		showFeaturedImage: false,
	};
	return (
		<SettingsSection
			title="Featured Image Options"
			initialOpen={showFeaturedImage}
			onToggle={() => {
				setUserPreferences({
					...userPreferences,
					showFeaturedImage: !showFeaturedImage,
				});
			}}
		>
			<ToggleControl
				label={__('Require Featured Image', 'pre-publish-checklist')}
				checked={imageRequired}
				onChange={() => {
					setFeaturedImageIsRequired(!imageRequired);
				}}
			/>
		</SettingsSection>
	);
};
export default FeaturedImage;
