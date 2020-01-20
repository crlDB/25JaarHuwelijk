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

/***/ "./node_modules/@andxor/jquery-ui-touch-punch-fix/jquery.ui.touch-punch.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@andxor/jquery-ui-touch-punch-fix/jquery.ui.touch-punch.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Touch Punch 0.2.3 + detection update
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function( factory ) {
  if ( true ) {

    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"),
      __webpack_require__(/*! jquery-ui/ui/widgets/draggable */ "./node_modules/jquery-ui/ui/widgets/draggable.js")
    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(function( $ ) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document || 'maxTouchPoints' in navigator;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

}));


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!**************************************************************************************************************!*\
  !*** delegated ./node_modules/bootstrap/dist/js/bootstrap.js from dll-reference vendor_8cf8a059e2568e664cc6 ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_8cf8a059e2568e664cc6 */ "dll-reference vendor_8cf8a059e2568e664cc6"))(520);

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

/***/ "./src/ts/Dialogbox.ts":
/*!*****************************!*\
  !*** ./src/ts/Dialogbox.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
//! WebHmi
//! version : 1.0.0
//! author  : De Bels Carl
//! license : MIT
//! date    : Q4-2019 (jspanel4 has mem-leaks)
Object.defineProperty(exports, "__esModule", { value: true });
var BoxType;
(function (BoxType) {
    BoxType[BoxType["None"] = 0] = "None";
    BoxType[BoxType["Dialog"] = 1] = "Dialog";
    BoxType[BoxType["Alert"] = 2] = "Alert";
})(BoxType = exports.BoxType || (exports.BoxType = {}));
var DBox = /** @class */ (function () {
    //
    //
    //
    function DBox(dbOptions) {
        var _this = this;
        this._poRT = window['WebHmiRT'];
        // options
        this._boxOptions = dbOptions;
        // create dialog
        this.createBox();
        // add to dom
        $('body').append(this._$box);
        // show dialog
        this._$box.modal({
            keyboard: false,
            backdrop: false,
            show: true,
            focus: true
        });
        this.show();
        // pos
        this.setPos(this._boxOptions.posLeft, this._boxOptions.posTop);
        // on-close
        this._$box.on('hidden.bs.modal', function (e) {
            _this.close();
        });
        // 
        switch (this._boxOptions.type) {
            case BoxType.Dialog:
                // draggable
                this._$box.draggable({
                    handle: '.modal-header'
                });
                break;
            case BoxType.Alert:
                // draggable
                this._$box.draggable({
                    handle: '.modal-header'
                });
                // next level
                DBox.alertYPos += 20;
                DBox.alertOpen++;
                this.setPos(null, DBox.alertYPos);
                // remove
                window.setTimeout(function () {
                    //                    if (this)
                    _this.close();
                    DBox.alertOpen--;
                    if (DBox.alertOpen == 0)
                        DBox.alertYPos = 0;
                    if (DBox.alertYPos > 300)
                        DBox.alertYPos = 0;
                }, 2000);
                break;
            default:
                break;
        }
    }
    //
    //
    //
    DBox.prototype.createBox = function () {
        this._$box = $('<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"></div>');
        this._$box.prop('id', this._boxOptions.id);
        this._$box.attr('aria-labelledby', this._boxOptions.id + '_title');
        this._$box.css('padding', '0px');
        this._$box.css('margin', '0px');
        if (this._boxOptions.border)
            this._$box.css('border', this._boxOptions.border);
        if (this._boxOptions.width)
            this._$box.css('width', this._boxOptions.width);
        else
            this._$box.css('width', 'auto');
        if (this._boxOptions.height) {
            this._$box.css('height', this._boxOptions.height);
        }
        else
            this._$box.css('height', 'auto');
        switch (this._boxOptions.type) {
            case BoxType.None:
                break;
            case BoxType.Alert:
                break;
            default:
                break;
        }
        this.createDialog(this._$box);
    };
    //
    //
    //
    DBox.prototype.createDialog = function (_$b) {
        var $dialog = $('<div class="modal-dialog" role="document"></div>');
        $dialog.css('margin', '0px');
        $dialog.css('padding', '0px');
        $dialog.css('max-width', '3000px');
        switch (this._boxOptions.type) {
            case BoxType.None:
                break;
            case BoxType.Alert:
                //$dialog.addClass('alert alert-danger')
                break;
            default:
                break;
        }
        _$b.append($dialog);
        this.createContent($dialog);
    };
    //
    //
    //
    DBox.prototype.createContent = function (_$b) {
        var $content = $('<div class="modal-content"></div>');
        _$b.append($content);
        this.createHeader($content);
    };
    //
    //
    //
    DBox.prototype.createHeader = function (_$b) {
        var $header = $('<div class="modal-header"></div>');
        $header.append("<h5 class=\"modal-title\" id =\"exampleModalLabel\" style='font-size: 14px; margin:5px; color:#FFFFFF'>" + this._boxOptions.title + "</h5>");
        var $but = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>');
        $but.append('<span aria-hidden="true" style="margin:5px;">&times;</span>');
        $header.append($but);
        $header.css('padding', '0px');
        if (this._boxOptions.titleColor)
            $header.css('background-color', this._boxOptions.titleColor);
        else
            $header.css('background-color', '#000000');
        switch (this._boxOptions.type) {
            case BoxType.None:
                break;
            case BoxType.Alert:
                break;
            default:
                break;
        }
        _$b.append($header);
        this.createBody(_$b);
    };
    //
    //
    //
    DBox.prototype.createBody = function (_$b) {
        // style width > TEST
        var $body = $('<div class="modal-body"></div>');
        if (this._boxOptions.padding)
            $body.css('padding', this._boxOptions.padding);
        if (this._boxOptions.margin)
            $body.css('margin', this._boxOptions.margin);
        if (this._boxOptions.backgroundColor)
            $body.css('background-color', this._boxOptions.backgroundColor);
        switch (this._boxOptions.type) {
            case BoxType.None:
                break;
            case BoxType.Alert:
                break;
            default:
                break;
        }
        // content
        $body.html(this._boxOptions.content);
        _$b.append($body);
        this._$body = $body;
        // create footer
        this.createFooter(_$b);
    };
    //
    //
    //
    DBox.prototype.createFooter = function (_$b) {
        if (this._boxOptions.footerToolbar) {
            var $footer = $('<div class="modal-footer" style="background-color:#F0F0F0;"></div>');
            $footer.css('padding', '0px');
            for (var i = 0; i < this._boxOptions.footerToolbar.length; i++) {
                $footer.append(this._boxOptions.footerToolbar[i]);
            }
            //switch (this._boxOptions.type) {
            //    case BoxType.None:
            //        break;
            //    case BoxType.Alert:
            //        break;
            //    default:
            //        break;
            //}
            // content footer
            //$body.html(this._boxOptions.content);
            _$b.append($footer);
            this._$footer = $footer;
        }
    };
    //
    //
    //
    DBox.prototype.close = function () {
        if (this._$box == null)
            return;
        // remove events
        this._$box.off('hidden.bs.modal');
        this._$box.draggable('destroy');
        this._$box.modal('dispose'); // !!!! mem-leak!!!
        // remove from dom
        //this.resetContent();        // IMPORTANT > FOR REMOVE SVG FROM THE DOM !!!!!!!!!!!
        //this.resetFooter();         // IMPORTANT > FOR REMOVE SVG FROM THE DOM !!!!!!!!!!!
        this._$box.remove();
        // callback
        if (this._boxOptions.onClose)
            this._boxOptions.onClose(this, null);
        // dispose
        this._boxOptions = null;
        this._$box = null;
        this._$body = null;
        this._$footer = null;
    };
    //
    //
    //
    DBox.prototype.resetContent = function () {
        if (this._$body)
            this._$body.empty();
        if (this._boxOptions.onResetContent)
            this._boxOptions.onResetContent(this);
    };
    //
    //
    //
    DBox.prototype.resetFooter = function () {
        if (this._$body)
            this._$body.empty();
    };
    //
    //
    //
    DBox.prototype.setContent = function (content) {
        if (this._$body) {
            this._$body.html(content);
            if (this._boxOptions.onSetContent)
                this._boxOptions.onSetContent(this);
        }
    };
    //
    //
    //
    DBox.prototype.hide = function () {
        if (this._$box) {
            this._$box.hide();
            if (this._boxOptions.onHide)
                this._boxOptions.onHide(this);
        }
    };
    //
    //
    //
    DBox.prototype.show = function () {
        if (this._$box) {
            this._$box.show();
            if (this._boxOptions.onShow)
                this._boxOptions.onShow(this);
        }
    };
    //
    //
    //
    DBox.prototype.setTitle = function (title) {
    };
    DBox.prototype.resize = function (resize) {
    };
    DBox.prototype.setId = function (pageNrIndex) {
        if (this._$box) {
            this._$box.attr('poPageActive', pageNrIndex);
            this._$box.attr('poPage', pageNrIndex);
        }
    };
    DBox.prototype.get$ = function () {
        return this._$box;
    };
    DBox.prototype.setPos = function (left, top) {
        if (this._$box) {
            if (left)
                this._$box.css('left', left);
            if (top)
                this._$box.css('top', top);
        }
    };
    DBox.prototype.setZindexHigh = function () {
        if (this._$box) {
            this._$box.css('z-index', '99999');
        }
    };
    DBox.alertYPos = 0;
    DBox.alertOpen = 0;
    return DBox;
}());
exports.DBox = DBox;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/ts/Puzzel.ts":
/*!**************************!*\
  !*** ./src/ts/Puzzel.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
Object.defineProperty(exports, "__esModule", { value: true });
var Dialogbox_1 = __webpack_require__(/*! ./Dialogbox */ "./src/ts/Dialogbox.ts");
var Puzzel = /** @class */ (function () {
    //
    //
    //
    function Puzzel() {
        this._setting = { questionActive: 1, questionPrev: 1, firstQuestion: 1, lastQuestion: 10 };
        this._qArr = [];
        // headertext
        this.createHeaderText();
        // question
        this.createQestion();
        // answer
        this.createAnswer();
        // event
        this.createEvents();
        // questions
        this.createQuestions();
        // show avtive question
        this.QuestionShow();
    }
    Puzzel.prototype.createQuestions = function () {
        this._qArr.push({ question: '', answer: '' });
        this._qArr.push({ question: 'BOX01', answer: '01', $box: this._$header.find("#box1") });
        this._qArr.push({ question: 'BOX02', answer: '02', $box: this._$header.find("#box2") });
        this._qArr.push({ question: 'BOX03', answer: '03', $box: this._$header.find("#box3") });
        this._qArr.push({ question: 'BOX04', answer: '04', $box: this._$header.find("#box4") });
        this._qArr.push({ question: 'BOX05', answer: '05', $box: this._$header.find("#box5") });
        this._qArr.push({ question: 'BOX06', answer: '06', $box: this._$header.find("#box6") });
        this._qArr.push({ question: 'BOX07', answer: '07', $box: this._$header.find("#box7") });
        this._qArr.push({ question: 'BOX08', answer: '08', $box: this._$header.find("#box8") });
        this._qArr.push({ question: 'BOX09', answer: '09', $box: this._$header.find("#box9") });
        this._qArr.push({ question: 'BOX10', answer: '10', $box: this._$header.find("#box10") });
        this._$input = $('#inputAnswer');
    };
    Puzzel.prototype.createHeaderText = function () {
        // create header
        this._$header = $("<div class=\"alert alert-success\" style=\"text-align:center; margin:0px;\">\n                <h2>OP <span id=\"box1\" class=\"badge badge-warning\">21MAART</span> <span id=\"box2\" class=\"badge badge-warning\">2020</span> VIEREN WIJ</br>\n                ONS <span id=\"box3\" class=\"badge badge-warning\">25JAAR</span> <span id=\"box4\" class=\"badge badge-warning\">HUWELIJK</span>, </br>\n                <span id=\"box5\" class=\"badge badge-warning\">BOX5</span></br>\n                <span id=\"box6\" class=\"badge badge-warning\">BOX6</span></br>\n                <span id=\"box7\" class=\"badge badge-warning\">BOX7</span></br>\n                <span id=\"box8\" class=\"badge badge-warning\">BOX8</span></br>\n                <span id=\"box9\" class=\"badge badge-warning\">BOX9</span></br>\n                <span id=\"box10\" class=\"badge badge-warning\">BOX10</span></br>\n                </h2>\n                </div>");
        $('body').append(this._$header);
    };
    Puzzel.prototype.createQestion = function () {
        this._$answer = $('<div class="alert alert-primary" role="alert" style="text-align:center; margin:0px;"></div>');
        $('body').append(this._$answer);
    };
    Puzzel.prototype.createAnswer = function () {
        // answer
        var answer = $("\n            <form class=\"form-inline center alert alert-primary\" style=\"text-align:center; margin:0px;\">\n              <button id=\"btnVorige\" type=\"button\" class=\"btn btn-primary mb-2\">VORIGE</button>\n\n              <div class=\"form-group mx-sm-3 mb-2\">\n                <label for=\"inputPassword2\" class=\"sr-only\">ANTWOORD</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputAnswer\" placeholder=\"antwoord\">\n              </div>\n\n              <button id=\"btnVolgende\" type=\"button\" class=\"btn btn-primary mb-2\">VOLGENDE</button>\n            </form>").css('text-align', 'center');
        $('body').append(answer);
        // hr 
        $('body').append('<hr>');
    };
    Puzzel.prototype.createEvents = function () {
        var _this = this;
        // btn vorige
        $('#btnVorige').click(function (e) {
            _this.checkAnswer();
            _this._setting.questionPrev = _this._setting.questionActive;
            _this._setting.questionActive--;
            if (_this._setting.questionActive < _this._setting.firstQuestion)
                _this._setting.questionActive = _this._setting.firstQuestion;
            _this.QuestionShow();
        });
        // btn volgende
        $('#btnVolgende').click(function (e) {
            _this.checkAnswer();
            _this._setting.questionPrev = _this._setting.questionActive;
            _this._setting.questionActive++;
            if (_this._setting.questionActive > _this._setting.lastQuestion)
                _this._setting.questionActive = _this._setting.lastQuestion;
            _this.QuestionShow();
        });
    };
    Puzzel.prototype.checkAnswer = function () {
        var answer = this._$input.val();
        answer = answer.toLowerCase();
        if (answer == this._qArr[this._setting.questionActive].answer) {
            this.boxAnswerOK();
            return true;
        }
        else {
            this.boxAnswerOK();
            return false;
        }
    };
    Puzzel.prototype.boxAnswerOK = function () {
        var _this = this;
        if (this.db)
            this.db.close();
        // create panel
        this.db = new Dialogbox_1.DBox({
            id: 'AnswerOK',
            type: Dialogbox_1.BoxType.Dialog,
            title: '??',
            content: 'CARL',
            backgroundColor: '#d4d4d4',
            posLeft: 150,
            posTop: 150,
            footerToolbar: [
                "<button id='js1btnN' type='button' class='btn btn-sm btn-outline-danger m-1'>NEE</button>",
                "<button id='js1btnY' type='button' class='btn btn-sm btn-outline-success m-1'>&nbsp;&nbsp;JA&nbsp;&nbsp;</button>"
            ],
            onShow: function () {
            },
            onClose: function () {
                // reset
                _this.db = null;
            }
        });
        var $body = this.db.get$();
        // NO
        $('#js1btnN', $body).click(function (e) {
            // close panel
            _this.db.close();
        });
        // YES
        $('#js1btnY', $body).click(function (e) {
            // close panel
            //callBackOK();
            _this.db.close();
        });
    };
    Puzzel.prototype.QuestionShow = function () {
        this._$answer.empty();
        this._$answer.append("<h5>\n                " + this._qArr[this._setting.questionActive].question + "</h5>\n                (maak puzzel, antwoord staat onderaan)");
        this._qArr[this._setting.questionPrev].$box.addClass('badge-warning');
        this._qArr[this._setting.questionPrev].$box.removeClass('badge-danger');
        this._qArr[this._setting.questionActive].$box.addClass('badge-danger');
        this._qArr[this._setting.questionActive].$box.removeClass('badge-warning');
    };
    return Puzzel;
}());
exports.Puzzel = Puzzel;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
__webpack_require__(/*! @andxor/jquery-ui-touch-punch-fix */ "./node_modules/@andxor/jquery-ui-touch-punch-fix/jquery.ui.touch-punch.js");
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
__webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
__webpack_require__(/*! ../../node_modules/font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
__webpack_require__(/*! ../css/app.css */ "./src/css/app.css");
var Puzzel_1 = __webpack_require__(/*! ./Puzzel */ "./src/ts/Puzzel.ts");
// create global var
var runtime = {
    RT: null
};
window['WebHmiRT'] = runtime; // before new PoRuntime !!!!
runtime.RT = new Puzzel_1.Puzzel();
// hr --------------------------------------------------------------------------->
//$('body').append('<hr>');
;
var $var = [];
var ii = 0;
for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 4; j++) {
        var name_1 = '10_' + i + '_' + j;
        $var[ii] = $('<img>', {
            id: name_1,
            src: './src/img/foto10/' + name_1 + '.png'
        });
        $var[ii].draggable();
        $('body').append($var[ii]);
        ii++;
    }
}
var w = 800.0;
var h = 533.0;
var wOffset = w / 4.0;
alert('wOffset > ' + wOffset);
var hOffset = h / 4.0; //hOffset += 0.5;
alert('hOffset > ' + hOffset);
var x = 400;
var y = 600;
var xPos, yPos;
var xPos1, yPos1;
for (var i = 0; i < 16; i++) {
    var xRandom = Math.random() * 1000;
    var yRandom = Math.random() * 1000;
    $var[i].css({
        position: 'absolute',
        left: xRandom + 'px',
        top: yRandom + 'px'
    });
    switch (i) {
        case 0:
            xPos = x;
            yPos = y - 1;
            break;
        case 4:
            xPos = x;
            yPos = y + (hOffset * 1);
            break;
        case 8:
            xPos = x;
            yPos = y + (hOffset * 2);
            break;
        case 12:
            xPos = x;
            yPos = y + (hOffset * 3);
            break;
        default:
            xPos += wOffset;
            break;
    }
    xPos1 = xPos;
    yPos1 = yPos;
    switch (i) {
        case 5:
        case 10:
        case 13:
        case 14:
        case 15:
            xPos1 = xPos - 49;
            break;
        case 6:
            xPos1 = xPos - 49;
            yPos1 = yPos - 32;
            break;
        case 7:
            yPos1 = yPos - 32;
            break;
    }
    $var[i]
        .animate({
        left: xPos1 + 'px',
        top: yPos1 + 'px'
    }, 1000);
}
;

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