import { DBox, BoxType } from "./Dialogbox";

interface ISetting {
    questionActive: number;
    questionPrev: number;

    firstQuestion: number;
    lastQuestion: number;
}


interface IQuestion {
    question?: string;
    answer?: string;
    solved?: boolean;
    $box?: JQuery<HTMLElement>;
    photoNbr?: number;
    typeR?: number;
    typeC?: number;
    pW?: number;
    pH?: number;
    ppX?: number;
    ppY?: number;

    pX?: any;
    pY?: any;
}



export class Puzzel {

    //    let actief = {
    //    vrgNbr: 0,

    //};




    private _$header: JQuery<HTMLElement>;
    private _$answer: JQuery<HTMLElement>;
    private _$input: JQuery<HTMLElement>;
    private _$puzzel: JQuery<HTMLElement>[] = [];

    private _setting: ISetting = { questionActive: 1, questionPrev: 1, firstQuestion: 1, lastQuestion: 10 };
    private _qArr: IQuestion[] = [];
    private db: DBox;
    private _$puzzleSpace: JQuery<HTMLElement>;
    private _$div1: JQuery<HTMLElement>;
    private _scale: number = 1.0;
    _pressed: boolean;



    //
    //
    //
    constructor() {

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

    private createQuestions() {

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
    }

    private createHeaderText() {

        // create header
        this._$header
            = $(`
                <div class="container">
                <div class="row" style="text-align:center; margin-top:35px;">
              
                <div class="col-12">
                <h3>Op <span id="box1" class="badge badge-warning">?</span> 2020 zijn wij <span id="box2" class="badge badge-warning">?</span>!
                Omdat we nog steeds heel erg <span id="box3" class="badge badge-warning">?</span> met elkaar,
                zouden we dit graag samen met onze familie vieren.
                Hiervoor willen wij jullie dan ook <span id="box4" class="badge badge-warning">?</span> op een 
                <span id="box5" class="badge badge-warning">?</span> in het restaurant 
                waar we onze  <span id="box6" class="badge badge-warning">?</span> gevierd hebben in <span id="box7" class="badge badge-warning">?</span>.
                Wanneer: <span id="box8" class="badge badge-warning">?</span> om 19u30.
                Waar: <span id="box9" class="badge badge-warning">?</span>, Broekstraat 109 te Waregem.
                Graag een seintje voor <span id="box10" class="badge badge-warning">?</span> 2020.
                </h3>
                </div>

                </div>
                </div>`);


        //$('<img src="./src/img/faces/jenna2.png" class="img-fluid" style="">'));
        $('body').append(this._$header);
        //$('body').append(
        //    $('<img>', {
        //        id: 'dsd',
        //        src: './src/img/faces/jenna2.png'
        //    }));

    }

    private createQestion() {

        this._$div1 = $('<div class= "alert" style = "text-align:center; margin:0px;" > </div>')
        this._$answer = $('<div style="text-align:center; margin:0px;"></div>');
        //this._$div1.append(this._$answer);
        //$('body').append(this._$answer);
    }

    private createAnswer() {

        // answer
        let answer = $(`
            <div class="row justify-content-center">
            <form class="form-inline center alert alert-primary" style="">
              <button id="btn25" type="button" class="btn btn-primary m-1">25%</button>
              <button id="btn50" type="button" class="btn btn-primary m-1">50%</button>
              <button id="btn75" type="button" class="btn btn-primary m-1">75%</button>
              <button id="btn100" type="button" class="btn btn-primary m-1">100%</button>

              <button id="btnInfo" type="button" class="btn btn-primary m-1">?</button>

              <div class="form-group mx-sm-3 m-1">
                <label for="inputPassword2" class="sr-only">ANTWOORD</label>
                <input type="text" class="form-control" id="inputAnswer" placeholder="antwoord">
              </div>
              <button id="btnVorige" type="button" class="btn btn-primary m-1">&lt;</button>
              <button id="btnVolgende" type="button" class="btn btn-primary m-1">&gt;</button>
            </form>
            </div>`).css('text-align', 'center');
        this._$div1.append(answer);
        $('body').append(this._$div1);


        // hr 
        //$('body').append('<hr>');

    }

    private createPuzzleSpace() {

        // create header
        this._$puzzleSpace = $(`<div class="" style="height: 1000px; margin:0px;">
                </div>`);
        $('body').append(this._$puzzleSpace);


    }

    private createEvents() {

        // btn vorige
        $('#btnVorige').click((e) => {

            this.sizePuzzel(100);
            this._scale = 1.0;

            this._setting.questionPrev = this._setting.questionActive;
            this._setting.questionActive--;
            if (this._setting.questionActive < this._setting.firstQuestion)
                this._setting.questionActive = this._setting.firstQuestion;

            this.QuestionShow();

            if (this._qArr[this._setting.questionActive].solved)
                this.fixPuzzel();
        })

        // btn volgende
        $('#btnVolgende').click((e) => {

            this.sizePuzzel(100);
            this._scale = 1.0;

            if (this.checkAnswer()) {
                this._setting.questionPrev = this._setting.questionActive;
                this._setting.questionActive++;
                if (this._setting.questionActive > this._setting.lastQuestion)
                    this._setting.questionActive = this._setting.lastQuestion;

                this.QuestionShow();

                if (this._qArr[this._setting.questionActive].solved)
                    this.fixPuzzel();
            }


        })

        // btn info
        $('#btnInfo').mousedown((e) => {
            this._pressed = true;
            this._$div1.addClass('alert-danger');

            setTimeout(() => {
                if (this._pressed) {

                    this.sizePuzzel(100);
                    this._scale = 1.0;

                    this.fixPuzzel();
                }

            }, 3000);
        })

        $('#btnInfo').mouseup((e) => {
           this._pressed = false;
            this._$div1.removeClass('alert-danger');

        })
        $('#btnInfo').mouseleave((e) => {
            this._pressed = false;
            this._$div1.removeClass('alert-danger');

        })

        // btn 25%
        $('#btn25').click((e) => {

            this.sizePuzzel(25);
            this._scale = 0.25;
        })
        // btn 50%
        $('#btn50').click((e) => {
            this.sizePuzzel(50);
            this._scale = 0.50;

        })
        // btn 75%
        $('#btn75').click((e) => {
            this.sizePuzzel(75);
            this._scale = 0.75;

        })
        // btn 100%
        $('#btn100').click((e) => {
            this.sizePuzzel(100);
            this._scale = 1.0;

        })

    }

    private checkAnswer() {

        let answer: string = <string>this._$input.val();
        answer = answer.toLowerCase();
        let good: string = this._qArr[this._setting.questionActive].answer;
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

    }

    private boxAnswerNOK() {

        let db = new DBox({
            type: BoxType.Alert,

            content: `<div class="alert alert-danger" style="width: 250px; text-align: center; padding: 0px; margin: 0px;" role="alert">
            </br><span></span>
            </br><span>Antwoord is verkeerd</span>
            </br><span>Probeer opnieuw</span>
            </br></br></div>`,

            title: 'VERKEERD',
            titleColor: '#A03545',
            margin: '0px',
            padding: '0px',
            posLeft: ($(document).width() / 2) - 270,
            posTop: 0,
        });
    }

    private boxAnswerOK() {

        let db = new DBox({
            type: BoxType.Alert,

            content: `<div class="alert alert-success" style="width: 250px; text-align: center; padding: 0px; margin: 0px;" role="alert">
            </br><span></span>
            </br><span>Antwoord is juist</span>
            </br><span>Op naar de volgende</span>
            </br></br></div>`,

            title: 'JUIST',
            titleColor: '#1E7D34',
            margin: '0px',
            padding: '0px',
            posLeft: ($(document).width()) - 270,
            posTop: 0,
        });
    }

    private QuestionShow() {


        this._$answer.empty();
        this._$answer.append(`<h5>
                ${this._qArr[this._setting.questionActive].question}</h5>
                (maak puzzel, antwoord staat onderaan)`);

        this._qArr[this._setting.questionPrev].$box.addClass('badge-warning');
        this._qArr[this._setting.questionPrev].$box.removeClass('badge-danger');

        this._qArr[this._setting.questionActive].$box.addClass('badge-danger');
        this._qArr[this._setting.questionActive].$box.removeClass('badge-warning');
        this._$input.val('');

        // show photo
        this.ShowPhoto();
        // shuffle photo
        this.ShufflePhoto();




    }

    private ShowPhoto() {

        let photoNbr: number = this._qArr[this._setting.questionActive].photoNbr;
        let tRow: number = this._qArr[this._setting.questionActive].typeR;
        let tCol: number = this._qArr[this._setting.questionActive].typeC;

        //$('img').remove();
        for (var g = 0; g < 20; g++) {
            if (this._$puzzel[g])
                this._$puzzel[g].remove();
        }

        let ii = 0;
        for (var i = 1; i <= tRow; i++) {
            for (var j = 1; j <= tCol; j++) {
                let name: string = photoNbr + '_' + i + '_' + j;
                let folder: string = './src/img/foto' + photoNbr + '/' + name + '.png';
                //if (this._$puzzel[ii] == null) {

                this._$puzzel[ii] = $('<img>', {
                    id: name,
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
    }

    private ShufflePhoto() {

        let count = this._qArr[this._setting.questionActive].typeR * this._qArr[this._setting.questionActive].typeC;
        for (var i = 0; i < count; i++) {

            let xRandom = (Math.random() * $(document).width()) - 300;
            if (xRandom < 0)
                xRandom = 0;

            let yRandom = Math.random() * 1000 + this._$puzzleSpace.position().top;

            this._$puzzel[i].css({
                position: 'absolute',
                left: xRandom + 'px',
                top: yRandom + 'px'
            });
        }
    }

    private fixPuzzel() {
        this._$input.val(this._qArr[this._setting.questionActive].answer);

        let tRow: number = this._qArr[this._setting.questionActive].typeR;
        let tCol: number = this._qArr[this._setting.questionActive].typeC;

        let w = this._qArr[this._setting.questionActive].pW * this._scale;
        let h = this._qArr[this._setting.questionActive].pH * this._scale;
        let hCor = this._qArr[this._setting.questionActive].pH - h;
        let ppX = this._qArr[this._setting.questionActive].ppX * this._scale;
        let ppY = this._qArr[this._setting.questionActive].ppY * this._scale;

        let wOffset = Math.floor(w / tCol) + 1;
        let hOffset = Math.floor(h / tRow) + 1; //hOffset += 0.5;
        let x = ($(document).width() / 2) - (w / 2);
        let y = this._$puzzleSpace.position().top;
        let xPos, yPos;
        let xPos1, yPos1;

        let count = tRow * tCol;
        let row: number = 0;
        let col: number = 0;
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
            } else {
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
        };




    }

    private sizePuzzel(size: number) {

        let tRow: number = this._qArr[this._setting.questionActive].typeR;
        let tCol: number = this._qArr[this._setting.questionActive].typeC;

        let count = tRow * tCol;
        let row: number = 0;
        let col: number = 0;

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
                    break
                case 100:
                    this._$puzzel[i].addClass('ph100');
                    break;
                default:
            }
        };




    }

}


