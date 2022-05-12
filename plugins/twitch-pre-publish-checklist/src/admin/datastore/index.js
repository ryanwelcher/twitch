/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { createReduxStore, register } from '@wordpress/data';

import {
	DEFAULT_STATE,
	STATE_FROM_DATABASE,
	SET_WORDCOUNT,
	FETCH_SETTINGS,
	SET_FEATURED_IMAGE,
	SET_CATEGORY,
	SET_SETTING,
	SET_USER_PREFERENCES,
	STORE_NAME,
} from './constants';

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
			type: SET_FEATURED_IMAGE,
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
	setSetting(setting, value) {
		return {
			type: SET_SETTING,
			payload: {
				setting,
				value,
			},
		};
	},
	setToggleState(section) {
		return function ({ select, dispatch }) {
			const currentValues = select.getUserPreferences();
			const sectionValue = currentValues[section];
			dispatch.setUserPreferences({
				...currentValues,
				[section]: !sectionValue,
			});
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
		case SET_SETTING:
			const { setting, value } = payload;
			return {
				...state,
				[setting]: value,
			};
		case SET_WORDCOUNT:
			const { wordcount } = payload;
			return {
				...state,
				wordcount,
			};
		case SET_FEATURED_IMAGE:
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
		const { userPreferences, ...settings } = state;
		return settings;
	},
	getUserPreferences(state) {
		return state.userPreferences;
	},
};

const resolvers = {
	getSettings() {
		return async ({ dispatch }) => {
			const settings = await apiFetch({ path: '/wp/v2/settings' });
			dispatch.initSettings(settings['pre-publish-checklist_data']);
		};
	},
	getUserPreferences() {
		return ({ dispatch }) => {
			const userPreferences =
				window.localStorage.getItem(
					'pre-publish-checklist-user-preferences'
				) || DEFAULT_STATE.userPreferences;
			dispatch.setUserPreferences(JSON.parse(userPreferences));
		};
	},
};

// Define and register the store.
const store = createReduxStore(STORE_NAME, {
	reducer,
	actions,
	selectors,
	resolvers,
	// __experimentalUseThunks: true,
});

register(store);
