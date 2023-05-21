"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\nconst Menu = (param)=>{\n    let { ShowCatMenu , setShowCatMenu , categories  } = param;\n    const data = [\n        {\n            id: 1,\n            name: \"Home\",\n            url: \"/\"\n        },\n        {\n            id: 2,\n            name: \"About\",\n            url: \"/about\"\n        },\n        {\n            id: 3,\n            name: \"Categories\",\n            subMenu: true\n        },\n        {\n            id: 4,\n            name: \"Contact\",\n            url: \"/contact\"\n        }\n    ];\n    const subMenuData = [\n        {\n            id: 1,\n            name: \"Jordan\",\n            doc_count: 11\n        },\n        {\n            id: 2,\n            name: \"Sneakers\",\n            doc_count: 8\n        },\n        {\n            id: 3,\n            name: \"Running shoes\",\n            doc_count: 64\n        },\n        {\n            id: 4,\n            name: \"Football shoes\",\n            doc_count: 107\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden md:flex items-center gap-8 font-medium list-none\",\n        children: data.map((item)=>{\n            var _s = $RefreshSig$();\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n                children: !!(item === null || item === void 0 ? void 0 : item.subMenu) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor-pointer flex items-center gap-2 relative\",\n                    onMouseEnter: ()=>{\n                        setShowCatMenu(true);\n                    },\n                    onMouseLeave: ()=>{\n                        setShowCatMenu(false);\n                    },\n                    children: [\n                        item.name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsChevronDown, {\n                            size: 14\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, undefined),\n                        ShowCatMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"bg-black absolute top-6 left-0 min-w-[250px] px-1 py-1 rounded-xl text-white shadow-white shadow-lg\",\n                            children: categories === null || categories === void 0 ? void 0 : categories.map(_s((param)=>{\n                                let { attributes  } = param;\n                                _s();\n                                useEffect(()=>{\n                                    fetchCategories();\n                                }, []);\n                                const fetchCategories = async ()=>{\n                                    const { data  } = fetchDataFromAPI(\"/api/categories?populate=*\");\n                                    setCategories(data);\n                                };\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/category/\".concat(attributes === null || attributes === void 0 ? void 0 : attributes.slug),\n                                    onClick: ()=>{\n                                        setShowCatMenu(false);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"h-12 flex justify-between items-center px-3 hover:bg-white/[0.1] rounded-md border-1 border-gray-50\",\n                                        children: [\n                                            attributes === null || attributes === void 0 ? void 0 : attributes.name,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"opacity-50 text-sm\",\n                                                children: \"($)\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 41\n                                    }, undefined)\n                                }, data.id, false, {\n                                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 37\n                                }, undefined);\n                            }, \"OD7bBpZva5O2jO+Puf00hKivP7c=\"))\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n                            lineNumber: 34,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: item === null || item === void 0 ? void 0 : item.url,\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n                    lineNumber: 64,\n                    columnNumber: 18\n                }, undefined)\n            }, item.id, false, {\n                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Menu.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZCO0FBQ0g7QUFDbUI7QUFFN0MsTUFBTUcsT0FBTyxTQUErQztRQUE5QyxFQUFDQyxZQUFXLEVBQUVDLGVBQWMsRUFBRUMsV0FBVSxFQUFDO0lBRW5ELE1BQU1DLE9BQU87UUFDVDtZQUFFQyxJQUFJO1lBQUdDLE1BQU07WUFBUUMsS0FBSztRQUFJO1FBQ2hDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFTQyxLQUFLO1FBQVM7UUFDdEM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQWNFLFNBQVMsSUFBSTtRQUFDO1FBQzNDO1lBQUVILElBQUk7WUFBR0MsTUFBTTtZQUFXQyxLQUFLO1FBQVc7S0FDekM7SUFDRCxNQUFNRSxjQUFjO1FBQ3BCO1lBQUVKLElBQUk7WUFBR0MsTUFBTTtZQUFVSSxXQUFXO1FBQUc7UUFDdkM7WUFBRUwsSUFBSTtZQUFHQyxNQUFNO1lBQVlJLFdBQVc7UUFBRTtRQUN4QztZQUFFTCxJQUFJO1lBQUdDLE1BQU07WUFBaUJJLFdBQVc7UUFBRztRQUM5QztZQUFFTCxJQUFJO1lBQUdDLE1BQU07WUFBa0JJLFdBQVc7UUFBSTtLQUMvQztJQUdMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNkUixLQUFLUyxHQUFHLENBQUMsQ0FBQ0MsT0FBTzs7WUFDZCxxQkFDQSw4REFBQ2hCLHVEQUFjOzBCQUNWLENBQUMsQ0FBQ2dCLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTU4sT0FBTyxrQkFDWiw4REFBQ1E7b0JBQUdKLFdBQVU7b0JBQ2RLLGNBQWMsSUFBSTt3QkFBQ2YsZUFBZSxJQUFJO29CQUFDO29CQUN2Q2dCLGNBQWMsSUFBSTt3QkFBQ2hCLGVBQWUsS0FBSztvQkFBQzs7d0JBQ25DWSxLQUFLUixJQUFJO3NDQUNWLDhEQUFDUCx5REFBYUE7NEJBQUNvQixNQUFNOzs7Ozs7d0JBRXBCbEIsNkJBQ0csOERBQUNtQjs0QkFBR1IsV0FBVTtzQ0FDeURULHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWVUsR0FBRyxJQUFDLFNBQWdCO29DQUFmLEVBQUNRLFdBQVUsRUFBQzs7Z0NBR3hIQyxVQUFVLElBQU07b0NBQ1pDO2dDQUNKLEdBQUcsRUFBRTtnQ0FFTCxNQUFNQSxrQkFBa0IsVUFBWTtvQ0FDaEMsTUFBTSxFQUFDbkIsS0FBSSxFQUFDLEdBQUdvQixpQkFBaUI7b0NBQ2hDQyxjQUFjckI7Z0NBQ2xCO2dDQUV3QixxQkFDSSw4REFBQ1Asa0RBQUlBO29DQUFlNkIsTUFBTSxhQUE4QixPQUFqQkwsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZTSxJQUFJO29DQUFJQyxTQUFTLElBQUk7d0NBQUMxQixlQUFlLEtBQUs7b0NBQUM7OENBQzFGLDRFQUFDYzt3Q0FBR0osV0FBVTs7NENBR2JTLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWWYsSUFBSTswREFDakIsOERBQUN1QjtnREFBS2pCLFdBQVU7MERBQXVCOzs7Ozs7Ozs7Ozs7bUNBTGhDUixLQUFLQyxFQUFFOzs7Ozs0QkFXMUI7Ozs7Ozs7Ozs7OzhDQUtYLDhEQUFDVztvQkFBR0osV0FBVTs4QkFDWCw0RUFBQ2Ysa0RBQUlBO3dCQUFDNkIsTUFBTVosaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNUCxHQUFHO2tDQUFHTyxLQUFLUixJQUFJOzs7Ozs7Ozs7OzZCQUMvQjtlQXpDV1EsS0FBS1QsRUFBRTs7Ozs7UUE0Q2hDOzs7Ozs7QUFHUjtLQW5FTUw7QUFxRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzPzA2ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0JzQ2hldnJvbkRvd259IGZyb20gICdyZWFjdC1pY29ucy9icydcblxuY29uc3QgTWVudSA9ICh7U2hvd0NhdE1lbnUsIHNldFNob3dDYXRNZW51LCBjYXRlZ29yaWVzfSkgPT4ge1xuXG4gICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJIb21lXCIsIHVybDogXCIvXCIgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJBYm91dFwiLCB1cmw6IFwiL2Fib3V0XCIgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogXCJDYXRlZ29yaWVzXCIsIHN1Yk1lbnU6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogXCJDb250YWN0XCIsIHVybDogXCIvY29udGFjdFwiIH0sXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHN1Yk1lbnVEYXRhID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIkpvcmRhblwiLCBkb2NfY291bnQ6IDExIH0sXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6IFwiU25lYWtlcnNcIiwgZG9jX2NvdW50OiA4IH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiUnVubmluZyBzaG9lc1wiLCBkb2NfY291bnQ6IDY0IH0sXG4gICAgICAgIHsgaWQ6IDQsIG5hbWU6IFwiRm9vdGJhbGwgc2hvZXNcIiwgZG9jX2NvdW50OiAxMDcgfSxcbiAgICAgICAgXTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOCBmb250LW1lZGl1bSAgbGlzdC1ub25lJz5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIHshIWl0ZW0/LnN1Yk1lbnUgPyhcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCk9PntzZXRTaG93Q2F0TWVudSh0cnVlKX19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCk9PntzZXRTaG93Q2F0TWVudShmYWxzZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnNDaGV2cm9uRG93biBzaXplPXsxNH0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7U2hvd0NhdE1lbnUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2JnLWJsYWNrIGFic29sdXRlIHRvcC02IGxlZnQtMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13LVsyNTBweF0gcHgtMSBweS0xIHJvdW5kZWQteGwgdGV4dC13aGl0ZSBzaGFkb3ctd2hpdGUgc2hhZG93LWxnJz57Y2F0ZWdvcmllcz8ubWFwKCh7YXR0cmlidXRlc30pPT57XG5cblxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgZmV0Y2hDYXRlZ29yaWVzKClcbiAgICAgICAgfSwgW10pO1xuXG4gICAgICAgIGNvbnN0IGZldGNoQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGZldGNoRGF0YUZyb21BUEkoJy9hcGkvY2F0ZWdvcmllcz9wb3B1bGF0ZT0qJylcbiAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2RhdGEuaWR9IGhyZWY9e2AvY2F0ZWdvcnkvJHthdHRyaWJ1dGVzPy5zbHVnfWB9IG9uQ2xpY2s9eygpPT57c2V0U2hvd0NhdE1lbnUoZmFsc2UpfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2gtMTIgZmxleCBqdXN0aWZ5LWJldHdlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy1jZW50ZXIgcHgtMyBob3ZlcjpiZy13aGl0ZS9bMC4xXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtbWQgYm9yZGVyLTEgYm9yZGVyLWdyYXktNTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzPy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nb3BhY2l0eS01MCB0ZXh0LXNtJz57YCgkKWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfTwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAoPGxpIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtPy51cmx9PntpdGVtLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkJzQ2hldnJvbkRvd24iLCJNZW51IiwiU2hvd0NhdE1lbnUiLCJzZXRTaG93Q2F0TWVudSIsImNhdGVnb3JpZXMiLCJkYXRhIiwiaWQiLCJuYW1lIiwidXJsIiwic3ViTWVudSIsInN1Yk1lbnVEYXRhIiwiZG9jX2NvdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsIkZyYWdtZW50IiwibGkiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzaXplIiwidWwiLCJhdHRyaWJ1dGVzIiwidXNlRWZmZWN0IiwiZmV0Y2hDYXRlZ29yaWVzIiwiZmV0Y2hEYXRhRnJvbUFQSSIsInNldENhdGVnb3JpZXMiLCJocmVmIiwic2x1ZyIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu.js\n"));

/***/ })

});