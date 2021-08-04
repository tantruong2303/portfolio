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
    className: "flex items-center justify-between p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "z-50 space-y-2 text-white ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-2xl font-semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "TAN TRUONG"), __jsx("div", {
    className: "w-20 h-1.5 rounded-full bg-sandal-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "z-50",
    onClick: function onClick() {
      return setActive(!isActive);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
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
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("g", {
    transform: "matrix(1,0,0,1,-419.5,-274.131)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("g", {
    id: "arrow_rocket",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("path", {
    id: "top",
    d: "M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }), __jsx("g", {
    transform: "matrix(1,-1.22465e-16,-1.22465e-16,-1,0,569.277)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("path", {
    id: "bottom",
    d: "M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  })), __jsx("g", {
    transform: "matrix(1,0,0,1,0,-0.0234189)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx("path", {
    id: "middle",
    d: "M420,284.646L450,284.646",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  })))))), __jsx("div", {
    className: "fixed top-0 left-0 z-40 w-full h-full p-4 pt-32 bg-opacity-75 bg-shark-500 transform duration-300 ".concat(isActive ? 'translate-x-full' : 'translate-x-0'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "text-2xl text-bombay-500 ".concat(isActive ? 'opacity-0' : ' fade-in'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-8 duration-300 border-b-2 hover:text-white border-bombay-500 hover:border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "About"), __jsx("li", {
    className: "py-8 duration-300 border-b-2 hover:text-white border-bombay-500 hover:border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "Contact"), __jsx("li", {
    className: "py-8 duration-300 border-b-2 hover:text-white border-bombay-500 hover:border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Services"), __jsx("li", {
    className: "py-8 duration-300 hover:text-white ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "Projects"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLE1BQTRDLEdBQUcsU0FBL0NBLE1BQStDLEdBQU07QUFBQTs7QUFBQSx3QkFDekJDLDhDQUFBLENBQWUsS0FBZixDQUR5QjtBQUFBO0FBQUEsTUFDaERDLFFBRGdEO0FBQUEsTUFDdENDLFNBRHNDOztBQUd2RCxTQUNJO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBTUk7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsQ0FBQ0QsUUFBRixDQUFmO0FBQUEsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksU0FBSyxFQUFDLElBRFY7QUFFSSxVQUFNLEVBQUMsSUFGWDtBQUdJLFdBQU8sRUFBQyxXQUhaO0FBSUksU0FBSyxFQUFDLDRCQUpWO0FBS0ksYUFBUyxFQUFDLFFBTGQ7QUFNSSxXQUFPLEVBQUUsaUJBQUNFLEtBQUQsRUFBVztBQUNoQkEsV0FBSyxDQUFDQyxhQUFOLENBQW9CQyxTQUFwQixDQUE4QkMsTUFBOUIsQ0FBcUMsUUFBckM7QUFDSCxLQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSTtBQUFHLGFBQVMsRUFBQyxpQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxNQUFFLEVBQUMsY0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUMsS0FEUDtBQUVJLEtBQUMsRUFBQywwSEFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSTtBQUFHLGFBQVMsRUFBQyxrREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUMsUUFEUDtBQUVJLEtBQUMsRUFBQywwSEFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixFQVdJO0FBQUcsYUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLE1BQUUsRUFBQyxRQUFUO0FBQWtCLEtBQUMsRUFBQywwQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWEosQ0FESixDQVZKLENBREosQ0FOSixFQW9DSTtBQUNJLGFBQVMsOEdBQ0xMLFFBQVEsR0FBRyxrQkFBSCxHQUF3QixlQUQzQixDQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFJLGFBQVMscUNBQThCQSxRQUFRLEdBQUcsV0FBSCxHQUFpQixVQUF2RCxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxvRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFSTtBQUFJLGFBQVMsRUFBQyxvRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFHSTtBQUFJLGFBQVMsRUFBQyxvRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLEVBSUk7QUFBSSxhQUFTLEVBQUMscUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixDQUxKLENBcENKLENBREo7QUFtREgsQ0F0REQ7O0dBQU1GLE07O0tBQUFBLE07QUF3RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzI5YjZhOWY4MzQ4NWU2ZmQ3NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGludGVyZmFjZSBOYXZiYXJQcm9wcyB7fVxyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxOYXZiYXJQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIHNwYWNlLXktMiB0ZXh0LXdoaXRlIFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5UQU4gVFJVT05HPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTEuNSByb3VuZGVkLWZ1bGwgYmctc2FuZGFsLTUwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MFwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghaXNBY3RpdmUpfT5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzNiAyMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnVyZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLC00MTkuNSwtMjc0LjEzMSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJhcnJvd19yb2NrZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNDIwLDI3NC42MzFMNDUwLDI3NC42MzFDNDUwLDI3NC42MzEgNDU5LjA0NCwyODQuNTk5IDQ1MCwyODQuNTk5QzQ0MC45NTYsMjg0LjU5OSA0MjAsMjg0LjY0NiA0MjAsMjg0LjY0Nkw0MzAuMDE0LDI3NC42MzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLC0xLjIyNDY1ZS0xNiwtMS4yMjQ2NWUtMTYsLTEsMCw1NjkuMjc3KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00MjAsMjc0LjYzMUw0NTAsMjc0LjYzMUM0NTAsMjc0LjYzMSA0NTkuMDQ0LDI4NC41OTkgNDUwLDI4NC41OTlDNDQwLjk1NiwyODQuNTk5IDQyMCwyODQuNjQ2IDQyMCwyODQuNjQ2TDQzMC4wMTQsMjc0LjYzMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDAsLTAuMDIzNDE4OSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIm1pZGRsZVwiIGQ9XCJNNDIwLDI4NC42NDZMNDUwLDI4NC42NDZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgei00MCB3LWZ1bGwgaC1mdWxsIHAtNCBwdC0zMiBiZy1vcGFjaXR5LTc1IGJnLXNoYXJrLTUwMCB0cmFuc2Zvcm0gZHVyYXRpb24tMzAwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAndHJhbnNsYXRlLXgtZnVsbCcgOiAndHJhbnNsYXRlLXgtMCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgdGV4dC0yeGwgdGV4dC1ib21iYXktNTAwICR7aXNBY3RpdmUgPyAnb3BhY2l0eS0wJyA6ICcgZmFkZS1pbid9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB5LTggZHVyYXRpb24tMzAwIGJvcmRlci1iLTIgaG92ZXI6dGV4dC13aGl0ZSBib3JkZXItYm9tYmF5LTUwMCBob3Zlcjpib3JkZXItd2hpdGVcIj5BYm91dDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB5LTggZHVyYXRpb24tMzAwIGJvcmRlci1iLTIgaG92ZXI6dGV4dC13aGl0ZSBib3JkZXItYm9tYmF5LTUwMCBob3Zlcjpib3JkZXItd2hpdGVcIj5Db250YWN0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktOCBkdXJhdGlvbi0zMDAgYm9yZGVyLWItMiBob3Zlcjp0ZXh0LXdoaXRlIGJvcmRlci1ib21iYXktNTAwIGhvdmVyOmJvcmRlci13aGl0ZVwiPlNlcnZpY2VzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktOCBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC13aGl0ZSBcIj5Qcm9qZWN0czwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=