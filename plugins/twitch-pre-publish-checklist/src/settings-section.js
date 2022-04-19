/**
 *  WordPress dependencies
 */
import { PanelBody, PanelRow } from '@wordpress/components';
const SettingsSection = ({ children, ...props }) => {
	return (
		<PanelBody {...props}>
			<PanelRow>{children}</PanelRow>
		</PanelBody>
	);
};
export default SettingsSection;
