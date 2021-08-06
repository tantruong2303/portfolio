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
  }, __jsx("h1", {
    className: "text-4xl text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Contact Me"), __jsx("div", {
    className: "mx-auto mb-4 space-y-4 md:mb-0 w-96 fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-4xl font-medium text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Get In Touch"), __jsx("div", {
    className: "space-y-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "Full Name", __jsx("span", {
    className: "font-bold text-red-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, "*")), __jsx("input", {
    className: "w-full px-2 py-1 border rounded-md border-sandal-500 focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "space-y-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "Email", __jsx("span", {
    className: "font-bold text-red-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "*")), __jsx("input", {
    className: "w-full px-2 py-1 border rounded-md border-sandal-500 focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "space-y-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Message"), __jsx("textarea", {
    className: "w-full h-40 px-2 py-1 border rounded-md border-sandal-500 focus:outline-none",
    placeholder: "Message ...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  })), __jsx("button", {
    className: "px-8 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-shark-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC50c3giXSwibmFtZXMiOlsiQ29udGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxPQUErQixHQUFHLFNBQWxDQSxPQUFrQyxHQUFNO0FBQzFDLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFFSTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsaUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVJO0FBQU0sYUFBUyxFQUFDLHdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkosQ0FESixFQUtJO0FBQU8sYUFBUyxFQUFDLHlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FGSixFQVNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRUk7QUFBTSxhQUFTLEVBQUMsd0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSixDQURKLEVBS0k7QUFBTyxhQUFTLEVBQUMseUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQVRKLEVBZ0JJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUNJLGFBQVMsRUFBQyw4RUFEZDtBQUVJLGVBQVcsRUFBQyxhQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FoQkosRUF1Qkk7QUFBUSxhQUFTLEVBQUMsdUpBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkJKLENBRkosQ0FESjtBQWdDSCxDQWpDRDs7S0FBTUEsTztBQW1DU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC4yOWQxMDcwMDg4MDMwNTIzYmQxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3RQcm9wcyB7fVxyXG5cclxuY29uc3QgQ29udGFjdDogUmVhY3QuRkM8Q29udGFjdFByb3BzPiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtd2hpdGVcIj5Db250YWN0IE1lPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1iLTQgc3BhY2UteS00IG1kOm1iLTAgdy05NiBmYWRlLWluXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPkdldCBJbiBUb3VjaDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGwgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBweS0xIGJvcmRlciByb3VuZGVkLW1kIGJvcmRlci1zYW5kYWwtNTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtcmVkLTUwMFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIgcHktMSBib3JkZXIgcm91bmRlZC1tZCBib3JkZXItc2FuZGFsLTUwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIHB4LTIgcHktMSBib3JkZXIgcm91bmRlZC1tZCBib3JkZXItc2FuZGFsLTUwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UgLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC04IHB5LTIgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gYm9yZGVyIHJvdW5kZWQtM3hsIGJnLXNhbmRhbC01MDAgaG92ZXI6c2NhbGUtMTEwIGJvcmRlci1zYW5kYWwtNTAwIGhvdmVyOmJnLXNoYXJrLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlbmQgTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=