/**
 * WordPress dependencies
 */

import { createReduxStore, register } from '@wordpress/data';

export const STORE_NAME = 'pre-publish-checklist';

// Default state
export const DEFAULT_STATE = {
	wordcount: 250,
	requiredFeaturedImage: true,
	requiredCategory: true,
	userPreferences: {
		showWordCount: false,
		showFeaturedImage: true,
	},
};

// Constants
const SET_WORDCOUNT = 'SET_WORDCOUNT';
const SET_FEATURE_IMAGE = 'SET_FEATURE_IMAGE';
const SET_CATEGORY = 'SET_CATEGORY';
const STATE_FROM_DATABASE = 'STATE_FROM_DATABASE';
const FETCH_SETTINGS = 'FETCH_SETTINGS';
const SET_USER_PREFERENCES = 'SET_USER_PREFERENCES';

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
	fetchSettings() {
		return {
			type: FETCH_SETTINGS,
			payload: {},
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
	setCategoryRequired(requiredCategory) {
		return {
			type: SET_CATEGORY,
			payload: { requiredCategory },
		};
	},
	setUserPreferences(userPreferences) {
		return {
			type: SET_USER_PREFERENCES,
			payload: {
				userPreferences,
			},
		};
	},
};

// Define the reducer
function reducer(state = DEFAULT_STATE, { type, payload }) {
	switch (type) {
		case STATE_FROM_DATABASE:
			return {
				...state,
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
		case SET_CATEGORY:
			const { requiredCategory } = payload;
			return {
				...state,
				requiredCategory,
			};
		case SET_USER_PREFERENCES:
			const { userPreferences } = payload;
			if (userPreferences) {
				window.localStorage.setItem(
					'pre-publish-checklist-user-preferences',
					JSON.stringify(userPreferences)
				);
			}
			return {
				...state,
				userPreferences,
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
	getCategoryIsRequired(state) {
		return state.requiredCategory;
	},
	getSettings(state) {
		return state;
	},
	getUserPreferences(state) {
		return state.userPreferences;
	},
};

const resolvers = {
	*getUserPreferences() {
		const userPreferences =
			window.localStorage.getItem(
				'pre-publish-checklist-user-preferences'
			) || DEFAULT_STATE.userPreferences;
		return actions.setUserPreferences(JSON.parse(userPreferences));
	},
};

// Define and register the store.
const store = createReduxStore(STORE_NAME, {
	reducer,
	actions,
	selectors,
	resolvers,
});

register(store);
