"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoaded(true);\n    }, []);\n    // 4x4のグリッドを作成\n    const pieces = Array.from({\n        length: 16\n    }, (_, i)=>({\n            id: i,\n            row: Math.floor(i / 4),\n            col: i % 4\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-screen h-screen overflow-hidden bg-sky-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 grid grid-cols-4 grid-rows-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                    children: isLoaded && pieces.map((piece)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            className: \"relative overflow-hidden\",\n                            initial: {\n                                opacity: 0,\n                                y: 100,\n                                scale: 0.8\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0,\n                                scale: 1\n                            },\n                            transition: {\n                                duration: 1.2,\n                                delay: piece.row * 0.1 + piece.col * 0.1,\n                                ease: [\n                                    0.23,\n                                    1,\n                                    0.32,\n                                    1\n                                ]\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-cover bg-center\",\n                                    style: {\n                                        backgroundImage: \"url('/sky01.svg')\",\n                                        backgroundPosition: \"\".concat(-piece.col * 100, \"% \").concat(-piece.row * 100, \"%\"),\n                                        filter: isLoaded ? \"none\" : \"blur(10px)\",\n                                        transition: \"filter 1.5s ease-out\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                    className: \"absolute inset-0 bg-white\",\n                                    initial: {\n                                        opacity: 0.3\n                                    },\n                                    animate: {\n                                        opacity: 0\n                                    },\n                                    transition: {\n                                        duration: 1.5,\n                                        delay: piece.row * 0.1 + piece.col * 0.1 + 0.5\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, piece.id, true, {\n                            fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"https://asase.sakura.ne.jp/\",\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                className: \"absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                        src: \"/logo.svg\",\n                        alt: \"Logo\",\n                        className: \"w-800 h-1\" // ロゴのサイズを3倍に設定\n                        ,\n                        initial: {\n                            opacity: 0,\n                            y: 50\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        transition: {\n                            duration: 2,\n                            delay: 2.5,\n                            ease: [\n                                0.23,\n                                1,\n                                0.32,\n                                1\n                            ]\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"flex items-center mt-4\",\n                        initial: {\n                            opacity: 0,\n                            y: 10\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: [\n                                10,\n                                20,\n                                10\n                            ]\n                        },\n                        transition: {\n                            duration: 1.5,\n                            repeat: Infinity,\n                            ease: \"easeInOut\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mr-2 text-lg font-bold text-white\",\n                                style: {\n                                    textShadow: \"2px 2px 4px #888\"\n                                },\n                                children: \"Click!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                className: \"w-4 h-4 border-t-2 border-l-2 border-white rotate-45\",\n                                animate: {\n                                    x: [\n                                        0,\n                                        5,\n                                        0\n                                    ]\n                                },\n                                transition: {\n                                    duration: 0.5,\n                                    repeat: Infinity,\n                                    ease: \"easeInOut\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/pg/projects/250101/sky-puzzle-animation/app/page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"e/1lVN3R6kIvuSIAmUIHNmZXQsc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVEMsV0FBVTtnQ0FDVk8sU0FBUztvQ0FBRW9CLEdBQUc7d0NBQUM7d0NBQUc7d0NBQUc7cUNBQUU7Z0NBQUM7Z0NBQ3hCbkIsWUFBWTtvQ0FDVkMsVUFBVTtvQ0FDVmMsUUFBUUM7b0NBQ1JiLE1BQU07Z0NBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBbEh3QjFCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICAvLyA0eDTjga7jgrDjg6rjg4Pjg4njgpLkvZzmiJBcbiAgY29uc3QgcGllY2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTYgfSwgKF8sIGkpID0+ICh7XG4gICAgaWQ6IGksXG4gICAgcm93OiBNYXRoLmZsb29yKGkgLyA0KSxcbiAgICBjb2w6IGkgJSA0LFxuICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctc2NyZWVuIGgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiBiZy1za3ktOTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZ3JpZCBncmlkLWNvbHMtNCBncmlkLXJvd3MtNFwiPlxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIHtpc0xvYWRlZCAmJlxuICAgICAgICAgICAgcGllY2VzLm1hcCgocGllY2UpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e3BpZWNlLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiAwLjgsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEuMixcbiAgICAgICAgICAgICAgICAgIGRlbGF5OiBwaWVjZS5yb3cgKiAwLjEgKyBwaWVjZS5jb2wgKiAwLjEsXG4gICAgICAgICAgICAgICAgICBlYXNlOiBbMC4yMywgMSwgMC4zMiwgMV0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctY292ZXIgYmctY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnL3NreTAxLnN2ZycpYCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBgJHstcGllY2UuY29sICogMTAwfSUgJHstcGllY2Uucm93ICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGlzTG9hZGVkID8gXCJub25lXCIgOiBcImJsdXIoMTBweClcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJmaWx0ZXIgMS41cyBlYXNlLW91dFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMC4zIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IHBpZWNlLnJvdyAqIDAuMSArIHBpZWNlLmNvbCAqIDAuMSArIDAuNSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2FzYXNlLnNha3VyYS5uZS5qcC9cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTE2IGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgID5cbiAgICAgICAgey8qIOODreOCtCAqL31cbiAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICBzcmM9XCIvbG9nby5zdmdcIlxuICAgICAgICAgIGFsdD1cIkxvZ29cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctODAwIGgtMVwiIC8vIOODreOCtOOBruOCteOCpOOCuuOCkjPlgI3jgavoqK3lrppcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDUwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgICBkZWxheTogMi41LCAvLyDjgZnjgbnjgabjga7jgrDjg6rjg4Pjg4njgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgYzlrozkuobjgZfjgZ/lvoxcbiAgICAgICAgICAgIGVhc2U6IFswLjIzLCAxLCAwLjMyLCAxXSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiDjgq/jg6rjg4Pjgq/kv4PjgZnjgqLjg4vjg6Hjg7zjgrfjg6fjg7MgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNFwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogWzEwLCAyMCwgMTBdIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRleHRTaGFkb3c6IFwiMnB4IDJweCA0cHggIzg4OFwiLCAvLyDjg4njg63jg4Pjg5fjgrfjg6Pjg4njgqbjgpLov73liqBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xpY2shXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IGJvcmRlci10LTIgYm9yZGVyLWwtMiBib3JkZXItd2hpdGUgcm90YXRlLTQ1XCJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeDogWzAsIDUsIDBdIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkhvbWUiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwicGllY2VzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJpZCIsInJvdyIsIk1hdGgiLCJmbG9vciIsImNvbCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBpZWNlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJlYXNlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJmaWx0ZXIiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImltZyIsInNyYyIsImFsdCIsInJlcGVhdCIsIkluZmluaXR5Iiwic3BhbiIsInRleHRTaGFkb3ciLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});