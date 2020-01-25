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
    $box?: JQuery<HTMLElement>;
    photoNbr?: number;
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

    private _setting: ISetting = { questionActive: 5, questionPrev: 1, firstQuestion: 1, lastQuestion: 10 };
    private _qArr: IQuestion[] = [];
    db: DBox;
    _$puzzleSpace: JQuery<HTMLElement>;
    _$div1: JQuery<HTMLElement>;




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
        });
        this._qArr.push({
        });
        this._qArr.push({

        });
        this._qArr.push({
        });
        this._qArr.push({
            photoNbr: 5,
            question: 'BOX05',
            answer: 'dinner & dance',
            $box: this._$header.find("#box5"),
            pW: 800,
            pH: 600,
            ppX: 49,
            ppY: 36,
            pX: [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            ],
            pY: [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            ]

        });
        this._qArr.push({
            photoNbr: 6,
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
    }

    private createHeaderText() {

        // create header
        this._$header = $(`<div class="alert" style="text-align:center; margin:0px;">
                <h3>Op <span id="box1" class="badge badge-warning">17 maart</span> 2020 zijn wij <span id="box2" class="badge badge-warning">25 jaar getrouwd</span>!</br>
                Omdat we nog steeds heel erg <span id="box3" class="badge badge-warning">gelukkig zijn</span> met elkaar,</br>
                zouden we dit graag samen met onze familie vieren.</br>
                Hiervoor willen wij jullie dan ook <span id="box4" class="badge badge-warning">uitnodigen</span> op een</br> 
                <span id="box5" class="badge badge-warning">‘Dinner and Dance’</span> in het restaurant </br>
                waar we onze  <span id="box6" class="badge badge-warning">samenwoonst</span> gevierd hebben in <span id="box7" class="badge badge-warning">1993</span>.</br>
                Wanneer: <span id="box8" class="badge badge-warning">zaterdag 21 maart</span> om 19u30</br>
                Waar: <span id="box9" class="badge badge-warning">Ter Torre</span>, Broekstraat 109 te Waregem</br>
                Graag een seintje voor <span id="box10" class="badge badge-warning">1 maart</span> 2020.
                </h3>
                </div>`);
        $('body').append(this._$header);
    }

    private createQestion() {

        this._$div1 = $('<div class= "alert" style = "text-align:center; margin:0px;" > </div>')
        this._$answer = $('<div style="text-align:center; margin:0px;"></div>');
        this._$div1.append(this._$answer);
        //$('body').append(this._$answer);
    }

    private createAnswer() {

        // answer
        let answer = $(`
            <div class="row justify-content-center">
            <form class="form-inline center alert alert-primary" style="">
              <button id="btnInfo" type="button" class="btn btn-primary mb-2">?</button>

              <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">ANTWOORD</label>
                <input type="text" class="form-control" id="inputAnswer" placeholder="antwoord">
              </div>
              <button id="btnVorige" type="button" class="btn btn-primary m-2">&lt;</button>
              <button id="btnVolgende" type="button" class="btn btn-primary m-2">&gt;</button>
            </form>
            </div>`).css('text-align', 'center');
        this._$div1.append(answer);
        $('body').append(this._$div1);


        // hr 
        $('body').append('<hr>');

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

            this._setting.questionPrev = this._setting.questionActive;
            this._setting.questionActive--;
            if (this._setting.questionActive < this._setting.firstQuestion)
                this._setting.questionActive = this._setting.firstQuestion;

            this.QuestionShow();

            this.fixPuzzel();
        })

        // btn volgende
        $('#btnVolgende').click((e) => {

            if (this.checkAnswer()) {
                this._setting.questionPrev = this._setting.questionActive;
                this._setting.questionActive++;
                if (this._setting.questionActive > this._setting.lastQuestion)
                    this._setting.questionActive = this._setting.lastQuestion;
                this.QuestionShow();

            }


        })

        // btn info
        $('#btnInfo').click((e) => {

            this.fixPuzzel();

        })

    }

    private checkAnswer() {

        let answer: string = <string>this._$input.val();
        answer = answer.toLowerCase();
        let good: string = this._qArr[this._setting.questionActive].answer;
        good = good.toLowerCase();

        if (answer == good) {
            this.boxAnswerOK();
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

            content: `<div class="alert alert-danger" style="width: 400px; text-align: center; padding: 0px; margin: 0px;" role="alert">
            </br><span></span>
            </br><span>Antwoord is verkeerd</span>
            </br><span>Probeer opnieuw</span>
            </br></br></div>`,

            title: 'VERKEERD',
            titleColor: '#A03545',
            margin: '0px',
            padding: '0px',
            posLeft: ($(document).width() / 2) - 200,
            posTop: 0,
        });
    }

    private boxAnswerOK() {

        let db = new DBox({
            type: BoxType.Alert,

            content: `<div class="alert alert-success" style="width: 400px; text-align: center; padding: 0px; margin: 0px;" role="alert">
            </br><span></span>
            </br><span>Antwoord is juist</span>
            </br><span>Op naar de volgende</span>
            </br></br></div>`,

            title: 'JUIST',
            titleColor: '#1E7D34',
            margin: '0px',
            padding: '0px',
            posLeft: ($(document).width() / 2) - 200,
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

        let ii = 0;
        for (var i = 1; i <= 4; i++) {
            for (var j = 1; j <= 4; j++) {
                let name: string = photoNbr + '_' + i + '_' + j;
                let folder: string = './src/img/foto' + photoNbr + '/' + name + '.png';
                if (this._$puzzel[ii] == null) {

                    this._$puzzel[ii] = $('<img>', {
                        id: name,
                        src: folder
                    });
                    this._$puzzel[ii].draggable();

                    $('body').append(this._$puzzel[ii]);
                } else {
                    this._$puzzel[ii].attr('src', folder);
                }

                ii++;

            }
        }
    }

    private ShufflePhoto() {

        for (var i = 0; i < 16; i++) {

            let xRandom = (Math.random() * $(document).width()) - 300;
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

        let w = this._qArr[this._setting.questionActive].pW;
        let h = this._qArr[this._setting.questionActive].pH;
        let wOffset = Math.floor(w / 4.0) + 1;
        let hOffset = Math.floor(h / 4.0) + 1; //hOffset += 0.5;
        let x = ($(document).width() / 2) - (w / 2);
        let y = this._$puzzleSpace.position().top + 50;
        let xPos, yPos;
        let xPos1, yPos1;


        for (var i = 0; i < 16; i++) {


            switch (i) {

                case 0:
                    xPos = x;
                    yPos = y;
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

            let rij = Math.floor(i / 4);
            let col = i % 4;
            //alert(rij + '/ ' + col);
            if (this._qArr[this._setting.questionActive].pX[rij][col] > 0)
                xPos1 = xPos + this._qArr[this._setting.questionActive].ppX;
            if (this._qArr[this._setting.questionActive].pX[rij][col] < 0)
                xPos1 = xPos - this._qArr[this._setting.questionActive].ppX;

            if (this._qArr[this._setting.questionActive].pY[rij][col] > 0)
                yPos1 = yPos + this._qArr[this._setting.questionActive].ppY;
            if (this._qArr[this._setting.questionActive].pY[rij][col] < 0)
                yPos1 = yPos - this._qArr[this._setting.questionActive].ppY;


            this._$puzzel[i]
                .animate({
                    left: xPos1 + 'px',
                    top: yPos1 + 'px'
                }, 500);
        };




    }

}


