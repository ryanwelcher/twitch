/**
 * WordPress dependencies
 */
import { Button, TabPanel, Panel, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export const CustomButton = () => {
	return (
		<Button
			variant="primary"
			onClick={ () => {
				data.message = "Dev Hours Doesn't Change";
				setData( data );
			} }
		>
			Same Value
		</Button>
	);
};

export const TabsPanelControl = () => {
	const onSelect = ( tabName ) => {
		console.log( 'Selecting tab', tabName );
	};
	return (
		<InspectorControls>
			<Panel>
				<TabPanel
					className="my-tab-panel"
					activeClass="is-active"
					onSelect={ onSelect }
					tabs={ [
						{
							name: 'tab1',
							title: 'Tab 1',
							className: 'tab-one',
						},
						{
							name: 'tab2',
							title: 'Tab 2',
							className: 'tab-two',
						},
					] }
				>
					{ ( tab ) => (
						<PanelBody>
							<p>{ tab.title }</p>
						</PanelBody>
					) }
				</TabPanel>
			</Panel>
		</InspectorControls>
	);
};

export default TabsPanelControl;
