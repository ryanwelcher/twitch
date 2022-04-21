/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import SettingsScreen from './components/settings-screen';

// Render the app to the screen.
render(
	<SettingsScreen />,
	document.getElementById('twitch-pre-publish-checklist')
);
