webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_server_tan_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\server\\tan\\portfolio\\components\\navbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



var Navbar = function Navbar() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(E_server_tan_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isActive = _React$useState2[0],
      setActive = _React$useState2[1];

  return __jsx("div", {
    className: "flex items-center justify-between p-4 md:p-16 sm:p-8 md:items-end ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "z-50 space-y-2 text-white md:space-y-4 md:flex-1 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-2xl font-semibold md:text-4xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "BINH TAN")), __jsx("div", {
    className: "w-16 md:w-24 md:h-2 h-1.5 rounded-full bg-sandal-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "z-50 md:hidden",
    onClick: function onClick() {
      return setActive(!isActive);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 36 22",
    xmlns: "http://www.w3.org/2000/svg",
    className: "burger",
    onClick: function onClick(event) {
      event.currentTarget.classList.toggle('active');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("g", {
    transform: "matrix(1,0,0,1,-419.5,-274.131)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("g", {
    id: "arrow_rocket",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("path", {
    id: "top",
    d: "M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }), __jsx("g", {
    transform: "matrix(1,-1.22465e-16,-1.22465e-16,-1,0,569.277)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, __jsx("path", {
    id: "bottom",
    d: "M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  })), __jsx("g", {
    transform: "matrix(1,0,0,1,0,-0.0234189)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, __jsx("path", {
    id: "middle",
    d: "M420,284.646L450,284.646",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  })))))), __jsx("div", {
    className: "fixed top-0 left-0 z-40 w-full h-full p-4 md:flex-1 pt-32 md:pt-0 bg-opacity-75 bg-shark-600 md:bg-shark-500 transform duration-300 md:translate-x-0 md:static ".concat(isActive ? 'translate-x-0' : 'translate-x-full '),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "text-2xl  text-bombay-500 md:flex md:justify-end opacity-0 md:opacity-100 md:space-x-16 ".concat(isActive ? 'fade-in' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-8 duration-300 border-b-2 cursor-pointer md:py-2 hover:text-white border-bombay-500 hover:border-white md:border-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "About"), __jsx("li", {
    className: "py-8 duration-300 border-b-2 cursor-pointer md:py-2 hover:text-white border-bombay-500 hover:border-white md:border-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "Contact")), __jsx("li", {
    className: "py-8 duration-300 border-b-2 cursor-pointer md:py-2 hover:text-white border-bombay-500 hover:border-white md:border-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#server",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Services")), __jsx("li", {
    className: "py-8 duration-300 cursor-pointer md:py-2 hover:text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://github.com/tantruong2303",
    target: "__blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "Projects")))));
};

_s(Navbar, "NIDogoy7bmTp1+ctz7hxf3NMsLg=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxNQUE0QyxHQUFHLFNBQS9DQSxNQUErQyxHQUFNO0FBQUE7O0FBQUEsd0JBQ3pCQyw4Q0FBQSxDQUFlLEtBQWYsQ0FEeUI7QUFBQTtBQUFBLE1BQ2hEQyxRQURnRDtBQUFBLE1BQ3RDQyxTQURzQzs7QUFHdkQsU0FDSTtBQUFLLGFBQVMsRUFBQyxvRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsbURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsb0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsc0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREosRUFRSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsQ0FBQ0QsUUFBRixDQUFmO0FBQUEsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksU0FBSyxFQUFDLElBRFY7QUFFSSxVQUFNLEVBQUMsSUFGWDtBQUdJLFdBQU8sRUFBQyxXQUhaO0FBSUksU0FBSyxFQUFDLDRCQUpWO0FBS0ksYUFBUyxFQUFDLFFBTGQ7QUFNSSxXQUFPLEVBQUUsaUJBQUNFLEtBQUQsRUFBVztBQUNoQkEsV0FBSyxDQUFDQyxhQUFOLENBQW9CQyxTQUFwQixDQUE4QkMsTUFBOUIsQ0FBcUMsUUFBckM7QUFDSCxLQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSTtBQUFHLGFBQVMsRUFBQyxpQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxNQUFFLEVBQUMsY0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUMsS0FEUDtBQUVJLEtBQUMsRUFBQywwSEFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSTtBQUFHLGFBQVMsRUFBQyxrREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUMsUUFEUDtBQUVJLEtBQUMsRUFBQywwSEFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixFQVdJO0FBQUcsYUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLE1BQUUsRUFBQyxRQUFUO0FBQWtCLEtBQUMsRUFBQywwQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWEosQ0FESixDQVZKLENBREosQ0FSSixFQXNDSTtBQUNJLGFBQVMsMktBQ0xMLFFBQVEsR0FBRyxlQUFILEdBQXFCLG1CQUR4QixDQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUNJLGFBQVMsb0dBQTZGQSxRQUFRLEdBQUcsU0FBSCxHQUFlLEVBQXBILENBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJO0FBQUksYUFBUyxFQUFDLDBIQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixFQU1JO0FBQUksYUFBUyxFQUFDLDBIQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQU5KLEVBU0k7QUFBSSxhQUFTLEVBQUMsMEhBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQVRKLEVBWUk7QUFBSSxhQUFTLEVBQUMsMkRBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLGtDQUFSO0FBQTJDLFVBQU0sRUFBQyxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBWkosQ0FMSixDQXRDSixDQURKO0FBaUVILENBcEVEOztHQUFNRixNOztLQUFBQSxNO0FBc0VTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFiNzQwOTk1MjYzNDQwOTRjZWE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2YmFyUHJvcHMge31cclxuXHJcbmNvbnN0IE5hdmJhcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TmF2YmFyUHJvcHM+ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC00IG1kOnAtMTYgc206cC04IG1kOml0ZW1zLWVuZCBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIHNwYWNlLXktMiB0ZXh0LXdoaXRlIG1kOnNwYWNlLXktNCBtZDpmbGV4LTEgXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1kOnRleHQtNHhsXCI+QklOSCBUQU48L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IG1kOnctMjQgbWQ6aC0yIGgtMS41IHJvdW5kZWQtZnVsbCBiZy1zYW5kYWwtNTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIG1kOmhpZGRlblwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghaXNBY3RpdmUpfT5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzNiAyMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnVyZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLC00MTkuNSwtMjc0LjEzMSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJhcnJvd19yb2NrZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNDIwLDI3NC42MzFMNDUwLDI3NC42MzFDNDUwLDI3NC42MzEgNDU5LjA0NCwyODQuNTk5IDQ1MCwyODQuNTk5QzQ0MC45NTYsMjg0LjU5OSA0MjAsMjg0LjY0NiA0MjAsMjg0LjY0Nkw0MzAuMDE0LDI3NC42MzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLC0xLjIyNDY1ZS0xNiwtMS4yMjQ2NWUtMTYsLTEsMCw1NjkuMjc3KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00MjAsMjc0LjYzMUw0NTAsMjc0LjYzMUM0NTAsMjc0LjYzMSA0NTkuMDQ0LDI4NC41OTkgNDUwLDI4NC41OTlDNDQwLjk1NiwyODQuNTk5IDQyMCwyODQuNjQ2IDQyMCwyODQuNjQ2TDQzMC4wMTQsMjc0LjYzMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDAsLTAuMDIzNDE4OSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIm1pZGRsZVwiIGQ9XCJNNDIwLDI4NC42NDZMNDUwLDI4NC42NDZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgei00MCB3LWZ1bGwgaC1mdWxsIHAtNCBtZDpmbGV4LTEgcHQtMzIgbWQ6cHQtMCBiZy1vcGFjaXR5LTc1IGJnLXNoYXJrLTYwMCBtZDpiZy1zaGFyay01MDAgdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBtZDp0cmFuc2xhdGUteC0wIG1kOnN0YXRpYyAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ3RyYW5zbGF0ZS14LTAnIDogJ3RyYW5zbGF0ZS14LWZ1bGwgJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsICB0ZXh0LWJvbWJheS01MDAgbWQ6ZmxleCBtZDpqdXN0aWZ5LWVuZCBvcGFjaXR5LTAgbWQ6b3BhY2l0eS0xMDAgbWQ6c3BhY2UteC0xNiAke2lzQWN0aXZlID8gJ2ZhZGUtaW4nIDogJyd9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktOCBkdXJhdGlvbi0zMDAgYm9yZGVyLWItMiBjdXJzb3ItcG9pbnRlciBtZDpweS0yIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyLWJvbWJheS01MDAgaG92ZXI6Ym9yZGVyLXdoaXRlIG1kOmJvcmRlci1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktOCBkdXJhdGlvbi0zMDAgYm9yZGVyLWItMiBjdXJzb3ItcG9pbnRlciBtZDpweS0yIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyLWJvbWJheS01MDAgaG92ZXI6Ym9yZGVyLXdoaXRlIG1kOmJvcmRlci1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktOCBkdXJhdGlvbi0zMDAgYm9yZGVyLWItMiBjdXJzb3ItcG9pbnRlciBtZDpweS0yIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyLWJvbWJheS01MDAgaG92ZXI6Ym9yZGVyLXdoaXRlIG1kOmJvcmRlci1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2VydmVyXCI+U2VydmljZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktOCBkdXJhdGlvbi0zMDAgY3Vyc29yLXBvaW50ZXIgbWQ6cHktMiBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdGFudHJ1b25nMjMwM1wiIHRhcmdldD1cIl9fYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9