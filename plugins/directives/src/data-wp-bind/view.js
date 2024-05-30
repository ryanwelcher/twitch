import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'data-wp-bind', {
	actions: {
		toggleButton: () => {
			const context = getContext();
			state.disabled = ! state.disabled;
		},
	},
	state: {
		disabled: true,
	},
	callbacks: {},
} );
