import { createButtonsInsideTabs } from "../src/index.js";
import { createLondonTab } from "../src/tab1.js";
import { createTokyoTab } from "../src/tab2.js";

createButtonsInsideTabs();
createLondonTab();
createTokyoTab();

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "createButtonsInsideTabs": () => (/* binding */ createButtonsInsideTabs)\n/* harmony export */ });\n{\r\n  /* <button class="tablinks" onclick="openCity(event, \'London\')">London</button>\r\n    <button class="tablinks" onclick="openCity(event, \'Paris\')">Paris</button>\r\n    <button class="tablinks" onclick="openCity(event, \'Tokyo\')">Tokyo</button>\r\n\r\n  <div id="London" class="tabcontent">\r\n    <h3>London</h3>\r\n    <p>London is the capital city of England.</p>\r\n  </div>\r\n  \r\n  <div id="Paris" class="tabcontent">\r\n    <h3>Paris</h3>\r\n    <p>Paris is the capital of France.</p> \r\n  </div>\r\n  \r\n  <div id="Tokyo" class="tabcontent">\r\n    <h3>Tokyo</h3>\r\n    <p>Tokyo is the capital of Japan.</p>\r\n  </div> */\r\n}\r\n\r\nfunction createButtonsInsideTabs() {\r\n  const tabDiv = document.querySelector("#tab-contents");\r\n\r\n  let btn1 = document.createElement("button");\r\n  let btn2 = document.createElement("button");\r\n  let btn3 = document.createElement("button");\r\n\r\n  btn1.innerHTML = "London";\r\n  btn2.innerHTML = "Paris";\r\n  btn3.innerHTML = "Tokyo";\r\n\r\n  btn1.addEventListener("click", function (event) {\r\n    openCity(event, "London");\r\n  });\r\n  btn2.addEventListener("click", function (event) {\r\n    openCity(event, "Paris");\r\n  });\r\n  btn3.addEventListener("click", function (event) {\r\n    openCity(event, "Tokyo");\r\n  });\r\n\r\n  btn1.classList.add("tablinks");\r\n  btn2.classList.add("tablinks");\r\n  btn3.classList.add("tablinks");\r\n\r\n  tabDiv.appendChild(btn1);\r\n  tabDiv.appendChild(btn2);\r\n  tabDiv.appendChild(btn3);\r\n}\r\n\r\n\r\n\r\nfunction openCity(evt, cityName) {\r\n  var i, tabcontent, tablinks;\r\n  tabcontent = document.getElementsByClassName("tabcontent");\r\n  for (i = 0; i < tabcontent.length; i++) {\r\n    tabcontent[i].style.display = "none";\r\n  }\r\n\r\n  tablinks = document.getElementsByClassName("tablinks");\r\n  for (i = 0; i < tablinks.length; i++) {\r\n    tablinks[i].className = tablinks[i].className.replace(" active", "");\r\n  }\r\n  document.getElementById(cityName).style.display = "block";\r\n  evt.currentTarget.className += " active";\r\n}\r\n\r\n// import {createButtonsInsideTabs} from \'../src/index.js\'\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/tab1.js":
      /*!*********************!*\
  !*** ./src/tab1.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "createLondonTab": () => (/* binding */ createLondonTab)\n/* harmony export */ });\n\r\n\r\n\r\nfunction createLondonTab() {\r\n  const tabDiv = document.querySelector("#tab-contents");\r\n  \r\n  let div1 = document.createElement("div");\r\n  div1.style.cssText =\r\n    "position:absolute;margin-left:50%;width:400px;height:200px;background:#FFB6C1;border:3px solid black;";\r\n\r\n  div1.classList.add("tabcontent");\r\n  div1.id = "London";\r\n\r\n  let h3 = document.createElement("h3");\r\n  h3.innerHTML = "Menu";\r\n  div1.appendChild(h3);\r\n\r\n  let p = document.createElement("p");\r\n  p.innerHTML = "About the Menu";\r\n  div1.appendChild(p);\r\n\r\n  tabDiv.appendChild(div1);\r\n}\n\n//# sourceURL=webpack://restaurantpage/./src/tab1.js?'
        );

        /***/
      },

    /***/ "./src/tab2.js":
      /*!*********************!*\
  !*** ./src/tab2.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "createTokioTab": () => (/* binding */ createTokioTab)\n/* harmony export */ });\n\r\n\r\nfunction createTokioTab() {\r\n  const tabDiv = document.querySelector("#tab-contents");\r\n  \r\n  let div2 = document.createElement("div");\r\n  div2.style.cssText =\r\n    "position:absolute;margin-left:50%;width:400px;height:200px;background:#FFB6C1;border:3px solid black;";\r\n\r\n    div2.classList.add("tabcontent");\r\n    div2.id = "Tokio";\r\n\r\n  let h3 = document.createElement("h3");\r\n  h3.innerHTML = "Menu";\r\n  div2.appendChild(h3);\r\n\r\n  let p = document.createElement("p");\r\n  p.innerHTML = "About the Menu";\r\n  div2.appendChild(p);\r\n\r\n  tabDiv.appendChild(div1);\r\n}\n\n//# sourceURL=webpack://restaurantpage/./src/tab2.js?'
        );

        /***/
      },

    /******/
  }; // The require scope
  /************************************************************************/
  /******/ /******/ var __webpack_require__ = {}; /* webpack/runtime/define property getters */
  /******/

  /************************************************************************/
  /******/ /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })(); /* webpack/runtime/hasOwnProperty shorthand */
  /******/

  /******/ /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })(); /* webpack/runtime/make namespace object */
  /******/

  /******/ /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })(); // startup // Load entry module and return exports // This entry module can't be inlined because the eval devtool is used.
  /******/

  /************************************************************************/
  /******/

  /******/ /******/ /******/ /******/ __webpack_modules__["./src/index.js"](
    0,
    {},
    __webpack_require__
  );
  /******/ __webpack_modules__["./src/tab1.js"](0, {}, __webpack_require__);
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/tab2.js"](
    0,
    __webpack_exports__,
    __webpack_require__
  );
  /******/
  /******/
})();
