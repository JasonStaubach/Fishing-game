/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_fish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/fish */ \"./src/scripts/fish.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  const ctx = canvasEl.getContext(\"2d\");\n  canvasEl.width = _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PIX_X;\n  canvasEl.height = _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PIX_Y;\n  let fish = new _scripts_fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  console.log(fish.name);\n  //start game in here\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ2lDO0FBQ0E7QUFFakNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUN2RCxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUNyQ0gsUUFBUSxDQUFDSSxLQUFLLEdBQUdQLHFEQUFJLENBQUNRLEtBQUs7RUFDM0JMLFFBQVEsQ0FBQ00sTUFBTSxHQUFHVCxxREFBSSxDQUFDVSxLQUFLO0VBRTVCLElBQUlDLElBQUksR0FBRyxJQUFJWixxREFBSSxDQUFDLENBQUM7RUFDckJhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUNHLElBQUksQ0FBQztFQUN0QjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpc2hpbmctZ2FtZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgRmlzaCBmcm9tIFwiLi9zY3JpcHRzL2Zpc2hcIlxyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIlxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY2FudmFzRWwud2lkdGggPSBHYW1lLlBJWF9YO1xyXG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gR2FtZS5QSVhfWTtcclxuXHJcbiAgICBsZXQgZmlzaCA9IG5ldyBGaXNoKClcclxuICAgIGNvbnNvbGUubG9nKGZpc2gubmFtZSk7XHJcbiAgICAvL3N0YXJ0IGdhbWUgaW4gaGVyZVxyXG59KSJdLCJuYW1lcyI6WyJGaXNoIiwiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJQSVhfWCIsImhlaWdodCIsIlBJWF9ZIiwiZmlzaCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fish.js":
/*!*****************************!*\
  !*** ./src/scripts/fish.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fish; }\n/* harmony export */ });\nclass Fish {\n  constructor() {\n    let makeFish = this.fishGenerator(Math.floor(Math.random() * 1000));\n    this.name = makeFish.name;\n    this.reels = makeFish.reels; //num of pulls after hooked\n    this.score = makeFish.score;\n\n    //this.body = Fish.makeBody();\n  }\n\n  fishGenerator(seedNum) {\n    const FISHCLASS = [{\n      name: \"catfish\",\n      reels: 2,\n      score: 100,\n      img: \"catfish.jpg\"\n    }, {\n      name: \"dogfish\",\n      reels: 2,\n      score: 150,\n      img: \"dogfish.jpg\"\n    }, {\n      name: \"juvenile drum\",\n      reels: 1,\n      score: 200,\n      img: \"juvenile_drum.jpg\"\n    }, {\n      name: \"Queen Angelfish\",\n      reels: 2,\n      score: 500,\n      img: \"queen_angelfish.jpg\"\n    }];\n    switch (seedNum) {\n      case seedNum < 100:\n        //0-100 Catfish\n        return FISHCLASS[0];\n      case seedNum < 150:\n        //100-150 dogfish\n        return FISHCLASS[1];\n      case seedNum < 160:\n        //150-160 juvenile drum\n        return FISHCLASS[2];\n      default:\n        //TEMP!! 160-1000 Queen Angelfish\n        return FISHCLASS[3];\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9maXNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJO0VBRXJCQyxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJQyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxhQUFhLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUM7SUFFakUsSUFBSSxDQUFDQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0ssSUFBSTtJQUN6QixJQUFJLENBQUNDLEtBQUssR0FBR04sUUFBUSxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUNDLEtBQUssR0FBR1AsUUFBUSxDQUFDTyxLQUFLOztJQUUzQjtFQUNKOztFQUVBTixhQUFhQSxDQUFDTyxPQUFPLEVBQUM7SUFDbEIsTUFBTUMsU0FBUyxHQUFHLENBQ2Q7TUFBQ0osSUFBSSxFQUFDLFNBQVM7TUFBQ0MsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFLEdBQUc7TUFBRUcsR0FBRyxFQUFFO0lBQWEsQ0FBQyxFQUN6RDtNQUFDTCxJQUFJLEVBQUMsU0FBUztNQUFDQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUUsR0FBRztNQUFFRyxHQUFHLEVBQUU7SUFBYSxDQUFDLEVBQ3pEO01BQUNMLElBQUksRUFBRSxlQUFlO01BQUNDLEtBQUssRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRSxHQUFHO01BQUVHLEdBQUcsRUFBRTtJQUFtQixDQUFDLEVBQ3RFO01BQUNMLElBQUksRUFBRSxpQkFBaUI7TUFBRUMsS0FBSyxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFLEdBQUc7TUFBRUcsR0FBRyxFQUFFO0lBQXFCLENBQUMsQ0FDOUU7SUFFRCxRQUFPRixPQUFPO01BQ1YsS0FBS0EsT0FBTyxHQUFHLEdBQUc7UUFBRztRQUNqQixPQUFPQyxTQUFTLENBQUMsQ0FBQyxDQUFDO01BQ3ZCLEtBQUtELE9BQU8sR0FBRyxHQUFHO1FBQWE7UUFDM0IsT0FBT0MsU0FBUyxDQUFDLENBQUMsQ0FBQztNQUN2QixLQUFLRCxPQUFPLEdBQUcsR0FBRztRQUFhO1FBQzNCLE9BQU9DLFNBQVMsQ0FBQyxDQUFDLENBQUM7TUFDdkI7UUFBOEI7UUFDMUIsT0FBT0EsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzQjtFQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXNoaW5nLWdhbWUvLi9zcmMvc2NyaXB0cy9maXNoLmpzP2QwMmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlzaHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGxldCBtYWtlRmlzaCA9IHRoaXMuZmlzaEdlbmVyYXRvcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwMCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG1ha2VGaXNoLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWVscyA9IG1ha2VGaXNoLnJlZWxzOyAvL251bSBvZiBwdWxscyBhZnRlciBob29rZWRcclxuICAgICAgICB0aGlzLnNjb3JlID0gbWFrZUZpc2guc2NvcmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy90aGlzLmJvZHkgPSBGaXNoLm1ha2VCb2R5KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpc2hHZW5lcmF0b3Ioc2VlZE51bSl7XHJcbiAgICAgICAgY29uc3QgRklTSENMQVNTID0gW1xyXG4gICAgICAgICAgICB7bmFtZTpcImNhdGZpc2hcIixyZWVsczogMiwgc2NvcmU6IDEwMCwgaW1nOiBcImNhdGZpc2guanBnXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTpcImRvZ2Zpc2hcIixyZWVsczogMiwgc2NvcmU6IDE1MCwgaW1nOiBcImRvZ2Zpc2guanBnXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTogXCJqdXZlbmlsZSBkcnVtXCIscmVlbHM6IDEsIHNjb3JlOiAyMDAsIGltZzogXCJqdXZlbmlsZV9kcnVtLmpwZ1wifSxcclxuICAgICAgICAgICAge25hbWU6IFwiUXVlZW4gQW5nZWxmaXNoXCIsIHJlZWxzOiAyLCBzY29yZTogNTAwLCBpbWc6IFwicXVlZW5fYW5nZWxmaXNoLmpwZ1wifVxyXG4gICAgICAgIF1cclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2goc2VlZE51bSl7XHJcbiAgICAgICAgICAgIGNhc2Uoc2VlZE51bSA8IDEwMCk6IC8vMC0xMDAgQ2F0ZmlzaFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZJU0hDTEFTU1swXTtcclxuICAgICAgICAgICAgY2FzZShzZWVkTnVtIDwgMTUwKTogICAgICAgICAgIC8vMTAwLTE1MCBkb2dmaXNoXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRklTSENMQVNTWzFdO1xyXG4gICAgICAgICAgICBjYXNlKHNlZWROdW0gPCAxNjApOiAgICAgICAgICAgLy8xNTAtMTYwIGp1dmVuaWxlIGRydW1cclxuICAgICAgICAgICAgICAgIHJldHVybiBGSVNIQ0xBU1NbMl07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICAgICAgICAgIC8vVEVNUCEhIDE2MC0xMDAwIFF1ZWVuIEFuZ2VsZmlzaFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZJU0hDTEFTU1szXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiRmlzaCIsImNvbnN0cnVjdG9yIiwibWFrZUZpc2giLCJmaXNoR2VuZXJhdG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmFtZSIsInJlZWxzIiwic2NvcmUiLCJzZWVkTnVtIiwiRklTSENMQVNTIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/fish.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _pond__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pond */ \"./src/scripts/pond.js\");\n\nclass Game {\n  static PIX_X = 800;\n  static PIX_Y = 600;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBQ1YsTUFBTUMsSUFBSTtFQUNyQixPQUFPQyxLQUFLLEdBQUcsR0FBRztFQUNsQixPQUFPQyxLQUFLLEdBQUcsR0FBRztBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpc2hpbmctZ2FtZS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9uZCBmcm9tIFwiLi9wb25kXCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcclxuICAgIHN0YXRpYyBQSVhfWCA9IDgwMDtcclxuICAgIHN0YXRpYyBQSVhfWSA9IDYwMDtcclxufSJdLCJuYW1lcyI6WyJQb25kIiwiR2FtZSIsIlBJWF9YIiwiUElYX1kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/pond.js":
/*!*****************************!*\
  !*** ./src/scripts/pond.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pond; }\n/* harmony export */ });\nclass Pond {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wb25kLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlzaGluZy1nYW1lLy4vc3JjL3NjcmlwdHMvcG9uZC5qcz8zODZiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbmR7XHJcbiAgICBcclxufSJdLCJuYW1lcyI6WyJQb25kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/pond.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXNoaW5nLWdhbWUvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;