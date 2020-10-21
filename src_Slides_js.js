(self["webpackChunk_webpack5_demo_app_module_server"] = self["webpackChunk_webpack5_demo_app_module_server"] || []).push([["src_Slides_js"],{

/***/ "./src/Slides.js":
/*!***********************!*\
  !*** ./src/Slides.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const images = ['https://w.wallhaven.cc/full/95/wallhaven-95r8l8.png', 'https://w.wallhaven.cc/full/lm/wallhaven-lmlgy2.png', 'https://w.wallhaven.cc/full/gj/wallhaven-gj22ge.png', 'https://w.wallhaven.cc/full/d5/wallhaven-d5lezl.png'];

const Slides = () => {
  const [num, changeNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const left = () => {
    if (num > 0) {
      changeNum(num - 1);
    }
  };

  const right = () => {
    if (num < 3) {
      changeNum(num + 1);
    }
  };

  const btnStyle = {
    cursor: 'pointer',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    width: 50,
    height: 50,
    marginTop: -25,
    fontSize: '36px',
    lineHeight: '45px',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '50%',
    textAlign: 'center'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      height: 400,
      margin: '0 20px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      whiteSpace: 'nowrap',
      transition: 'transform .6s',
      transform: `translateX(-${num * 100}%)`
    }
  }, images.map(url => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    key: url,
    src: url,
    width: "100%",
    height: "100%"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: { ...btnStyle,
      left: 5
    },
    onClick: left
  }, '<'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: { ...btnStyle,
      right: 5
    },
    onClick: right
  }, '>'));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slides);

/***/ })

}]);