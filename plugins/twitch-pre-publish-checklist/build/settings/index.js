/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/category.js":
/*!******************************************!*\
  !*** ./src/admin/components/category.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/admin/datastore/constants.js");
/* harmony import */ var _settings_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-section */ "./src/admin/components/settings-section.js");

/**
 *  WordPress dependencies
 */




/**
 * Internal dependencies
 */


const Category = () => {
  // Get the count from the state.
  const requiredCategory = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getCategoryIsRequired());
  const userPreferences = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getUserPreferences());

  // Update the state.
  const {
    setCategoryRequired,
    setUserPreferences
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const {
    showCategory
  } = userPreferences || {
    showCategory: false
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Category Options",
    initialOpen: showCategory,
    onToggle: () => {
      setUserPreferences({
        ...userPreferences,
        showCategory: !showCategory
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Require Category', 'pre-publish-checklist'),
    checked: requiredCategory,
    onChange: () => {
      setCategoryRequired(!requiredCategory);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);

/***/ }),

/***/ "./src/admin/components/featured-image.js":
/*!************************************************!*\
  !*** ./src/admin/components/featured-image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/admin/datastore/constants.js");
/* harmony import */ var _settings_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-section */ "./src/admin/components/settings-section.js");

/**
 *  WordPress dependencies
 */





const FeaturedImage = () => {
  // Get the count from the state.
  const imageRequired = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getFeatureImageIsRequired());
  const userPreferences = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getUserPreferences());

  // Update the state.
  const {
    setFeaturedImageIsRequired,
    setUserPreferences
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const {
    showFeaturedImage
  } = userPreferences || {
    showFeaturedImage: false
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Featured Image Options",
    initialOpen: showFeaturedImage,
    onToggle: () => {
      setUserPreferences({
        ...userPreferences,
        showFeaturedImage: !showFeaturedImage
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Require Featured Image', 'pre-publish-checklist'),
    checked: imageRequired,
    onChange: () => {
      setFeaturedImageIsRequired(!imageRequired);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedImage);

/***/ }),

/***/ "./src/admin/components/settings-screen.js":
/*!*************************************************!*\
  !*** ./src/admin/components/settings-screen.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _datastore_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datastore/index */ "./src/admin/datastore/index.js");
/* harmony import */ var _wordcount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wordcount */ "./src/admin/components/wordcount.js");
/* harmony import */ var _featured_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./featured-image */ "./src/admin/components/featured-image.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category */ "./src/admin/components/category.js");
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../datastore/constants */ "./src/admin/datastore/constants.js");

/**
 * WordPress dependencies
 */



 // do I need this?
/**
 * Internal dependencies
 */





const SettingsScreen = () => {
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core');

  // Gets all settings from the store.
  const settingsFromState = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_9__.STORE_NAME).getSettings());

  // This is bad, we need a better loading process.
  if (!settingsFromState) {
    return 'LOADING';
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, {
    header: "Twitch Pre-Publish Checklist Settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordcount__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_featured_image__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_category__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: () => {
      // This actually saves to the database
      saveEntityRecord('root', 'site', {
        'pre-publish-checklist_data': settingsFromState
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('SAVE', 'pre-publish-checklist'))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsScreen);

/***/ }),

/***/ "./src/admin/components/settings-section.js":
/*!**************************************************!*\
  !*** ./src/admin/components/settings-section.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 *  WordPress dependencies
 */

const SettingsSection = ({
  children,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsSection);

/***/ }),

/***/ "./src/admin/components/wordcount.js":
/*!*******************************************!*\
  !*** ./src/admin/components/wordcount.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/admin/datastore/constants.js");
/* harmony import */ var _settings_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-section */ "./src/admin/components/settings-section.js");

/**
 * WordPress dependencies
 */





const WordCount = () => {
  // Get the count from the state.
  const wordcount = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getWordCount());
  const userPreferences = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getUserPreferences());

  // Update the state.
  const {
    setWordCount,
    setToggleState,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const {
    showWordCount
  } = userPreferences || {
    showWordCount: false
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Word Count Options",
    initialOpen: showWordCount,
    onToggle: () => {
      setToggleState('showWordCount', !showWordCount);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Minimum Word Count', 'pre-publish-checklist'),
    value: wordcount
    // onChange={(value) => setWordCount(value)}
    ,
    onChange: value => setSetting('wordcount', value)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WordCount);

/***/ }),

/***/ "./src/admin/datastore/constants.js":
/*!******************************************!*\
  !*** ./src/admin/datastore/constants.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_STATE: () => (/* binding */ DEFAULT_STATE),
