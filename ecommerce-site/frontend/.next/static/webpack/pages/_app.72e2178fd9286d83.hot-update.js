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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ \"./components/Wrapper.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ \"./components/Menu.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileMenu */ \"./components/MobileMenu.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/api */ \"./utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [mobileMenu, setMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ShowCatMenu, setShowCatMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [Show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"translate-y-0\");\n    const [LastScrollY, setLastScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const controlNavbar = ()=>{\n        if (window.scrollY > 200) {\n            if (window.scrollY < LastScrollY) {\n                setShow(\"-translate-y-[80px]\");\n            } else {\n                setShow(\"shadow-xl\");\n            }\n        } else {\n            setShow(\"translate-y-0\");\n        }\n        setLastScrollY(window.screenY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", controlNavbar);\n        return ()=>{\n            window.removeEventListener(\"scroll\", controlNavbar);\n        };\n    }, [\n        LastScrollY\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        effect;\n        return ()=>{\n            cleanup;\n        };\n    }, [\n        input\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full h-[60px] md:h-[80px]] border-b shadow-sm border-black/[0.1] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 \".concat(Show, \" \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"h-[60px] flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-red-600\",\n                                children: \"E\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 55,\n                                columnNumber: 41\n                            }, undefined),\n                            \"-Commerce App\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    ShowCatMenu: ShowCatMenu,\n                    setShowCatMenu: setShowCatMenu\n                }, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-2 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-10 md:-12 h-8 md:h-12 rounded-full justify-center flex items-center cursor-pointer relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoMdHeartEmpty, {\n                                    className: \"text-[19px] md:text-[24px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-[14px] md:h-[20px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]\",\n                                    children: \"51\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/cart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-8 md:-12 h-8 md:h-12 rounded-full justify-center flex items-center cursor-pointer relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsCart, {\n                                        className: \"text-[15px] md:text-[18px] \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-[14px] md:h-[20px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]\",\n                                        children: \"5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 71,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-8 md:-12 h-8 md:h-12 rounded-full justify-center flex md:hidden items-center cursor-pointer relative\",\n                            children: mobileMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__.VscChromeClose, {\n                                className: \"text-[16px]\",\n                                onClick: ()=>{\n                                    setMobileMenu(false);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_10__.BiMenuAltRight, {\n                                className: \"text-[20px]\",\n                                onClick: ()=>{\n                                    setMobileMenu(true);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 88,\n                            columnNumber: 17\n                        }, undefined),\n                        mobileMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ShowCatMenu: ShowCatMenu,\n                            setShowCatMenu: setShowCatMenu,\n                            setMobileMenu: setMobileMenu\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 99,\n                            columnNumber: 32\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"S4FSGPdmrIRUowo5Rq2gT6wutJc=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoQjtBQUNIO0FBQ0g7QUFDc0I7QUFDUjtBQUNRO0FBQ0M7QUFDWDtBQUNTO0FBRS9DLE1BQU1ZLFNBQVMsSUFBTTs7SUFFakIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTSxDQUFDZ0IsTUFBTUMsUUFBUSxHQUFHakIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDa0IsYUFBYUMsZUFBZSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDb0IsWUFBWUMsY0FBYyxHQUFHckIsK0NBQVFBLENBQUMsSUFBSTtJQUdqRCxNQUFNc0IsZ0JBQWdCLElBQU07UUFDcEIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLEtBQUk7WUFDckIsSUFBR0QsT0FBT0MsT0FBTyxHQUFHTixhQUFZO2dCQUM1QkQsUUFBUTtZQUNaLE9BQUs7Z0JBQ0RBLFFBQVE7WUFDWixDQUFDO1FBRUwsT0FBSztZQUNEQSxRQUFRO1FBQ1osQ0FBQztRQUNERSxlQUFlSSxPQUFPRSxPQUFPO0lBQ2pDO0lBRUF4QixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pzQixPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUNsQyxPQUFPLElBQU07WUFDVEMsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUw7UUFDekM7SUFDSixHQUFHO1FBQUNKO0tBQVk7SUFFaEJqQixnREFBU0EsQ0FBQyxJQUFNO1FBQ1oyQjtRQUNBLE9BQU8sSUFBTTtZQUNUQztRQUNKO0lBQ0osR0FBRztRQUFDQztLQUFNO0lBRWQscUJBQ0ksOERBQUNDO1FBQU9DLFdBQVcscUtBQTBLLE9BQUxoQixNQUFLO2tCQUU3TCw0RUFBQ2QsZ0RBQU9BO1lBQUM4QixXQUFVOzs4QkFFZiw4REFBQzdCLGtEQUFJQTtvQkFBQzhCLE1BQU07OEJBQ1IsNEVBQUNDO3dCQUFHRixXQUFVOzswQ0FBVSw4REFBQ0c7Z0NBQUtILFdBQVU7MENBQWU7Ozs7Ozs0QkFBUTs7Ozs7Ozs7Ozs7OzhCQUduRSw4REFBQzVCLDZDQUFJQTtvQkFBQ1UsYUFBZUE7b0JBQWFDLGdCQUFrQkE7Ozs7Ozs4QkFFcEQsOERBQUNxQjtvQkFBSUosV0FBVTs7c0NBSVgsOERBQUNJOzRCQUFJSixXQUFVOzs4Q0FDWCw4REFBQzNCLDBEQUFjQTtvQ0FBQzJCLFdBQVU7Ozs7Ozs4Q0FDMUIsOERBQUNJO29DQUFJSixXQUFVOzhDQUVvQjs7Ozs7Ozs7Ozs7O3NDQUd2Qyw4REFBQzdCLGtEQUFJQTs0QkFBQzhCLE1BQUs7c0NBQ1AsNEVBQUNHO2dDQUFJSixXQUFVOztrREFDWCw4REFBQzFCLGtEQUFNQTt3Q0FBQzBCLFdBQVU7Ozs7OztrREFDbEIsOERBQUNJO3dDQUFJSixXQUFVO2tEQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBWTNDLDhEQUFDSTs0QkFBSUosV0FBVTtzQ0FDVnBCLDJCQUNHLDhEQUFDSiwyREFBY0E7Z0NBQUN3QixXQUFVO2dDQUFjSyxTQUFTLElBQUk7b0NBQUN4QixjQUFjLEtBQUs7Z0NBQUM7Ozs7OzBEQUUxRSw4REFBQ04sMkRBQWNBO2dDQUFDeUIsV0FBVTtnQ0FBY0ssU0FBUyxJQUFJO29DQUFDeEIsY0FBYyxJQUFJO2dDQUFDOzs7Ozt5Q0FDNUU7Ozs7Ozt3QkFNSkQsNEJBQWMsOERBQUNILG1EQUFVQTs0QkFBQ0ssYUFBZUE7NEJBQWFDLGdCQUFrQkE7NEJBQWdCRixlQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTFIO0dBakdNRjtLQUFBQTtBQW1HTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi9XcmFwcGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IHsgSW9NZEhlYXJ0RW1wdHkgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IEJzQ2FydCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiOyBcbmltcG9ydCB7IEJpTWVudUFsdFJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBWc2NDaHJvbWVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy92c2NcIjtcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vTW9iaWxlTWVudSc7XG5pbXBvcnQgeyBmZXRjaERhdGFGcm9tQVBJIH0gZnJvbSAnQC91dGlscy9hcGknO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbbW9iaWxlTWVudSwgc2V0TW9iaWxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbU2hvd0NhdE1lbnUsIHNldFNob3dDYXRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbU2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShcInRyYW5zbGF0ZS15LTBcIik7XG4gICAgY29uc3QgW0xhc3RTY3JvbGxZLCBzZXRMYXN0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShudWxsKTtcblxuXG4gICAgY29uc3QgY29udHJvbE5hdmJhciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDIwMCl7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPCBMYXN0U2Nyb2xsWSl7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3coXCItdHJhbnNsYXRlLXktWzgwcHhdXCIpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3coJ3NoYWRvdy14bCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2V0U2hvdyhcInRyYW5zbGF0ZS15LTBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldExhc3RTY3JvbGxZKHdpbmRvdy5zY3JlZW5ZKVxuICAgICAgICB9XG5cbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNvbnRyb2xOYXZiYXIpXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNvbnRyb2xOYXZiYXIpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbTGFzdFNjcm9sbFldKTtcblxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgZWZmZWN0XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFudXBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtpbnB1dF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2B3LWZ1bGwgaC1bNjBweF0gbWQ6aC1bODBweF1dIGJvcmRlci1iIHNoYWRvdy1zbSBib3JkZXItYmxhY2svWzAuMV0gYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHotMjAgc3RpY2t5IHRvcC0wIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCAke1Nob3d9IGB9PlxuICAgICAgICBcbiAgICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPSdoLVs2MHB4XSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxuXG4gICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteGwnPjxzcGFuIGNsYXNzTmFtZT0ndGV4dC1yZWQtNjAwJz5FPC9zcGFuPi1Db21tZXJjZSBBcHA8L2gxPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8TWVudSBTaG93Q2F0TWVudSA9IHtTaG93Q2F0TWVudX0gc2V0U2hvd0NhdE1lbnUgPSB7c2V0U2hvd0NhdE1lbnV9Lz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yICc+XG5cbiAgICAgICAgICAgICAgICB7LyoqKioqKioqKioqKioqKioqKioqKiogY2FydCAmIGhlYXJ0IEljb24gKioqKioqKioqKioqKioqKioqKioqKioqL31cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBtZDotMTIgaC04IG1kOmgtMTIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXggIGl0ZW1zLWNlbnRlciAgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPElvTWRIZWFydEVtcHR5IGNsYXNzTmFtZT0ndGV4dC1bMTlweF0gbWQ6dGV4dC1bMjRweF0nLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzE0cHhdIG1kOmgtWzIwcHhdIG1pbi13LVsxNHB4XSBtZDptaW4tdy1bMThweF1cbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1mdWxsIGJnLXJlZC02MDAgYWJzb2x1dGUgdG9wLTEgbGVmdC01IG1kOmxlZnQtNSB0ZXh0LXdoaXRlIHRleHQtWzEwcHhdIG1kOnRleHQtWzEycHhdIGZsZXgganVzdGlmeS1jZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyIHB4LVsycHhdIG1kOnB4LVs1cHhdJz41MTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NhcnQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBtZDotMTIgaC04IG1kOmgtMTIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXggIGl0ZW1zLWNlbnRlciAgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0NhcnQgY2xhc3NOYW1lPSd0ZXh0LVsxNXB4XSBtZDp0ZXh0LVsxOHB4XSAnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVsxNHB4XSBtZDpoLVsyMHB4XSBtaW4tdy1bMTRweF0gbWQ6bWluLXctWzE4cHhdXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWZ1bGwgYmctcmVkLTYwMCBhYnNvbHV0ZSB0b3AtMSBsZWZ0LTUgbWQ6bGVmdC01IHRleHQtd2hpdGUgdGV4dC1bMTBweF0gbWQ6dGV4dC1bMTJweF0gZmxleCBqdXN0aWZ5LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyIHB4LVsycHhdIG1kOnB4LVs1cHhdJz41PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgey8qKioqKioqKioqKioqKioqKioqKioqIGNhcnQgJiBoZWFydCBJY29uICoqKioqKioqKioqKioqKioqKioqKioqKi99XG5cblxuXG4gICAgICAgICAgICAgICAgey8qKioqKioqKioqKioqKioqKioqKioqIE1vYmlsZSBJY29uICoqKioqKioqKioqKioqKioqKioqKioqKi99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBtZDotMTIgaC04ICBtZDpoLTEyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBmbGV4IG1kOmhpZGRlbiAgaXRlbXMtY2VudGVyICBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bW9iaWxlTWVudSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWc2NDaHJvbWVDbG9zZSBjbGFzc05hbWU9J3RleHQtWzE2cHhdJyBvbkNsaWNrPXsoKT0+e3NldE1vYmlsZU1lbnUoZmFsc2UpfX0vPlxuICAgICAgICAgICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCaU1lbnVBbHRSaWdodCBjbGFzc05hbWU9J3RleHQtWzIwcHhdJyBvbkNsaWNrPXsoKT0+e3NldE1vYmlsZU1lbnUodHJ1ZSl9fS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qKioqKioqKioqKioqKioqKioqKioqIE1vYmlsZSBJY29uICoqKioqKioqKioqKioqKioqKioqKioqKi99XG5cbiAgICAgICAgICAgICAgICB7bW9iaWxlTWVudSAmJiA8TW9iaWxlTWVudSBTaG93Q2F0TWVudSA9IHtTaG93Q2F0TWVudX0gc2V0U2hvd0NhdE1lbnUgPSB7c2V0U2hvd0NhdE1lbnV9IHNldE1vYmlsZU1lbnUgPSB7c2V0TW9iaWxlTWVudX0vPn1cblxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9XcmFwcGVyPlxuXG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXcmFwcGVyIiwiTGluayIsIk1lbnUiLCJJb01kSGVhcnRFbXB0eSIsIkJzQ2FydCIsIkJpTWVudUFsdFJpZ2h0IiwiVnNjQ2hyb21lQ2xvc2UiLCJNb2JpbGVNZW51IiwiZmV0Y2hEYXRhRnJvbUFQSSIsIkhlYWRlciIsIm1vYmlsZU1lbnUiLCJzZXRNb2JpbGVNZW51IiwiU2hvd0NhdE1lbnUiLCJzZXRTaG93Q2F0TWVudSIsIlNob3ciLCJzZXRTaG93IiwiTGFzdFNjcm9sbFkiLCJzZXRMYXN0U2Nyb2xsWSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiY29udHJvbE5hdmJhciIsIndpbmRvdyIsInNjcm9sbFkiLCJzY3JlZW5ZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlZmZlY3QiLCJjbGVhbnVwIiwiaW5wdXQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwiaDEiLCJzcGFuIiwiZGl2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});