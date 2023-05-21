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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/helper */ \"./utils/helper.js\");\n\n\n\n\n\nconst ProductCard = (param)=>{\n    let { data: data1  } = param;\n    var _data_attributes, _data_attributes1, _data_attributes2, _data_attributes3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/products/\".concat(data1.attributes.slug),\n        className: \"transform overflow-hidden my-2 mx-2 duration-200 hover:scale-105 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                width: 400,\n                height: 400,\n                src: data1.attributes.thumbnail.data.attributes.url,\n                alt: data1.attributes.name,\n                className: \"rounded-lg shadow-md border \"\n            }, void 0, false, {\n                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg bg-transparent my-4 \",\n                        children: data1 === null || data1 === void 0 ? void 0 : (_data_attributes = data1.attributes) === null || _data_attributes === void 0 ? void 0 : _data_attributes.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center max-w-[540px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mr-3 text-lg font-semibold\",\n                                children: [\n                                    \"₹\",\n                                    data1 === null || data1 === void 0 ? void 0 : (_data_attributes1 = data1.attributes) === null || _data_attributes1 === void 0 ? void 0 : _data_attributes1.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                                lineNumber: 20,\n                                columnNumber: 25\n                            }, undefined),\n                            (data1 === null || data1 === void 0 ? void 0 : (_data_attributes2 = data1.attributes) === null || _data_attributes2 === void 0 ? void 0 : _data_attributes2.orignal_price) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-black/[0.5] text-base font-medium line-through\",\n                                        children: data1 === null || data1 === void 0 ? void 0 : (_data_attributes3 = data1.attributes) === null || _data_attributes3 === void 0 ? void 0 : _data_attributes3.price\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"ml-auto text-green-300 text-base font-medium\",\n                                        children: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__.convertDiscountedPrice)()\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/ProductCard.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nasync function getStaticProps() {\n    const products = await fetchDataFromAPI(\"/api/products?populate=*\");\n    return {\n        props: {\n            data\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDRTtBQUN5QjtBQUV4RCxNQUFNSSxjQUFjLFNBQVk7UUFBWCxFQUFDQyxNQUFBQSxNQUFJLEVBQUM7UUFZdUNBLGtCQUVRQSxtQkFFakRBLG1CQUUyRUE7SUFqQmhHLHFCQUNJLDhEQUFDSixrREFBSUE7UUFBQ0ssTUFBTSxhQUFrQyxPQUFyQkQsTUFBS0UsVUFBVSxDQUFDQyxJQUFJO1FBQUlDLFdBQVU7OzBCQUVuRCw4REFBQ1AsbURBQUtBO2dCQUNGUSxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFLUCxNQUFLRSxVQUFVLENBQUNNLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDRSxVQUFVLENBQUNPLEdBQUc7Z0JBQ2xEQyxLQUFLVixNQUFLRSxVQUFVLENBQUNTLElBQUk7Z0JBQ3pCUCxXQUFVOzs7Ozs7MEJBRWQsOERBQUNRO2dCQUFJUixXQUFVOztrQ0FDWCw4REFBQ1M7d0JBQUdULFdBQVU7a0NBQWdDSixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLG1CQUFBQSxNQUFNRSxVQUFVLGNBQWhCRiw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWtCVyxJQUFGOzs7Ozs7a0NBQzlELDhEQUFDQzt3QkFBSVIsV0FBVTs7MENBQ1gsOERBQUNVO2dDQUFFVixXQUFVOztvQ0FBNkI7b0NBQVFKLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsb0JBQUFBLE1BQU1FLFVBQVUsY0FBaEJGLCtCQUFBQSxLQUFBQSxJQUFBQSxrQkFBa0JlLEtBQUY7Ozs7Ozs7NEJBRWpFZixDQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLG9CQUFBQSxNQUFNRSxVQUFVLGNBQWhCRiwrQkFBQUEsS0FBQUEsSUFBQUEsa0JBQWtCZ0IsYUFBRixtQkFDYjs7a0RBQ0ksOERBQUNGO3dDQUFFVixXQUFVO2tEQUF1REosa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxvQkFBQUEsTUFBTUUsVUFBVSxjQUFoQkYsK0JBQUFBLEtBQUFBLElBQUFBLGtCQUFrQmUsS0FBRjs7Ozs7O2tEQUNwRiw4REFBQ0Q7d0NBQUVWLFdBQVU7a0RBQ1JOLHFFQUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzNEO0tBL0JNQztBQWlDTiwrREFBZUEsV0FBV0EsRUFBQztBQUlwQixlQUFla0IsaUJBQWdCO0lBRXRDLE1BQU1DLFdBQVcsTUFBTUMsaUJBQWlCO0lBRXhDLE9BQU07UUFDRkMsT0FBTztZQUFDcEI7UUFBSTtJQUNoQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qcz9jOWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgY29udmVydERpc2NvdW50ZWRQcmljZSB9IGZyb20gJ0AvdXRpbHMvaGVscGVyJztcblxuY29uc3QgUHJvZHVjdENhcmQgPSAoe2RhdGF9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke2RhdGEuYXR0cmlidXRlcy5zbHVnfWB9IGNsYXNzTmFtZT1cInRyYW5zZm9ybSBvdmVyZmxvdy1oaWRkZW4gbXktMiBteC0yIGR1cmF0aW9uLTIwMCBob3ZlcjpzY2FsZS0xMDUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmF0dHJpYnV0ZXMudGh1bWJuYWlsLmRhdGEuYXR0cmlidXRlcy51cmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17ZGF0YS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1sZyBzaGFkb3ctbWQgYm9yZGVyICdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWxnIGJnLXRyYW5zcGFyZW50IG15LTQgJz57ZGF0YT8uYXR0cmlidXRlcz8ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1heC13LVs1NDBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXItMyB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPiYjODM3Nzt7ZGF0YT8uYXR0cmlidXRlcz8ucHJpY2V9PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YT8uYXR0cmlidXRlcz8ub3JpZ25hbF9wcmljZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrL1swLjVdIHRleHQtYmFzZSBmb250LW1lZGl1bSBsaW5lLXRocm91Z2gnPntkYXRhPy5hdHRyaWJ1dGVzPy5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtYXV0byB0ZXh0LWdyZWVuLTMwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnREaXNjb3VudGVkUHJpY2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L0xpbms+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcblxuY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZXRjaERhdGFGcm9tQVBJKFwiL2FwaS9wcm9kdWN0cz9wb3B1bGF0ZT0qXCIpXG5cbnJldHVybntcbiAgICBwcm9wczoge2RhdGF9XG59XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkltYWdlIiwiY29udmVydERpc2NvdW50ZWRQcmljZSIsIlByb2R1Y3RDYXJkIiwiZGF0YSIsImhyZWYiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwidGh1bWJuYWlsIiwidXJsIiwiYWx0IiwibmFtZSIsImRpdiIsImgyIiwicCIsInByaWNlIiwib3JpZ25hbF9wcmljZSIsImdldFN0YXRpY1Byb3BzIiwicHJvZHVjdHMiLCJmZXRjaERhdGFGcm9tQVBJIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n"));

/***/ })

});