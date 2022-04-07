/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Panel, PanelBody, PanelRow } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './datastore';
import WordCount from './wordcount';
import FeaturedImage from './featured-image';
import { STORE_NAME } from './datastore';

const SettingsScreen = () => {
	// Retrieve the settings object.
	const [settings, setSettings] = useEntityProp(
		'root',
		'site',
		'pre-publish-checklist_data'
	);

	// Dispatch actions.
	const { initSettings } = useDispatch(STORE_NAME);
	const { saveEditedEntityRecord } = useDispatch('core');

	// Gets all settings from the store.
	const settingsFromState = useSelect((select) =>
		select(STORE_NAME).getSettings()
	);

	// Hydrate the state from the database once. IS this wrong?
	useEffect(() => {
		if (settings) {
			initSettings(settings);
		}
	}, [settings]);

	// This is bad, we need a better loading process.
	if (!settings) {
		return 'LOADING';
	}
	return (
		<div className="wrap">
			<Panel header="Twitch Pre-Publish Checklist Settings">
				<WordCount />
				<FeaturedImage />
				<PanelBody>
					<PanelRow>
						<Button
							variant="primary"
							onClick={() => {
								// This tells GB that option has been changed.
								setSettings(settingsFromState);
								// This actually saves to the database
								saveEditedEntityRecord('root', 'site');
							}}
						>
							{__('SAVE', 'pre-publish-checklist')}
						</Button>
					</PanelRow>
				</PanelBody>
			</Panel>
		</div>
	);
};

export default SettingsScreen;
