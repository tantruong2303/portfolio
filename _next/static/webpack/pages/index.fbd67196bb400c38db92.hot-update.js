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
  description: 'SanninSC Hotel is a website that allows the manager to manage lodging reservations and provide booking services online for customers. This project was the final assignment project for Java Web application development course, and we got 9.5 points for both implementation and documentation',
  link: 'https://github.com/tantruong2303/booking-hotel',
  name: 'Booking Hotel',
  imageUrl: '/asset/images/project2.jpg'
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
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mx-auto space-y-8 xl:w-4/5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "space-y-2 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-semibold text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "PROJECTS"), __jsx("div", {
    className: "h-1.5 bg-gray-600 opacity-20 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "flex flex-col items-center justify-center space-y-4 md:py-8 md:space-x-16 md:flex-row md:space-y-0 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, projectItem.map(function (item) {
    return __jsx("div", {
      className: "flex-1 max-w-md px-4 pt-6 space-y-4",
      key: item.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: item.imageUrl,
      alt: item.name,
      className: "relative z-20 block object-cover w-full h-64",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: "absolute top-0 left-0 z-10 w-full h-full transform scale-x-110 scale-y-90 -translate-y-8 bg-gray-200",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: "space-y-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }
    }, __jsx("h1", {
      className: "text-4xl font-semibold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 37
      }
    }, item.name), __jsx("p", {
      className: "opacity-80",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 37
      }
    }, item.description), __jsx("a", {
      href: item.link,
      className: "inline-block px-6 py-2 text-lg font-medium text-white duration-300 transform border rounded-3xl bg-sandal-500 hover:scale-110 border-sandal-500 hover:bg-white hover:text-black",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LnRzeCJdLCJuYW1lcyI6WyJwcm9qZWN0SXRlbSIsImRlc2NyaXB0aW9uIiwibGluayIsIm5hbWUiLCJpbWFnZVVybCIsIlByb2plY3QiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0EsSUFBTUEsV0FBMEIsR0FBRyxDQUMvQjtBQUNJQyxhQUFXLEVBQUUsMkdBRGpCO0FBRUlDLE1BQUksRUFBRSxxQ0FGVjtBQUdJQyxNQUFJLEVBQUUsVUFIVjtBQUlJQyxVQUFRLEVBQUU7QUFKZCxDQUQrQixFQU8vQjtBQUNJSCxhQUFXLEVBQ1Asa1NBRlI7QUFHSUMsTUFBSSxFQUFFLGdEQUhWO0FBSUlDLE1BQUksRUFBRSxlQUpWO0FBS0lDLFVBQVEsRUFBRTtBQUxkLENBUCtCLEVBYy9CO0FBQ0lILGFBQVcsRUFBRSwyR0FEakI7QUFFSUMsTUFBSSxFQUFFLHFDQUZWO0FBR0lDLE1BQUksRUFBRSxZQUhWO0FBSUlDLFVBQVEsRUFBRTtBQUpkLENBZCtCLENBQW5DOztBQXdCQSxJQUFNQyxPQUE4QyxHQUFHLFNBQWpEQSxPQUFpRCxHQUFNO0FBQ3pELFNBQ0k7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFLLGFBQVMsRUFBQyxxR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tMLFdBQVcsQ0FBQ00sR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDdkIsV0FDSTtBQUFLLGVBQVMsRUFBQyxxQ0FBZjtBQUFxRCxTQUFHLEVBQUVBLElBQUksQ0FBQ0osSUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFSSxJQUFJLENBQUNILFFBQWY7QUFBeUIsU0FBRyxFQUFFRyxJQUFJLENBQUNKLElBQW5DO0FBQXlDLGVBQVMsRUFBQyw4Q0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUk7QUFBSyxlQUFTLEVBQUMsc0dBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREosRUFLSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFJLGVBQVMsRUFBQyx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdDSSxJQUFJLENBQUNKLElBQTdDLENBREosRUFFSTtBQUFHLGVBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkJJLElBQUksQ0FBQ04sV0FBaEMsQ0FGSixFQUdJO0FBQ0ksVUFBSSxFQUFFTSxJQUFJLENBQUNMLElBRGY7QUFFSSxlQUFTLEVBQUMsaUxBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISixDQUxKLENBREo7QUFrQkgsR0FuQkEsQ0FETCxDQUxKLENBREosQ0FESjtBQWdDSCxDQWpDRDs7S0FBTUcsTztBQW1DU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmJkNjcxOTZiYjQwMGMzOGRiOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQcm9qZWN0SXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgaW1hZ2VVcmw6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgcHJvamVjdEl0ZW06IFByb2plY3RJdGVtW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbiBvbmxpbmUgd2ViIGdhbWVzIGFsbG93IHBlb3BsZSBjYW4gcGxheSBjaGVzcyBvciB0aWMgdGFjIHRvZSBhbmQgc2hhcmUgdGhlaXIgaGFwcGluZXNzIGFjcm9zcyB0aGUgd29ybGQnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vSGVhdHk1NjYvbXljaGVzcycsXHJcbiAgICAgICAgbmFtZTogJ015IENoZXNzJyxcclxuICAgICAgICBpbWFnZVVybDogJy9hc3NldC9pbWFnZXMvcHJvamVjdDEuanBnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdTYW5uaW5TQyBIb3RlbCBpcyBhIHdlYnNpdGUgdGhhdCBhbGxvd3MgdGhlIG1hbmFnZXIgdG8gbWFuYWdlIGxvZGdpbmcgcmVzZXJ2YXRpb25zIGFuZCBwcm92aWRlIGJvb2tpbmcgc2VydmljZXMgb25saW5lIGZvciBjdXN0b21lcnMuIFRoaXMgcHJvamVjdCB3YXMgdGhlIGZpbmFsIGFzc2lnbm1lbnQgcHJvamVjdCBmb3IgSmF2YSBXZWIgYXBwbGljYXRpb24gZGV2ZWxvcG1lbnQgY291cnNlLCBhbmQgd2UgZ290IDkuNSBwb2ludHMgZm9yIGJvdGggaW1wbGVtZW50YXRpb24gYW5kIGRvY3VtZW50YXRpb24nLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdGFudHJ1b25nMjMwMy9ib29raW5nLWhvdGVsJyxcclxuICAgICAgICBuYW1lOiAnQm9va2luZyBIb3RlbCcsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICcvYXNzZXQvaW1hZ2VzL3Byb2plY3QyLmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQW4gb25saW5lIHdlYiBnYW1lcyBhbGxvdyBwZW9wbGUgY2FuIHBsYXkgY2hlc3Mgb3IgdGljIHRhYyB0b2UgYW5kIHNoYXJlIHRoZWlyIGhhcHBpbmVzcyBhY3Jvc3MgdGhlIHdvcmxkJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0hlYXR5NTY2L215Y2hlc3MnLFxyXG4gICAgICAgIG5hbWU6ICdNb25vIFN0b3JlJyxcclxuICAgICAgICBpbWFnZVVybDogJy9hc3NldC9pbWFnZXMvcHJvamVjdDEuanBnJyxcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RQcm9wcyB7fVxyXG5cclxuY29uc3QgUHJvamVjdDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvamVjdFByb3BzPiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctd2hpdGUgbWQ6cHktMjQgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBzcGFjZS15LTggeGw6dy00LzVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMFwiPlBST0pFQ1RTPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMS41IGJnLWdyYXktNjAwIG9wYWNpdHktMjAgXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS00IG1kOnB5LTggbWQ6c3BhY2UteC0xNiBtZDpmbGV4LXJvdyBtZDpzcGFjZS15LTAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RJdGVtLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWF4LXctbWQgcHgtNCBwdC02IHNwYWNlLXktNFwiIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlVXJsfSBhbHQ9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0yMCBibG9jayBvYmplY3QtY292ZXIgdy1mdWxsIGgtNjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB6LTEwIHctZnVsbCBoLWZ1bGwgdHJhbnNmb3JtIHNjYWxlLXgtMTEwIHNjYWxlLXktOTAgLXRyYW5zbGF0ZS15LTggYmctZ3JheS0yMDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZFwiPntpdGVtLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3BhY2l0eS04MFwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC02IHB5LTIgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gYm9yZGVyIHJvdW5kZWQtM3hsIGJnLXNhbmRhbC01MDAgaG92ZXI6c2NhbGUtMTEwIGJvcmRlci1zYW5kYWwtNTAwIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==