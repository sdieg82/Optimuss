"use strict";
self["webpackHotUpdate_N_E"]("pages/bajoStock",{

/***/ "./pages/bajoStock.js":
/*!****************************!*\
  !*** ./pages/bajoStock.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Diego_Desktop_Opti_Optimus_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Diego_Desktop_Opti_Optimus_Front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Diego\\Desktop\\Opti\\Optimus Front\\pages\\bajoStock.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Diego_Desktop_Opti_Optimus_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0,C_Users_Diego_Desktop_Opti_Optimus_Front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\nquery Query {\n    bajoStock {\n      id\n      codigo\n      nombre\n      existencia\n      precio\n      creado\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var BAJO_STOCK = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());

var bajoStock = function bajoStock() {
  _s();

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(BAJO_STOCK),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error,
      startPolling = _useQuery.startPolling,
      stopPolling = _useQuery.stopPolling;

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    startPolling(1000);
    return function () {
      stopPolling();
    };
  }, [startPolling, stopPolling]);
  if (loading) return 'cargando...';
  console.log(data);
  var bajoStock = data.bajoStock;
  var productoGrafica = [];
  bajoStock.map(function (producto, index) {
    productoGrafica[index] = _objectSpread({}, producto === null || producto === void 0 ? void 0 : producto.producto[0]);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "text-2xl text-gray-800 font-light",
      children: "Bajas Existencias"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.BarChart, {
      className: "mt-10",
      width: 600,
      height: 500,
      data: productoGrafica,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.CartesianGrid, {
        strokeDasharray: "3 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.XAxis, {
        dataKey: "nombre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Legend, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Bar, {
        dataKey: "existencia",
        fill: "#3182CE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, _this);
};

_s(bajoStock, "ZbnIU7bYRz3WzbHr5e+22cV/z3c=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];
});

/* harmony default export */ __webpack_exports__["default"] = (bajoStock);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmFqb1N0b2NrLjM3M2QyM2JmMDI0YWM0NTQ5YjUzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFQSxJQUFNWSxVQUFVLEdBQUNGLG1EQUFELG1CQUFoQjs7QUFhQSxJQUFNRyxTQUFTLEdBQUcscUJBQU07QUFBQTs7QUFBQSxrQkFFc0NGLHdEQUFRLENBQUNDLFVBQUQsQ0FGOUM7QUFBQSxNQUViRSxJQUZhLGFBRWJBLElBRmE7QUFBQSxNQUVQQyxPQUZPLGFBRVBBLE9BRk87QUFBQSxNQUVFQyxLQUZGLGFBRUVBLEtBRkY7QUFBQSxNQUVTQyxZQUZULGFBRVNBLFlBRlQ7QUFBQSxNQUV1QkMsV0FGdkIsYUFFdUJBLFdBRnZCOztBQU1wQmpCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaZ0IsSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBLFdBQU8sWUFBTTtBQUNUQyxNQUFBQSxXQUFXO0FBQ2QsS0FGRDtBQUdILEdBTFEsRUFLTixDQUFDRCxZQUFELEVBQWVDLFdBQWYsQ0FMTSxDQUFUO0FBT0EsTUFBR0gsT0FBSCxFQUFZLE9BQU8sYUFBUDtBQUVaSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQWZvQixNQWtCYkQsU0FsQmEsR0FrQkFDLElBbEJBLENBa0JiRCxTQWxCYTtBQW9CcEIsTUFBTVEsZUFBZSxHQUFHLEVBQXhCO0FBRUFSLEVBQUFBLFNBQVMsQ0FBQ1MsR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUMvQkgsSUFBQUEsZUFBZSxDQUFDRyxLQUFELENBQWYscUJBQ09ELFFBRFAsYUFDT0EsUUFEUCx1QkFDT0EsUUFBUSxDQUFFQSxRQUFWLENBQW1CLENBQW5CLENBRFA7QUFHSCxHQUpEO0FBUUEsc0JBQ0ksOERBQUMsdURBQUQ7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxtQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0ksOERBQUMsOENBQUQ7QUFDSSxlQUFTLEVBQUMsT0FEZDtBQUVJLFdBQUssRUFBRSxHQUZYO0FBR0ksWUFBTSxFQUFFLEdBSFo7QUFJSSxVQUFJLEVBQUVGLGVBSlY7QUFLSSxZQUFNLEVBQUU7QUFDSkksUUFBQUEsR0FBRyxFQUFFLENBREQ7QUFDSUMsUUFBQUEsS0FBSyxFQUFFLEVBRFg7QUFDZUMsUUFBQUEsSUFBSSxFQUFFLEVBRHJCO0FBQ3lCQyxRQUFBQSxNQUFNLEVBQUU7QUFEakMsT0FMWjtBQUFBLDhCQVNJLDhEQUFDLG1EQUFEO0FBQWUsdUJBQWUsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosZUFVSSw4REFBQywyQ0FBRDtBQUFPLGVBQU8sRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSixlQVdJLDhEQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixlQVlJLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSixlQWFJLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixlQWNJLDhEQUFDLHlDQUFEO0FBQUssZUFBTyxFQUFDLFlBQWI7QUFBMEIsWUFBSSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQXBERDs7R0FBTWY7VUFFd0RGOzs7QUFvRDlELCtEQUFlRSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jham9TdG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHtcclxuICAgIEJhckNoYXJ0LCBCYXIsICBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIExlZ2VuZCxcclxuICB9IGZyb20gJ3JlY2hhcnRzJztcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmNvbnN0IEJBSk9fU1RPQ0s9Z3FsYFxyXG5xdWVyeSBRdWVyeSB7XHJcbiAgICBiYWpvU3RvY2sge1xyXG4gICAgICBpZFxyXG4gICAgICBjb2RpZ29cclxuICAgICAgbm9tYnJlXHJcbiAgICAgIGV4aXN0ZW5jaWFcclxuICAgICAgcHJlY2lvXHJcbiAgICAgIGNyZWFkb1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgYmFqb1N0b2NrID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvciwgc3RhcnRQb2xsaW5nLCBzdG9wUG9sbGluZ30gPSB1c2VRdWVyeShCQUpPX1NUT0NLKTtcclxuXHJcbiAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzdGFydFBvbGxpbmcoMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc3RvcFBvbGxpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc3RhcnRQb2xsaW5nLCBzdG9wUG9sbGluZ10pXHJcblxyXG4gICAgaWYobG9hZGluZykgcmV0dXJuICdjYXJnYW5kby4uLic7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHtiYWpvU3RvY2t9ID0gZGF0YTtcclxuICAgIFxyXG4gICAgY29uc3QgcHJvZHVjdG9HcmFmaWNhID0gW107XHJcblxyXG4gICAgYmFqb1N0b2NrLm1hcCgocHJvZHVjdG8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcHJvZHVjdG9HcmFmaWNhW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG8/LnByb2R1Y3RvWzBdXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS04MDAgZm9udC1saWdodFwiPkJhamFzIEV4aXN0ZW5jaWFzPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxCYXJDaGFydFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTBcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17cHJvZHVjdG9HcmFmaWNhfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1LCByaWdodDogMzAsIGxlZnQ6IDIwLCBib3R0b206IDUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJub21icmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFlBeGlzIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCAvPlxyXG4gICAgICAgICAgICAgICAgPExlZ2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgPEJhciBkYXRhS2V5PVwiZXhpc3RlbmNpYVwiIGZpbGw9XCIjMzE4MkNFXCIgLz5cclxuICAgICAgICAgICAgPC9CYXJDaGFydD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgYmFqb1N0b2NrOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkxheW91dCIsIkJhckNoYXJ0IiwiQmFyIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiTGVnZW5kIiwiZ3FsIiwidXNlUXVlcnkiLCJCQUpPX1NUT0NLIiwiYmFqb1N0b2NrIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInN0YXJ0UG9sbGluZyIsInN0b3BQb2xsaW5nIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RvR3JhZmljYSIsIm1hcCIsInByb2R1Y3RvIiwiaW5kZXgiLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iXSwic291cmNlUm9vdCI6IiJ9