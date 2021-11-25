/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _poll_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poll-display */ "./src/poll-display.js");


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */




/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.attributes.title
 * @param  root0.setAttributes
 * @param  root0.attributes.options
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  let {
    attributes: {
      title,
      options
    },
    setAttributes
  } = _ref;
  // Get the value of meta and a function for updating meta from useEntityProp.
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', 'post', 'meta');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();

  const updatePollData = () => {
    setMeta({ ...meta,
      twitch_poll_data: JSON.stringify(options)
    });
  };

  console.log(meta);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_poll_display__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    options: options
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Options",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: title,
    onChange: newTitle => setAttributes({
      title: newTitle
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isSecondary: true,
    onClick: () => {
      updatePollData();
    }
  }, "Update Data"), options.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    key: item[0]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Name",
    value: item[0],
    onChange: newTextValue => {
      const updatedOptions = options.map(entry => {
        if (item[0] === entry[0]) {
          return [newTextValue, entry[1]];
        }

        return entry;
      });
      setAttributes({
        options: updatedOptions
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isSecondary: true,
    onClick: () => {
      const updatedOptions = [...options, ['', 0]];
      setAttributes({
        options: updatedOptions
      });
    }
  }, "Add New Option"))));
}

/***/ }),

/***/ "./src/poll-display.js":
/*!*****************************!*\
  !*** ./src/poll-display.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");


/**
 * External dependencies
 */


const PollDisplay = _ref => {
  let {
    title,
    options
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_google_charts__WEBPACK_IMPORTED_MODULE_1__.Chart, {
    height: '300px',
    chartType: "BarChart",
    loader: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Loading Chart"),
    data: [['Option', 'Votes'], ...options],
    options: {
      title,
      chartArea: {
        width: '50%'
      }
    },
    chartEvents: [{
      eventName: 'select',
      callback: _ref2 => {
        let {
          chartWrapper
        } = _ref2;
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();

        if (selection.length === 1) {
          const [selectedItem] = selection;
          const dataTable = chartWrapper.getDataTable();
          const {
            row,
            column
          } = selectedItem;
          alert('You selected : ' + JSON.stringify({
            row,
            column,
            value: dataTable.getValue(row, column)
          }), null, 2);
        }

        console.log(selection);
      }
    }],
    rootProps: {
      'data-testid': '1'
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PollDisplay);

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-google-charts/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/react-google-charts/dist/index.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chart": function() { return /* binding */ Chart; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-load-script */ "./node_modules/react-load-script/lib/index.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_1__);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var chartDefaultProps = {
    graph_id: null,
    legend_toggle: false,
    graphID: null,
    options: {
        colors: null
    },
    data: null,
    rows: null,
    columns: null,
    diffdata: null,
    chartEvents: null,
    legendToggle: false,
    chartActions: null,
    getChartWrapper: function (chartWrapper, google) { },
    getChartEditor: null,
    className: "",
    style: {},
    formatters: null,
    spreadSheetUrl: null,
    spreadSheetQueryParameters: {
        headers: 1,
        gid: 1
    },
    rootProps: {},
    chartWrapperParams: {},
    controls: null,
    render: null,
    toolbarItems: null,
    toolbarID: null
};

var GoogleChartLoader = (function (_super) {
    __extends(GoogleChartLoader, _super);
    function GoogleChartLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleGoogleChartsLoaderScriptLoaded = function (windowGoogleCharts) {
            var _a = _this.props, version = _a.chartVersion, packages = _a.chartPackages, language = _a.chartLanguage, mapsApiKey = _a.mapsApiKey, onLoad = _a.onLoad;
            windowGoogleCharts.charts.load(version || "current", {
                packages: packages || ["corechart", "controls"],
                language: language || "en",
                mapsApiKey: mapsApiKey
            });
            windowGoogleCharts.charts.setOnLoadCallback(function () {
                onLoad(windowGoogleCharts);
            });
        };
        return _this;
    }
    GoogleChartLoader.prototype.shouldComponentUpdate = function (nextProps) {
        return nextProps.chartPackages === this.props.chartPackages;
    };
    GoogleChartLoader.prototype.render = function () {
        var _this = this;
        var onError = this.props.onError;
        return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react_load_script__WEBPACK_IMPORTED_MODULE_1___default()), { url: "https://www.gstatic.com/charts/loader.js", onError: onError, onLoad: function () {
                var windowWithGoogle = window;
                if (windowWithGoogle.google) {
                    _this.handleGoogleChartsLoaderScriptLoaded(windowWithGoogle.google);
                }
            } }));
    };
    return GoogleChartLoader;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

