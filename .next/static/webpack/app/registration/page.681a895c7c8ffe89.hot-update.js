"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/registration/page",{

/***/ "(app-pages-browser)/./src/app/registration/page.tsx":
/*!***************************************!*\
  !*** ./src/app/registration/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"(app-pages-browser)/./node_modules/yup/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nfunction Registration() {\n    const initialValues = {\n        username: \"\",\n        password: \"\"\n    };\n    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n        username: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(3).max(15).required(),\n        password: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(4).max(20).required()\n    });\n    const onSubmit = async (data)=>{\n        console.log(data);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/auth\", data);\n            console.log(\"Registration successful:\", response.data);\n        } catch (error) {\n            if (axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAxiosError(error)) {\n                var _error_response;\n                console.error(\"Error during registration:\", ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error.message);\n            } else {\n                console.error(\"Unexpected error during registration:\", error);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen px-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {\n            initialValues: initialValues,\n            onSubmit: onSubmit,\n            validationSchema: validationSchema,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                className: \"formContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Username: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage, {\n                        name: \"username\",\n                        component: \"span\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {\n                        autocomplete: \"off\",\n                        id: \"inputCreatePost\",\n                        name: \"username\",\n                        placeholder: \"Ex. John123...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Password: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage, {\n                        name: \"password\",\n                        component: \"span\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {\n                        autocomplete: \"off\",\n                        type: \"password\",\n                        id: \"inputCreatePost\",\n                        name: \"password\",\n                        placeholder: \"Your Password...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \" Register\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm text-gray-600\",\n                                children: [\n                                    \"Already have an account?\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-blue-500 hover:underline\",\n                                    children: \"Login here\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app - client\\\\my-app\\\\src\\\\app\\\\registration\\\\page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVnaXN0cmF0aW9uL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQjtBQUNpQztBQUNoQztBQUNEO0FBQ0c7QUFDN0IsU0FBU1E7SUFDUCxNQUFNQyxnQkFBZ0I7UUFDcEJDLFVBQVU7UUFDVkMsVUFBVTtJQUNaO0lBRUEsTUFBTUMsbUJBQW1CUCx1Q0FBVSxHQUFHUyxLQUFLLENBQUM7UUFDMUNKLFVBQVVMLHVDQUFVLEdBQUdXLEdBQUcsQ0FBQyxHQUFHQyxHQUFHLENBQUMsSUFBSUMsUUFBUTtRQUM5Q1AsVUFBVU4sdUNBQVUsR0FBR1csR0FBRyxDQUFDLEdBQUdDLEdBQUcsQ0FBQyxJQUFJQyxRQUFRO0lBQ2hEO0lBRUQsTUFBTUMsV0FBVyxPQUFPQztRQUN2QkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNYLElBQUk7WUFDRixNQUFNRyxXQUFXLE1BQU1qQiw2Q0FBS0EsQ0FBQ2tCLElBQUksQ0FBQyxrRUFBa0VKO1lBQ3BHQyxRQUFRQyxHQUFHLENBQUMsNEJBQTRCQyxTQUFTSCxJQUFJO1FBQ3ZELEVBQUUsT0FBT0ssT0FBTztZQUNkLElBQUluQiw2Q0FBS0EsQ0FBQ29CLFlBQVksQ0FBQ0QsUUFBUTtvQkFHM0JBO2dCQUZGSixRQUFRSSxLQUFLLENBQ1gsOEJBQ0FBLEVBQUFBLGtCQUFBQSxNQUFNRixRQUFRLGNBQWRFLHNDQUFBQSxnQkFBZ0JMLElBQUksS0FBSUssTUFBTUUsT0FBTztZQUV6QyxPQUFPO2dCQUNMTixRQUFRSSxLQUFLLENBQUMseUNBQXlDQTtZQUN6RDtRQUNGO0lBQ0Y7SUFFQyxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQzVCLDBDQUFNQTtZQUNMUSxlQUFlQTtZQUNmVSxVQUFVQTtZQUNWUCxrQkFBa0JBO3NCQUVsQiw0RUFBQ1Ysd0NBQUlBO2dCQUFDMkIsV0FBVTs7a0NBQ2QsOERBQUNDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUMxQixnREFBWUE7d0JBQUMyQixNQUFLO3dCQUFXQyxXQUFVOzs7Ozs7a0NBQ3hDLDhEQUFDN0IseUNBQUtBO3dCQUNKOEIsY0FBYTt3QkFDYkMsSUFBRzt3QkFDSEgsTUFBSzt3QkFDTEksYUFBWTs7Ozs7O2tDQUdkLDhEQUFDTDtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDMUIsZ0RBQVlBO3dCQUFDMkIsTUFBSzt3QkFBV0MsV0FBVTs7Ozs7O2tDQUN4Qyw4REFBQzdCLHlDQUFLQTt3QkFDSjhCLGNBQWE7d0JBQ2JHLE1BQUs7d0JBQ0xGLElBQUc7d0JBQ0hILE1BQUs7d0JBQ0xJLGFBQVk7Ozs7OztrQ0FHZCw4REFBQ0U7d0JBQU9ELE1BQUs7a0NBQVM7Ozs7OztrQ0FDdEIsOERBQUNSO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1M7Z0NBQUtULFdBQVU7O29DQUF3QjtvQ0FDYjs7Ozs7OzswQ0FFM0IsOERBQUN0QixpREFBSUE7Z0NBQUNnQyxNQUFLOzBDQUNULDRFQUFDQztvQ0FBRVgsV0FBVTs4Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuRTtLQXRFU3JCO0FBdUVULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVnaXN0cmF0aW9uL3BhZ2UudHN4PzBiMTQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuZnVuY3Rpb24gUmVnaXN0cmF0aW9uKCkge1xyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKS5taW4oMykubWF4KDE1KS5yZXF1aXJlZCgpLFxyXG4gICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5taW4oNCkubWF4KDIwKS5yZXF1aXJlZCgpLFxyXG4gIH0pO1xyXG5cclxuIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGE6IGFueSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cHM6Ly9mdWxsLXN0YWNrLWFwaS1qYW5vdWRpLTRkYWU3MTMxNDJjZS5oZXJva3VhcHAuY29tL2F1dGhcIiwgZGF0YSk7XHJcbiAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bDpcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgIFwiRXJyb3IgZHVyaW5nIHJlZ2lzdHJhdGlvbjpcIixcclxuICAgICAgICAgZXJyb3IucmVzcG9uc2U/LmRhdGEgfHwgZXJyb3IubWVzc2FnZVxyXG4gICAgICAgKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgY29uc29sZS5lcnJvcihcIlVuZXhwZWN0ZWQgZXJyb3IgZHVyaW5nIHJlZ2lzdHJhdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgIH1cclxuICAgfVxyXG4gfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gcHgtMVwiPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cclxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17dmFsaWRhdGlvblNjaGVtYX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm1Db250YWluZXJcIj5cclxuICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTogPC9sYWJlbD5cclxuICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInVzZXJuYW1lXCIgY29tcG9uZW50PVwic3BhblwiIC8+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgaWQ9XCJpbnB1dENyZWF0ZVBvc3RcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiBKb2huMTIzLi4uXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwicGFzc3dvcmRcIiBjb21wb25lbnQ9XCJzcGFuXCIgLz5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cImlucHV0Q3JlYXRlUG9zdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBQYXNzd29yZC4uLlwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiBSZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICBMb2dpbiBoZXJlXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm1payIsIkZvcm0iLCJGaWVsZCIsIkVycm9yTWVzc2FnZSIsIll1cCIsImF4aW9zIiwiTGluayIsIlJlZ2lzdHJhdGlvbiIsImluaXRpYWxWYWx1ZXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmFsaWRhdGlvblNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwic3RyaW5nIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJwb3N0IiwiZXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJuYW1lIiwiY29tcG9uZW50IiwiYXV0b2NvbXBsZXRlIiwiaWQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJidXR0b24iLCJzcGFuIiwiaHJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/registration/page.tsx\n"));

/***/ })

});