/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/jquery-ui/ui/position.js":
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/jquery-ui/ui/position.js from dll-reference vendor_8cf8a059e2568e664cc6 ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_8cf8a059e2568e664cc6 */ "dll-reference vendor_8cf8a059e2568e664cc6"))(523);

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/draggable.js":
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/jquery-ui/ui/widgets/draggable.js from dll-reference vendor_8cf8a059e2568e664cc6 ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_8cf8a059e2568e664cc6 */ "dll-reference vendor_8cf8a059e2568e664cc6"))(524);

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference vendor_8cf8a059e2568e664cc6 ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_8cf8a059e2568e664cc6 */ "dll-reference vendor_8cf8a059e2568e664cc6"))(39);

/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! lib_jqueryposition */ "./node_modules/jquery-ui/ui/position.js");
__webpack_require__(/*! lib_jquerydraggable */ "./node_modules/jquery-ui/ui/widgets/draggable.js");
__webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
__webpack_require__(/*! ../../node_modules/font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
__webpack_require__(/*! ../css/app.css */ "./src/css/app.css");
// create tekst ----------------------------------------------------------------->
var header = $("<div class=\"alert alert-success\" style=\"text-align:center; margin:0px;\">\n                <h1>OP <span class=\"badge badge-warning\">21MAART</span> <span class=\"badge badge-warning\">2020</span> VIEREN WIJ</br>\n                ONS <span class=\"badge badge-warning\">25JAAR</span> <span class=\"badge badge-warning\">HUWELIJK</span>, </br>\n                DIT\n                </h1>\n                </div>");
$('body').append(header);
// hr --------------------------------------------------------------------------->
//$('body').append('<hr>');
var vrg = $('<div class="alert alert-primary" role="alert" style="text-align:center; margin:0px;"></div>');
$('body').append(vrg);
// hr --------------------------------------------------------------------------->
//$('body').append('<hr>');
// prev - next ------------------------------------------------------------------>
var answer = $("\n<form class=\"form-inline center alert alert-primary\" style=\"text-align:center; margin:0px;\">\n  <button id=\"btnVorige\" type=\"button\" class=\"btn btn-primary mb-2\">VORIGE</button>\n\n  <div class=\"form-group mx-sm-3 mb-2\">\n    <label for=\"inputPassword2\" class=\"sr-only\">ANTWOORD</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"antwoord\">\n  </div>\n\n  <button id=\"btnVolgende\" type=\"button\" class=\"btn btn-primary mb-2\">VOLGENDE</button>\n</form>").css('text-align', 'center');
$('body').append(answer);
// hr ---------------------------------------------------------------------------->
$('body').append('<hr>');
var actief = {
    vrgNbr: 0,
};
var qArr = [];
var q = { vrg: 'DAG VAN HET FEEST', antw: '17maart' };
qArr.push(q);
q = { vrg: 'JAAR VAN HET FEEST', antw: '2020' };
qArr.push(q);
q = { vrg: 'h qsdjkfhhjklqshfjkqsh', antw: '2020' };
qArr.push(q);
q = { vrg: 'lj dfqsdlfqsdlflkqsjklfq', antw: '2020' };
qArr.push(q);
q = { vrg: 'kdfj sdjhfqsdhjkfhqsdklfhklqsfjkqs', antw: '2020' };
qArr.push(q);
q = { vrg: 'hfsd sdklfh kqsdjfjkqslhfjkl', antw: '2020' };
qArr.push(q);
// btn vorige
$('#btnVorige').click(function (e) {
    actief.vrgNbr--;
    if (actief.vrgNbr < 0)
        actief.vrgNbr = 0;
    vrg.empty();
    vrg.append("<h5>\n                Vraag " + (actief.vrgNbr + 1) + " </br>\n                " + qArr[actief.vrgNbr].vrg + "</h5> </br>\n                (maak puzzel, antwoord staat onderaan)\n                ");
});
// btn volgende
$('#btnVolgende').click(function (e) {
    actief.vrgNbr++;
    if (actief.vrgNbr > 10)
        actief.vrgNbr = 10;
    vrg.empty();
    vrg.empty();
    vrg.append("<h5>\n                Vraag " + (actief.vrgNbr + 1) + " </br>\n                " + qArr[actief.vrgNbr].vrg + "</h5> </br>\n                (maak puzzel, antwoord staat onderaan)\n                ");
});
for (var i = 1; i < 10; i++) {
    var y = $('<img>', {
        id: '100_' + i,
        src: './src/img/foto100/p' + i + '.png'
    });
    y.draggable();
    $('body').append(y);
}
//alert('carlk');
//let webHmiConfig = new WebHmiConfig();
// laden 

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "dll-reference vendor_8cf8a059e2568e664cc6":
/*!**********************************************!*\
  !*** external "vendor_8cf8a059e2568e664cc6" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor_8cf8a059e2568e664cc6;

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map