/**
 *  WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './datastore';
import SettingsSection from './settings-section';

const Category = () => {
	// Get the count from the state.
	const requiredCategory = useSelect((select) =>
		select(STORE_NAME).getCategoryIsRequired()
	);
	const userPreferences = useSelect((select) =>
		select(STORE_NAME).getUserPreferences()
	);

	// Update the state.
	const { setCategoryRequired, setUserPreferences } = useDispatch(STORE_NAME);

	const { showCategory } = userPreferences || {
		showCategory: false,
	};
	return (
		<SettingsSection
			title="Category Options"
			initialOpen={showCategory}
			onToggle={() => {
				setUserPreferences({
					...userPreferences,
					showCategory: !showCategory,
				});
			}}
		>
			<ToggleControl
				label={__('Require Category', 'pre-publish-checklist')}
				checked={requiredCategory}
				onChange={() => {
					setCategoryRequired(!requiredCategory);
				}}
			/>
		</SettingsSection>
	);
};
export default Category;
