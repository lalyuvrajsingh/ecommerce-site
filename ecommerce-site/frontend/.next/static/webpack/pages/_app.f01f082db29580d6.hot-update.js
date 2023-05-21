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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ \"./components/Wrapper.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ \"./components/Menu.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileMenu */ \"./components/MobileMenu.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/api */ \"./utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [mobileMenu, setMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ShowCatMenu, setShowCatMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [Show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"translate-y-0\");\n    const [LastScrollY, setLastScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const controlNavbar = ()=>{\n        if (window.scrollY > 200) {\n            if (window.scrollY < LastScrollY) {\n                setShow(\"-translate-y-[80px]\");\n            } else {\n                setShow(\"shadow-xl\");\n            }\n        } else {\n            setShow(\"translate-y-0\");\n        }\n        setLastScrollY(window.screenY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", controlNavbar);\n        return ()=>{\n            window.removeEventListener(\"scroll\", controlNavbar);\n        };\n    }, [\n        LastScrollY\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCategories();\n    }, []);\n    const fetchCategories = async ()=>{\n        const { data  } = (0,_utils_api__WEBPACK_IMPORTED_MODULE_6__.fetchDataFromAPI)(\"/api/categories?populate=*\");\n        setCategories(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full h-[60px] md:h-[80px]] border-b shadow-sm border-black/[0.1] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 \".concat(Show, \" \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"h-[60px] flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-red-600\",\n                                children: \"E\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 57,\n                                columnNumber: 41\n                            }, undefined),\n                            \"-Commerce App\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    ShowCatMenu: ShowCatMenu,\n                    setShowCatMenu: setShowCatMenu,\n                    categories: categories\n                }, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-2 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-10 md:-12 h-8 md:h-12 rounded-full justify-center flex items-center cursor-pointer relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoMdHeartEmpty, {\n                                    className: \"text-[19px] md:text-[24px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-[14px] md:h-[20px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]\",\n                                    children: \"51\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 70,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/cart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-8 md:-12 h-8 md:h-12 rounded-full justify-center flex items-center cursor-pointer relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsCart, {\n                                        className: \"text-[15px] md:text-[18px] \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-[14px] md:h-[20px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]\",\n                                        children: \"5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-8 md:-12 h-8 md:h-12 rounded-full justify-center flex md:hidden items-center cursor-pointer relative\",\n                            children: mobileMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__.VscChromeClose, {\n                                className: \"text-[16px]\",\n                                onClick: ()=>{\n                                    setMobileMenu(false);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 96,\n                                columnNumber: 25\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_10__.BiMenuAltRight, {\n                                className: \"text-[20px]\",\n                                onClick: ()=>{\n                                    setMobileMenu(true);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 94,\n                            columnNumber: 17\n                        }, undefined),\n                        mobileMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ShowCatMenu: ShowCatMenu,\n                            setShowCatMenu: setShowCatMenu,\n                            setMobileMenu: setMobileMenu,\n                            categories: categories\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 105,\n                            columnNumber: 32\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"S4FSGPdmrIRUowo5Rq2gT6wutJc=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL1dyYXBwZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgeyBJb01kSGVhcnRFbXB0eSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IHsgQnNDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7IFxuaW1wb3J0IHsgQmlNZW51QWx0UmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IFZzY0Nocm9tZUNsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL3ZzY1wiO1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9Nb2JpbGVNZW51JztcbmltcG9ydCB7IGZldGNoRGF0YUZyb21BUEkgfSBmcm9tICdAL3V0aWxzL2FwaSc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtTaG93Q2F0TWVudSwgc2V0U2hvd0NhdE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtTaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKFwidHJhbnNsYXRlLXktMFwiKTtcbiAgICBjb25zdCBbTGFzdFNjcm9sbFksIHNldExhc3RTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cbiAgICBjb25zdCBjb250cm9sTmF2YmFyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwKXtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA8IExhc3RTY3JvbGxZKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvdyhcIi10cmFuc2xhdGUteS1bODBweF1cIilcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvdygnc2hhZG93LXhsJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBzZXRTaG93KFwidHJhbnNsYXRlLXktMFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0TGFzdFNjcm9sbFkod2luZG93LnNjcmVlblkpXG4gICAgICAgIH1cblxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY29udHJvbE5hdmJhcilcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY29udHJvbE5hdmJhcilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtMYXN0U2Nyb2xsWV0pO1xuXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBmZXRjaENhdGVnb3JpZXMoKVxuICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gZmV0Y2hEYXRhRnJvbUFQSSgnL2FwaS9jYXRlZ29yaWVzP3BvcHVsYXRlPSonKVxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKVxuICAgICAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YHctZnVsbCBoLVs2MHB4XSBtZDpoLVs4MHB4XV0gYm9yZGVyLWIgc2hhZG93LXNtIGJvcmRlci1ibGFjay9bMC4xXSBiZy13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gei0yMCBzdGlja3kgdG9wLTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwICR7U2hvd30gYH0+XG4gICAgICAgIFxuICAgICAgICA8V3JhcHBlciBjbGFzc05hbWU9J2gtWzYwcHhdIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC14bCc+PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXJlZC02MDAnPkU8L3NwYW4+LUNvbW1lcmNlIEFwcDwvaDE+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxNZW51IFxuICAgICAgICAgICAgU2hvd0NhdE1lbnUgPSB7U2hvd0NhdE1lbnV9IFxuICAgICAgICAgICAgc2V0U2hvd0NhdE1lbnUgPSB7c2V0U2hvd0NhdE1lbnV9XG4gICAgICAgICAgICBjYXRlZ29yaWVzID0ge2NhdGVnb3JpZXN9IFxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yICc+XG5cbiAgICAgICAgICAgICAgICB7LyoqKioqKioqKioqKioqKioqKioqKiogY2FydCAmIGhlYXJ0IEljb24gKioqKioqKioqKioqKioqKioqKioqKioqL31cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBtZDotMTIgaC04IG1kOmgtMTIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXggIGl0ZW1zLWNlbnRlciAgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPElvTWRIZWFydEVtcHR5IGNsYXNzTmFtZT0ndGV4dC1bMTlweF0gbWQ6dGV4dC1bMjRweF0nLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzE0cHhdIG1kOmgtWzIwcHhdIG1pbi13LVsxNHB4XSBtZDptaW4tdy1bMThweF1cbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1mdWxsIGJnLXJlZC02MDAgYWJzb2x1dGUgdG9wLTEgbGVmdC01IG1kOmxlZnQtNSB0ZXh0LXdoaXRlIHRleHQtWzEwcHhdIG1kOnRleHQtWzEycHhdIGZsZXgganVzdGlmeS1jZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyIHB4LVsycHhdIG1kOnB4LVs1cHhdJz41MTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NhcnQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBtZDotMTIgaC04IG1kOmgtMTIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXggIGl0ZW1zLWNlbnRlciAgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0NhcnQgY2xhc3NOYW1lPSd0ZXh0LVsxNXB4XSBtZDp0ZXh0LVsxOHB4XSAnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVsxNHB4XSBtZDpoLVsyMHB4XSBtaW4tdy1bMTRweF0gbWQ6bWluLXctWzE4cHhdXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWZ1bGwgYmctcmVkLTYwMCBhYnNvbHV0ZSB0b3AtMSBsZWZ0LTUgbWQ6bGVmdC01IHRleHQtd2hpdGUgdGV4dC1bMTBweF0gbWQ6dGV4dC1bMTJweF0gZmxleCBqdXN0aWZ5LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyIHB4LVsycHhdIG1kOnB4LVs1cHhdJz41PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgey8qKioqKioqKioqKioqKioqKioqKioqIGNhcnQgJiBoZWFydCBJY29uICoqKioqKioqKioqKioqKioqKioqKioqKi99XG5cblxuXG4gICAgICAgICAgICAgICAgey8qKioqKioqKioqKioqKioqKioqKioqIE1vYmlsZSBJY29uICoqKioqKioqKioqKioqKioqKioqKioqKi99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBtZDotMTIgaC04ICBtZDpoLTEyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBmbGV4IG1kOmhpZGRlbiAgaXRlbXMtY2VudGVyICBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bW9iaWxlTWVudSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWc2NDaHJvbWVDbG9zZSBjbGFzc05hbWU9J3RleHQtWzE2cHhdJyBvbkNsaWNrPXsoKT0+e3NldE1vYmlsZU1lbnUoZmFsc2UpfX0vPlxuICAgICAgICAgICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCaU1lbnVBbHRSaWdodCBjbGFzc05hbWU9J3RleHQtWzIwcHhdJyBvbkNsaWNrPXsoKT0+e3NldE1vYmlsZU1lbnUodHJ1ZSl9fS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qKioqKioqKioqKioqKioqKioqKioqIE1vYmlsZSBJY29uICoqKioqKioqKioqKioqKioqKioqKioqKi99XG5cbiAgICAgICAgICAgICAgICB7bW9iaWxlTWVudSAmJiA8TW9iaWxlTWVudSBcbiAgICAgICAgICAgICAgICBTaG93Q2F0TWVudSA9IHtTaG93Q2F0TWVudX0gXG4gICAgICAgICAgICAgICAgc2V0U2hvd0NhdE1lbnUgPSB7c2V0U2hvd0NhdE1lbnV9IFxuICAgICAgICAgICAgICAgIHNldE1vYmlsZU1lbnUgPSB7c2V0TW9iaWxlTWVudX1cbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzID0ge2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgICAgLz59XG5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvV3JhcHBlcj5cblxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV3JhcHBlciIsIkxpbmsiLCJNZW51IiwiSW9NZEhlYXJ0RW1wdHkiLCJCc0NhcnQiLCJCaU1lbnVBbHRSaWdodCIsIlZzY0Nocm9tZUNsb3NlIiwiTW9iaWxlTWVudSIsImZldGNoRGF0YUZyb21BUEkiLCJIZWFkZXIiLCJtb2JpbGVNZW51Iiwic2V0TW9iaWxlTWVudSIsIlNob3dDYXRNZW51Iiwic2V0U2hvd0NhdE1lbnUiLCJTaG93Iiwic2V0U2hvdyIsIkxhc3RTY3JvbGxZIiwic2V0TGFzdFNjcm9sbFkiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImNvbnRyb2xOYXZiYXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2NyZWVuWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmV0Y2hDYXRlZ29yaWVzIiwiZGF0YSIsImhlYWRlciIsImNsYXNzTmFtZSIsImhyZWYiLCJoMSIsInNwYW4iLCJkaXYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});