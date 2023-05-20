"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ProductCard = (param)=>{\n    let { data: data1  } = param;\n    var _data_attributes, _data_attributes1, _data_attributes2;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/products/\".concat(data1.attributes.slug),\n        className: \"transform overflow-hidden my-2 mx-2 duration-200 hover:scale-105 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                width: 400,\n                height: 400,\n                src: data1.attributes.thumbnail.data.attributes.url,\n                alt: data1.attributes.name,\n                className: \"rounded-lg shadow-md border w-[400px] h-[300px]\"\n            }, void 0, false, {\n                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg bg-transparent my-4 \",\n                        children: data1 === null || data1 === void 0 ? void 0 : (_data_attributes = data1.attributes) === null || _data_attributes === void 0 ? void 0 : _data_attributes.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center max-w-[540px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mr-3 text-lg font-semibold\",\n                                children: [\n                                    \"₹\",\n                                    data1 === null || data1 === void 0 ? void 0 : (_data_attributes1 = data1.attributes) === null || _data_attributes1 === void 0 ? void 0 : _data_attributes1.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, undefined),\n                            (data1 === null || data1 === void 0 ? void 0 : (_data_attributes2 = data1.attributes) === null || _data_attributes2 === void 0 ? void 0 : _data_attributes2.orignal_price) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-white/[0.9] text-base font-medium line-through\",\n                                        children: \"9999\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"ml-auto text-green-300 text-base font-medium\",\n                                        children: \"20% off\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nasync function getStaticProps() {\n    const products = await fetchDataFromAPI(\"/api/products?populate=*\");\n    return {\n        props: {\n            data\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNFO0FBRS9CLE1BQU1HLGNBQWMsU0FBWTtRQUFYLEVBQUNDLE1BQUFBLE1BQUksRUFBQztRQVl1Q0Esa0JBRVFBLG1CQUVqREE7SUFmckIscUJBQ0ksOERBQUNILGtEQUFJQTtRQUFDSSxNQUFNLGFBQWtDLE9BQXJCRCxNQUFLRSxVQUFVLENBQUNDLElBQUk7UUFBSUMsV0FBVTs7MEJBRW5ELDhEQUFDTixtREFBS0E7Z0JBQ0ZPLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLEtBQUtQLE1BQUtFLFVBQVUsQ0FBQ00sU0FBUyxDQUFDUixJQUFJLENBQUNFLFVBQVUsQ0FBQ08sR0FBRztnQkFDbERDLEtBQUtWLE1BQUtFLFVBQVUsQ0FBQ1MsSUFBSTtnQkFDekJQLFdBQVU7Ozs7OzswQkFFZCw4REFBQ1E7Z0JBQUlSLFdBQVU7O2tDQUNYLDhEQUFDUzt3QkFBR1QsV0FBVTtrQ0FBZ0NKLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsbUJBQUFBLE1BQU1FLFVBQVUsY0FBaEJGLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBa0JXLElBQUY7Ozs7OztrQ0FDOUQsOERBQUNDO3dCQUFJUixXQUFVOzswQ0FDWCw4REFBQ1U7Z0NBQUVWLFdBQVU7O29DQUE2QjtvQ0FBUUosa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxvQkFBQUEsTUFBTUUsVUFBVSxjQUFoQkYsK0JBQUFBLEtBQUFBLElBQUFBLGtCQUFrQmUsS0FBRjs7Ozs7Ozs0QkFFakVmLENBQUFBLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsb0JBQUFBLE1BQU1FLFVBQVUsY0FBaEJGLCtCQUFBQSxLQUFBQSxJQUFBQSxrQkFBa0JnQixhQUFGLG1CQUNiOztrREFDSSw4REFBQ0Y7d0NBQUVWLFdBQVU7a0RBQXNEOzs7Ozs7a0RBQ25FLDhEQUFDVTt3Q0FBRVYsV0FBVTtrREFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTVGO0tBN0JNTDtBQStCTiwrREFBZUEsV0FBV0EsRUFBQztBQUlwQixlQUFla0IsaUJBQWdCO0lBRXRDLE1BQU1DLFdBQVcsTUFBTUMsaUJBQWlCO0lBRXhDLE9BQU07UUFDRkMsT0FBTztZQUFDcEI7UUFBSTtJQUNoQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qcz9jOWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBQcm9kdWN0Q2FyZCA9ICh7ZGF0YX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7ZGF0YS5hdHRyaWJ1dGVzLnNsdWd9YH0gY2xhc3NOYW1lPVwidHJhbnNmb3JtIG92ZXJmbG93LWhpZGRlbiBteS0yIG14LTIgZHVyYXRpb24tMjAwIGhvdmVyOnNjYWxlLTEwNSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuYXR0cmlidXRlcy50aHVtYm5haWwuZGF0YS5hdHRyaWJ1dGVzLnVybH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtkYXRhLmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkLWxnIHNoYWRvdy1tZCBib3JkZXIgdy1bNDAwcHhdIGgtWzMwMHB4XSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWxnIGJnLXRyYW5zcGFyZW50IG15LTQgJz57ZGF0YT8uYXR0cmlidXRlcz8ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1heC13LVs1NDBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXItMyB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPiYjODM3Nzt7ZGF0YT8uYXR0cmlidXRlcz8ucHJpY2V9PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YT8uYXR0cmlidXRlcz8ub3JpZ25hbF9wcmljZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlL1swLjldIHRleHQtYmFzZSBmb250LW1lZGl1bSBsaW5lLXRocm91Z2gnPjk5OTk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtYXV0byB0ZXh0LWdyZWVuLTMwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0nPjIwJSBvZmY8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvTGluaz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuXG5jb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoRGF0YUZyb21BUEkoXCIvYXBpL3Byb2R1Y3RzP3BvcHVsYXRlPSpcIilcblxucmV0dXJue1xuICAgIHByb3BzOiB7ZGF0YX1cbn1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSW1hZ2UiLCJQcm9kdWN0Q2FyZCIsImRhdGEiLCJocmVmIiwiYXR0cmlidXRlcyIsInNsdWciLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInRodW1ibmFpbCIsInVybCIsImFsdCIsIm5hbWUiLCJkaXYiLCJoMiIsInAiLCJwcmljZSIsIm9yaWduYWxfcHJpY2UiLCJnZXRTdGF0aWNQcm9wcyIsInByb2R1Y3RzIiwiZmV0Y2hEYXRhRnJvbUFQSSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n"));

/***/ })

});