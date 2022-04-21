/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close-small.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (closeSmall);
//# sourceMappingURL=close-small.js.map

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

/***/ "./src/plugin/components/categoriesDisplay.js":
/*!****************************************************!*\
  !*** ./src/plugin/components/categoriesDisplay.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");



const CategoriesDisplay = _ref => {
  let {
    categories
  } = _ref;
  const locked = !categories.length || categories.includes(1);

  const generateMessage = () => {
    if (locked) {
      if (!categories.length) {
        return 'Please assign a category.';
      } // if (categories.includes(1)) {
      // 	return 'Categories cannot include Uncategorized';
      // }

    }

    return 'Categories assigned correctly';
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex'
    }
  }, !locked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), locked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      marginTop: '3px'
    }
  }, generateMessage()));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoriesDisplay);

/***/ }),

/***/ "./src/plugin/components/featuredImageDisplay.js":
/*!*******************************************************!*\
  !*** ./src/plugin/components/featuredImageDisplay.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");



const FeaturedImageDisplay = _ref => {
  let {
    featuredImageID
  } = _ref;
  const locked = featuredImageID === 0;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex'
    }
  }, !locked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), locked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      marginTop: '3px'
    }
  }, `Featured Image`));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedImageDisplay);

/***/ }),

/***/ "./src/plugin/components/wordCountDisplay.js":
/*!***************************************************!*\
  !*** ./src/plugin/components/wordCountDisplay.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");



const WordCountDisplayComponent = _ref => {
  let {
    wordCount,
    required
  } = _ref;
  const locked = wordCount < required;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex'
    }
  }, !locked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), locked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      marginTop: '3px'
    }
  }, `WordCount: ${wordCount}`));
};

/* harmony default export */ __webpack_exports__["default"] = (WordCountDisplayComponent);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

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

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/wordcount":
/*!***********************************!*\
  !*** external ["wp","wordcount"] ***!
  \***********************************/
/***/ (function(module) {

module.exports = window["wp"]["wordcount"];

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
/*!*****************************!*\
  !*** ./src/plugin/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/wordcount */ "@wordpress/wordcount");
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_wordCountDisplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/wordCountDisplay */ "./src/plugin/components/wordCountDisplay.js");
/* harmony import */ var _components_featuredImageDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/featuredImageDisplay */ "./src/plugin/components/featuredImageDisplay.js");
/* harmony import */ var _components_categoriesDisplay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/categoriesDisplay */ "./src/plugin/components/categoriesDisplay.js");
/* harmony import */ var _admin_datastore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../admin/datastore */ "./src/admin/datastore/index.js");
/* harmony import */ var _admin_datastore_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../admin/datastore/constants */ "./src/admin/datastore/constants.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



 // Pull the store into the plugin




const Render = () => {
  const [wordCountDisplay, setWordCountDisplay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // Gets all settings from the custom store.

  const settings = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_admin_datastore_constants__WEBPACK_IMPORTED_MODULE_11__.STORE_NAME).getSettings()); // The useSelect hook is better for retrieving data from the store.

  const {
    blocks,
    categories,
    featuredImageID
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      blocks: select('core/block-editor').getBlocks(),
      categories: select('core/editor').getEditedPostAttribute('categories'),
      featuredImageID: select('core/editor').getEditedPostAttribute('featured_media')
    };
  }); // The useDispatch hook is better for dispatching actions.

  const {
    lockPostSaving,
    unlockPostSaving,
    enablePublishSidebar,
    disablePublishSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/editor');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Get the WordCount
    const currentWordCount = (0,_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3__.count)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.serialize)(blocks), 'words');
    setWordCountDisplay(currentWordCount);
    const {
      wordcount,
      requiredFeaturedImage,
      requiredCategory
    } = settings;
    let lockPost = false; // if (!wordcount) return;

    if (currentWordCount < wordcount) {
      // If the word count is less than the required, lock the post saving.
      lockPost = true;
    } // Does the post have a featured image?


    if (requiredFeaturedImage && featuredImageID === 0) {
      lockPost = true;
    } // Check that there a category assigned to the post.
    // if (!categories.length || categories.includes(1)) {


    if (requiredCategory && !categories.length) {
      lockPost = true;
    } //Lock or enable saving


    if (lockPost === true) {
      lockPostSaving();
      disablePublishSidebar();
    } else {
      unlockPostSaving();
      enablePublishSidebar();
    }
  }, [settings, blocks]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__.PluginDocumentSettingPanel, {
    name: "prepublish-checklist",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Prepublish Checklist', 'pre-publish-checklist'),
    className: "prepublish-checklist"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_wordCountDisplay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    wordCount: wordCountDisplay,
    required: settings.wordcount
  }), settings.requiredFeaturedImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_featuredImageDisplay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    featuredImageID: featuredImageID
  }), settings.requiredCategory && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_categoriesDisplay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    categories: categories
  }));
};

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('twitch-prepublish-checklist', {
  icon: 'forms',
  render: Render
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map