webpackHotUpdate_N_E("pages/index",{

/***/ "./components/project.tsx":
/*!********************************!*\
  !*** ./components/project.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\server\\New folder\\portfolio\\components\\project.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var projectItem = [{
  description: 'An online web games allow people can play chess or tic tac toe and share their happiness across the world',
  link: 'https://github.com/Heaty566/mychess',
  name: 'My Chess',
  imageUrl: '/asset/images/project1.jpg'
}, {
  description: 'An online web games allow people can play chess or tic tac toe and share their happiness across the world',
  link: 'https://github.com/tantruong2303/booking-hotel',
  name: 'Booking Hotel',
  imageUrl: '/asset/images/project2.png'
}, {
  description: 'An online web games allow people can play chess or tic tac toe and share their happiness across the world',
  link: 'https://github.com/Heaty566/mychess',
  name: 'Mono Store',
  imageUrl: '/asset/images/project1.jpg'
}];

var Project = function Project() {
  return __jsx("div", {
    className: "p-4 bg-white md:py-24 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mx-auto space-y-8 xl:w-4/5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "space-y-2 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-semibold text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "PROJECTS"), __jsx("div", {
    className: "h-1.5 bg-gray-600 opacity-20 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "flex flex-col items-center justify-center space-y-4 md:py-8 md:space-x-16 md:flex-row md:space-y-0 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, projectItem.map(function (item) {
    return __jsx("div", {
      className: "flex-1 max-w-md px-4 pt-6 space-y-4",
      key: item.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: item.imageUrl,
      alt: item.name,
      className: "relative z-20 block object-cover w-full h-80",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: "absolute top-0 left-0 z-10 w-full h-full transform scale-x-110 scale-y-90 -translate-y-8 bg-gray-200",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: "space-y-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 33
      }
    }, __jsx("h1", {
      className: "text-4xl font-semibold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 37
      }
    }, item.name), __jsx("p", {
      className: "opacity-80",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 37
      }
    }, item.description), __jsx("a", {
      href: item.link,
      className: "inline-block px-6 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-white hover:text-black",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 37
      }
    }, "View Details")));
  }))));
};

_c = Project;
/* harmony default export */ __webpack_exports__["default"] = (Project);

var _c;

$RefreshReg$(_c, "Project");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LnRzeCJdLCJuYW1lcyI6WyJwcm9qZWN0SXRlbSIsImRlc2NyaXB0aW9uIiwibGluayIsIm5hbWUiLCJpbWFnZVVybCIsIlByb2plY3QiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0EsSUFBTUEsV0FBMEIsR0FBRyxDQUMvQjtBQUNJQyxhQUFXLEVBQUUsMkdBRGpCO0FBRUlDLE1BQUksRUFBRSxxQ0FGVjtBQUdJQyxNQUFJLEVBQUUsVUFIVjtBQUlJQyxVQUFRLEVBQUU7QUFKZCxDQUQrQixFQU8vQjtBQUNJSCxhQUFXLEVBQUUsMkdBRGpCO0FBRUlDLE1BQUksRUFBRSxnREFGVjtBQUdJQyxNQUFJLEVBQUUsZUFIVjtBQUlJQyxVQUFRLEVBQUU7QUFKZCxDQVArQixFQWEvQjtBQUNJSCxhQUFXLEVBQUUsMkdBRGpCO0FBRUlDLE1BQUksRUFBRSxxQ0FGVjtBQUdJQyxNQUFJLEVBQUUsWUFIVjtBQUlJQyxVQUFRLEVBQUU7QUFKZCxDQWIrQixDQUFuQzs7QUF1QkEsSUFBTUMsT0FBOEMsR0FBRyxTQUFqREEsT0FBaUQsR0FBTTtBQUN6RCxTQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMscUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMscUdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTCxXQUFXLENBQUNNLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCLFdBQ0k7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBcUQsU0FBRyxFQUFFQSxJQUFJLENBQUNKLElBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRUksSUFBSSxDQUFDSCxRQUFmO0FBQXlCLFNBQUcsRUFBRUcsSUFBSSxDQUFDSixJQUFuQztBQUF5QyxlQUFTLEVBQUMsOENBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJO0FBQUssZUFBUyxFQUFDLHNHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQURKLEVBS0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxlQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3Q0ksSUFBSSxDQUFDSixJQUE3QyxDQURKLEVBRUk7QUFBRyxlQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCSSxJQUFJLENBQUNOLFdBQWhDLENBRkosRUFHSTtBQUNJLFVBQUksRUFBRU0sSUFBSSxDQUFDTCxJQURmO0FBRUksZUFBUyxFQUFDLGlMQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosQ0FMSixDQURKO0FBa0JILEdBbkJBLENBREwsQ0FMSixDQURKLENBREo7QUFnQ0gsQ0FqQ0Q7O0tBQU1HLE87QUFtQ1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIxNzEzYWQ0OGZmYzJiOWIyMDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvamVjdEl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGxpbms6IHN0cmluZztcclxuICAgIGltYWdlVXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RJdGVtOiBQcm9qZWN0SXRlbVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQW4gb25saW5lIHdlYiBnYW1lcyBhbGxvdyBwZW9wbGUgY2FuIHBsYXkgY2hlc3Mgb3IgdGljIHRhYyB0b2UgYW5kIHNoYXJlIHRoZWlyIGhhcHBpbmVzcyBhY3Jvc3MgdGhlIHdvcmxkJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0hlYXR5NTY2L215Y2hlc3MnLFxyXG4gICAgICAgIG5hbWU6ICdNeSBDaGVzcycsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICcvYXNzZXQvaW1hZ2VzL3Byb2plY3QxLmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQW4gb25saW5lIHdlYiBnYW1lcyBhbGxvdyBwZW9wbGUgY2FuIHBsYXkgY2hlc3Mgb3IgdGljIHRhYyB0b2UgYW5kIHNoYXJlIHRoZWlyIGhhcHBpbmVzcyBhY3Jvc3MgdGhlIHdvcmxkJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3RhbnRydW9uZzIzMDMvYm9va2luZy1ob3RlbCcsXHJcbiAgICAgICAgbmFtZTogJ0Jvb2tpbmcgSG90ZWwnLFxyXG4gICAgICAgIGltYWdlVXJsOiAnL2Fzc2V0L2ltYWdlcy9wcm9qZWN0Mi5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FuIG9ubGluZSB3ZWIgZ2FtZXMgYWxsb3cgcGVvcGxlIGNhbiBwbGF5IGNoZXNzIG9yIHRpYyB0YWMgdG9lIGFuZCBzaGFyZSB0aGVpciBoYXBwaW5lc3MgYWNyb3NzIHRoZSB3b3JsZCcsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9IZWF0eTU2Ni9teWNoZXNzJyxcclxuICAgICAgICBuYW1lOiAnTW9ubyBTdG9yZScsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICcvYXNzZXQvaW1hZ2VzL3Byb2plY3QxLmpwZycsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0UHJvcHMge31cclxuXHJcbmNvbnN0IFByb2plY3Q6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb2plY3RQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLXdoaXRlIG1kOnB5LTI0IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gc3BhY2UteS04IHhsOnctNC81XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDBcIj5QUk9KRUNUUzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEuNSBiZy1ncmF5LTYwMCBvcGFjaXR5LTIwIFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXktNCBtZDpweS04IG1kOnNwYWNlLXgtMTYgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteS0wIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0SXRlbS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1heC13LW1kIHB4LTQgcHQtNiBzcGFjZS15LTRcIiBrZXk9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjAgYmxvY2sgb2JqZWN0LWNvdmVyIHctZnVsbCBoLTgwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgei0xMCB3LWZ1bGwgaC1mdWxsIHRyYW5zZm9ybSBzY2FsZS14LTExMCBzY2FsZS15LTkwIC10cmFuc2xhdGUteS04IGJnLWdyYXktMjAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGRcIj57aXRlbS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktODBcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNiBweS0yIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGJvcmRlciByb3VuZGVkLTN4bCBiZy1zYW5kYWwtNTAwIGhvdmVyOnNjYWxlLTExMCBib3JkZXItc2FuZGFsLTUwMCBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=