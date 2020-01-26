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
        $('body').removeClass('modal-open');
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
        this._$puzzel = [];
        this._setting = { questionActive: 1, questionPrev: 1, firstQuestion: 1, lastQuestion: 10 };
        this._qArr = [];
        this._scale = 1.0;
        // headertext
        this.createHeaderText();
        // question
        this.createQestion();
        // answer
        this.createAnswer();
        // puzzlespace
        this.createPuzzleSpace();
        // event
        this.createEvents();
        // questions
        this.createQuestions();
        // show avtive question
        this.QuestionShow();
    }
    Puzzel.prototype.createQuestions = function () {
        this._qArr.push({ photoNbr: 0, question: '', answer: '' });
        this._qArr.push({
            photoNbr: 1,
            solved: false,
            typeR: 2,
            typeC: 2,
            question: 'BOX01',
            answer: '17 maart',
            $box: this._$header.find("#box1"),
            pW: 800,
            pH: 1067,
            ppX: 98,
            ppY: 130,
            pX: [[0, 0, 0, 0],
                [0, -1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            pY: [[0, 0, 0, 0],
                [-1, -1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]
        });
        this._qArr.push({
            photoNbr: 2,
            solved: false,
            typeR: 2,
            typeC: 3,
            question: 'BOX02',
            answer: '25 jaar getrouwd',
            $box: this._$header.find("#box2"),
            pW: 800,
            pH: 600,
            ppX: 64,
            ppY: 74,
            pX: [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            pY: [[0, 0, 0, 0],
                [-1, -1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]
        });
        this._qArr.push({
            photoNbr: 3,
            solved: false,
            typeR: 3,
            typeC: 3,
            question: 'BOX03',
            answer: 'gelukkig zijn',
            $box: this._$header.find("#box3"),
            pW: 800,
            pH: 600,
            ppX: 64,
            ppY: 49,
            pX: [[0, 0, -1, 0],
                [0, 0, 0, 0],
                [0, -1, -1, 0],
                [0, 0, 0, 0],
            ],
            pY: [[0, 0, 0, 0],
                [-1, -1, 0, 0],
                [0, 0, -1, 0],
                [0, 0, 0, 0],
            ]
        });
        this._qArr.push({
            photoNbr: 4,
            solved: false,
            typeR: 3,
            typeC: 3,
            question: 'BOX04',
            answer: 'uitnodigen',
            $box: this._$header.find("#box4"),
            pW: 800,
            pH: 600,
            ppX: 64,
            ppY: 49,
            pX: [[0, -1, -1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            pY: [[0, 0, 0, 0],
                [0, -1, -1, 0],
                [0, 0, -1, 0],
                [0, 0, 0, 0],
            ]
        });
        this._qArr.push({
            photoNbr: 5,
            solved: false,
            typeR: 3,
            typeC: 3,
            question: 'BOX05',
            answer: 'Dinner & Dance',
            $box: this._$header.find("#box5"),
            pW: 800,
            pH: 600,
            ppX: 64,
            ppY: 49,
            pX: [[0, -1, 0, 0],
                [0, -1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            pY: [[0, 0, 0, 0],
                [0, 0, -1, 0],
                [-1, -1, 0, 0],
                [0, 0, 0, 0],
            ]
        });
        this._qArr.push({
            photoNbr: 6,
            solved: false,
            typeR: 3,
            typeC: 2,
            question: 'BOX06',
            answer: 'samenwoonst',
            $box: this._$header.find("#box6"),
            pW: 600,
            pH: 906,
            ppX: 36,
            ppY: 75,
            pX: [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            pY: [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [-1, 0, 0, 0],
                [0, 0, 0, 0],
            ]
        });
        this._qArr.push({
            photoNbr: 7,
            solved: false,
            typeR: 4,
            typeC: 4,
            question: 'BOX07',
            answer: '1993',
            $box: this._$header.find("#box7"),
            pW: 800,
            pH: 530,
            ppX: 49,
            ppY: 32,
            pX: [[0, 0, -1, 0],
                [0, 0, 0, 0],
                [0, -1, 0, -1],
                [0, -1, 0, -1],
            ],
            pY: [[0, 0, 0, 0],
                [-1, 0, 0, 0],
                [0, 0, -1, -1],
                [-1, 0, 0, 0],
            ]
        });
        this._qArr.push({
            photoNbr: 8,
            solved: false,
            typeR: 4,
            typeC: 4,
            question: 'BOX08',
            answer: 'zaterdag 21 maart',
            $box: this._$header.find("#box8"),
            pW: 800,
            pH: 600,
            ppX: 49,
            ppY: 36,
            pX: [[0, -1, 0, 0],
                [0, 0, 0, -1],
                [0, 0, 0, 0],
                [0, 0, -1, 0],
            ],
            pY: [[0, 0, 0, 0],
                [0, 0, -1, -1],
                [-1, 0, -1, 0],
                [-1, 0, -1, -1],
            ]
        });
        this._qArr.push({
            photoNbr: 9,
            solved: false,
            typeR: 4,
            typeC: 4,
            question: 'BOX09',
            answer: 'Ter Torre',
            $box: this._$header.find("#box9"),
            pW: 800,
            pH: 530,
            ppX: 49,
            ppY: 32,
            pX: [[0, -1, -1, 0],
                [0, 0, -1, 0],
                [0, 0, -1, -1],
                [0, 0, 0, -1],
            ],
            pY: [[0, 0, 0, 0],
                [0, -1, -1, -1],
                [0, -1, 0, -1],
                [-1, -1, -1, -1],
            ]
        });
        this._qArr.push({
            photoNbr: 10,
            solved: false,
            typeR: 3,
            typeC: 3,
            question: 'BOX10',
            answer: '1 maart',
            $box: this._$header.find("#box10"),
            pW: 800,
            pH: 533,
            ppX: 64,
            ppY: 42,
            pX: [[0, 0, 0, 0],
                [0, -1, -1, 0],
                [0, 0, -1, 0],
                [0, 0, 0, 0],
            ],
            pY: [[0, 0, 0, 0],
                [0, -1, 0, 0],
                [0, 0, -1, 0],
                [0, 0, 0, 0],
            ]
        });
        this._$input = $('#inputAnswer');
    };
    Puzzel.prototype.createHeaderText = function () {
        // create header
        this._$header
            = $("\n                <div class=\"container\">\n                <div class=\"row\" style=\"text-align:center; margin-top:35px;\">\n              \n                <div class=\"col-12\">\n                <h3>Op <span id=\"box1\" class=\"badge badge-warning\">?</span> 2020 zijn wij <span id=\"box2\" class=\"badge badge-warning\">?</span>!\n                Omdat we nog steeds heel erg <span id=\"box3\" class=\"badge badge-warning\">?</span> met elkaar,\n                zouden we dit graag samen met onze familie vieren.\n                Hiervoor willen wij jullie dan ook <span id=\"box4\" class=\"badge badge-warning\">?</span> op een \n                <span id=\"box5\" class=\"badge badge-warning\">?</span> in het restaurant \n                waar we onze  <span id=\"box6\" class=\"badge badge-warning\">?</span> gevierd hebben in <span id=\"box7\" class=\"badge badge-warning\">?</span>.\n                Wanneer: <span id=\"box8\" class=\"badge badge-warning\">?</span> om 19u30.\n                Waar: <span id=\"box9\" class=\"badge badge-warning\">?</span>, Broekstraat 109 te Waregem.\n                Graag een seintje voor <span id=\"box10\" class=\"badge badge-warning\">?</span> 2020.\n                </h3>\n                </div>\n\n                </div>\n                </div>");
        //$('<img src="./src/img/faces/jenna2.png" class="img-fluid" style="">'));
        $('body').append(this._$header);
        //$('body').append(
        //    $('<img>', {
        //        id: 'dsd',
        //        src: './src/img/faces/jenna2.png'
        //    }));
    };
    Puzzel.prototype.createQestion = function () {
        this._$div1 = $('<div class= "alert" style = "text-align:center; margin:0px;" > </div>');
        this._$answer = $('<div style="text-align:center; margin:0px;"></div>');
        //this._$div1.append(this._$answer);
        //$('body').append(this._$answer);
    };
    Puzzel.prototype.createAnswer = function () {
        // answer
        var answer = $("\n            <div class=\"row justify-content-center\">\n            <form class=\"form-inline center alert alert-primary\" style=\"\">\n              <button id=\"btn25\" type=\"button\" class=\"btn btn-primary m-1\">25%</button>\n              <button id=\"btn50\" type=\"button\" class=\"btn btn-primary m-1\">50%</button>\n              <button id=\"btn75\" type=\"button\" class=\"btn btn-primary m-1\">75%</button>\n              <button id=\"btn100\" type=\"button\" class=\"btn btn-primary m-1\">100%</button>\n\n              <button id=\"btnInfo\" type=\"button\" class=\"btn btn-primary m-1\">?</button>\n\n              <div class=\"form-group mx-sm-3 m-1\">\n                <label for=\"inputPassword2\" class=\"sr-only\">ANTWOORD</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputAnswer\" placeholder=\"antwoord\">\n              </div>\n              <button id=\"btnVorige\" type=\"button\" class=\"btn btn-primary m-1\">&lt;</button>\n              <button id=\"btnVolgende\" type=\"button\" class=\"btn btn-primary m-1\">&gt;</button>\n            </form>\n            </div>").css('text-align', 'center');
        this._$div1.append(answer);
        $('body').append(this._$div1);
        // hr 
        //$('body').append('<hr>');
    };
    Puzzel.prototype.createPuzzleSpace = function () {
        // create header
        this._$puzzleSpace = $("<div class=\"\" style=\"height: 1000px; margin:0px;\">\n                </div>");
        $('body').append(this._$puzzleSpace);
    };
    Puzzel.prototype.createEvents = function () {
        var _this = this;
        // btn vorige
        $('#btnVorige').click(function (e) {
            _this.sizePuzzel(100);
            _this._scale = 1.0;
            _this._setting.questionPrev = _this._setting.questionActive;
            _this._setting.questionActive--;
            if (_this._setting.questionActive < _this._setting.firstQuestion)
                _this._setting.questionActive = _this._setting.firstQuestion;
            _this.QuestionShow();
            if (_this._qArr[_this._setting.questionActive].solved)
                _this.fixPuzzel();
        });
        // btn volgende
        $('#btnVolgende').click(function (e) {
            _this.sizePuzzel(100);
            _this._scale = 1.0;
            if (_this.checkAnswer()) {
                _this._setting.questionPrev = _this._setting.questionActive;
                _this._setting.questionActive++;
                if (_this._setting.questionActive > _this._setting.lastQuestion)
                    _this._setting.questionActive = _this._setting.lastQuestion;
                _this.QuestionShow();
                if (_this._qArr[_this._setting.questionActive].solved)
                    _this.fixPuzzel();
            }
        });
        // btn info
        $('#btnInfo').on('mousedown touchstart', function (e) {
            _this._pressed = true;
            _this._$div1.addClass('alert-danger');
            setTimeout(function () {
                if (_this._pressed) {
                    _this._$div1.removeClass('alert-danger');
                    _this.sizePuzzel(100);
                    _this._scale = 1.0;
                    _this.fixPuzzel();
                }
            }, 3000);
        });
        $('#btnInfo').on('mouseup mouseleave touchend', function (e) {
            _this._pressed = false;
            _this._$div1.removeClass('alert-danger');
        });
        //$('#btnInfo').mousedown((e) => {
        //    this._pressed = true;
        //    this._$div1.addClass('alert-danger');
        //    setTimeout(() => {
        //        if (this._pressed) {
        //            this._$div1.removeClass('alert-danger');
        //            this.sizePuzzel(100);
        //            this._scale = 1.0;
        //            this.fixPuzzel();
        //        }
        //    }, 3000);
        //})
        //$('#btnInfo').mouseup((e) => {
        //})
        //$('#btnInfo').mouseleave((e) => {
        //    this._pressed = false;
        //    this._$div1.removeClass('alert-danger');
        //})
        // btn 25%
        $('#btn25').click(function (e) {
            _this.sizePuzzel(25);
            _this._scale = 0.25;
        });
        // btn 50%
        $('#btn50').click(function (e) {
            _this.sizePuzzel(50);
            _this._scale = 0.50;
        });
        // btn 75%
        $('#btn75').click(function (e) {
            _this.sizePuzzel(75);
            _this._scale = 0.75;
        });
        // btn 100%
        $('#btn100').click(function (e) {
            _this.sizePuzzel(100);
            _this._scale = 1.0;
        });
    };
    Puzzel.prototype.checkAnswer = function () {
        var answer = this._$input.val();
        answer = answer.toLowerCase();
        var good = this._qArr[this._setting.questionActive].answer;
        good = good.toLowerCase();
        if (answer == good) {
            this._qArr[this._setting.questionActive].$box.text(this._qArr[this._setting.questionActive].answer);
            if (!this._qArr[this._setting.questionActive].solved)
                this.boxAnswerOK();
            this._qArr[this._setting.questionActive].solved = true;
            return true;
        }
        else {
            this.boxAnswerNOK();
            return false;
        }
    };
    Puzzel.prototype.boxAnswerNOK = function () {
        var db = new Dialogbox_1.DBox({
            type: Dialogbox_1.BoxType.Alert,
            content: "<div class=\"alert alert-danger\" style=\"width: 250px; text-align: center; padding: 0px; margin: 0px;\" role=\"alert\">\n            </br><span></span>\n            </br><span>Antwoord is verkeerd</span>\n            </br><span>Probeer opnieuw</span>\n            </br></br></div>",
            title: 'VERKEERD',
            titleColor: '#A03545',
            margin: '0px',
            padding: '0px',
            posLeft: ($(document).width() / 2) - 270,
            posTop: 0,
        });
    };
    Puzzel.prototype.boxAnswerOK = function () {
        var db = new Dialogbox_1.DBox({
            type: Dialogbox_1.BoxType.Alert,
            content: "<div class=\"alert alert-success\" style=\"width: 250px; text-align: center; padding: 0px; margin: 0px;\" role=\"alert\">\n            </br><span></span>\n            </br><span>Antwoord is juist</span>\n            </br><span>Op naar de volgende</span>\n            </br></br></div>",
            title: 'JUIST',
            titleColor: '#1E7D34',
            margin: '0px',
            padding: '0px',
            posLeft: ($(document).width()) - 270,
            posTop: 0,
        });
    };
    Puzzel.prototype.QuestionShow = function () {
        this._$answer.empty();
        this._$answer.append("<h5>\n                " + this._qArr[this._setting.questionActive].question + "</h5>\n                (maak puzzel, antwoord staat onderaan)");
        this._qArr[this._setting.questionPrev].$box.addClass('badge-warning');
        this._qArr[this._setting.questionPrev].$box.removeClass('badge-danger');
        this._qArr[this._setting.questionActive].$box.addClass('badge-danger');
        this._qArr[this._setting.questionActive].$box.removeClass('badge-warning');
        this._$input.val('');
        // show photo
        this.ShowPhoto();
        // shuffle photo
        this.ShufflePhoto();
    };
    Puzzel.prototype.ShowPhoto = function () {
        var photoNbr = this._qArr[this._setting.questionActive].photoNbr;
        var tRow = this._qArr[this._setting.questionActive].typeR;
        var tCol = this._qArr[this._setting.questionActive].typeC;
        //$('img').remove();
        for (var g = 0; g < 20; g++) {
            if (this._$puzzel[g])
                this._$puzzel[g].remove();
        }
        var ii = 0;
        for (var i = 1; i <= tRow; i++) {
            for (var j = 1; j <= tCol; j++) {
                var name_1 = photoNbr + '_' + i + '_' + j;
                var folder = './src/img/foto' + photoNbr + '/' + name_1 + '.png';
                //if (this._$puzzel[ii] == null) {
                this._$puzzel[ii] = $('<img>', {
                    id: name_1,
                    src: folder
                });
                this._$puzzel[ii].draggable();
                $('body').append(this._$puzzel[ii]);
                //} else {
                //    this._$puzzel[ii].attr('src', folder);
                //}
                ii++;
            }
        }
    };
    Puzzel.prototype.ShufflePhoto = function () {
        var count = this._qArr[this._setting.questionActive].typeR * this._qArr[this._setting.questionActive].typeC;
        for (var i = 0; i < count; i++) {
            var xRandom = (Math.random() * $(document).width()) - 300;
            if (xRandom < 0)
                xRandom = 0;
            var yRandom = Math.random() * 1000 + this._$puzzleSpace.position().top;
            this._$puzzel[i].css({
                position: 'absolute',
                left: xRandom + 'px',
                top: yRandom + 'px'
            });
        }
    };
    Puzzel.prototype.fixPuzzel = function () {
        this._$input.val(this._qArr[this._setting.questionActive].answer);
        var tRow = this._qArr[this._setting.questionActive].typeR;
        var tCol = this._qArr[this._setting.questionActive].typeC;
        var w = this._qArr[this._setting.questionActive].pW * this._scale;
        var h = this._qArr[this._setting.questionActive].pH * this._scale;
        var hCor = this._qArr[this._setting.questionActive].pH - h;
        var ppX = this._qArr[this._setting.questionActive].ppX * this._scale;
        var ppY = this._qArr[this._setting.questionActive].ppY * this._scale;
        var wOffset = Math.floor(w / tCol) + 1;
        var hOffset = Math.floor(h / tRow) + 1; //hOffset += 0.5;
        var x = ($(document).width() / 2) - (w / 2);
        var y = this._$puzzleSpace.position().top;
        var xPos, yPos;
        var xPos1, yPos1;
        var count = tRow * tCol;
        var row = 0;
        var col = 0;
        for (var i = 0; i < count; i++) {
            // row
            row = Math.floor(i / tCol);
            // col
            col = (i % tCol);
            // start
            if (i == 0) {
                xPos = x;
                yPos = y;
            }
            // new line
            if ((i % tCol) == 0) {
                xPos = x;
                yPos = y + (hOffset * row);
            }
            else {
                xPos += wOffset;
            }
            xPos1 = xPos;
            yPos1 = yPos;
            //alert(rij + '/ ' + col);
            if (this._qArr[this._setting.questionActive].pX[row][col] > 0)
                xPos1 = xPos + ppX;
            if (this._qArr[this._setting.questionActive].pX[row][col] < 0)
                xPos1 = xPos - ppX;
            if (this._qArr[this._setting.questionActive].pY[row][col] > 0)
                yPos1 = yPos + ppY;
            if (this._qArr[this._setting.questionActive].pY[row][col] < 0)
                yPos1 = yPos - ppY;
            this._$puzzel[i]
                .animate({
                left: xPos1 + 'px',
                top: yPos1 + 'px'
            }, 500);
        }
        ;
    };
    Puzzel.prototype.sizePuzzel = function (size) {
        var tRow = this._qArr[this._setting.questionActive].typeR;
        var tCol = this._qArr[this._setting.questionActive].typeC;
        var count = tRow * tCol;
        var row = 0;
        var col = 0;
        for (var i = 0; i < count; i++) {
            if (!this._$puzzel[i])
                continue;
            // remmove classes
            this._$puzzel[i].removeClass('ph25');
            this._$puzzel[i].removeClass('ph50');
            this._$puzzel[i].removeClass('ph75');
            this._$puzzel[i].removeClass('ph100');
            // add class
            switch (size) {
                case 25:
                    this._$puzzel[i].addClass('ph25');
                    break;
                case 50:
                    this._$puzzel[i].addClass('ph50');
                    break;
                case 75:
                    this._$puzzel[i].addClass('ph75');
                    break;
                case 100:
                    this._$puzzel[i].addClass('ph100');
                    break;
                default:
            }
        }
        ;
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
////let $var = [];
////let ii = 0;
////for (var i = 1; i <= 4; i++) {
////    for (var j = 1; j <= 4; j++) {
////        let name: string = '10_' + i + '_' + j;
////        $var[ii] = $('<img>', {
////            id: name,
////            src: './src/img/foto10/' + name + '.png'
////        });
////        $var[ii].draggable();
////        $('body').append($var[ii]);
////        ii++;
////    }
////}
////let w = 800.0;
////let h = 533.0;
////let wOffset = w / 4.0; 
////let hOffset = h / 4.0; //hOffset += 0.5;
////let x = 400;
////let y = 600;
////let xPos, yPos;
////let xPos1, yPos1;
////for (var i = 0; i < 16; i++) {
////    let xRandom = Math.random() * 1000;
////    let yRandom = Math.random() * 1000;
////    $var[i].css({
////        position: 'absolute',
////        left: xRandom + 'px',
////        top: yRandom + 'px'
////    });
////    switch (i) {
////        case 0:
////            xPos = x;
////            yPos = y - 1;
////            break;
////        case 4:
////            xPos = x;
////            yPos = y + (hOffset * 1);
////            break;
////        case 8:
////            xPos = x;
////            yPos = y + (hOffset * 2);
////            break;
////        case 12:
////            xPos = x;
////            yPos = y + (hOffset * 3);
////            break;
////        default:
////            xPos += wOffset;
////            break;
////    }
////    xPos1 = xPos;
////    yPos1 = yPos;
////    switch (i) {
////        case 5:
////        case 10:
////        case 13:
////        case 14:
////        case 15:
////            xPos1 = xPos - 49;
////            break;
////        case 6:
////            xPos1 = xPos - 49;
////            yPos1 = yPos - 32;
////            break;
////        case 7:
////            yPos1 = yPos - 32;
////            break;
////    }
////    $var[i]
////        .animate({
////            left: xPos1 + 'px',
////            top: yPos1 + 'px'
////        }, 1000);
////};


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