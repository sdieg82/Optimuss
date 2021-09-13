"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/apollo.js":
/*!**************************!*\
  !*** ./config/apollo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({
  uri: 'http://localhost:4000/',
  fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_1___default())
});
const authLink = (0,apollo_link_context__WEBPACK_IMPORTED_MODULE_2__.setContext)((_, {
  headers
}) => {
  // Leer el storage almacenado
  const token = localStorage.getItem('token'); // console.log(token);

  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: token ? `Bearer ${token}` : ''
    })
  };
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  connectToDevTools: true,
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),
  link: authLink.concat(httpLink)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);

/***/ }),

/***/ "./context/pedidos/PedidoContext.js":
/*!******************************************!*\
  !*** ./context/pedidos/PedidoContext.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PedidoContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PedidoContext);

/***/ }),

/***/ "./context/pedidos/PedidoReducer.js":
/*!******************************************!*\
  !*** ./context/pedidos/PedidoReducer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.SELECCIONAR_CLIENTE:
      return _objectSpread(_objectSpread({}, state), {}, {
        cliente: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.SELECCIONAR_PRODUCTO:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.CANTIDAD_PRODUCTOS:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.ACTUALIZAR_TOTAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.productos.reduce((nuevoTotal, articulo) => nuevoTotal += articulo.precio * articulo.cantidad, 0)
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/pedidos/PedidoState.js":
/*!****************************************!*\
  !*** ./context/pedidos/PedidoState.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PedidoContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PedidoContext */ "./context/pedidos/PedidoContext.js");
/* harmony import */ var _PedidoReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PedidoReducer */ "./context/pedidos/PedidoReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types */ "./types/index.js");

var _jsxFileName = "C:\\Users\\Diego\\Desktop\\Opti\\Optimus Front\\context\\pedidos\\PedidoState.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PedidoState = ({
  children
}) => {
  // State de Pedidos
  const initialState = {
    cliente: {},
    productos: [],
    total: 0
  };
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_PedidoReducer__WEBPACK_IMPORTED_MODULE_3__.default, initialState); // Modifica el Cliente

  const agregarCliente = cliente => {
    // console.log(cliente);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SELECCIONAR_CLIENTE,
      payload: cliente
    });
  }; // Modifica los productos


  const agregarProducto = productosSeleccionados => {
    let nuevoState;

    if (state.productos.length > 0) {
      // Tomar del segundo arreglo, una copia para asignarlo al primero
      nuevoState = productosSeleccionados === null || productosSeleccionados === void 0 ? void 0 : productosSeleccionados.map(producto => {
        const nuevoObjeto = state.productos.find(productoState => productoState.id === producto.id);
        return _objectSpread(_objectSpread({}, producto), nuevoObjeto);
      });
    } else {
      nuevoState = productosSeleccionados;
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.SELECCIONAR_PRODUCTO,
      payload: nuevoState
    });
  }; // Modifica las cantidades de los productos


  const cantidadProductos = nuevoProducto => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.CANTIDAD_PRODUCTOS,
      payload: nuevoProducto
    });
  };

  const actualizarTotal = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.ACTUALIZAR_TOTAL
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PedidoContext__WEBPACK_IMPORTED_MODULE_2__.default.Provider, {
    value: {
      cliente: state.cliente,
      productos: state.productos,
      total: state.total,
      agregarCliente,
      agregarProducto,
      cantidadProductos,
      actualizarTotal
    },
    children: [" ", children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PedidoState);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/apollo */ "./config/apollo.js");
/* harmony import */ var _context_pedidos_PedidoState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/pedidos/PedidoState */ "./context/pedidos/PedidoState.js");

var _jsxFileName = "C:\\Users\\Diego\\Desktop\\Opti\\Optimus Front\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
    client: _config_apollo__WEBPACK_IMPORTED_MODULE_2__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_pedidos_PedidoState__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SELECCIONAR_CLIENTE": () => (/* binding */ SELECCIONAR_CLIENTE),
