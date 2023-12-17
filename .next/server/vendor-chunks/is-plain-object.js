"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-plain-object";
exports.ids = ["vendor-chunks/is-plain-object"];
exports.modules = {

/***/ "(action-browser)/./node_modules/is-plain-object/dist/is-plain-object.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/is-plain-object/dist/is-plain-object.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject)\n/* harmony export */ });\n/*!\n * is-plain-object <https://github.com/jonschlinkert/is-plain-object>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */ function isObject(o) {\n    return Object.prototype.toString.call(o) === \"[object Object]\";\n}\nfunction isPlainObject(o) {\n    var ctor, prot;\n    if (isObject(o) === false) return false;\n    // If has modified constructor\n    ctor = o.constructor;\n    if (ctor === undefined) return true;\n    // If has modified prototype\n    prot = ctor.prototype;\n    if (isObject(prot) === false) return false;\n    // If constructor does not have an Object-specific method\n    if (prot.hasOwnProperty(\"isPrototypeOf\") === false) {\n        return false;\n    }\n    // Most likely a plain Object\n    return true;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvZGlzdC9pcy1wbGFpbi1vYmplY3QubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUVELFNBQVNBLFNBQVNDLENBQUM7SUFDakIsT0FBT0MsT0FBT0MsU0FBUyxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0osT0FBTztBQUMvQztBQUVBLFNBQVNLLGNBQWNMLENBQUM7SUFDdEIsSUFBSU0sTUFBS0M7SUFFVCxJQUFJUixTQUFTQyxPQUFPLE9BQU8sT0FBTztJQUVsQyw4QkFBOEI7SUFDOUJNLE9BQU9OLEVBQUVRLFdBQVc7SUFDcEIsSUFBSUYsU0FBU0csV0FBVyxPQUFPO0lBRS9CLDRCQUE0QjtJQUM1QkYsT0FBT0QsS0FBS0osU0FBUztJQUNyQixJQUFJSCxTQUFTUSxVQUFVLE9BQU8sT0FBTztJQUVyQyx5REFBeUQ7SUFDekQsSUFBSUEsS0FBS0csY0FBYyxDQUFDLHFCQUFxQixPQUFPO1FBQ2xELE9BQU87SUFDVDtJQUVBLDZCQUE2QjtJQUM3QixPQUFPO0FBQ1Q7QUFFeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naWJiYXJvc2EtcHJvZC8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvZGlzdC9pcy1wbGFpbi1vYmplY3QubWpzPzc4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBpcy1wbGFpbi1vYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvKSB7XG4gIHZhciBjdG9yLHByb3Q7XG5cbiAgaWYgKGlzT2JqZWN0KG8pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgaWYgKGN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIHByb3RvdHlwZVxuICBwcm90ID0gY3Rvci5wcm90b3R5cGU7XG4gIGlmIChpc09iamVjdChwcm90KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcbiAgaWYgKHByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgaXNQbGFpbk9iamVjdCB9O1xuIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwibyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImlzUGxhaW5PYmplY3QiLCJjdG9yIiwicHJvdCIsImNvbnN0cnVjdG9yIiwidW5kZWZpbmVkIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/is-plain-object/dist/is-plain-object.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/is-plain-object/dist/is-plain-object.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/is-plain-object/dist/is-plain-object.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject)\n/* harmony export */ });\n/*!\n * is-plain-object <https://github.com/jonschlinkert/is-plain-object>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */ function isObject(o) {\n    return Object.prototype.toString.call(o) === \"[object Object]\";\n}\nfunction isPlainObject(o) {\n    var ctor, prot;\n    if (isObject(o) === false) return false;\n    // If has modified constructor\n    ctor = o.constructor;\n    if (ctor === undefined) return true;\n    // If has modified prototype\n    prot = ctor.prototype;\n    if (isObject(prot) === false) return false;\n    // If constructor does not have an Object-specific method\n    if (prot.hasOwnProperty(\"isPrototypeOf\") === false) {\n        return false;\n    }\n    // Most likely a plain Object\n    return true;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2Rpc3QvaXMtcGxhaW4tb2JqZWN0Lm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7O0NBS0MsR0FFRCxTQUFTQSxTQUFTQyxDQUFDO0lBQ2pCLE9BQU9DLE9BQU9DLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNKLE9BQU87QUFDL0M7QUFFQSxTQUFTSyxjQUFjTCxDQUFDO0lBQ3RCLElBQUlNLE1BQUtDO0lBRVQsSUFBSVIsU0FBU0MsT0FBTyxPQUFPLE9BQU87SUFFbEMsOEJBQThCO0lBQzlCTSxPQUFPTixFQUFFUSxXQUFXO0lBQ3BCLElBQUlGLFNBQVNHLFdBQVcsT0FBTztJQUUvQiw0QkFBNEI7SUFDNUJGLE9BQU9ELEtBQUtKLFNBQVM7SUFDckIsSUFBSUgsU0FBU1EsVUFBVSxPQUFPLE9BQU87SUFFckMseURBQXlEO0lBQ3pELElBQUlBLEtBQUtHLGNBQWMsQ0FBQyxxQkFBcUIsT0FBTztRQUNsRCxPQUFPO0lBQ1Q7SUFFQSw2QkFBNkI7SUFDN0IsT0FBTztBQUNUO0FBRXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2liYmFyb3NhLXByb2QvLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2Rpc3QvaXMtcGxhaW4tb2JqZWN0Lm1qcz83OGJmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogaXMtcGxhaW4tb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICB2YXIgY3Rvcixwcm90O1xuXG4gIGlmIChpc09iamVjdChvKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgY29uc3RydWN0b3JcbiAgY3RvciA9IG8uY29uc3RydWN0b3I7XG4gIGlmIChjdG9yID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBwcm90b3R5cGVcbiAgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuICBpZiAoaXNPYmplY3QocHJvdCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSBhbiBPYmplY3Qtc3BlY2lmaWMgbWV0aG9kXG4gIGlmIChwcm90Lmhhc093blByb3BlcnR5KCdpc1Byb3RvdHlwZU9mJykgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gTW9zdCBsaWtlbHkgYSBwbGFpbiBPYmplY3RcbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7IGlzUGxhaW5PYmplY3QgfTtcbiJdLCJuYW1lcyI6WyJpc09iamVjdCIsIm8iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpc1BsYWluT2JqZWN0IiwiY3RvciIsInByb3QiLCJjb25zdHJ1Y3RvciIsInVuZGVmaW5lZCIsImhhc093blByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-plain-object/dist/is-plain-object.mjs\n");

/***/ })

};
;