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
}



export class Puzzel {

    //    let actief = {
    //    vrgNbr: 0,

    //};




    private _$header: JQuery<HTMLElement>;
    private _$answer: JQuery<HTMLElement>;
    private _$input: JQuery<HTMLElement>;
    private _setting: ISetting = { questionActive: 1, questionPrev: 1, firstQuestion: 1, lastQuestion: 10 };
    private _qArr: IQuestion[] = [];
    db: DBox;




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

        // event
        this.createEvents();

        // questions
        this.createQuestions();

        // show avtive question
        this.QuestionShow();


    }

    private createQuestions() {

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
    }

    private createHeaderText() {

        // create header
        this._$header = $(`<div class="alert alert-success" style="text-align:center; margin:0px;">
                <h2>Op <span id="box10" class="badge badge-warning">17 maart</span> 2020 zijn wij <span id="box10" class="badge badge-warning">25 jaar</span> getrouwd!</br>
                Omdat we nog steeds heel erg <span id="box10" class="badge badge-warning">gelukkig zijn</span> met elkaar,</br>
                zouden we dit graag samen met onze familie vieren.</br>
                Hiervoor willen wij jullie dan ook <span id="box10" class="badge badge-warning">uitnodigen</span> op een</br> 
                <span id="box10" class="badge badge-warning">‘Dinner and Dance’</span> in het restaurant </br>
                waar we onze  <span id="box10" class="badge badge-warning">samenwoonst</span> gevierd hebben in <span id="box10" class="badge badge-warning">1993</span>.</br>
                Wanneer: <span id="box10" class="badge badge-warning">zaterdag 21 maart</span> om 19u30</br>
                Waar: <span id="box10" class="badge badge-warning">Ter Torre</span>, Broekstraat 109 te Waregem</br>
                Graag een seintje voor <span id="box10" class="badge badge-warning">1 maart</span> 2020 of je/jullie  al dan niet aanwezig zal/zullen zijn
                </h2>
                </div>`);
        $('body').append(this._$header);
    }

    private createQestion() {

        this._$answer = $('<div class="alert alert-primary" role="alert" style="text-align:center; margin:0px;"></div>');
        $('body').append(this._$answer);
    }

    private createAnswer() {

        // answer
        let answer = $(`
            <form class="form-inline center alert alert-primary" style="text-align:center; margin:0px;">
              <button id="btnVorige" type="button" class="btn btn-primary mb-2">VORIGE</button>

              <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">ANTWOORD</label>
                <input type="text" class="form-control" id="inputAnswer" placeholder="antwoord">
              </div>

              <button id="btnVolgende" type="button" class="btn btn-primary mb-2">VOLGENDE</button>
            </form>`).css('text-align', 'center');
        $('body').append(answer);


        // hr 
        $('body').append('<hr>');

    }


    private createEvents() {

        // btn vorige
        $('#btnVorige').click((e) => {

            this.checkAnswer();

            this._setting.questionPrev = this._setting.questionActive;
            this._setting.questionActive--;
            if (this._setting.questionActive < this._setting.firstQuestion)
                this._setting.questionActive = this._setting.firstQuestion;

            this.QuestionShow();
        })

        // btn volgende
        $('#btnVolgende').click((e) => {

            this.checkAnswer();

            this._setting.questionPrev = this._setting.questionActive;
            this._setting.questionActive++;
            if (this._setting.questionActive > this._setting.lastQuestion)
                this._setting.questionActive = this._setting.lastQuestion;
            this.QuestionShow();

        })


    }

    private checkAnswer() {

        let answer: string = <string>this._$input.val();
        answer = answer.toLowerCase();
        if (answer == this._qArr[this._setting.questionActive].answer) {
            this.boxAnswerOK();
            return true;
        }
        else {
            this.boxAnswerOK();
            return false;

        }

    }

    private boxAnswerOK() {
        if (this.db)
            this.db.close();

        // create panel
        this.db = new DBox({
            id: 'AnswerOK',
            type: BoxType.Dialog,
            title: '??',
            content: 'CARL',
            backgroundColor: '#d4d4d4',
            posLeft: 150, //($('body').width() / 2) - 150,
            posTop: 150,
            footerToolbar: [
                "<button id='js1btnN' type='button' class='btn btn-sm btn-outline-danger m-1'>NEE</button>",
                "<button id='js1btnY' type='button' class='btn btn-sm btn-outline-success m-1'>&nbsp;&nbsp;JA&nbsp;&nbsp;</button>"
            ],

            onShow: () => {
            },

            onClose: () => {
                // reset
                this.db = null;
            }
        });


        let $body = this.db.get$();
        // NO
        $('#js1btnN', $body).click((e) => {
            // close panel
            this.db.close();
        });

        // YES
        $('#js1btnY', $body).click((e) => {
            // close panel
            //callBackOK();
            this.db.close();
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



    }


}


