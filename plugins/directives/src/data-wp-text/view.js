import { store } from '@wordpress/interactivity';

const { state } = store( 'data-wp-text', {
	state: {},
	actions: {
		toggleMessage: () => {
			state.message = 'When state.message changes, the text updates.';
		},
	},
	callbacks: {},
} );
