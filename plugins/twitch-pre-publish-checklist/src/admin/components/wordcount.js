/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';

import { STORE_NAME } from '../datastore/constants';
import SettingsSection from './settings-section';

const WordCount = () => {
	// Get the count from the state.
	const wordcount = useSelect((select) => select(STORE_NAME).getWordCount());
	const userPreferences = useSelect((select) =>
		select(STORE_NAME).getUserPreferences()
	);

	// Update the state.
	const { setWordCount, setToggleState, setSetting } =
		useDispatch(STORE_NAME);
	const { showWordCount } = userPreferences || {
		showWordCount: false,
	};

	return (
		<SettingsSection
			title="Word Count Options"
			initialOpen={showWordCount}
			onToggle={() => {
				setToggleState('showWordCount', !showWordCount);
			}}
		>
			<TextControl
				label={__('Minimum Word Count', 'pre-publish-checklist')}
				value={wordcount}
				// onChange={(value) => setWordCount(value)}
				onChange={(value) => setSetting('wordcount', value)}
			/>
		</SettingsSection>
	);
};
export default WordCount;
