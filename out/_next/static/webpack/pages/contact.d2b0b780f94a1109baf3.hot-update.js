webpackHotUpdate_N_E("pages/contact",{

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\server\\tan\\portfolio\\pages\\contact.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var Contact = function Contact() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mx-auto mb-4 space-y-4 md:mb-0 w-96 fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-4xl font-medium text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Get In Touch"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "Full Name", __jsx("span", {
    className: "font-bold text-red-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, "*")), __jsx("input", {
    className: "w-full px-2 py-1 border rounded-md border-sandal-500 focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Email", __jsx("span", {
    className: "font-bold text-red-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "*")), __jsx("input", {
    className: "w-full px-2 py-1 border rounded-md border-sandal-500 focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "Message"), __jsx("textarea", {
    className: "w-full h-40 px-2 py-1 border rounded-md border-sandal-500 focus:outline-none",
    placeholder: "Message ...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  })), __jsx("button", {
    className: "px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-shark-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Send Message")));
};

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

$RefreshReg$(_c, "Contact");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC50c3giXSwibmFtZXMiOlsiQ29udGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxPQUErQixHQUFHLFNBQWxDQSxPQUFrQyxHQUFNO0FBQzFDLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxpQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVJO0FBQU0sYUFBUyxFQUFDLHdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkosQ0FESixFQUtJO0FBQU8sYUFBUyxFQUFDLHlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FGSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLGFBQVMsRUFBQyxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUVJO0FBQU0sYUFBUyxFQUFDLHdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkosQ0FESixFQUtJO0FBQU8sYUFBUyxFQUFDLHlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FUSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxhQUFTLEVBQUMsa0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJO0FBQ0ksYUFBUyxFQUFDLDhFQURkO0FBRUksZUFBVyxFQUFDLGFBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQWhCSixFQXVCSTtBQUFRLGFBQVMsRUFBQyx1SkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2QkosQ0FESixDQURKO0FBK0JILENBaENEOztLQUFNQSxPO0FBa0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LmQyYjBiNzgwZjk0YTExMDliYWYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdFByb3BzIHt9XHJcblxyXG5jb25zdCBDb250YWN0OiBSZWFjdC5GQzxDb250YWN0UHJvcHM+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWItNCBzcGFjZS15LTQgbWQ6bWItMCB3LTk2IGZhZGUtaW5cIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+R2V0IEluIFRvdWNoPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRnVsbCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXJlZC01MDBcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctZnVsbCBweC0yIHB5LTEgYm9yZGVyIHJvdW5kZWQtbWQgYm9yZGVyLXNhbmRhbC01MDAgZm9jdXM6b3V0bGluZS1ub25lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBweS0xIGJvcmRlciByb3VuZGVkLW1kIGJvcmRlci1zYW5kYWwtNTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGVcIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDAgcHgtMiBweS0xIGJvcmRlciByb3VuZGVkLW1kIGJvcmRlci1zYW5kYWwtNTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTggcHktMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBib3JkZXIgcm91bmRlZC0zeGwgYmctc2FuZGFsLTUwMCBob3ZlcjpzY2FsZS0xMTAgYm9yZGVyLXNhbmRhbC01MDAgaG92ZXI6Ymctc2hhcmstNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VuZCBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==