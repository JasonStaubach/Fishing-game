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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_fish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/fish */ \"./src/scripts/fish.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_pond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/pond */ \"./src/scripts/pond.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  const ctx = canvasEl.getContext(\"2d\");\n  canvasEl.width = _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PIX_X;\n  canvasEl.height = _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PIX_Y;\n  let game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n  let fish = new _scripts_fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  fish.draw(ctx);\n  // let fish = new Fish()\n  // let pond = new Pond(ctx)\n  // console.log(fish.name);\n  //start game in here\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNpQztBQUNBO0FBQ0E7QUFFakNHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUN2RCxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUNyQ0gsUUFBUSxDQUFDSSxLQUFLLEdBQUdSLHFEQUFJLENBQUNTLEtBQUs7RUFDM0JMLFFBQVEsQ0FBQ00sTUFBTSxHQUFHVixxREFBSSxDQUFDVyxLQUFLO0VBSTVCLElBQUlDLElBQUksR0FBRyxJQUFJWixxREFBSSxDQUFDTSxHQUFHLENBQUM7RUFDeEIsSUFBSU8sSUFBSSxHQUFHLElBQUlkLHFEQUFJLENBQUMsQ0FBQztFQUNyQmMsSUFBSSxDQUFDQyxJQUFJLENBQUNSLEdBQUcsQ0FBQztFQUNkO0VBQ0E7RUFDQTtFQUNBO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlzaGluZy1nYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBGaXNoIGZyb20gXCIuL3NjcmlwdHMvZmlzaFwiXHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiXHJcbmltcG9ydCBQb25kIGZyb20gXCIuL3NjcmlwdHMvcG9uZFwiXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjYW52YXNFbC53aWR0aCA9IEdhbWUuUElYX1g7XHJcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBHYW1lLlBJWF9ZO1xyXG5cclxuXHJcbiAgICBcclxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4KVxyXG4gICAgbGV0IGZpc2ggPSBuZXcgRmlzaCgpXHJcbiAgICBmaXNoLmRyYXcoY3R4KTtcclxuICAgIC8vIGxldCBmaXNoID0gbmV3IEZpc2goKVxyXG4gICAgLy8gbGV0IHBvbmQgPSBuZXcgUG9uZChjdHgpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhmaXNoLm5hbWUpO1xyXG4gICAgLy9zdGFydCBnYW1lIGluIGhlcmVcclxufSkiXSwibmFtZXMiOlsiRmlzaCIsIkdhbWUiLCJQb25kIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIlBJWF9YIiwiaGVpZ2h0IiwiUElYX1kiLCJnYW1lIiwiZmlzaCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fish.js":
/*!*****************************!*\
  !*** ./src/scripts/fish.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fish; }\n/* harmony export */ });\nclass Fish {\n  constructor() {\n    let makeFish = this.fishGenerator(Math.floor(Math.random() * 1000));\n    this.name = makeFish.name;\n    this.reels = makeFish.reels; //num of pulls after hooked\n    this.score = makeFish.score;\n    this.color = makeFish.color;\n    this.pos = Fish.randomPosition();\n    //this.body = Fish.makeBody();\n  }\n\n  fishGenerator(seedNum) {\n    const FISHCLASS = [{\n      name: \"catfish\",\n      reels: 2,\n      score: 100,\n      color: \"#d6ae40\",\n      img: \"catfish.jpg\"\n    }, {\n      name: \"dogfish\",\n      reels: 2,\n      score: 150,\n      color: \"#a89665\",\n      img: \"dogfish.jpg\"\n    }, {\n      name: \"juvenile drum\",\n      reels: 1,\n      score: 200,\n      color: \"#000000\",\n      img: \"juvenile_drum.jpg\"\n    }, {\n      name: \"Queen Angelfish\",\n      reels: 3,\n      score: 500,\n      color: \"#0075a3\",\n      img: \"queen_angelfish.jpg\"\n    }];\n    switch (seedNum) {\n      case seedNum < 100:\n        //0-100 Catfish\n        return FISHCLASS[0];\n      case seedNum < 150:\n        //100-150 dogfish\n        return FISHCLASS[1];\n      case seedNum < 160:\n        //150-160 juvenile drum\n        return FISHCLASS[2];\n      default:\n        //TEMP!! 160-1000 Queen Angelfish\n        return FISHCLASS[3];\n    }\n  }\n  draw(ctx) {\n    console.log(this.color);\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    // ctx.moveTo(10, 50);\n    ctx.bezierCurveTo(0 + this.pos[0], 0 + this.pos[1], 5 + this.pos[0], 5 + this.pos[1], 20 + this.pos[0], 10 + this.pos[1]);\n    ctx.bezierCurveTo(20 + this.pos[0], 10 + this.pos[1], 40 + this.pos[0], 5 + this.pos[1], 20 + this.pos[0], 0 + this.pos[1]);\n    ctx.bezierCurveTo(20 + this.pos[0], 0 + this.pos[1], 5 + this.pos[0], 5 + this.pos[1], 0 + this.pos[0], 10 + this.pos[1]);\n    ctx.lineTo(0 + this.pos[0], 0 + this.pos[1]);\n    ctx.stroke();\n    ctx.fill;\n  }\n  static randomPosition() {\n    let pos1 = Math.random() * 800;\n    let pos2 = Math.random() * 600;\n    return [pos1, pos2];\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9maXNoaW5nLWdhbWUvLi9zcmMvc2NyaXB0cy9maXNoLmpzP2QwMmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlzaHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGxldCBtYWtlRmlzaCA9IHRoaXMuZmlzaEdlbmVyYXRvcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwMCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG1ha2VGaXNoLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWVscyA9IG1ha2VGaXNoLnJlZWxzOyAvL251bSBvZiBwdWxscyBhZnRlciBob29rZWRcclxuICAgICAgICB0aGlzLnNjb3JlID0gbWFrZUZpc2guc2NvcmU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG1ha2VGaXNoLmNvbG9yO1xyXG4gICAgICAgIHRoaXMucG9zID0gRmlzaC5yYW5kb21Qb3NpdGlvbigpO1xyXG4gICAgICAgIC8vdGhpcy5ib2R5ID0gRmlzaC5tYWtlQm9keSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaXNoR2VuZXJhdG9yKHNlZWROdW0pe1xyXG4gICAgICAgIGNvbnN0IEZJU0hDTEFTUyA9IFtcclxuICAgICAgICAgICAge25hbWU6XCJjYXRmaXNoXCIscmVlbHM6IDIsIHNjb3JlOiAxMDAsIGNvbG9yOiBcIiNkNmFlNDBcIiwgaW1nOiBcImNhdGZpc2guanBnXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTpcImRvZ2Zpc2hcIixyZWVsczogMiwgc2NvcmU6IDE1MCwgY29sb3I6IFwiI2E4OTY2NVwiLCBpbWc6IFwiZG9nZmlzaC5qcGdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOiBcImp1dmVuaWxlIGRydW1cIixyZWVsczogMSwgc2NvcmU6IDIwMCwgY29sb3I6IFwiIzAwMDAwMFwiLCBpbWc6IFwianV2ZW5pbGVfZHJ1bS5qcGdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOiBcIlF1ZWVuIEFuZ2VsZmlzaFwiLCByZWVsczogMywgc2NvcmU6IDUwMCwgY29sb3I6IFwiIzAwNzVhM1wiLCBpbWc6IFwicXVlZW5fYW5nZWxmaXNoLmpwZ1wifVxyXG4gICAgICAgIF1cclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2goc2VlZE51bSl7XHJcbiAgICAgICAgICAgIGNhc2Uoc2VlZE51bSA8IDEwMCk6IC8vMC0xMDAgQ2F0ZmlzaFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZJU0hDTEFTU1swXTtcclxuICAgICAgICAgICAgY2FzZShzZWVkTnVtIDwgMTUwKTogICAgICAgICAgIC8vMTAwLTE1MCBkb2dmaXNoXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRklTSENMQVNTWzFdO1xyXG4gICAgICAgICAgICBjYXNlKHNlZWROdW0gPCAxNjApOiAgICAgICAgICAgLy8xNTAtMTYwIGp1dmVuaWxlIGRydW1cclxuICAgICAgICAgICAgICAgIHJldHVybiBGSVNIQ0xBU1NbMl07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICAgICAgICAgIC8vVEVNUCEhIDE2MC0xMDAwIFF1ZWVuIEFuZ2VsZmlzaFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZJU0hDTEFTU1szXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBkcmF3KGN0eCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb2xvcilcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvclxyXG4gICAgICAgIFxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAvLyBjdHgubW92ZVRvKDEwLCA1MCk7XHJcbiAgICAgICAgY3R4LmJlemllckN1cnZlVG8oMCArIHRoaXMucG9zWzBdLDAgKyB0aGlzLnBvc1sxXSwgNSArIHRoaXMucG9zWzBdLCA1ICsgdGhpcy5wb3NbMV0gLDIwICsgdGhpcy5wb3NbMF0sIDEwICsgdGhpcy5wb3NbMV0pXHJcbiAgICAgICAgY3R4LmJlemllckN1cnZlVG8oMjAgKyB0aGlzLnBvc1swXSwgMTAgKyB0aGlzLnBvc1sxXSwgNDAgKyB0aGlzLnBvc1swXSwgNSArIHRoaXMucG9zWzFdLCAyMCArIHRoaXMucG9zWzBdLCAwICsgdGhpcy5wb3NbMV0pXHJcbiAgICAgICAgY3R4LmJlemllckN1cnZlVG8oMjAgKyB0aGlzLnBvc1swXSwgMCArIHRoaXMucG9zWzFdLCA1ICsgdGhpcy5wb3NbMF0sNSArIHRoaXMucG9zWzFdLCAwICsgdGhpcy5wb3NbMF0sIDEwICsgdGhpcy5wb3NbMV0pXHJcbiAgICAgICAgY3R4LmxpbmVUbygwICsgdGhpcy5wb3NbMF0sMCArIHRoaXMucG9zWzFdKVxyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbDtcclxuICAgIH1cclxuICAgIHN0YXRpYyByYW5kb21Qb3NpdGlvbigpe1xyXG4gICAgICAgIGxldCBwb3MxID0gTWF0aC5yYW5kb20oKSAqIDgwMDtcclxuICAgICAgICBsZXQgcG9zMiA9IE1hdGgucmFuZG9tKCkgKiA2MDA7XHJcbiAgICAgICAgcmV0dXJuIFtwb3MxLHBvczJdXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZpc2giLCJjb25zdHJ1Y3RvciIsIm1ha2VGaXNoIiwiZmlzaEdlbmVyYXRvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5hbWUiLCJyZWVscyIsInNjb3JlIiwiY29sb3IiLCJwb3MiLCJyYW5kb21Qb3NpdGlvbiIsInNlZWROdW0iLCJGSVNIQ0xBU1MiLCJpbWciLCJkcmF3IiwiY3R4IiwiY29uc29sZSIsImxvZyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImJlemllckN1cnZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJmaWxsIiwicG9zMSIsInBvczIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/fish.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _pond__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pond */ \"./src/scripts/pond.js\");\n\nclass Game {\n  static PIX_X = 800;\n  static PIX_Y = 600;\n  constructor(ctx) {\n    this.fish = [];\n    this.pond = new _pond__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  }\n  draw(ctx) {\n    this.fish.forEach(fishy => {\n      fishy.draw(ctx);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBQ1YsTUFBTUMsSUFBSTtFQUNyQixPQUFPQyxLQUFLLEdBQUcsR0FBRztFQUNsQixPQUFPQyxLQUFLLEdBQUcsR0FBRztFQUNsQkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUcsRUFBRTtJQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlQLDZDQUFJLENBQUNLLEdBQUcsQ0FBQztFQUM3QjtFQUVBRyxJQUFJQSxDQUFDSCxHQUFHLEVBQUM7SUFDTCxJQUFJLENBQUNDLElBQUksQ0FBQ0csT0FBTyxDQUFFQyxLQUFLLElBQUk7TUFDeEJBLEtBQUssQ0FBQ0YsSUFBSSxDQUFDSCxHQUFHLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0VBQ047QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpc2hpbmctZ2FtZS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9uZCBmcm9tIFwiLi9wb25kXCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcclxuICAgIHN0YXRpYyBQSVhfWCA9IDgwMDtcclxuICAgIHN0YXRpYyBQSVhfWSA9IDYwMDtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCl7XHJcbiAgICAgICAgdGhpcy5maXNoID0gW107XHJcbiAgICAgICAgdGhpcy5wb25kID0gbmV3IFBvbmQoY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCl7XHJcbiAgICAgICAgdGhpcy5maXNoLmZvckVhY2goIGZpc2h5ID0+IHtcclxuICAgICAgICAgICAgZmlzaHkuZHJhdyhjdHgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUG9uZCIsIkdhbWUiLCJQSVhfWCIsIlBJWF9ZIiwiY29uc3RydWN0b3IiLCJjdHgiLCJmaXNoIiwicG9uZCIsImRyYXciLCJmb3JFYWNoIiwiZmlzaHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/pond.js":
/*!*****************************!*\
  !*** ./src/scripts/pond.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pond; }\n/* harmony export */ });\n/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish */ \"./src/scripts/fish.js\");\n\nclass Pond {\n  static COLOR = \"lightblue\";\n  static RADIUS = 200;\n  constructor(ctx) {\n    this.fish = [];\n    this.drawPond(ctx);\n    setInterval(function () {\n      let fish = new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      fish.draw(ctx);\n    }, 10000);\n  }\n  drawPond(ctx) {\n    ctx.beginPath();\n    ctx.moveTo(50, 375);\n    ctx.bezierCurveTo(100, 500, 700, 700, 600, 400);\n    // ctx.moveTo(600,400)\n    ctx.bezierCurveTo(600, 400, 500, 40, 100, 150);\n    // ctx.moveTo(100,150)\n    ctx.bezierCurveTo(100, 150, 60, 170, 100, 200);\n    ctx.bezierCurveTo(100, 200, 160, 245, 100, 300);\n    ctx.bezierCurveTo(100, 300, 40, 345, 50, 375);\n    ctx.fillStyle = \"blue\";\n    ctx.fill();\n    ctx.stroke();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wb25kLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRVgsTUFBTUMsSUFBSTtFQUNyQixPQUFPQyxLQUFLLEdBQUcsV0FBVztFQUMxQixPQUFPQyxNQUFNLEdBQUcsR0FBRztFQUNuQkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUcsRUFBRTtJQUNkLElBQUksQ0FBQ0MsUUFBUSxDQUFDRixHQUFHLENBQUM7SUFFbEJHLFdBQVcsQ0FBRSxZQUFXO01BQ3BCLElBQUlGLElBQUksR0FBRyxJQUFJTiw2Q0FBSSxDQUFDLENBQUM7TUFDckJNLElBQUksQ0FBQ0csSUFBSSxDQUFDSixHQUFHLENBQUM7SUFDbEIsQ0FBQyxFQUFFLEtBQUssQ0FBQztFQUNiO0VBRUFFLFFBQVFBLENBQUNGLEdBQUcsRUFBQztJQUNUQSxHQUFHLENBQUNLLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFDbkJOLEdBQUcsQ0FBQ08sYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQy9DO0lBQ0FQLEdBQUcsQ0FBQ08sYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzlDO0lBQ0FQLEdBQUcsQ0FBQ08sYUFBYSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzVDUCxHQUFHLENBQUNPLGFBQWEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM5Q1AsR0FBRyxDQUFDTyxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFDN0NQLEdBQUcsQ0FBQ1EsU0FBUyxHQUFHLE1BQU07SUFDdEJSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDLENBQUM7SUFFVlQsR0FBRyxDQUFDVSxNQUFNLENBQUMsQ0FBQztFQUNoQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlzaGluZy1nYW1lLy4vc3JjL3NjcmlwdHMvcG9uZC5qcz8zODZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaXNoIGZyb20gXCIuL2Zpc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbmR7XHJcbiAgICBzdGF0aWMgQ09MT1IgPSBcImxpZ2h0Ymx1ZVwiXHJcbiAgICBzdGF0aWMgUkFESVVTID0gMjAwO1xyXG4gICAgY29uc3RydWN0b3IoY3R4KXtcclxuICAgICAgICB0aGlzLmZpc2ggPSBbXVxyXG4gICAgICAgIHRoaXMuZHJhd1BvbmQoY3R4KVxyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXNoID0gbmV3IEZpc2goKTtcclxuICAgICAgICAgICAgZmlzaC5kcmF3KGN0eCk7XHJcbiAgICAgICAgfSwgMTAwMDApXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1BvbmQoY3R4KXtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyg1MCwgMzc1KTtcclxuICAgICAgICBjdHguYmV6aWVyQ3VydmVUbygxMDAsIDUwMCwgNzAwLCA3MDAsIDYwMCwgNDAwKTtcclxuICAgICAgICAvLyBjdHgubW92ZVRvKDYwMCw0MDApXHJcbiAgICAgICAgY3R4LmJlemllckN1cnZlVG8oNjAwLCA0MDAsIDUwMCwgNDAsIDEwMCwgMTUwKTtcclxuICAgICAgICAvLyBjdHgubW92ZVRvKDEwMCwxNTApXHJcbiAgICAgICAgY3R4LmJlemllckN1cnZlVG8oMTAwLDE1MCw2MCwgMTcwLCAxMDAsIDIwMCk7XHJcbiAgICAgICAgY3R4LmJlemllckN1cnZlVG8oMTAwLDIwMCwgMTYwLCAyNDUsIDEwMCwgMzAwKVxyXG4gICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKDEwMCwgMzAwLCA0MCwgMzQ1LCA1MCwgMzc1KVxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiRmlzaCIsIlBvbmQiLCJDT0xPUiIsIlJBRElVUyIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZmlzaCIsImRyYXdQb25kIiwic2V0SW50ZXJ2YWwiLCJkcmF3IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYmV6aWVyQ3VydmVUbyIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/pond.js\n");

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