/**
 * External dependencies
 */
import { Chart } from 'react-google-charts';

const PollDisplay = ({ title, options }) => (
	<Chart
		height={'300px'}
		chartType="BarChart"
		loader={<div>Loading Chart</div>}
		data={[['Option', 'Votes'], ...options]}
		options={{
			title,
			chartArea: { width: '50%' },
		}}
		chartEvents={[
			{
				eventName: 'select',
				callback: ({ chartWrapper }) => {
					const chart = chartWrapper.getChart();
					const selection = chart.getSelection();
					if (selection.length === 1) {
						const [selectedItem] = selection;
						const dataTable = chartWrapper.getDataTable();
						const { row, column } = selectedItem;
						alert(
							'You selected : ' +
								JSON.stringify({
									row,
									column,
									value: dataTable.getValue(row, column),
								}),
							null,
							2
						);
					}
					console.log(selection);
				},
			},
		]}
		rootProps={{ 'data-testid': '1' }}
	/>
);

export default PollDisplay;
