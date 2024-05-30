import { store } from '@wordpress/interactivity';

const { state } = store( 'data-wp-on', {
	state: {
		placeholder: 'Select me!',
		message: '',
		get messageToDisplay() {
			return state.message.toUpperCase();
		},
	},
	actions: {
		showBlurStatus: () => {
			state.placeholder = 'Select me!';
		},
		showClickedStatus: () => {
			state.placeholder = 'Start typing...';
		},
		updateMessage: ( event ) => {
			state.message = event.currentTarget.value;
		},
	},
	callbacks: {},
} );
