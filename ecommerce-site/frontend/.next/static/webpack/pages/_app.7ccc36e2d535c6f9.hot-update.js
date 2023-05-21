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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ \"./components/Wrapper.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ \"./components/Menu.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileMenu */ \"./components/MobileMenu.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/api */ \"./utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [mobileMenu, setMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ShowCatMenu, setShowCatMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [Show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"translate-y-0\");\n    const [LastScrollY, setLastScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const controlNavbar = ()=>{\n        if (window.scrollY > 200) {\n            if (window.scrollY < LastScrollY) {\n                setShow(\"-translate-y-[80px]\");\n            } else {\n                setShow(\"shadow-xl\");\n            }\n        } else {\n            setShow(\"translate-y-0\");\n        }\n        setLastScrollY(window.screenY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", controlNavbar);\n        return ()=>{\n            window.removeEventListener(\"scroll\", controlNavbar);\n        };\n    }, [\n        LastScrollY\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCategories();\n    }, []);\n    const fetchCategories = async ()=>{\n        const { data  } = (0,_utils_api__WEBPACK_IMPORTED_MODULE_6__.fetchDataFromAPI)(\"/api/categories?populate=*\");\n        setCategories(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full h-[60px] md:h-[80px]] border-b shadow-sm border-black/[0.1] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 \".concat(Show, \" \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"h-[60px] flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-red-600\",\n                                children: \"E\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 57,\n                                columnNumber: 41\n                            }, undefined),\n                            \"-Commerce App\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    ShowCatMenu: ShowCatMenu,\n                    setShowCatMenu: setShowCatMenu\n                }, void 0, false, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-2 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-10 md:-12 h-8 md:h-12 rounded-full justify-center flex items-center cursor-pointer relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoMdHeartEmpty, {\n                                    className: \"text-[19px] md:text-[24px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-[14px] md:h-[20px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]\",\n                                    children: \"51\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/cart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-8 md:-12 h-8 md:h-12 rounded-full justify-center flex items-center cursor-pointer relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsCart, {\n                                        className: \"text-[15px] md:text-[18px] \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-[14px] md:h-[20px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]\",\n                                        children: \"5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 73,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-8 md:-12 h-8 md:h-12 rounded-full justify-center flex md:hidden items-center cursor-pointer relative\",\n                            children: mobileMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__.VscChromeClose, {\n                                className: \"text-[16px]\",\n                                onClick: ()=>{\n                                    setMobileMenu(false);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_10__.BiMenuAltRight, {\n                                className: \"text-[20px]\",\n                                onClick: ()=>{\n                                    setMobileMenu(true);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 90,\n                            columnNumber: 17\n                        }, undefined),\n                        mobileMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ShowCatMenu: ShowCatMenu,\n                            setShowCatMenu: setShowCatMenu,\n                            setMobileMenu: setMobileMenu,\n                            categories: categories\n                        }, void 0, false, {\n                            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                            lineNumber: 101,\n                            columnNumber: 32\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lalyuvrajsingh/Desktop/Projects/Fullstack Web Apps/E-Commerce Website/ecommerce-side/ecommerce-site/frontend/components/Header.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"S4FSGPdmrIRUowo5Rq2gT6wutJc=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL1dyYXBwZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgeyBJb01kSGVhcnRFbXB0eSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IHsgQnNDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7IFxuaW1wb3J0IHsgQmlNZW51QWx0UmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IFZzY0Nocm9tZUNsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL3ZzY1wiO1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9Nb2JpbGVNZW51JztcbmltcG9ydCB7IGZldGNoRGF0YUZyb21BUEkgfSBmcm9tICdAL3V0aWxzL2FwaSc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtTaG93Q2F0TWVudSwgc2V0U2hvd0NhdE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtTaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKFwidHJhbnNsYXRlLXktMFwiKTtcbiAgICBjb25zdCBbTGFzdFNjcm9sbFksIHNldExhc3RTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cbiAgICBjb25zdCBjb250cm9sTmF2YmFyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwKXtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA8IExhc3RTY3JvbGxZKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvdyhcIi10cmFuc2xhdGUteS1bODBweF1cIilcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvdygnc2hhZG93LXhsJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBzZXRTaG93KFwidHJhbnNsYXRlLXktMFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0TGFzdFNjcm9sbFkod2luZG93LnNjcmVlblkpXG4gICAgICAgIH1cblxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY29udHJvbE5hdmJhcilcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY29udHJvbE5hdmJhcilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtMYXN0U2Nyb2xsWV0pO1xuXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBmZXRjaENhdGVnb3JpZXMoKVxuICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gZmV0Y2hEYXRhRnJvbUFQSSgnL2FwaS9jYXRlZ29yaWVzP3BvcHVsYXRlPSonKVxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKVxuICAgICAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YHctZnVsbCBoLVs2MHB4XSBtZDpoLVs4MHB4XV0gYm9yZGVyLWIgc2hhZG93LXNtIGJvcmRlci1ibGFjay9bMC4xXSBiZy13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gei0yMCBzdGlja3kgdG9wLTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwICR7U2hvd30gYH0+XG4gICAgICAgIFxuICAgICAgICA8V3JhcHBlciBjbGFzc05hbWU9J2gtWzYwcHhdIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC14bCc+PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXJlZC02MDAnPkU8L3NwYW4+LUNvbW1lcmNlIEFwcDwvaDE+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxNZW51IFNob3dDYXRNZW51ID0ge1Nob3dDYXRNZW51fSBzZXRTaG93Q2F0TWVudSA9IHtzZXRTaG93Q2F0TWVudX0vPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgJz5cblxuICAgICAgICAgICAgICAgIHsvKioqKioqKioqKioqKioqKioqKioqKiBjYXJ0ICYgaGVhcnQgSWNvbiAqKioqKioqKioqKioqKioqKioqKioqKiovfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIG1kOi0xMiBoLTggbWQ6aC0xMiByb3VuZGVkLWZ1bGwganVzdGlmeS1jZW50ZXIgZmxleCAgaXRlbXMtY2VudGVyICBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW9NZEhlYXJ0RW1wdHkgY2xhc3NOYW1lPSd0ZXh0LVsxOXB4XSBtZDp0ZXh0LVsyNHB4XScvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bMTRweF0gbWQ6aC1bMjBweF0gbWluLXctWzE0cHhdIG1kOm1pbi13LVsxOHB4XVxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWZ1bGwgYmctcmVkLTYwMCBhYnNvbHV0ZSB0b3AtMSBsZWZ0LTUgbWQ6bGVmdC01IHRleHQtd2hpdGUgdGV4dC1bMTBweF0gbWQ6dGV4dC1bMTJweF0gZmxleCBqdXN0aWZ5LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy1jZW50ZXIgcHgtWzJweF0gbWQ6cHgtWzVweF0nPjUxPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY2FydCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IG1kOi0xMiBoLTggbWQ6aC0xMiByb3VuZGVkLWZ1bGwganVzdGlmeS1jZW50ZXIgZmxleCAgaXRlbXMtY2VudGVyICBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJzQ2FydCBjbGFzc05hbWU9J3RleHQtWzE1cHhdIG1kOnRleHQtWzE4cHhdICcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzE0cHhdIG1kOmgtWzIwcHhdIG1pbi13LVsxNHB4XSBtZDptaW4tdy1bMThweF1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtZnVsbCBiZy1yZWQtNjAwIGFic29sdXRlIHRvcC0xIGxlZnQtNSBtZDpsZWZ0LTUgdGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSBtZDp0ZXh0LVsxMnB4XSBmbGV4IGp1c3RpZnktY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy1jZW50ZXIgcHgtWzJweF0gbWQ6cHgtWzVweF0nPjU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB7LyoqKioqKioqKioqKioqKioqKioqKiogY2FydCAmIGhlYXJ0IEljb24gKioqKioqKioqKioqKioqKioqKioqKioqL31cblxuXG5cbiAgICAgICAgICAgICAgICB7LyoqKioqKioqKioqKioqKioqKioqKiogTW9iaWxlIEljb24gKioqKioqKioqKioqKioqKioqKioqKioqL31cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IG1kOi0xMiBoLTggIG1kOmgtMTIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXggbWQ6aGlkZGVuICBpdGVtcy1jZW50ZXIgIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIHttb2JpbGVNZW51ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFZzY0Nocm9tZUNsb3NlIGNsYXNzTmFtZT0ndGV4dC1bMTZweF0nIG9uQ2xpY2s9eygpPT57c2V0TW9iaWxlTWVudShmYWxzZSl9fS8+XG4gICAgICAgICAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJpTWVudUFsdFJpZ2h0IGNsYXNzTmFtZT0ndGV4dC1bMjBweF0nIG9uQ2xpY2s9eygpPT57c2V0TW9iaWxlTWVudSh0cnVlKX19Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyoqKioqKioqKioqKioqKioqKioqKiogTW9iaWxlIEljb24gKioqKioqKioqKioqKioqKioqKioqKioqL31cblxuICAgICAgICAgICAgICAgIHttb2JpbGVNZW51ICYmIDxNb2JpbGVNZW51IFxuICAgICAgICAgICAgICAgIFNob3dDYXRNZW51ID0ge1Nob3dDYXRNZW51fSBcbiAgICAgICAgICAgICAgICBzZXRTaG93Q2F0TWVudSA9IHtzZXRTaG93Q2F0TWVudX0gXG4gICAgICAgICAgICAgICAgc2V0TW9iaWxlTWVudSA9IHtzZXRNb2JpbGVNZW51fVxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSB7Y2F0ZWdvcmllc31cbiAgICAgICAgICAgICAgICAvPn1cblxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9XcmFwcGVyPlxuXG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXcmFwcGVyIiwiTGluayIsIk1lbnUiLCJJb01kSGVhcnRFbXB0eSIsIkJzQ2FydCIsIkJpTWVudUFsdFJpZ2h0IiwiVnNjQ2hyb21lQ2xvc2UiLCJNb2JpbGVNZW51IiwiZmV0Y2hEYXRhRnJvbUFQSSIsIkhlYWRlciIsIm1vYmlsZU1lbnUiLCJzZXRNb2JpbGVNZW51IiwiU2hvd0NhdE1lbnUiLCJzZXRTaG93Q2F0TWVudSIsIlNob3ciLCJzZXRTaG93IiwiTGFzdFNjcm9sbFkiLCJzZXRMYXN0U2Nyb2xsWSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiY29udHJvbE5hdmJhciIsIndpbmRvdyIsInNjcm9sbFkiLCJzY3JlZW5ZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaENhdGVnb3JpZXMiLCJkYXRhIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaHJlZiIsImgxIiwic3BhbiIsImRpdiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});