"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialogbox_1 = require("./Dialogbox");
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
//# sourceMappingURL=Puzzel.js.map