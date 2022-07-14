import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

import { useSelect, useDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';

const PluginDocumentSettingPanelDemo = () => {

	const notices = useSelect( select => select( 'core/notices' ).getNotices('context') );


	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title="Custom Panel"
			className="custom-panel"
		>
		<Button onClick={() => alert(notices ) }>Notices!</Button>

		</PluginDocumentSettingPanel>
	)
};

registerPlugin( 'ryan-test' , { render: PluginDocumentSettingPanelDemo });