/* harmony export */   FETCH_SETTINGS: () => (/* binding */ FETCH_SETTINGS),
/* harmony export */   SET_CATEGORY: () => (/* binding */ SET_CATEGORY),
/* harmony export */   SET_FEATURED_IMAGE: () => (/* binding */ SET_FEATURED_IMAGE),
/* harmony export */   SET_SETTING: () => (/* binding */ SET_SETTING),
/* harmony export */   SET_USER_PREFERENCES: () => (/* binding */ SET_USER_PREFERENCES),
/* harmony export */   SET_WORDCOUNT: () => (/* binding */ SET_WORDCOUNT),
/* harmony export */   STATE_FROM_DATABASE: () => (/* binding */ STATE_FROM_DATABASE),
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME)
/* harmony export */ });
// Constants
const STORE_NAME = 'pre-publish-checklist';
const DEFAULT_STATE = {};
const SET_WORDCOUNT = 'SET_WORDCOUNT';
const SET_FEATURED_IMAGE = 'SET_FEATURED_IMAGE';
const SET_CATEGORY = 'SET_CATEGORY';
const STATE_FROM_DATABASE = 'STATE_FROM_DATABASE';
const FETCH_SETTINGS = 'FETCH_SETTINGS';
const SET_USER_PREFERENCES = 'SET_USER_PREFERENCES';
const SET_SETTING = 'SET_SETTING';

/***/ }),

/***/ "./src/admin/datastore/index.js":
/*!**************************************!*\
  !*** ./src/admin/datastore/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/admin/datastore/constants.js");
/**
 * WordPress dependencies
 */




// Define our actions
const actions = {
  initSettings(settings) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.STATE_FROM_DATABASE,
      payload: {
        ...settings
      }
    };
  },
  fetchSettings() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.FETCH_SETTINGS,
      payload: {}
    };
  },
  setWordCount(wordcount) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_WORDCOUNT,
      payload: {
        wordcount
      }
    };
  },
  setFeaturedImageIsRequired(requiredFeaturedImage) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_FEATURED_IMAGE,
      payload: {
        requiredFeaturedImage
      }
    };
  },
  setCategoryRequired(requiredCategory) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_CATEGORY,
      payload: {
        requiredCategory
      }
    };
  },
  setUserPreferences(userPreferences) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_USER_PREFERENCES,
      payload: {
        userPreferences
      }
    };
  },
  setSetting(setting, value) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_SETTING,
      payload: {
        setting,
        value
      }
    };
  },
  setToggleState(section) {
    return function ({
      select,
      dispatch
    }) {
      const currentValues = select.getUserPreferences();
      const sectionValue = currentValues[section];
      dispatch.setUserPreferences({
        ...currentValues,
        [section]: !sectionValue
      });
    };
  }
};

// Define the reducer
function reducer(state = _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STATE, {
  type,
  payload
}) {
  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__.STATE_FROM_DATABASE:
      return {
        ...state,
        ...payload
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_SETTING:
      const {
        setting,
        value
      } = payload;
      return {
        ...state,
        [setting]: value
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_WORDCOUNT:
      const {
        wordcount
      } = payload;
      return {
        ...state,
        wordcount
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_FEATURED_IMAGE:
      const {
        requiredFeaturedImage
      } = payload;
      return {
        ...state,
        requiredFeaturedImage
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_CATEGORY:
      const {
        requiredCategory
      } = payload;
      return {
        ...state,
        requiredCategory
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_USER_PREFERENCES:
      const {
        userPreferences
      } = payload;
      if (userPreferences) {
        window.localStorage.setItem('pre-publish-checklist-user-preferences', JSON.stringify(userPreferences));
      }
      return {
        ...state,
        userPreferences
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
    const {
      userPreferences,
      ...settings
    } = state;
    return settings;
  },
  getUserPreferences(state) {
    return state.userPreferences;
  }
};
const resolvers = {
  getSettings() {
    return async ({
      dispatch
    }) => {
      const settings = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: '/wp/v2/settings'
      });
      dispatch.initSettings(settings['pre-publish-checklist_data']);
    };
  },
  getUserPreferences() {
    return ({
      dispatch
    }) => {
      const userPreferences = window.localStorage.getItem('pre-publish-checklist-user-preferences') || _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STATE.userPreferences;
      dispatch.setUserPreferences(JSON.parse(userPreferences));
    };
  }
};

// Define and register the store.
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME, {
  reducer,
  actions,
  selectors,
  resolvers
  // __experimentalUseThunks: true,
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.register)(store);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_settings_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/settings-screen */ "./src/admin/components/settings-screen.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


// Render the app to the screen.
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_settings_screen__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('twitch-pre-publish-checklist'));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map