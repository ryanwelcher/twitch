/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Panel, PanelBody, PanelRow } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data'; // do I need this?
/**
 * Internal dependencies
 */
import '../datastore/index';
import WordCount from './wordcount';
import FeaturedImage from './featured-image';
import Category from './category';
import { STORE_NAME } from '../datastore/constants';

const SettingsScreen = () => {
	const { saveEntityRecord } = useDispatch('core');

	// Gets all settings from the store.
	const settingsFromState = useSelect((select) =>
		select(STORE_NAME).getSettings()
	);

	// This is bad, we need a better loading process.
	if (!settingsFromState) {
		return 'LOADING';
	}

	return (
		<div className="wrap">
			<Panel header="Twitch Pre-Publish Checklist Settings">
				<WordCount />
				<FeaturedImage />
				<Category />
				<PanelBody>
					<PanelRow>
						<Button
							variant="primary"
							onClick={() => {
								// This actually saves to the database
								saveEntityRecord('root', 'site', {
									'pre-publish-checklist_data':
										settingsFromState,
								});
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
