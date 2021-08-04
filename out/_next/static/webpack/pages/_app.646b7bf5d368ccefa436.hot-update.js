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
    className: "fixed top-0 left-0 z-40 w-full h-full p-4 pt-32 bg-opacity-75 bg-shark-600 transform duration-300 ".concat(isActive ? 'translate-x-full' : 'translate-x-0'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "text-2xl text-bombay-500 opacity-0 ".concat(isActive ? '' : 'fade-in'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLE1BQTRDLEdBQUcsU0FBL0NBLE1BQStDLEdBQU07QUFBQTs7QUFBQSx3QkFDekJDLDhDQUFBLENBQWUsS0FBZixDQUR5QjtBQUFBO0FBQUEsTUFDaERDLFFBRGdEO0FBQUEsTUFDdENDLFNBRHNDOztBQUd2RCxTQUNJO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBTUk7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsQ0FBQ0QsUUFBRixDQUFmO0FBQUEsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksU0FBSyxFQUFDLElBRFY7QUFFSSxVQUFNLEVBQUMsSUFGWDtBQUdJLFdBQU8sRUFBQyxXQUhaO0FBSUksU0FBSyxFQUFDLDRCQUpWO0FBS0ksYUFBUyxFQUFDLFFBTGQ7QUFNSSxXQUFPLEVBQUUsaUJBQUNFLEtBQUQsRUFBVztBQUNoQkEsV0FBSyxDQUFDQyxhQUFOLENBQW9CQyxTQUFwQixDQUE4QkMsTUFBOUIsQ0FBcUMsUUFBckM7QUFDSCxLQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSTtBQUFHLGFBQVMsRUFBQyxpQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxNQUFFLEVBQUMsY0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUMsS0FEUDtBQUVJLEtBQUMsRUFBQywwSEFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSTtBQUFHLGFBQVMsRUFBQyxrREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUMsUUFEUDtBQUVJLEtBQUMsRUFBQywwSEFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixFQVdJO0FBQUcsYUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLE1BQUUsRUFBQyxRQUFUO0FBQWtCLEtBQUMsRUFBQywwQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWEosQ0FESixDQVZKLENBREosQ0FOSixFQW9DSTtBQUNJLGFBQVMsOEdBQ0xMLFFBQVEsR0FBRyxrQkFBSCxHQUF3QixlQUQzQixDQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFJLGFBQVMsK0NBQXdDQSxRQUFRLEdBQUcsRUFBSCxHQUFRLFNBQXhELENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLG9GQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVJO0FBQUksYUFBUyxFQUFDLG9GQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQUdJO0FBQUksYUFBUyxFQUFDLG9GQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosRUFJSTtBQUFJLGFBQVMsRUFBQyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLENBTEosQ0FwQ0osQ0FESjtBQW1ESCxDQXRERDs7R0FBTUYsTTs7S0FBQUEsTTtBQXdEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NDZiN2JmNWQzNjhjY2VmYTQzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgaW50ZXJmYWNlIE5hdmJhclByb3BzIHt9XHJcblxyXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PE5hdmJhclByb3BzPiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgc3BhY2UteS0yIHRleHQtd2hpdGUgXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPlRBTiBUUlVPTkc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIwIGgtMS41IHJvdW5kZWQtZnVsbCBiZy1zYW5kYWwtNTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFpc0FjdGl2ZSl9PlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM2IDIyXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXJnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsLTQxOS41LC0yNzQuMTMxKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImFycm93X3JvY2tldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00MjAsMjc0LjYzMUw0NTAsMjc0LjYzMUM0NTAsMjc0LjYzMSA0NTkuMDQ0LDI4NC41OTkgNDUwLDI4NC41OTlDNDQwLjk1NiwyODQuNTk5IDQyMCwyODQuNjQ2IDQyMCwyODQuNjQ2TDQzMC4wMTQsMjc0LjYzMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsLTEuMjI0NjVlLTE2LC0xLjIyNDY1ZS0xNiwtMSwwLDU2OS4yNzcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQyMCwyNzQuNjMxTDQ1MCwyNzQuNjMxQzQ1MCwyNzQuNjMxIDQ1OS4wNDQsMjg0LjU5OSA0NTAsMjg0LjU5OUM0NDAuOTU2LDI4NC41OTkgNDIwLDI4NC42NDYgNDIwLDI4NC42NDZMNDMwLjAxNCwyNzQuNjMxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMCwtMC4wMjM0MTg5KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwibWlkZGxlXCIgZD1cIk00MjAsMjg0LjY0Nkw0NTAsMjg0LjY0NlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGxlZnQtMCB6LTQwIHctZnVsbCBoLWZ1bGwgcC00IHB0LTMyIGJnLW9wYWNpdHktNzUgYmctc2hhcmstNjAwIHRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICd0cmFuc2xhdGUteC1mdWxsJyA6ICd0cmFuc2xhdGUteC0wJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2B0ZXh0LTJ4bCB0ZXh0LWJvbWJheS01MDAgb3BhY2l0eS0wICR7aXNBY3RpdmUgPyAnJyA6ICdmYWRlLWluJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktOCBkdXJhdGlvbi0zMDAgYm9yZGVyLWItMiBob3Zlcjp0ZXh0LXdoaXRlIGJvcmRlci1ib21iYXktNTAwIGhvdmVyOmJvcmRlci13aGl0ZVwiPkFib3V0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktOCBkdXJhdGlvbi0zMDAgYm9yZGVyLWItMiBob3Zlcjp0ZXh0LXdoaXRlIGJvcmRlci1ib21iYXktNTAwIGhvdmVyOmJvcmRlci13aGl0ZVwiPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweS04IGR1cmF0aW9uLTMwMCBib3JkZXItYi0yIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyLWJvbWJheS01MDAgaG92ZXI6Ym9yZGVyLXdoaXRlXCI+U2VydmljZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweS04IGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIFwiPlByb2plY3RzPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==