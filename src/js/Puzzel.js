"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialogbox_1 = require("./Dialogbox");
var Puzzel = /** @class */ (function () {
    //
    //
    //
    function Puzzel() {
        this._$puzzel = [];
        this._setting = { questionActive: 4, questionPrev: 4, firstQuestion: 1, lastQuestion: 10 };
        this._qArr = [];
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
        this._qArr.push({});
        this._qArr.push({});
        this._qArr.push({});
        this._qArr.push({
            photoNbr: 4,
            type: 3,
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
            type: 3,
            question: 'BOX05',
            answer: 'dinner & dance',
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
            type: 4,
            question: 'BOX06',
            answer: 'samenwoonst',
            $box: this._$header.find("#box6"),
            pW: 600,
            pH: 906,
            ppX: 36,
            ppY: 55,
            pX: [[0, 0, 0, 0],
                [0, 0, -1, -1],
                [0, -1, 0, -1],
                [0, -1, 0, 0],
            ],
            pY: [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [-1, 0, -1, -1],
                [0, 0, 0, 0],
            ]
        });
        this._qArr.push({
            photoNbr: 7,
            type: 4,
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
            type: 4,
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
            type: 4,
            question: 'BOX10',
            answer: '1 maart',
            $box: this._$header.find("#box10"),
            pW: 800,
            pH: 533,
            ppX: 49,
            ppY: 32,
            pX: [[0, 0, 0, 0],
                [0, -1, -1, 0],
                [0, 0, -1, 0],
                [0, -1, -1, -1],
            ],
            pY: [[0, 0, 0, 0],
                [0, 0, -1, -1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]
        });
        this._$input = $('#inputAnswer');
    };
    Puzzel.prototype.createHeaderText = function () {
        // create header
        this._$header = $("<div class=\"alert\" style=\"text-align:center; margin:0px;\">\n                <h3>Op <span id=\"box1\" class=\"badge badge-warning\">17 maart</span> 2020 zijn wij <span id=\"box2\" class=\"badge badge-warning\">25 jaar getrouwd</span>!</br>\n                Omdat we nog steeds heel erg <span id=\"box3\" class=\"badge badge-warning\">gelukkig zijn</span> met elkaar,</br>\n                zouden we dit graag samen met onze familie vieren.</br>\n                Hiervoor willen wij jullie dan ook <span id=\"box4\" class=\"badge badge-warning\">uitnodigen</span> op een</br> \n                <span id=\"box5\" class=\"badge badge-warning\">\u2018Dinner and Dance\u2019</span> in het restaurant </br>\n                waar we onze  <span id=\"box6\" class=\"badge badge-warning\">samenwoonst</span> gevierd hebben in <span id=\"box7\" class=\"badge badge-warning\">1993</span>.</br>\n                Wanneer: <span id=\"box8\" class=\"badge badge-warning\">zaterdag 21 maart</span> om 19u30</br>\n                Waar: <span id=\"box9\" class=\"badge badge-warning\">Ter Torre</span>, Broekstraat 109 te Waregem</br>\n                Graag een seintje voor <span id=\"box10\" class=\"badge badge-warning\">1 maart</span> 2020.\n                </h3>\n                </div>");
        $('body').append(this._$header);
    };
    Puzzel.prototype.createQestion = function () {
        this._$div1 = $('<div class= "alert" style = "text-align:center; margin:0px;" > </div>');
        this._$answer = $('<div style="text-align:center; margin:0px;"></div>');
        this._$div1.append(this._$answer);
        //$('body').append(this._$answer);
    };
    Puzzel.prototype.createAnswer = function () {
        // answer
        var answer = $("\n            <div class=\"row justify-content-center\">\n            <form class=\"form-inline center alert alert-primary\" style=\"\">\n              <button id=\"btnInfo\" type=\"button\" class=\"btn btn-primary mb-2\">?</button>\n\n              <div class=\"form-group mx-sm-3 mb-2\">\n                <label for=\"inputPassword2\" class=\"sr-only\">ANTWOORD</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputAnswer\" placeholder=\"antwoord\">\n              </div>\n              <button id=\"btnVorige\" type=\"button\" class=\"btn btn-primary m-2\">&lt;</button>\n              <button id=\"btnVolgende\" type=\"button\" class=\"btn btn-primary m-2\">&gt;</button>\n            </form>\n            </div>").css('text-align', 'center');
        this._$div1.append(answer);
        $('body').append(this._$div1);
        // hr 
        $('body').append('<hr>');
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
            _this._setting.questionPrev = _this._setting.questionActive;
            _this._setting.questionActive--;
            if (_this._setting.questionActive < _this._setting.firstQuestion)
                _this._setting.questionActive = _this._setting.firstQuestion;
            _this.QuestionShow();
            _this.fixPuzzel();
        });
        // btn volgende
        $('#btnVolgende').click(function (e) {
            if (_this.checkAnswer()) {
                _this._setting.questionPrev = _this._setting.questionActive;
                _this._setting.questionActive++;
                if (_this._setting.questionActive > _this._setting.lastQuestion)
                    _this._setting.questionActive = _this._setting.lastQuestion;
                _this.QuestionShow();
            }
        });
        // btn info
        $('#btnInfo').click(function (e) {
            _this.fixPuzzel();
        });
    };
    Puzzel.prototype.checkAnswer = function () {
        var answer = this._$input.val();
        answer = answer.toLowerCase();
        var good = this._qArr[this._setting.questionActive].answer;
        good = good.toLowerCase();
        if (answer == good) {
            this.boxAnswerOK();
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
            content: "<div class=\"alert alert-danger\" style=\"width: 400px; text-align: center; padding: 0px; margin: 0px;\" role=\"alert\">\n            </br><span></span>\n            </br><span>Antwoord is verkeerd</span>\n            </br><span>Probeer opnieuw</span>\n            </br></br></div>",
            title: 'VERKEERD',
            titleColor: '#A03545',
            margin: '0px',
            padding: '0px',
            posLeft: ($(document).width() / 2) - 200,
            posTop: 0,
        });
    };
    Puzzel.prototype.boxAnswerOK = function () {
        var db = new Dialogbox_1.DBox({
            type: Dialogbox_1.BoxType.Alert,
            content: "<div class=\"alert alert-success\" style=\"width: 400px; text-align: center; padding: 0px; margin: 0px;\" role=\"alert\">\n            </br><span></span>\n            </br><span>Antwoord is juist</span>\n            </br><span>Op naar de volgende</span>\n            </br></br></div>",
            title: 'JUIST',
            titleColor: '#1E7D34',
            margin: '0px',
            padding: '0px',
            posLeft: ($(document).width() / 2) - 200,
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
        var typ = this._qArr[this._setting.questionActive].type;
        $('img').remove();
        var ii = 0;
        for (var i = 1; i <= typ; i++) {
            for (var j = 1; j <= typ; j++) {
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
        var count = this._qArr[this._setting.questionActive].type * this._qArr[this._setting.questionActive].type;
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
        var typ = this._qArr[this._setting.questionActive].type;
        var w = this._qArr[this._setting.questionActive].pW;
        var h = this._qArr[this._setting.questionActive].pH;
        var wOffset = Math.floor(w / this._qArr[this._setting.questionActive].type) + 1;
        var hOffset = Math.floor(h / this._qArr[this._setting.questionActive].type) + 1; //hOffset += 0.5;
        var x = ($(document).width() / 2) - (w / 2);
        var y = this._$puzzleSpace.position().top + 20;
        var xPos, yPos;
        var xPos1, yPos1;
        var count = typ * typ;
        var row = 0;
        var col = 0;
        for (var i = 0; i < count; i++) {
            // row
            row = Math.floor(i / typ);
            // col
            col = (i % typ);
            // start
            if (i == 0) {
                xPos = x;
                yPos = y;
            }
            // new line
            if ((i % typ) == 0) {
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
                xPos1 = xPos + this._qArr[this._setting.questionActive].ppX;
            if (this._qArr[this._setting.questionActive].pX[row][col] < 0)
                xPos1 = xPos - this._qArr[this._setting.questionActive].ppX;
            if (this._qArr[this._setting.questionActive].pY[row][col] > 0)
                yPos1 = yPos + this._qArr[this._setting.questionActive].ppY;
            if (this._qArr[this._setting.questionActive].pY[row][col] < 0)
                yPos1 = yPos - this._qArr[this._setting.questionActive].ppY;
            this._$puzzel[i]
                .animate({
                left: xPos1 + 'px',
                top: yPos1 + 'px'
            }, 500);
        }
        ;
    };
    return Puzzel;
}());
exports.Puzzel = Puzzel;
//# sourceMappingURL=Puzzel.js.map