var uniqueID = 0;
var generateUniqueID = function () {
    uniqueID += 1;
    return "reactgooglegraph-" + uniqueID;
};

var DEFAULT_CHART_COLORS = [
    "#3366CC",
    "#DC3912",
    "#FF9900",
    "#109618",
    "#990099",
    "#3B3EAC",
    "#0099C6",
    "#DD4477",
    "#66AA00",
    "#B82E2E",
    "#316395",
    "#994499",
    "#22AA99",
    "#AAAA11",
    "#6633CC",
    "#E67300",
    "#8B0707",
    "#329262",
    "#5574A6",
    "#3B3EAC"
];

var _this = undefined;
var loadDataTableFromSpreadSheet = function (googleViz, spreadSheetUrl, urlParams) {
    if (urlParams === void 0) { urlParams = {}; }
    return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (resolve, reject) {
                    var headers = "" + (urlParams.headers ? "headers=" + urlParams.headers : "headers=0");
                    var queryString = "" + (urlParams.query ? "&tq=" + encodeURIComponent(urlParams.query) : "");
                    var gid = "" + (urlParams.gid ? "&gid=" + urlParams.gid : "");
                    var sheet = "" + (urlParams.sheet ? "&sheet=" + urlParams.sheet : "");
                    var access_token = "" + (urlParams.access_token ? "&access_token=" + urlParams.access_token : "");
                    var urlQueryString = "" + headers + gid + sheet + queryString + access_token;
                    var urlToSpreadSheet = spreadSheetUrl + "/gviz/tq?" + urlQueryString;
                    var query = new googleViz.visualization.Query(urlToSpreadSheet);
                    query.send(function (response) {
                        if (response.isError()) {
                            reject("Error in query:  " + response.getMessage() + " " + response.getDetailedMessage());
                        }
                        else {
                            resolve(response.getDataTable());
                        }
                    });
                })];
        });
    });
};

var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(chartDefaultProps), Provider = _a.Provider, Consumer = _a.Consumer;
var ContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Provider, { value: value }, children);
};
var ContextConsumer = function (_a) {
    var render = _a.render;
    return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Consumer, null, function (context) {
        return render(context);
    }));
};

