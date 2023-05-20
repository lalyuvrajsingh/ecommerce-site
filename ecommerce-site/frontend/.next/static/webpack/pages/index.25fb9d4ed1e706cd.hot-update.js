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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ProductCard = (param)=>{\n    let { data: data1  } = param;\n    var _data_, _data__attributes, _data_1, _data__attributes1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/products/\",\n        className: \"transform overflow-hidden my-2 mx-2 duration-200 hover:scale-105 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                width: 500,\n                height: 500,\n                src: data1.attributes.ur\n            }, void 0, false, {\n                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg bg-transparent my-4 \",\n                        children: data1 === null || data1 === void 0 ? void 0 : (_data_ = data1[0]) === null || _data_ === void 0 ? void 0 : (_data__attributes = _data_.attributes) === null || _data__attributes === void 0 ? void 0 : _data__attributes.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center max-w-[540px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mr-3 text-lg font-semibold\",\n                            children: [\n                                \"₹\",\n                                data1 === null || data1 === void 0 ? void 0 : (_data_1 = data1[0]) === null || _data_1 === void 0 ? void 0 : (_data__attributes1 = _data_1.attributes) === null || _data__attributes1 === void 0 ? void 0 : _data__attributes1.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nasync function getStaticProps() {\n    const products = await fetchDataFromAPI(\"/api/products?populate=*\");\n    return {\n        props: {\n            data\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNFO0FBRS9CLE1BQU1HLGNBQWMsU0FBWTtRQUFYLEVBQUNDLE1BQUFBLE1BQUksRUFBQztRQVd1Q0EsMkJBRVFBO0lBWnRFLHFCQUNJLDhEQUFDSCxrREFBSUE7UUFBQ0ksTUFBTztRQUFhQyxXQUFVOzswQkFFNUIsOERBQUNKLG1EQUFLQTtnQkFDRkssT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBS0wsTUFBS00sVUFBVSxDQUFDQyxFQUFFOzs7Ozs7MEJBRzNCLDhEQUFDQztnQkFBSU4sV0FBVTs7a0NBQ1gsOERBQUNPO3dCQUFHUCxXQUFVO2tDQUFnQ0Ysa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxTQUFBQSxLQUFNLENBQUMsRUFBRSxjQUFUQSxvQkFBQUEsS0FBQUEsSUFBQUEscUJBQUFBLE9BQVdNLHVEQUFYTixLQUFBQSxzQkFBdUJVLElBQWQ7Ozs7OztrQ0FDdkQsOERBQUNGO3dCQUFJTixXQUFVO2tDQUNYLDRFQUFDUzs0QkFBRVQsV0FBVTs7Z0NBQTZCO2dDQUFRRixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLFVBQUFBLEtBQU0sQ0FBQyxFQUFFLGNBQVRBLHFCQUFBQSxLQUFBQSxJQUFBQSxzQkFBQUEsUUFBV00sd0RBQVhOLEtBQUFBLHVCQUF1QlksS0FBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZW5GO0tBNUJNYjtBQThCTiwrREFBZUEsV0FBV0EsRUFBQztBQUlwQixlQUFlYyxpQkFBZ0I7SUFFdEMsTUFBTUMsV0FBVyxNQUFNQyxpQkFBaUI7SUFFeEMsT0FBTTtRQUNGQyxPQUFPO1lBQUNoQjtRQUFJO0lBQ2hCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzP2M5YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IFByb2R1Y3RDYXJkID0gKHtkYXRhfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvYH0gY2xhc3NOYW1lPVwidHJhbnNmb3JtIG92ZXJmbG93LWhpZGRlbiBteS0yIG14LTIgZHVyYXRpb24tMjAwIGhvdmVyOnNjYWxlLTEwNSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuYXR0cmlidXRlcy51cn1cbiAgICAgICAgICAgICAgICAgICAgLy9hbHQ9e2RhdGEuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbGcgYmctdHJhbnNwYXJlbnQgbXktNCAnPntkYXRhPy5bMF0/LmF0dHJpYnV0ZXM/Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYXgtdy1bNTQwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21yLTMgdGV4dC1sZyBmb250LXNlbWlib2xkJz4mIzgzNzc7e2RhdGE/LlswXT8uYXR0cmlidXRlcz8ucHJpY2V9PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyoqZGF0YS5hdHRyaWJ1dGVzLm9yaWdpbmFsX3ByaWNlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUvWzAuNV0gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxpbmUtdGhyb3VnaCc+e2RhdGEuYXR0cmlidXRlcy5vcmlnaW5hbF9wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtYXV0byB0ZXh0LWdyZWVuLTMwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0nPjIwJSBvZmY8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKi99XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9MaW5rPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG5cbmNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmV0Y2hEYXRhRnJvbUFQSShcIi9hcGkvcHJvZHVjdHM/cG9wdWxhdGU9KlwiKVxuXG5yZXR1cm57XG4gICAgcHJvcHM6IHtkYXRhfVxufVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJJbWFnZSIsIlByb2R1Y3RDYXJkIiwiZGF0YSIsImhyZWYiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImF0dHJpYnV0ZXMiLCJ1ciIsImRpdiIsImgyIiwibmFtZSIsInAiLCJwcmljZSIsImdldFN0YXRpY1Byb3BzIiwicHJvZHVjdHMiLCJmZXRjaERhdGFGcm9tQVBJIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n"));

/***/ })

});