/* harmony export */   "SELECCIONAR_PRODUCTO": () => (/* binding */ SELECCIONAR_PRODUCTO),
/* harmony export */   "CANTIDAD_PRODUCTOS": () => (/* binding */ CANTIDAD_PRODUCTOS),
/* harmony export */   "ACTUALIZAR_TOTAL": () => (/* binding */ ACTUALIZAR_TOTAL)
/* harmony export */ });
const SELECCIONAR_CLIENTE = 'SELECCIONAR_CLIENTE';
const SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';
const CANTIDAD_PRODUCTOS = 'CANTIDAD_PRODUCTOS';
const ACTUALIZAR_TOTAL = 'ACTUALIZAR_TOTAL';

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyw0REFBRDtBQUNJLFNBQUssRUFBRTtBQUNISSxNQUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FEWjtBQUVIRSxNQUFBQSxTQUFTLEVBQUVMLEtBQUssQ0FBQ0ssU0FGZDtBQUdISSxNQUFBQSxLQUFLLEVBQUVULEtBQUssQ0FBQ1MsS0FIVjtBQUlIYSxNQUFBQSxjQUpHO0FBS0hDLE1BQUFBLGVBTEc7QUFNSE8sTUFBQUEsaUJBTkc7QUFPSEUsTUFBQUE7QUFQRyxLQURYO0FBQUEsb0JBV0diLFFBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFlSCxDQXZFRDs7QUF5RUEsaUVBQWVELFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNZ0IsS0FBSyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQUQsS0FBNkI7QUFDdkMsc0JBQ0ksOERBQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFL0MsbURBQXhCO0FBQUEsMkJBQ0ksOERBQUMsaUVBQUQ7QUFBQSw2QkFDSSw4REFBQyxTQUFELG9CQUFlK0MsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU9ILENBUkQ7O0FBVUEsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZk8sTUFBTXRDLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6Qjs7Ozs7Ozs7OztBQ0hQOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHRpbXVzLWZyb250Ly4vY29uZmlnL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9vcHRpbXVzLWZyb250Ly4vY29udGV4dC9wZWRpZG9zL1BlZGlkb0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vb3B0aW11cy1mcm9udC8uL2NvbnRleHQvcGVkaWRvcy9QZWRpZG9SZWR1Y2VyLmpzIiwid2VicGFjazovL29wdGltdXMtZnJvbnQvLi9jb250ZXh0L3BlZGlkb3MvUGVkaWRvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vb3B0aW11cy1mcm9udC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vb3B0aW11cy1mcm9udC8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovL29wdGltdXMtZnJvbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL29wdGltdXMtZnJvbnQvZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vb3B0aW11cy1mcm9udC9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIiIsIndlYnBhY2s6Ly9vcHRpbXVzLWZyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9vcHRpbXVzLWZyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXHJcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcclxuXHJcbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xyXG4gICAgdXJpOidodHRwOi8vbG9jYWxob3N0OjQwMDAvJyxcclxuICAgIGZldGNoICBcclxufSk7XHJcblxyXG5cclxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xyXG5cclxuICAgIC8vIExlZXIgZWwgc3RvcmFnZSBhbG1hY2VuYWRvXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgY29ubmVjdFRvRGV2VG9vbHM6IHRydWUsXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxuICAgIGxpbms6IGF1dGhMaW5rLmNvbmNhdCggaHR0cExpbmsgKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGVkaWRvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlZGlkb0NvbnRleHQ7IiwiaW1wb3J0IHtcclxuICAgIFNFTEVDQ0lPTkFSX0NMSUVOVEUsXHJcbiAgICBTRUxFQ0NJT05BUl9QUk9EVUNUTyxcclxuICAgIENBTlRJREFEX1BST0RVQ1RPUyxcclxuICAgIEFDVFVBTElaQVJfVE9UQUxcclxuICAgIFxyXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQoc3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuXHJcbiAgICAgICAgY2FzZSBTRUxFQ0NJT05BUl9DTElFTlRFOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50ZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VMRUNDSU9OQVJfUFJPRFVDVE86IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b3M6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENBTlRJREFEX1BST0RVQ1RPUzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG9zOiBzdGF0ZS5wcm9kdWN0b3MubWFwKCBwcm9kdWN0byA9PiBwcm9kdWN0by5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQgPyBwcm9kdWN0byA9IGFjdGlvbi5wYXlsb2FkIDogcHJvZHVjdG8gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RVQUxJWkFSX1RPVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUucHJvZHVjdG9zLnJlZHVjZSggKG51ZXZvVG90YWwsIGFydGljdWxvKSA9PiBudWV2b1RvdGFsICs9IGFydGljdWxvLnByZWNpbyAqIGFydGljdWxvLmNhbnRpZGFkLCAwIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICBSZWFjdCwgeyB1c2VSZWR1Y2VywqB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBlZGlkb0NvbnRleHQgZnJvbSAnLi9QZWRpZG9Db250ZXh0JztcclxuaW1wb3J0IFBlZGlkb1JlZHVjZXIgZnJvbSAnLi9QZWRpZG9SZWR1Y2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBTRUxFQ0NJT05BUl9DTElFTlRFLFxyXG4gICAgU0VMRUNDSU9OQVJfUFJPRFVDVE8sXHJcbiAgICBDQU5USURBRF9QUk9EVUNUT1MsXHJcbiAgICBBQ1RVQUxJWkFSX1RPVEFMXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnXHJcblxyXG5cclxuY29uc3QgUGVkaWRvU3RhdGUgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG5cclxuICAgIC8vIFN0YXRlIGRlIFBlZGlkb3NcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBjbGllbnRlOiB7fSxcclxuICAgICAgICBwcm9kdWN0b3M6IFtdLFxyXG4gICAgICAgIHRvdGFsOiAwXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoUGVkaWRvUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICAgIFxyXG4gICAgIC8vIE1vZGlmaWNhIGVsIENsaWVudGVcclxuICAgICBjb25zdCBhZ3JlZ2FyQ2xpZW50ZSA9IGNsaWVudGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNsaWVudGUpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFTEVDQ0lPTkFSX0NMSUVOVEUsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGNsaWVudGVcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxuXHJcblxyXG4gICAgLy8gTW9kaWZpY2EgbG9zIHByb2R1Y3Rvc1xyXG4gICAgY29uc3QgYWdyZWdhclByb2R1Y3RvID0gcHJvZHVjdG9zU2VsZWNjaW9uYWRvcyA9PiB7XHJcblxyXG4gICAgICAgIGxldCBudWV2b1N0YXRlO1xyXG4gICAgICAgIGlmKHN0YXRlLnByb2R1Y3Rvcy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICAvLyBUb21hciBkZWwgc2VndW5kbyBhcnJlZ2xvLCB1bmEgY29waWEgcGFyYSBhc2lnbmFybG8gYWwgcHJpbWVyb1xyXG4gICAgICAgICAgICBudWV2b1N0YXRlID0gcHJvZHVjdG9zU2VsZWNjaW9uYWRvcz8ubWFwKCBwcm9kdWN0byA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudWV2b09iamV0byA9IHN0YXRlLnByb2R1Y3Rvcy5maW5kKCBwcm9kdWN0b1N0YXRlID0+IHByb2R1Y3RvU3RhdGUuaWQgPT09IHByb2R1Y3RvLmlkICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5wcm9kdWN0bywgLi4ubnVldm9PYmpldG/CoH1cclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbnVldm9TdGF0ZSA9IHByb2R1Y3Rvc1NlbGVjY2lvbmFkb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUxFQ0NJT05BUl9QUk9EVUNUTyxcclxuICAgICAgICAgICAgcGF5bG9hZDogbnVldm9TdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW9kaWZpY2EgbGFzIGNhbnRpZGFkZXMgZGUgbG9zIHByb2R1Y3Rvc1xyXG4gICAgY29uc3QgY2FudGlkYWRQcm9kdWN0b3MgPSBudWV2b1Byb2R1Y3RvID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0FOVElEQURfUFJPRFVDVE9TLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBudWV2b1Byb2R1Y3RvXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFjdHVhbGl6YXJUb3RhbCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfVE9UQUxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBlZGlkb0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b3M6IHN0YXRlLnByb2R1Y3RvcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcclxuICAgICAgICAgICAgICAgIGFncmVnYXJDbGllbnRlLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhclByb2R1Y3RvLFxyXG4gICAgICAgICAgICAgICAgY2FudGlkYWRQcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAgICBhY3R1YWxpemFyVG90YWxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID4ge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUGVkaWRvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVkaWRvU3RhdGU7IiwiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXLCoH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY29uZmlnL2Fwb2xsbyc7XHJcbmltcG9ydCBQZWRpZG9TdGF0ZSBmcm9tICcuLi9jb250ZXh0L3BlZGlkb3MvUGVkaWRvU3RhdGUnXHJcblxyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxyXG4gICAgICAgICAgICA8UGVkaWRvU3RhdGU+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvUGVkaWRvU3RhdGU+XHJcbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7IiwiZXhwb3J0IGNvbnN0IFNFTEVDQ0lPTkFSX0NMSUVOVEUgPSAnU0VMRUNDSU9OQVJfQ0xJRU5URSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ0NJT05BUl9QUk9EVUNUTyA9ICdTRUxFQ0NJT05BUl9QUk9EVUNUTyc7XHJcbmV4cG9ydCBjb25zdCBDQU5USURBRF9QUk9EVUNUT1MgPSAnQ0FOVElEQURfUFJPRFVDVE9TJztcclxuZXhwb3J0IGNvbnN0IEFDVFVBTElaQVJfVE9UQUwgPSAnQUNUVUFMSVpBUl9UT1RBTCc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstY29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiY3JlYXRlSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwiZmV0Y2giLCJzZXRDb250ZXh0IiwiaHR0cExpbmsiLCJ1cmkiLCJhdXRoTGluayIsIl8iLCJoZWFkZXJzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0aG9yaXphdGlvbiIsImNsaWVudCIsImNvbm5lY3RUb0RldlRvb2xzIiwiY2FjaGUiLCJsaW5rIiwiY29uY2F0IiwiY3JlYXRlQ29udGV4dCIsIlBlZGlkb0NvbnRleHQiLCJTRUxFQ0NJT05BUl9DTElFTlRFIiwiU0VMRUNDSU9OQVJfUFJPRFVDVE8iLCJDQU5USURBRF9QUk9EVUNUT1MiLCJBQ1RVQUxJWkFSX1RPVEFMIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY2xpZW50ZSIsInBheWxvYWQiLCJwcm9kdWN0b3MiLCJtYXAiLCJwcm9kdWN0byIsImlkIiwidG90YWwiLCJyZWR1Y2UiLCJudWV2b1RvdGFsIiwiYXJ0aWN1bG8iLCJwcmVjaW8iLCJjYW50aWRhZCIsIlJlYWN0IiwidXNlUmVkdWNlciIsIlBlZGlkb1JlZHVjZXIiLCJQZWRpZG9TdGF0ZSIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwiZGlzcGF0Y2giLCJhZ3JlZ2FyQ2xpZW50ZSIsImFncmVnYXJQcm9kdWN0byIsInByb2R1Y3Rvc1NlbGVjY2lvbmFkb3MiLCJudWV2b1N0YXRlIiwibGVuZ3RoIiwibnVldm9PYmpldG8iLCJmaW5kIiwicHJvZHVjdG9TdGF0ZSIsImNhbnRpZGFkUHJvZHVjdG9zIiwibnVldm9Qcm9kdWN0byIsImFjdHVhbGl6YXJUb3RhbCIsIkFwb2xsb1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9