var GRAY_COLOR = "#CCCCCC";
var GoogleChartDataTableInner = (function (_super) {
    __extends(GoogleChartDataTableInner, _super);
    function GoogleChartDataTableInner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hiddenColumns: []
        };
        _this.listenToLegendToggle = function () {
            var _a = _this.props, google = _a.google, googleChartWrapper = _a.googleChartWrapper;
            google.visualization.events.addListener(googleChartWrapper, "select", function () {
                var chart = googleChartWrapper.getChart();
                var selection = chart.getSelection();
                var dataTable = googleChartWrapper.getDataTable();
                if (selection.length === 0 ||
                    selection[0].row !== null ||
                    dataTable === null) {
                    return;
                }
                var columnIndex = selection[0].column;
                var columnID = _this.getColumnID(dataTable, columnIndex);
                if (_this.state.hiddenColumns.includes(columnID)) {
                    _this.setState(function (state) { return (__assign({}, state, { hiddenColumns: state.hiddenColumns.filter(function (colID) { return colID !== columnID; }).slice() })); });
                }
                else {
                    _this.setState(function (state) { return (__assign({}, state, { hiddenColumns: state.hiddenColumns.concat([columnID]) })); });
                }
            });
        };
        _this.applyFormatters = function (dataTable, formatters) {
            var google = _this.props.google;
            for (var _i = 0, formatters_1 = formatters; _i < formatters_1.length; _i++) {
                var formatter = formatters_1[_i];
                switch (formatter.type) {
                    case "ArrowFormat": {
                        var vizFormatter = new google.visualization.ArrowFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "BarFormat": {
                        var vizFormatter = new google.visualization.BarFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "ColorFormat": {
                        var vizFormatter = new google.visualization.ColorFormat(formatter.options);
                        var ranges = formatter.ranges;
                        for (var _a = 0, ranges_1 = ranges; _a < ranges_1.length; _a++) {
                            var range = ranges_1[_a];
                            vizFormatter.addRange.apply(vizFormatter, range);
                        }
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "DateFormat": {
                        var vizFormatter = new google.visualization.DateFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "NumberFormat": {
                        var vizFormatter = new google.visualization.NumberFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "PatternFormat": {
                        var vizFormatter = new google.visualization.PatternFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                }
            }
        };
        _this.getColumnID = function (dataTable, columnIndex) {
            return (dataTable.getColumnId(columnIndex) ||
                dataTable.getColumnLabel(columnIndex));
        };
        _this.draw = function (_a) {
            var data = _a.data, diffdata = _a.diffdata, rows = _a.rows, columns = _a.columns, options = _a.options, legend_toggle = _a.legend_toggle, legendToggle = _a.legendToggle, chartType = _a.chartType, formatters = _a.formatters, spreadSheetUrl = _a.spreadSheetUrl, spreadSheetQueryParameters = _a.spreadSheetQueryParameters;
            return __awaiter(_this, void 0, void 0, function () {
                var _b, google, googleChartWrapper, dataTable, chartDiff, oldData, newData, columnCount, i, columnID, previousColumnLabel, previousColumnID, previousColumnType, chart;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = this.props, google = _b.google, googleChartWrapper = _b.googleChartWrapper;
                            chartDiff = null;
                            if (diffdata !== null) {
                                oldData = google.visualization.arrayToDataTable(diffdata.old);
                                newData = google.visualization.arrayToDataTable(diffdata.new);
                                chartDiff = google.visualization[chartType].prototype.computeDiff(oldData, newData);
                            }
                            if (!(data !== null)) return [3, 1];
                            if (Array.isArray(data)) {
                                dataTable = google.visualization.arrayToDataTable(data);
                            }
                            else {
                                dataTable = new google.visualization.DataTable(data);
                            }
                            return [3, 5];
                        case 1:
                            if (!(rows !== null && columns !== null)) return [3, 2];
                            dataTable = google.visualization.arrayToDataTable([columns].concat(rows));
                            return [3, 5];
                        case 2:
                            if (!(spreadSheetUrl !== null)) return [3, 4];
                            return [4, loadDataTableFromSpreadSheet(google, spreadSheetUrl, spreadSheetQueryParameters)];
                        case 3:
                            dataTable = (_c.sent());
                            return [3, 5];
                        case 4:
                            dataTable = google.visualization.arrayToDataTable([]);
                            _c.label = 5;
                        case 5:
                            columnCount = dataTable.getNumberOfColumns();
                            for (i = 0; i < columnCount; i += 1) {
                                columnID = this.getColumnID(dataTable, i);
                                if (this.state.hiddenColumns.includes(columnID)) {
                                    previousColumnLabel = dataTable.getColumnLabel(i);
                                    previousColumnID = dataTable.getColumnId(i);
                                    previousColumnType = dataTable.getColumnType(i);
                                    dataTable.removeColumn(i);
                                    dataTable.addColumn({
                                        label: previousColumnLabel,
                                        id: previousColumnID,
                                        type: previousColumnType
                                    });
                                }
                            }
                            chart = googleChartWrapper.getChart();
                            if (googleChartWrapper.getChartType() === "Timeline") {
                                chart && chart.clearChart();
                            }
                            googleChartWrapper.setChartType(chartType);
                            googleChartWrapper.setOptions(options);
                            googleChartWrapper.setDataTable(dataTable);
                            googleChartWrapper.draw();
                            if (this.props.googleChartDashboard !== null) {
                                this.props.googleChartDashboard.draw(dataTable);
                            }
                            if (chartDiff !== null) {
                                googleChartWrapper.setDataTable(chartDiff);
                                googleChartWrapper.draw();
                            }
                            if (formatters !== null) {
                                this.applyFormatters(dataTable, formatters);
                                googleChartWrapper.setDataTable(dataTable);
                                googleChartWrapper.draw();
                            }
                            if (legendToggle === true || legend_toggle === true) {
                                this.grayOutHiddenColumns({ options: options });
                            }
                            return [2];
                    }
                });
            });
        };
        _this.grayOutHiddenColumns = function (_a) {
            var options = _a.options;
            var googleChartWrapper = _this.props.googleChartWrapper;
            var dataTable = googleChartWrapper.getDataTable();
            if (dataTable === null)
                return;
            var columnCount = dataTable.getNumberOfColumns();
            var hasAHiddenColumn = _this.state.hiddenColumns.length > 0;
            if (hasAHiddenColumn === false)
                return;
            var colors = Array.from({ length: columnCount - 1 }).map(function (dontcare, i) {
                var columnID = _this.getColumnID(dataTable, i + 1);
                if (_this.state.hiddenColumns.includes(columnID)) {
                    return GRAY_COLOR;
                }
                else if (typeof options.colors !== "undefined" &&
                    options.colors !== null) {
                    return options.colors[i];
                }
                else {
                    return DEFAULT_CHART_COLORS[i];
                }
            });
            googleChartWrapper.setOptions(__assign({}, options, { colors: colors }));
            googleChartWrapper.draw();
        };
        _this.onResize = function () {
            var googleChartWrapper = _this.props.googleChartWrapper;
            googleChartWrapper.draw();
        };
        return _this;
    }
    GoogleChartDataTableInner.prototype.componentDidMount = function () {
        this.draw(this.props);
        window.addEventListener("resize", this.onResize);
        if (this.props.legend_toggle || this.props.legendToggle) {
            this.listenToLegendToggle();
        }
    };
    GoogleChartDataTableInner.prototype.componentWillUnmount = function () {
        var _a = this.props, google = _a.google, googleChartWrapper = _a.googleChartWrapper;
        window.removeEventListener("resize", this.onResize);
        google.visualization.events.removeAllListeners(googleChartWrapper);
        if (googleChartWrapper.getChartType() === "Timeline") {
            googleChartWrapper.getChart() &&
                googleChartWrapper.getChart().clearChart();
        }
    };
    GoogleChartDataTableInner.prototype.componentDidUpdate = function () {
        this.draw(this.props);
    };
    GoogleChartDataTableInner.prototype.render = function () {
        return null;
    };
    return GoogleChartDataTableInner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
var GoogleChartDataTable = (function (_super) {
    __extends(GoogleChartDataTable, _super);
    function GoogleChartDataTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleChartDataTable.prototype.componentDidMount = function () { };
    GoogleChartDataTable.prototype.componentWillUnmount = function () { };
    GoogleChartDataTable.prototype.shouldComponentUpdate = function () {
        return false;
    };
    GoogleChartDataTable.prototype.render = function () {
        var _a = this.props, google = _a.google, googleChartWrapper = _a.googleChartWrapper, googleChartDashboard = _a.googleChartDashboard;
        return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContextConsumer, { render: function (props) {
                return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GoogleChartDataTableInner, __assign({}, props, { google: google, googleChartWrapper: googleChartWrapper, googleChartDashboard: googleChartDashboard })));
            } }));
    };
    return GoogleChartDataTable;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

var GoogleChartEvents = (function (_super) {
    __extends(GoogleChartEvents, _super);
    function GoogleChartEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleChartEvents.prototype.shouldComponentUpdate = function () {
        return false;
    };
    GoogleChartEvents.prototype.listenToEvents = function (_a) {
        var _this = this;
        var chartEvents = _a.chartEvents, google = _a.google, googleChartWrapper = _a.googleChartWrapper;
        if (chartEvents === null) {
            return;
        }
        google.visualization.events.removeAllListeners(googleChartWrapper);
        var _loop_1 = function (event_1) {
            var eventName = event_1.eventName, callback = event_1.callback;
            google.visualization.events.addListener(googleChartWrapper, eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                callback({
                    chartWrapper: googleChartWrapper,
                    props: _this.props,
                    google: google,
                    eventArgs: args
                });
            });
        };
        for (var _i = 0, chartEvents_1 = chartEvents; _i < chartEvents_1.length; _i++) {
            var event_1 = chartEvents_1[_i];
            _loop_1(event_1);
        }
    };
    GoogleChartEvents.prototype.render = function () {
        var _this = this;
        var _a = this.props, google = _a.google, googleChartWrapper = _a.googleChartWrapper;
        return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContextConsumer, { render: function (propsFromContext) {
                _this.listenToEvents({
                    chartEvents: propsFromContext.chartEvents || null,
                    google: google,
                    googleChartWrapper: googleChartWrapper
                });
                return null;
            } }));
    };
    return GoogleChartEvents;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

