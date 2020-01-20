"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialogbox_1 = require("./Dialogbox");
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
//# sourceMappingURL=Puzzel.js.map