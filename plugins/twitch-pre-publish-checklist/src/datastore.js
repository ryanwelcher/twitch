/**
 * WordPress dependencies
 */

import { createReduxStore, register } from '@wordpress/data';

export const STORE_NAME = 'pre-publish-checklist';

// Default state
export const DEFAULT_STATE = {
	wordcount: 250,
	requiredFeaturedImage: true,
};

// Constants
const SET_WORDCOUNT = 'SET_WORDCOUNT';
const SET_FEATURE_IMAGE = 'SET_FEATURE_IMAGE';
const STATE_FROM_DATABASE = 'STATE_FROM_DATABASE';

// Define our actions
const actions = {
	initSettings(settings) {
		return {
			type: STATE_FROM_DATABASE,
			payload: {
				...settings,
			},
		};
	},
	setWordCount(wordcount) {
		return {
			type: SET_WORDCOUNT,
			payload: {
				wordcount,
			},
		};
	},
	setFeaturedImageIsRequired(requiredFeaturedImage) {
		return {
			type: SET_FEATURE_IMAGE,
			payload: {
				requiredFeaturedImage,
			},
		};
	},
};

// Define the reducer
function reducer(state = DEFAULT_STATE, { type, payload }) {
	switch (type) {
		case STATE_FROM_DATABASE:
			return {
				...payload,
			};
		case SET_WORDCOUNT:
			const { wordcount } = payload;
			return {
				...state,
				wordcount,
			};
		case SET_FEATURE_IMAGE:
			const { requiredFeaturedImage } = payload;
			return {
				...state,
				requiredFeaturedImage,
			};
	}
	return state;
}

// Define some selectors
const selectors = {
	getWordCount(state) {
		return state.wordcount;
	},
	getFeatureImageIsRequired(state) {
		return state.requiredFeaturedImage;
	},
	getSettings(state) {
		return state;
	},
};

// Define and register the store.
const store = createReduxStore(STORE_NAME, {
	reducer,
	actions,
	selectors,
});

register(store);
