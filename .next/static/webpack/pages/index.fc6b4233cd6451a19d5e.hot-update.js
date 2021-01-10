webpackHotUpdate_N_E("pages/index",{

/***/ "./components/babyFBX.js":
/*!*******************************!*\
  !*** ./components/babyFBX.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_kirill_Desktop_IMD_octomom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/web.js\");\n/* harmony import */ var _react_three_drei_useFBX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei/useFBX */ \"./node_modules/@react-three/drei/useFBX.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n\n\n\nvar _jsxFileName = \"/Users/kirill/Desktop/IMD/octomom/components/babyFBX.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kirill_Desktop_IMD_octomom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar BabyFBX = function BabyFBX(_ref) {\n  _s();\n\n  var Screenshot = _ref.Screenshot,\n      _ref$isCaptured = _ref.isCaptured,\n      isCaptured = _ref$isCaptured === void 0 ? false : _ref$isCaptured;\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n  var textures = ['crocodile', 'dragon', 'elephant', 'flowers', 'foil', 'freckle', 'fur1', 'fur2', 'fur3', 'giraffe1', 'giraffe2', 'hairy1', 'hairy2', 'kabk', 'leather', 'lizard', 'orange', 'pattern', 'peach', 'rhino', 'skin1', 'skin2', 'snake1', 'snake2', 'snake3', 'sponge', 'strawberry', 'tattoo1', 'tattoo2', 'veiny'];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"useLoader\"])(three__WEBPACK_IMPORTED_MODULE_2__[\"TextureLoader\"], \"img/\".concat(textures[Math.round(Math.random() * 20)], \".jpg\"))),\n      texture = _useState[0],\n      setTexture = _useState[1];\n\n  var fbx = Object(_react_three_drei_useFBX__WEBPACK_IMPORTED_MODULE_5__[\"useFBX\"])('/baby6.fbx');\n  var size = [7, 8 - Math.random() * (1 - -1) + -1, 7];\n\n  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"useThree\"])(),\n      invalidate = _useThree.invalidate;\n\n  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"useFrame\"])(function (canvas) {\n    // invalidate()\n    if (isCaptured) {\n      invalidate();\n\n      if (canvas.gl.domElement.toDataURL() !== null || canvas.gl.domElement.toDataURL() !== undefined) {\n        Screenshot(canvas.gl.domElement.toDataURL());\n      }\n    } else {\n      ref.current.rotation.z += 0.01;\n    }\n  }, 1);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", _objectSpread(_objectSpread({\n    ref: ref\n  }, fbx.children[0]), {}, {\n    position: [0, -2.5, 0],\n    scale: [7, 7, 7],\n    name: \"Object_0\",\n    rotation: [0, 0, 0],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meshBasicMaterial\", {\n      attach: \"material\",\n      map: texture\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, _this)\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(BabyFBX, \"D6EMDoFEs9gWri5tccnE6DA92kc=\", false, function () {\n  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"useLoader\"], _react_three_drei_useFBX__WEBPACK_IMPORTED_MODULE_5__[\"useFBX\"], react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"useThree\"], react_three_fiber__WEBPACK_IMPORTED_MODULE_4__[\"useFrame\"]];\n});\n\n_c = BabyFBX;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BabyFBX);\n\nvar _c;\n\n$RefreshReg$(_c, \"BabyFBX\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYWJ5RkJYLmpzPzkwZDciXSwibmFtZXMiOlsiQmFieUZCWCIsIlNjcmVlbnNob3QiLCJpc0NhcHR1cmVkIiwicmVmIiwidXNlUmVmIiwidGV4dHVyZXMiLCJ1c2VTdGF0ZSIsInVzZUxvYWRlciIsIlRIUkVFIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwidGV4dHVyZSIsInNldFRleHR1cmUiLCJmYngiLCJ1c2VGQlgiLCJzaXplIiwidXNlVGhyZWUiLCJpbnZhbGlkYXRlIiwidXNlRnJhbWUiLCJjYW52YXMiLCJnbCIsImRvbUVsZW1lbnQiLCJ0b0RhdGFVUkwiLCJ1bmRlZmluZWQiLCJjdXJyZW50Iiwicm90YXRpb24iLCJ6IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUtBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXNDO0FBQUE7O0FBQUEsTUFBcENDLFVBQW9DLFFBQXBDQSxVQUFvQztBQUFBLDZCQUF4QkMsVUFBd0I7QUFBQSxNQUF4QkEsVUFBd0IsZ0NBQVgsS0FBVztBQUVsRCxNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLENBQUMsV0FBRCxFQUFhLFFBQWIsRUFBdUIsVUFBdkIsRUFBbUMsU0FBbkMsRUFBOEMsTUFBOUMsRUFBc0QsU0FBdEQsRUFBaUUsTUFBakUsRUFBeUUsTUFBekUsRUFBaUYsTUFBakYsRUFBeUYsVUFBekYsRUFBcUcsVUFBckcsRUFBaUgsUUFBakgsRUFBMkgsUUFBM0gsRUFBcUksTUFBckksRUFBNkksU0FBN0ksRUFBd0osUUFBeEosRUFBa0ssUUFBbEssRUFBNEssU0FBNUssRUFBdUwsT0FBdkwsRUFBZ00sT0FBaE0sRUFBeU0sT0FBek0sRUFBa04sT0FBbE4sRUFBMk4sUUFBM04sRUFBcU8sUUFBck8sRUFBOE8sUUFBOU8sRUFBd1AsUUFBeFAsRUFBa1EsWUFBbFEsRUFBZ1IsU0FBaFIsRUFBMlIsU0FBM1IsRUFBc1MsT0FBdFMsQ0FBZjs7QUFIa0Qsa0JBSXBCQyxzREFBUSxDQUFDQyxtRUFBUyxDQUFDQyxtREFBRCxnQkFBNkJILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFjLEVBQXpCLENBQUQsQ0FBckMsVUFBVixDQUpZO0FBQUEsTUFJM0NDLE9BSjJDO0FBQUEsTUFJbENDLFVBSmtDOztBQU1sRCxNQUFJQyxHQUFHLEdBQUdDLHVFQUFNLENBQUMsWUFBRCxDQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBRyxDQUFDLENBQUQsRUFBSyxJQUFHUCxJQUFJLENBQUNFLE1BQUwsTUFBaUIsSUFBSSxDQUFDLENBQXRCLENBQUgsR0FBZ0MsQ0FBQyxDQUF0QyxFQUEyQyxDQUEzQyxDQUFiOztBQVBrRCxrQkFXOUNNLGtFQUFRLEVBWHNDO0FBQUEsTUFVaERDLFVBVmdELGFBVWhEQSxVQVZnRDs7QUFlbERDLG9FQUFRLENBQUMsVUFBQ0MsTUFBRCxFQUFZO0FBQ2pCO0FBQ0EsUUFBR2xCLFVBQUgsRUFBZTtBQUNYZ0IsZ0JBQVU7O0FBQ1YsVUFBR0UsTUFBTSxDQUFDQyxFQUFQLENBQVVDLFVBQVYsQ0FBcUJDLFNBQXJCLE9BQXFDLElBQXJDLElBQTZDSCxNQUFNLENBQUNDLEVBQVAsQ0FBVUMsVUFBVixDQUFxQkMsU0FBckIsT0FBcUNDLFNBQXJGLEVBQStGO0FBQzNGdkIsa0JBQVUsQ0FBQ21CLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVQyxVQUFWLENBQXFCQyxTQUFyQixFQUFELENBQVY7QUFDSDtBQUNKLEtBTEQsTUFLTztBQUNDcEIsU0FBRyxDQUFDc0IsT0FBSixDQUFZQyxRQUFaLENBQXFCQyxDQUFyQixJQUEwQixJQUExQjtBQUNOO0FBQ0wsR0FWTyxFQVVOLENBVk0sQ0FBUjtBQWFFLHNCQUNFO0FBQU0sT0FBRyxFQUFFeEI7QUFBWCxLQUFvQlcsR0FBRyxDQUFDYyxRQUFKLENBQWEsQ0FBYixDQUFwQjtBQUFxQyxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxHQUFMLEVBQVUsQ0FBVixDQUEvQztBQUE2RCxTQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBcEU7QUFBNkUsUUFBSSxFQUFDLFVBQWxGO0FBQTZGLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2RztBQUFBLDJCQUNJO0FBQW9CLFlBQU0sRUFBQyxVQUEzQjtBQUFzQyxTQUFHLEVBQUVoQjtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FqQ0w7O0dBQU1aLE87VUFJcUNPLDJELEVBRTdCUSwrRCxFQUtORSwwRCxFQUlKRSwwRDs7O0tBZkVuQixPO0FBbUNXQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYmFieUZCWC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRocmVlLHVzZUZyYW1lLCB1c2VMb2FkZXJ9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiXG5pbXBvcnQgeyB1c2VGQlggfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaS91c2VGQlgnXG5cblxuaW1wb3J0IHtcbiAgYXRvbSxcbiAgdXNlUmVjb2lsU3RhdGUsXG4gIHVzZVJlY29pbFZhbHVlLFxufSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIlxuXG5cbmNvbnN0IEJhYnlGQlggPSAoe1NjcmVlbnNob3QsIGlzQ2FwdHVyZWQgPSBmYWxzZX0pID0+IHtcblxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gICAgbGV0IHRleHR1cmVzID0gWydjcm9jb2RpbGUnLCdkcmFnb24nLCAnZWxlcGhhbnQnLCAnZmxvd2VycycsICdmb2lsJywgJ2ZyZWNrbGUnLCAnZnVyMScsICdmdXIyJywgJ2Z1cjMnLCAnZ2lyYWZmZTEnLCAnZ2lyYWZmZTInLCAnaGFpcnkxJywgJ2hhaXJ5MicsICdrYWJrJywgJ2xlYXRoZXInLCAnbGl6YXJkJywgJ29yYW5nZScsICdwYXR0ZXJuJywgJ3BlYWNoJywgJ3JoaW5vJywgJ3NraW4xJywgJ3NraW4yJywgJ3NuYWtlMScsICdzbmFrZTInLCdzbmFrZTMnLCAnc3BvbmdlJywgJ3N0cmF3YmVycnknLCAndGF0dG9vMScsICd0YXR0b28yJywgJ3ZlaW55J11cbiAgICBjb25zdCBbdGV4dHVyZSwgc2V0VGV4dHVyZV0gPSB1c2VTdGF0ZSh1c2VMb2FkZXIoVEhSRUUuVGV4dHVyZUxvYWRlciwgYGltZy8ke3RleHR1cmVzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyMCldfS5qcGdgKSlcbiAgXG4gICAgbGV0IGZieCA9IHVzZUZCWCgnL2JhYnk2LmZieCcpXG4gICAgY29uc3Qgc2l6ZSA9IFs3LCAoOC0gTWF0aC5yYW5kb20oKSAqICgxIC0oLTEpKSArICgtMSkpLCA3XVxuICAgIFxuICAgIGNvbnN0IHsgXG4gICAgICBpbnZhbGlkYXRlICAgICAgICAgICAgXG4gICAgfSA9IHVzZVRocmVlKClcblxuICBcbiAgXG4gICAgdXNlRnJhbWUoKGNhbnZhcykgPT4ge1xuICAgICAgICAvLyBpbnZhbGlkYXRlKClcbiAgICAgICAgaWYoaXNDYXB0dXJlZCkgeyBcbiAgICAgICAgICAgIGludmFsaWRhdGUoKVxuICAgICAgICAgICAgaWYoY2FudmFzLmdsLmRvbUVsZW1lbnQudG9EYXRhVVJMKCkgIT09IG51bGwgfHwgY2FudmFzLmdsLmRvbUVsZW1lbnQudG9EYXRhVVJMKCkgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgU2NyZWVuc2hvdChjYW52YXMuZ2wuZG9tRWxlbWVudC50b0RhdGFVUkwoKSlcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5yb3RhdGlvbi56ICs9IDAuMDFcbiAgICAgICAgIH1cbiAgICB9LDEpXG4gICAgICBcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG1lc2ggcmVmPXtyZWZ9IHsuLi5mYnguY2hpbGRyZW5bMF19IHBvc2l0aW9uPXtbMCwgLTIuNSwgMF19IHNjYWxlPXtbNyw3LDddfSBuYW1lPVwiT2JqZWN0XzBcIiByb3RhdGlvbj17WzAsIDAsIDBdfT5cbiAgICAgICAgICAgIDxtZXNoQmFzaWNNYXRlcmlhbCAgYXR0YWNoPVwibWF0ZXJpYWxcIiBtYXA9e3RleHR1cmV9Lz4gIFxuICAgICAgICAgPC9tZXNoPlxuICAgICAgKVxuICAgIH1cblxuICBleHBvcnQgZGVmYXVsdCBCYWJ5RkJYIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/babyFBX.js\n");

/***/ })

})