var controlCounter = 0;
var GoogleChart = (function (_super) {
    __extends(GoogleChart, _super);
    function GoogleChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            googleChartWrapper: null,
            googleChartDashboard: null,
            googleChartControls: null,
            googleChartEditor: null,
            isReady: false
        };
        _this.graphID = null;
        _this.dashboard_ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
        _this.toolbar_ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
        _this.getGraphID = function () {
            var _a = _this.props, graphID = _a.graphID, graph_id = _a.graph_id;
            var instanceGraphID;
            if (graphID === null && graph_id === null) {
                if (_this.graphID === null) {
                    instanceGraphID = generateUniqueID();
                }
                else {
                    instanceGraphID = _this.graphID;
                }
            }
            else if (graphID !== null && graph_id === null) {
                instanceGraphID = graphID;
            }
            else if (graph_id !== null && graphID === null) {
                instanceGraphID = graph_id;
            }
            else {
                instanceGraphID = graphID;
            }
            _this.graphID = instanceGraphID;
            return _this.graphID;
        };
        _this.getControlID = function (id, index) {
            controlCounter += 1;
            var controlID;
            if (typeof id === "undefined") {
                controlID = "googlechart-control-" + index + "-" + controlCounter;
            }
            else {
                controlID = id;
            }
            return controlID;
        };
        _this.addControls = function (googleChartWrapper, googleChartDashboard) {
            var _a = _this.props, google = _a.google, controls = _a.controls;
            var googleChartControls = controls === null
                ? null
                : controls.map(function (control, i) {
                    var controlIDMaybe = control.controlID, controlType = control.controlType, controlOptions = control.options, controlWrapperParams = control.controlWrapperParams;
                    var controlID = _this.getControlID(controlIDMaybe, i);
                    return {
                        controlProp: control,
                        control: new google.visualization.ControlWrapper(__assign({ containerId: controlID, controlType: controlType, options: controlOptions }, controlWrapperParams))
                    };
                });
            if (googleChartControls === null) {
                return null;
            }
            googleChartDashboard.bind(googleChartControls.map(function (_a) {
                var control = _a.control;
                return control;
            }), googleChartWrapper);
            var _loop_1 = function (chartControl) {
                var control = chartControl.control, controlProp = chartControl.controlProp;
                var _a = controlProp.controlEvents, controlEvents = _a === void 0 ? [] : _a;
                var _loop_2 = function (event_1) {
                    var callback = event_1.callback, eventName = event_1.eventName;
                    google.visualization.events.removeListener(control, eventName, callback);
                    google.visualization.events.addListener(control, eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        callback({
                            chartWrapper: googleChartWrapper,
                            controlWrapper: control,
                            props: _this.props,
                            google: google,
                            eventArgs: args
                        });
                    });
                };
                for (var _i = 0, controlEvents_1 = controlEvents; _i < controlEvents_1.length; _i++) {
                    var event_1 = controlEvents_1[_i];
                    _loop_2(event_1);
                }
            };
            for (var _i = 0, googleChartControls_1 = googleChartControls; _i < googleChartControls_1.length; _i++) {
                var chartControl = googleChartControls_1[_i];
                _loop_1(chartControl);
            }
            return googleChartControls;
        };
        _this.renderChart = function () {
            var _a = _this.props, width = _a.width, height = _a.height, options = _a.options, style = _a.style, className = _a.className, rootProps = _a.rootProps, google = _a.google;
            var divStyle = __assign({ height: height || (options && options.height), width: width || (options && options.width) }, style);
            return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", __assign({ id: _this.getGraphID(), style: divStyle, className: className }, rootProps), _this.state.isReady && _this.state.googleChartWrapper !== null ? ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GoogleChartDataTable, { googleChartWrapper: _this.state.googleChartWrapper, google: google, googleChartDashboard: _this.state.googleChartDashboard }),
                (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GoogleChartEvents, { googleChartWrapper: _this.state.googleChartWrapper, google: google }))) : null));
        };
        _this.renderControl = function (filter) {
            if (filter === void 0) { filter = function (_a) {
                var control = _a.control, controlProp = _a.controlProp;
                return true;
            }; }
            return _this.state.isReady && _this.state.googleChartControls !== null ? ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _this.state.googleChartControls
                .filter(function (_a) {
                var controlProp = _a.controlProp, control = _a.control;
                return filter({ control: control, controlProp: controlProp });
            })
                .map(function (_a) {
                var control = _a.control, controlProp = _a.controlProp;
                return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { key: control.getContainerId(), id: control.getContainerId() }));
            }))) : null;
        };
        _this.renderToolBar = function () {
            if (_this.props.toolbarItems === null)
                return null;
            return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ref: _this.toolbar_ref });
        };
        return _this;
    }
    GoogleChart.prototype.componentDidMount = function () {
        var _a = this.props, options = _a.options, google = _a.google, chartType = _a.chartType, chartWrapperParams = _a.chartWrapperParams, toolbarItems = _a.toolbarItems, getChartEditor = _a.getChartEditor, getChartWrapper = _a.getChartWrapper;
        var chartConfig = __assign({ chartType: chartType,
            options: options, containerId: this.getGraphID() }, chartWrapperParams);
        var googleChartWrapper = new google.visualization.ChartWrapper(chartConfig);
        googleChartWrapper.setOptions(options);
        getChartWrapper(googleChartWrapper, google);
        var googleChartDashboard = new google.visualization.Dashboard(this.dashboard_ref);
        var googleChartControls = this.addControls(googleChartWrapper, googleChartDashboard);
        if (toolbarItems !== null) {
            google.visualization.drawToolbar(this.toolbar_ref.current, toolbarItems);
        }
        var googleChartEditor = null;
        if (getChartEditor !== null) {
            googleChartEditor = new google.visualization.ChartEditor();
            getChartEditor({
                chartEditor: googleChartEditor,
                chartWrapper: googleChartWrapper,
                google: google
            });
        }
        this.setState({
            googleChartEditor: googleChartEditor,
            googleChartControls: googleChartControls,
            googleChartDashboard: googleChartDashboard,
            googleChartWrapper: googleChartWrapper,
            isReady: true
        });
    };
    GoogleChart.prototype.componentDidUpdate = function () {
        if (this.state.googleChartWrapper === null)
            return;
        if (this.state.googleChartDashboard === null)
            return;
        if (this.state.googleChartControls === null)
            return;
        var controls = this.props.controls;
        for (var i = 0; i < controls.length; i += 1) {
            var _a = controls[i], controlType = _a.controlType, options = _a.options, controlWrapperParams = _a.controlWrapperParams;
            if (controlWrapperParams && "state" in controlWrapperParams) {
                this.state.googleChartControls[i].control.setState(controlWrapperParams["state"]);
            }
            this.state.googleChartControls[i].control.setOptions(options);
            this.state.googleChartControls[i].control.setControlType(controlType);
        }
    };
    GoogleChart.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.state.isReady !== nextState.isReady ||
            nextProps.controls !== this.props.controls);
    };
    GoogleChart.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, options = _a.options, style = _a.style;
        var divStyle = __assign({ height: height || (options && options.height), width: width || (options && options.width) }, style);
        if (this.props.render !== null) {
            return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ref: this.dashboard_ref, style: divStyle },
                (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ref: this.toolbar_ref, id: "toolbar" }),
                this.props.render({
                    renderChart: this.renderChart,
                    renderControl: this.renderControl,
                    renderToolbar: this.renderToolBar
                })));
        }
        else {
            return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ref: this.dashboard_ref, style: divStyle },
                this.renderControl(function (_a) {
                    var controlProp = _a.controlProp;
                    return controlProp.controlPosition !== "bottom";
                }),
                this.renderChart(),
                this.renderControl(function (_a) {
                    var controlProp = _a.controlProp;
                    return controlProp.controlPosition === "bottom";
                }),
                this.renderToolBar()));
        }
    };
    return GoogleChart;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

