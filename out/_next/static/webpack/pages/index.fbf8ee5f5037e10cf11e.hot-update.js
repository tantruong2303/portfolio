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
      className: "relative h-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: item.imageUrl,
      alt: item.name,
      className: "relative z-20 block object-cover w-full ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LnRzeCJdLCJuYW1lcyI6WyJwcm9qZWN0SXRlbSIsImRlc2NyaXB0aW9uIiwibGluayIsIm5hbWUiLCJpbWFnZVVybCIsIlByb2plY3QiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0EsSUFBTUEsV0FBMEIsR0FBRyxDQUMvQjtBQUNJQyxhQUFXLEVBQUUsMkdBRGpCO0FBRUlDLE1BQUksRUFBRSxxQ0FGVjtBQUdJQyxNQUFJLEVBQUUsVUFIVjtBQUlJQyxVQUFRLEVBQUU7QUFKZCxDQUQrQixFQU8vQjtBQUNJSCxhQUFXLEVBQUUsMkdBRGpCO0FBRUlDLE1BQUksRUFBRSxnREFGVjtBQUdJQyxNQUFJLEVBQUUsZUFIVjtBQUlJQyxVQUFRLEVBQUU7QUFKZCxDQVArQixFQWEvQjtBQUNJSCxhQUFXLEVBQUUsMkdBRGpCO0FBRUlDLE1BQUksRUFBRSxxQ0FGVjtBQUdJQyxNQUFJLEVBQUUsWUFIVjtBQUlJQyxVQUFRLEVBQUU7QUFKZCxDQWIrQixDQUFuQzs7QUF1QkEsSUFBTUMsT0FBOEMsR0FBRyxTQUFqREEsT0FBaUQsR0FBTTtBQUN6RCxTQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMscUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMscUdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTCxXQUFXLENBQUNNLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCLFdBQ0k7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBcUQsU0FBRyxFQUFFQSxJQUFJLENBQUNKLElBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVJLElBQUksQ0FBQ0gsUUFBZjtBQUF5QixTQUFHLEVBQUVHLElBQUksQ0FBQ0osSUFBbkM7QUFBeUMsZUFBUyxFQUFDLDBDQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFLLGVBQVMsRUFBQyxzR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FESixFQUtJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUksZUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0NJLElBQUksQ0FBQ0osSUFBN0MsQ0FESixFQUVJO0FBQUcsZUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQkksSUFBSSxDQUFDTixXQUFoQyxDQUZKLEVBR0k7QUFDSSxVQUFJLEVBQUVNLElBQUksQ0FBQ0wsSUFEZjtBQUVJLGVBQVMsRUFBQyxpTEFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKLENBTEosQ0FESjtBQWtCSCxHQW5CQSxDQURMLENBTEosQ0FESixDQURKO0FBZ0NILENBakNEOztLQUFNRyxPO0FBbUNTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYmY4ZWU1ZjUwMzdlMTBjZjExZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb2plY3RJdGVtIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICBpbWFnZVVybDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0SXRlbTogUHJvamVjdEl0ZW1bXSA9IFtcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FuIG9ubGluZSB3ZWIgZ2FtZXMgYWxsb3cgcGVvcGxlIGNhbiBwbGF5IGNoZXNzIG9yIHRpYyB0YWMgdG9lIGFuZCBzaGFyZSB0aGVpciBoYXBwaW5lc3MgYWNyb3NzIHRoZSB3b3JsZCcsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9IZWF0eTU2Ni9teWNoZXNzJyxcclxuICAgICAgICBuYW1lOiAnTXkgQ2hlc3MnLFxyXG4gICAgICAgIGltYWdlVXJsOiAnL2Fzc2V0L2ltYWdlcy9wcm9qZWN0MS5qcGcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FuIG9ubGluZSB3ZWIgZ2FtZXMgYWxsb3cgcGVvcGxlIGNhbiBwbGF5IGNoZXNzIG9yIHRpYyB0YWMgdG9lIGFuZCBzaGFyZSB0aGVpciBoYXBwaW5lc3MgYWNyb3NzIHRoZSB3b3JsZCcsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS90YW50cnVvbmcyMzAzL2Jvb2tpbmctaG90ZWwnLFxyXG4gICAgICAgIG5hbWU6ICdCb29raW5nIEhvdGVsJyxcclxuICAgICAgICBpbWFnZVVybDogJy9hc3NldC9pbWFnZXMvcHJvamVjdDIucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbiBvbmxpbmUgd2ViIGdhbWVzIGFsbG93IHBlb3BsZSBjYW4gcGxheSBjaGVzcyBvciB0aWMgdGFjIHRvZSBhbmQgc2hhcmUgdGhlaXIgaGFwcGluZXNzIGFjcm9zcyB0aGUgd29ybGQnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vSGVhdHk1NjYvbXljaGVzcycsXHJcbiAgICAgICAgbmFtZTogJ01vbm8gU3RvcmUnLFxyXG4gICAgICAgIGltYWdlVXJsOiAnL2Fzc2V0L2ltYWdlcy9wcm9qZWN0MS5qcGcnLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdFByb3BzIHt9XHJcblxyXG5jb25zdCBQcm9qZWN0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9qZWN0UHJvcHM+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBiZy13aGl0ZSBtZDpweS0yNCBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHNwYWNlLXktOCB4bDp3LTQvNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwXCI+UFJPSkVDVFM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xLjUgYmctZ3JheS02MDAgb3BhY2l0eS0yMCBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTQgbWQ6cHktOCBtZDpzcGFjZS14LTE2IG1kOmZsZXgtcm93IG1kOnNwYWNlLXktMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdEl0ZW0ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtYXgtdy1tZCBweC00IHB0LTYgc3BhY2UteS00XCIga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlVXJsfSBhbHQ9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0yMCBibG9jayBvYmplY3QtY292ZXIgdy1mdWxsIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHotMTAgdy1mdWxsIGgtZnVsbCB0cmFuc2Zvcm0gc2NhbGUteC0xMTAgc2NhbGUteS05MCAtdHJhbnNsYXRlLXktOCBiZy1ncmF5LTIwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkXCI+e2l0ZW0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcGFjaXR5LTgwXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTYgcHktMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBib3JkZXIgcm91bmRlZC0zeGwgYmctc2FuZGFsLTUwMCBob3ZlcjpzY2FsZS0xMTAgYm9yZGVyLXNhbmRhbC01MDAgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9