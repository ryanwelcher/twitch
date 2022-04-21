/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/category.js":
/*!******************************************!*\
  !*** ./src/admin/components/category.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
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
  const userPreferences = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getUserPreferences()); // Update the state.

  const {
    setCategoryRequired,
    setUserPreferences
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const {
    showCategory
  } = userPreferences || {
    showCategory: false
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Category Options",
    initialOpen: showCategory,
    onToggle: () => {
      setUserPreferences({ ...userPreferences,
        showCategory: !showCategory
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Require Category', 'pre-publish-checklist'),
    checked: requiredCategory,
    onChange: () => {
      setCategoryRequired(!requiredCategory);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./src/admin/components/featured-image.js":
/*!************************************************!*\
  !*** ./src/admin/components/featured-image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
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
  const userPreferences = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getUserPreferences()); // Update the state.

  const {
    setFeaturedImageIsRequired,
    setUserPreferences
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const {
    showFeaturedImage
  } = userPreferences || {
    showFeaturedImage: false
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Featured Image Options",
    initialOpen: showFeaturedImage,
    onToggle: () => {
      setUserPreferences({ ...userPreferences,
        showFeaturedImage: !showFeaturedImage
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Require Featured Image', 'pre-publish-checklist'),
    checked: imageRequired,
    onChange: () => {
      setFeaturedImageIsRequired(!imageRequired);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedImage);

/***/ }),

/***/ "./src/admin/components/settings-screen.js":
/*!*************************************************!*\
  !*** ./src/admin/components/settings-screen.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
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
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core'); // Gets all settings from the store.

  const settingsFromState = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_9__.STORE_NAME).getSettings()); // This is bad, we need a better loading process.

  if (!settingsFromState) {
    return 'LOADING';
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, {
    header: "Twitch Pre-Publish Checklist Settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordcount__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_featured_image__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_category__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: () => {
      // This actually saves to the database
      saveEntityRecord('root', 'site', {
        'pre-publish-checklist_data': settingsFromState
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('SAVE', 'pre-publish-checklist'))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsScreen);

/***/ }),

/***/ "./src/admin/components/settings-section.js":
/*!**************************************************!*\
  !*** ./src/admin/components/settings-section.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 *  WordPress dependencies
 */


const SettingsSection = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsSection);

/***/ }),

/***/ "./src/admin/components/wordcount.js":
/*!*******************************************!*\
  !*** ./src/admin/components/wordcount.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
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
  const userPreferences = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getUserPreferences()); // Update the state.

  const {
    setWordCount,
    setUserPreferences
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const {
    showWordCount
  } = userPreferences || {
    showWordCount: false
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Word Count Options",
    initialOpen: showWordCount,
    onToggle: () => {
      setUserPreferences({ ...userPreferences,
        showWordCount: !showWordCount
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Minimum Word Count', 'pre-publish-checklist'),
    value: wordcount,
    onChange: value => setWordCount(value)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WordCount);

/***/ }),

/***/ "./src/admin/datastore/constants.js":
/*!******************************************!*\
  !*** ./src/admin/datastore/constants.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_STATE": function() { return /* binding */ DEFAULT_STATE; },
/* harmony export */   "FETCH_SETTINGS": function() { return /* binding */ FETCH_SETTINGS; },
/* harmony export */   "SET_CATEGORY": function() { return /* binding */ SET_CATEGORY; },
/* harmony export */   "SET_FEATURED_IMAGE": function() { return /* binding */ SET_FEATURED_IMAGE; },
/* harmony export */   "SET_USER_PREFERENCES": function() { return /* binding */ SET_USER_PREFERENCES; },
/* harmony export */   "SET_WORDCOUNT": function() { return /* binding */ SET_WORDCOUNT; },
/* harmony export */   "STATE_FROM_DATABASE": function() { return /* binding */ STATE_FROM_DATABASE; },
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
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

/***/ }),

/***/ "./src/admin/datastore/index.js":
/*!**************************************!*\
  !*** ./src/admin/datastore/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
      payload: { ...settings
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
  }

}; // Define the reducer

function reducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STATE;
  let {
    type,
    payload
  } = arguments.length > 1 ? arguments[1] : undefined;

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__.STATE_FROM_DATABASE:
      return { ...state,
        ...payload
      };

    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_WORDCOUNT:
      const {
        wordcount
      } = payload;
      return { ...state,
        wordcount
      };

    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_FEATURED_IMAGE:
      const {
        requiredFeaturedImage
      } = payload;
      return { ...state,
        requiredFeaturedImage
      };

    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_CATEGORY:
      const {
        requiredCategory
      } = payload;
      return { ...state,
        requiredCategory
      };

    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_USER_PREFERENCES:
      const {
        userPreferences
      } = payload;

      if (userPreferences) {
        window.localStorage.setItem('pre-publish-checklist-user-preferences', JSON.stringify(userPreferences));
      }

      return { ...state,
        userPreferences
      };
  }

  return state;
} // Define some selectors


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
  *getSettings() {
    const settings = yield actions.fetchSettings();
    return actions.initSettings(settings['pre-publish-checklist_data']);
  },

  *getUserPreferences() {
    const userPreferences = window.localStorage.getItem('pre-publish-checklist-user-preferences') || _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STATE.userPreferences;
    return actions.setUserPreferences(JSON.parse(userPreferences));
  }

};
const controls = {
  FETCH_SETTINGS() {
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/wp/v2/settings'
    });
  }

}; // Define and register the store.

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME, {
  reducer,
  actions,
  controls,
  selectors,
  resolvers
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.register)(store);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_settings_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/settings-screen */ "./src/admin/components/settings-screen.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

 // Render the app to the screen.

(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_settings_screen__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('twitch-pre-publish-checklist'));
}();
/******/ })()
;
//# sourceMappingURL=index.js.map