var Chart = (function (_super) {
    __extends(Chart, _super);
    function Chart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMounted = false;
        _this.state = {
            loadingStatus: "loading",
            google: null
        };
        _this.onLoad = function (google) {
            if (_this.isFullyLoaded(google)) {
                _this.onSuccess(google);
            }
            else {
                var id_1 = setInterval(function () {
                    var google = window.google;
                    if (_this._isMounted) {
                        if (google && _this.isFullyLoaded(google)) {
                            clearInterval(id_1);
                            _this.onSuccess(google);
                        }
                    }
                    else {
                        clearInterval(id_1);
                    }
                }, 1000);
            }
        };
        _this.onSuccess = function (google) {
            _this.setState({
                loadingStatus: "ready",
                google: google
            });
        };
        _this.onError = function () {
            _this.setState({
                loadingStatus: "errored"
            });
        };
        return _this;
    }
    Chart.prototype.render = function () {
        var _a = this.props, chartLanguage = _a.chartLanguage, chartPackages = _a.chartPackages, chartVersion = _a.chartVersion, mapsApiKey = _a.mapsApiKey, loader = _a.loader, errorElement = _a.errorElement;
        return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContextProvider, { value: this.props },
            this.state.loadingStatus === "ready" && this.state.google !== null ? ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GoogleChart, __assign({}, this.props, { google: this.state.google }))) : this.state.loadingStatus === "errored" && errorElement ? (errorElement) : (loader),
            (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GoogleChartLoader, __assign({}, { chartLanguage: chartLanguage, chartPackages: chartPackages, chartVersion: chartVersion, mapsApiKey: mapsApiKey }, { onLoad: this.onLoad, onError: this.onError }))));
    };
    Chart.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    Chart.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    Chart.prototype.isFullyLoaded = function (google) {
        var _a = this.props, controls = _a.controls, toolbarItems = _a.toolbarItems, getChartEditor = _a.getChartEditor;
        return (google &&
            google.visualization &&
            google.visualization.ChartWrapper &&
            google.visualization.Dashboard &&
            (!controls || google.visualization.ChartWrapper) &&
            (!getChartEditor || google.visualization.ChartEditor) &&
            (!toolbarItems || google.visualization.drawToolbar));
    };
    Chart.defaultProps = chartDefaultProps;
    return Chart;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

