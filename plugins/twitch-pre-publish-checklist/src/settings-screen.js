import { TabPanel, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useEntityProp } from '@wordpress/core-data';
import { useDispatch } from '@wordpress/data';

const SettingsScreen = () => {
	const [demoSetting, setDemoSetting] = useEntityProp(
		'root',
		'site',
		'pre-publish-checklist_data'
	);
	const { saveEditedEntityRecord } = useDispatch('core');
	console.log(demoSetting);
	const [activeTab, setActiveTab] = useState('wordcount');

	const onSelect = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<div className="wrap">
			<h1>Twitch Pre-Publish Checklist Settings</h1>
			<TabPanel
				className="my-tab-panel"
				activeClass="active-tab"
				onSelect={onSelect}
				tabs={[
					{
						name: 'wordcount',
						title: 'Word Count',
						className: 'wordcount-tab',
					},
					{
						name: 'tab2',
						title: 'Tab 2',
						className: 'tab-two',
					},
				]}
			>
				{(tab) => <p>{tab.title}</p>}
			</TabPanel>
			<Button
				variant="primary"
				onClick={() => {
					setDemoSetting({
						wordcount: 800,
						requiredFeaturedImage: true,
					});
					// This actually saves...
					saveEditedEntityRecord('root', 'site');
				}}
			>
				SAVE
			</Button>
		</div>
	);
};

export default SettingsScreen;
