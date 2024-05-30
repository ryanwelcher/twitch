import { store } from '@wordpress/interactivity';

const { state } = store( 'data-wp-text', {
	state: {},
	actions: {
		toggleMessage: () => {
			state.message = 'Button was clicked!';
		},
	},
	callbacks: {},
} );
