"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-sanity";
exports.ids = ["vendor-chunks/next-sanity"];
exports.modules = {

/***/ "(action-browser)/./node_modules/next-sanity/dist/client.js":
/*!*************************************************!*\
  !*** ./node_modules/next-sanity/dist/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/preview-kit/client */ \"(action-browser)/./node_modules/@sanity/preview-kit/dist/client.js\");\n\n\nfunction createClient(config) {\n    let { // eslint-disable-next-line prefer-const, no-process-env\n    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL, encodeSourceMap = studioUrl ? \"auto\" : false } = config;\n    if (encodeSourceMap === \"auto\" && process.env.NEXT_PUBLIC_VERCEL_ENV === \"preview\") {\n        encodeSourceMap = true;\n    }\n    return (0,_sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n        ...config,\n        studioUrl,\n        encodeSourceMap\n    });\n}\n //# sourceMappingURL=client.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0LXNhbml0eS9kaXN0L2NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQzRFO0FBQzVFLFNBQVNBLGFBQWFFLE1BQU07SUFDMUIsSUFBSSxFQUNGLHdEQUF3RDtJQUN4REMsWUFBWUMsUUFBUUMsR0FBRyxDQUFDQyw2QkFBNkIsRUFDckRDLGtCQUFrQkosWUFBWSxTQUFTLEtBQUssRUFDN0MsR0FBR0Q7SUFDSixJQUFJSyxvQkFBb0IsVUFBVUgsUUFBUUMsR0FBRyxDQUFDRyxzQkFBc0IsS0FBSyxXQUFXO1FBQ2xGRCxrQkFBa0I7SUFDcEI7SUFDQSxPQUFPTix3RUFBY0EsQ0FBQztRQUNwQixHQUFHQyxNQUFNO1FBQ1RDO1FBQ0FJO0lBQ0Y7QUFDRjtBQUN3QixDQUN4QixrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naWJiYXJvc2EtcHJvZC8uL25vZGVfbW9kdWxlcy9uZXh0LXNhbml0eS9kaXN0L2NsaWVudC5qcz9mNTQxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCBhcyBjcmVhdGVDbGllbnQkMSB9IGZyb20gJ0BzYW5pdHkvcHJldmlldy1raXQvY2xpZW50JztcbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudChjb25maWcpIHtcbiAgbGV0IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0LCBuby1wcm9jZXNzLWVudlxuICAgIHN0dWRpb1VybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9TVFVESU9fVVJMLFxuICAgIGVuY29kZVNvdXJjZU1hcCA9IHN0dWRpb1VybCA/IFwiYXV0b1wiIDogZmFsc2VcbiAgfSA9IGNvbmZpZztcbiAgaWYgKGVuY29kZVNvdXJjZU1hcCA9PT0gXCJhdXRvXCIgJiYgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVkVSQ0VMX0VOViA9PT0gXCJwcmV2aWV3XCIpIHtcbiAgICBlbmNvZGVTb3VyY2VNYXAgPSB0cnVlO1xuICB9XG4gIHJldHVybiBjcmVhdGVDbGllbnQkMSh7XG4gICAgLi4uY29uZmlnLFxuICAgIHN0dWRpb1VybCxcbiAgICBlbmNvZGVTb3VyY2VNYXBcbiAgfSk7XG59XG5leHBvcnQgeyBjcmVhdGVDbGllbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjcmVhdGVDbGllbnQkMSIsImNvbmZpZyIsInN0dWRpb1VybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfU1RVRElPX1VSTCIsImVuY29kZVNvdXJjZU1hcCIsIk5FWFRfUFVCTElDX1ZFUkNFTF9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/next-sanity/dist/client.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next-sanity/dist/client.js":
/*!*************************************************!*\
  !*** ./node_modules/next-sanity/dist/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/preview-kit/client */ \"(rsc)/./node_modules/@sanity/preview-kit/dist/client.js\");\n\n\nfunction createClient(config) {\n    let { // eslint-disable-next-line prefer-const, no-process-env\n    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL, encodeSourceMap = studioUrl ? \"auto\" : false } = config;\n    if (encodeSourceMap === \"auto\" && process.env.NEXT_PUBLIC_VERCEL_ENV === \"preview\") {\n        encodeSourceMap = true;\n    }\n    return (0,_sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n        ...config,\n        studioUrl,\n        encodeSourceMap\n    });\n}\n //# sourceMappingURL=client.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUM0RTtBQUM1RSxTQUFTQSxhQUFhRSxNQUFNO0lBQzFCLElBQUksRUFDRix3REFBd0Q7SUFDeERDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsNkJBQTZCLEVBQ3JEQyxrQkFBa0JKLFlBQVksU0FBUyxLQUFLLEVBQzdDLEdBQUdEO0lBQ0osSUFBSUssb0JBQW9CLFVBQVVILFFBQVFDLEdBQUcsQ0FBQ0csc0JBQXNCLEtBQUssV0FBVztRQUNsRkQsa0JBQWtCO0lBQ3BCO0lBQ0EsT0FBT04sd0VBQWNBLENBQUM7UUFDcEIsR0FBR0MsTUFBTTtRQUNUQztRQUNBSTtJQUNGO0FBQ0Y7QUFDd0IsQ0FDeEIsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2liYmFyb3NhLXByb2QvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanM/ZjU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgYXMgY3JlYXRlQ2xpZW50JDEgfSBmcm9tICdAc2FuaXR5L3ByZXZpZXcta2l0L2NsaWVudCc7XG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoY29uZmlnKSB7XG4gIGxldCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdCwgbm8tcHJvY2Vzcy1lbnZcbiAgICBzdHVkaW9VcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfU1RVRElPX1VSTCxcbiAgICBlbmNvZGVTb3VyY2VNYXAgPSBzdHVkaW9VcmwgPyBcImF1dG9cIiA6IGZhbHNlXG4gIH0gPSBjb25maWc7XG4gIGlmIChlbmNvZGVTb3VyY2VNYXAgPT09IFwiYXV0b1wiICYmIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1ZFUkNFTF9FTlYgPT09IFwicHJldmlld1wiKSB7XG4gICAgZW5jb2RlU291cmNlTWFwID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gY3JlYXRlQ2xpZW50JDEoe1xuICAgIC4uLmNvbmZpZyxcbiAgICBzdHVkaW9VcmwsXG4gICAgZW5jb2RlU291cmNlTWFwXG4gIH0pO1xufVxuZXhwb3J0IHsgY3JlYXRlQ2xpZW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQuanMubWFwXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY3JlYXRlQ2xpZW50JDEiLCJjb25maWciLCJzdHVkaW9VcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX1NUVURJT19VUkwiLCJlbmNvZGVTb3VyY2VNYXAiLCJORVhUX1BVQkxJQ19WRVJDRUxfRU5WIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-sanity/dist/client.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/next-sanity/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/next-sanity/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* reexport safe */ _client_js__WEBPACK_IMPORTED_MODULE_0__.createClient),\n/* harmony export */   groq: () => (/* reexport safe */ groq__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.js */ \"(action-browser)/./node_modules/next-sanity/dist/client.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"(action-browser)/./node_modules/groq/lib/groq.cjs.mjs\");\n\n\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0LXNhbml0eS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUMyQztBQUNKLENBQ3ZDLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpYmJhcm9zYS1wcm9kLy4vbm9kZV9tb2R1bGVzL25leHQtc2FuaXR5L2Rpc3QvaW5kZXguanM/Mzc5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5leHBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICcuL2NsaWVudC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdyb3EgfSBmcm9tICdncm9xJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImRlZmF1bHQiLCJncm9xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/next-sanity/dist/index.js\n");

/***/ })

};
;