/* harmony default export */ __webpack_exports__["default"] = (Chart);



/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-load-script/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-load-script/lib/index.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = function (_React$Component) {
  _inherits(Script, _React$Component);

  // A dictionary mapping script URL to a boolean value indicating if the script
  // has failed to load.


  // A dictionary mapping script URLs to a dictionary mapping
  // component key to component for all components that are waiting
  // for the script to load.
  function Script(props) {
    _classCallCheck(this, Script);

    var _this = _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).call(this, props));

    _this.scriptLoaderId = 'id' + _this.constructor.idCount++; // eslint-disable-line space-unary-ops, no-plusplus
    return _this;
  }

  // A counter used to generate a unique id for each component that uses
  // ScriptLoaderMixin.


  // A dictionary mapping script URL to a boolean value indicating if the script
  // has already been loaded.


  _createClass(Script, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          onError = _props.onError,
          onLoad = _props.onLoad,
          url = _props.url;


      if (this.constructor.loadedScripts[url]) {
        onLoad();
        return;
      }

      if (this.constructor.erroredScripts[url]) {
        onError();
        return;
      }

      // If the script is loading, add the component to the script's observers
      // and return. Otherwise, initialize the script's observers with the component
      // and start loading the script.
      if (this.constructor.scriptObservers[url]) {
        this.constructor.scriptObservers[url][this.scriptLoaderId] = this.props;
        return;
      }

      this.constructor.scriptObservers[url] = _defineProperty({}, this.scriptLoaderId, this.props);

      this.createScript();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var url = this.props.url;

      var observers = this.constructor.scriptObservers[url];

      // If the component is waiting for the script to load, remove the
      // component from the script's observers before unmounting the component.
      if (observers) {
        delete observers[this.scriptLoaderId];
      }
    }
  }, {
    key: 'createScript',
    value: function createScript() {
      var _this2 = this;

      var _props2 = this.props,
          onCreate = _props2.onCreate,
          url = _props2.url,
          attributes = _props2.attributes;

      var script = document.createElement('script');

      onCreate();

      // add 'data-' or non standard attributes to the script tag
      if (attributes) {
        Object.keys(attributes).forEach(function (prop) {
          return script.setAttribute(prop, attributes[prop]);
        });
      }

      script.src = url;

      // default async to true if not set with custom attributes
      if (!script.hasAttribute('async')) {
        script.async = 1;
      }

      var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(shouldRemoveObserver) {
        var observers = _this2.constructor.scriptObservers[url];
        Object.keys(observers).forEach(function (key) {
          if (shouldRemoveObserver(observers[key])) {
            delete _this2.constructor.scriptObservers[url][_this2.scriptLoaderId];
          }
        });
      };
      script.onload = function () {
        _this2.constructor.loadedScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer.onLoad();
          return true;
        });
      };

      script.onerror = function () {
        _this2.constructor.erroredScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer.onError();
          return true;
        });
      };

      document.body.appendChild(script);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Script;
}(_react2.default.Component);

Script.propTypes = {
  attributes: _propTypes.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onCreate: _propTypes.PropTypes.func,
  onError: _propTypes.PropTypes.func.isRequired,
  onLoad: _propTypes.PropTypes.func.isRequired,
  url: _propTypes.PropTypes.string.isRequired
};
Script.defaultProps = {
  attributes: {},
  onCreate: function onCreate() {},
  onError: function onError() {},
  onLoad: function onLoad() {} };
Script.scriptObservers = {};
Script.loadedScripts = {};
Script.erroredScripts = {};
Script.idCount = 0;
exports["default"] = Script;
module.exports = exports['default'];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

/**
 * Internal dependencies
 */


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('twitchstreams/poll', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: () => null
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map