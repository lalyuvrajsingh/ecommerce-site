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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeroBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/HeroBanner */ \"./components/HeroBanner.js\");\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Wrapper */ \"./components/Wrapper.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ProductCard */ \"./components/ProductCard.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_ProductCard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { products  } = param;\n    var _products_data, _products_data_, _products_data__attributes;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeroBanner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/pages/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-[30px] my-5 font-semibold\",\n                                children: (_products_data = products.data) === null || _products_data === void 0 ? void 0 : (_products_data_ = _products_data[0]) === null || _products_data_ === void 0 ? void 0 : (_products_data__attributes = _products_data_.attributes) === null || _products_data__attributes === void 0 ? void 0 : _products_data__attributes.name\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/pages/index.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus recusandae sunt dolor aliquid unde, enim voluptate aliquam dolores delectus?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/pages/index.js\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/pages/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 my-14 mx-auto md:px-0 \",\n                    children: products.data.map((product)=>{\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ProductCard__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            data: product\n                        }, product === null || product === void 0 ? void 0 : product.id, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/pages/index.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUVOO0FBQ1E7QUFDUDs7QUFPNUIsU0FBU0ssS0FBSyxLQUFVLEVBQUU7UUFBWixFQUFDQyxTQUFRLEVBQUMsR0FBVjtRQVMrQkE7SUFOMUQscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUtDLFdBQVU7OzhCQUNkLDhEQUFDUiw4REFBVUE7Ozs7OzhCQUNYLDhEQUFDQywyREFBT0E7OEJBQ04sNEVBQUNRO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQWtDRixDQUFBQSxpQkFBQUEsU0FBU0ssSUFBSSxjQUFiTCw0QkFBQUEsS0FBQUEsSUFBQUEsbUJBQUFBLGNBQWUsQ0FBQyxFQUFFLDJDQUFsQkEsS0FBQUEsSUFBQUEsOENBQW9CTSxnRUFBcEJOLEtBQUFBLCtCQUFnQ08sSUFBZDs7Ozs7OzBDQUNsRSw4REFBQ0M7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU1QLDhEQUFDTDtvQkFBSUQsV0FBVTs4QkFFZEYsU0FBU0ssSUFBSSxDQUFDSSxHQUFHLENBQUMsQ0FBQ0M7c0NBQ2xCLHFFQUFDZCxnRUFBV0E7NEJBQW1CUyxNQUFNSzsyQkFBbkJBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXZDLENBQUM7S0E3QnVCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvQmFubmVyIGZyb20gJ0AvY29tcG9uZW50cy9IZXJvQmFubmVyJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBXcmFwcGVyIGZyb20gJ0AvY29tcG9uZW50cy9XcmFwcGVyJ1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZldGNoRGF0YUZyb21BUEkgfSBmcm9tICdAL3V0aWxzL2FwaSdcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtwcm9kdWN0c30pIHtcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgPEhlcm9CYW5uZXIvPlxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHRleHQtY2VudGVyIG1heC13LVs4MDBweF0gbXgtYXV0byBteS1bNTBweF0gbWQ6bXktWzgwcHhdJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtWzMwcHhdIG15LTUgZm9udC1zZW1pYm9sZCc+e3Byb2R1Y3RzLmRhdGE/LlswXT8uYXR0cmlidXRlcz8ubmFtZX08L2gxPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0gbmF0dXMgcmVjdXNhbmRhZSBzdW50IGRvbG9yIGFsaXF1aWQgdW5kZSwgZW5pbSB2b2x1cHRhdGUgYWxpcXVhbSBkb2xvcmVzIGRlbGVjdHVzPzwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9XcmFwcGVyPlxuXG5cbiAgICAgICAgey8qKioqKioqKioqKioqKioqKioqKioqKioqIFByb2R1Y3QgR3JpZCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTUgcHgtNSBteS0xNCBteC1hdXRvIG1kOnB4LTAgXCI+XG5cbiAgICAgICAge3Byb2R1Y3RzLmRhdGEubWFwKChwcm9kdWN0KT0+KFxuICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3Q/LmlkfSBkYXRhPXtwcm9kdWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKioqKioqKioqKioqKioqKioqKioqKioqKiBQcm9kdWN0IEdyaWQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL31cbiAgICAgICAgXG4gICAgICA8L21haW4+XG5cbiAgICA8Lz5cblxuICApXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG5cbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZXRjaERhdGFGcm9tQVBJKFwiL2FwaS9wcm9kdWN0cz9wb3B1bGF0ZT0qXCIpXG5cbiAgcmV0dXJue1xuICAgIHByb3BzOiB7cHJvZHVjdHN9XG4gIH1cbn1cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiSGVyb0Jhbm5lciIsIldyYXBwZXIiLCJQcm9kdWN0Q2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInByb2R1Y3RzIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJuYW1lIiwicCIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});