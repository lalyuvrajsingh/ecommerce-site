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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ProductCard = (param)=>{\n    let { data: { attributes: { p , id  }  }  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/products/\".concat(p.slug),\n        className: \"transform overflow-hidden my-2 mx-2 duration-200 hover:scale-105 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                width: 500,\n                height: 500,\n                src: p.thumbnail.data.attributes.url,\n                alt: p.name\n            }, void 0, false, {\n                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg bg-transparent my-4 \",\n                        children: p.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center max-w-[540px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mr-3 text-lg font-semibold\",\n                                children: [\n                                    \"₹\",\n                                    p.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            }, undefined),\n                            p.original_price && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-white/[0.5] text-base font-medium line-through\",\n                                        children: p.original_price\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"ml-auto text-green-300 text-base font-medium\",\n                                        children: \"20% off\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNFO0FBRS9CLE1BQU1HLGNBQWMsU0FBbUM7UUFBbEMsRUFBQ0MsTUFBTSxFQUFDQyxZQUFZLEVBQUNDLEVBQUMsRUFBRUMsR0FBRSxFQUFDLEdBQUMsR0FBQztJQUM5QyxxQkFDSSw4REFBQ04sa0RBQUlBO1FBQUNPLE1BQU0sYUFBb0IsT0FBUEYsRUFBRUcsSUFBSTtRQUFJQyxXQUFVOzswQkFFckMsOERBQUNSLG1EQUFLQTtnQkFDRlMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBS1AsRUFBRVEsU0FBUyxDQUFDVixJQUFJLENBQUNDLFVBQVUsQ0FBQ1UsR0FBRztnQkFDcENDLEtBQUtWLEVBQUVXLElBQUk7Ozs7OzswQkFFZiw4REFBQ0M7Z0JBQUlSLFdBQVU7O2tDQUNYLDhEQUFDUzt3QkFBR1QsV0FBVTtrQ0FBZ0NKLEVBQUVXLElBQUk7Ozs7OztrQ0FDcEQsOERBQUNDO3dCQUFJUixXQUFVOzswQ0FDWCw4REFBQ0o7Z0NBQUVJLFdBQVU7O29DQUE2QjtvQ0FBUUosRUFBRWMsS0FBSzs7Ozs7Ozs0QkFFeERkLEVBQUVlLGNBQWMsa0JBQ2I7O2tEQUNBLDhEQUFDZjt3Q0FBRUksV0FBVTtrREFBdURKLEVBQUVlLGNBQWM7Ozs7OztrREFDcEYsOERBQUNmO3dDQUFFSSxXQUFVO2tEQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVeEY7S0E1Qk1QO0FBOEJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanM/YzlhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgUHJvZHVjdENhcmQgPSAoe2RhdGE6IHthdHRyaWJ1dGVzOiB7cCwgaWR9fX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cC5zbHVnfWB9IGNsYXNzTmFtZT1cInRyYW5zZm9ybSBvdmVyZmxvdy1oaWRkZW4gbXktMiBteC0yIGR1cmF0aW9uLTIwMCBob3ZlcjpzY2FsZS0xMDUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwLnRodW1ibmFpbC5kYXRhLmF0dHJpYnV0ZXMudXJsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3AubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWxnIGJnLXRyYW5zcGFyZW50IG15LTQgJz57cC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWF4LXctWzU0MHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtci0zIHRleHQtbGcgZm9udC1zZW1pYm9sZCc+JiM4Mzc3O3twLnByaWNlfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3Aub3JpZ2luYWxfcHJpY2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlL1swLjVdIHRleHQtYmFzZSBmb250LW1lZGl1bSBsaW5lLXRocm91Z2gnPntwLm9yaWdpbmFsX3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21sLWF1dG8gdGV4dC1ncmVlbi0zMDAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtJz4yMCUgb2ZmPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L0xpbms+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSW1hZ2UiLCJQcm9kdWN0Q2FyZCIsImRhdGEiLCJhdHRyaWJ1dGVzIiwicCIsImlkIiwiaHJlZiIsInNsdWciLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInRodW1ibmFpbCIsInVybCIsImFsdCIsIm5hbWUiLCJkaXYiLCJoMiIsInByaWNlIiwib3JpZ2luYWxfcHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n"));

/***/ })

});