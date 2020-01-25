//! WebHmi
//! version : 1.0.0
//! author  : De Bels Carl
//! license : MIT
//! date    : Q4-2019 (jspanel4 has mem-leaks)

import { ModalEventHandler } from "bootstrap";
import { GlobalRT } from "./app";


type CallBackOnShow = (b: DBox) => void;
type CallBackOnHide = (b: DBox) => void;
type CallBackOnResetContent = (b: DBox) => void;
type CallBackOnSetContent = (b: DBox) => void;
type CallBackOnClose = (b: DBox, e: ModalEventHandler<HTMLElement>) => void;

export enum BoxType {
    None = 0,
    Dialog = 1,
    Alert = 2,
}

interface IBoxOptions {
    type?: BoxType;
    id?: string;
    title?: string;
    content?: string;
    padding?: string;
    margin?: string;
    width?: number;
    height?: number;
    border?: string;
    footerToolbar?: string[];
    backgroundColor?: string;
    titleColor?: string;
    posLeft?: number,
    posTop?: number,
    onShow?: CallBackOnShow;
    onHide?: CallBackOnHide;
    onResetContent?: CallBackOnResetContent;
    onSetContent?: CallBackOnSetContent;
    onClose?: CallBackOnClose;
}


export class DBox {

    protected _poRT: GlobalRT = window['WebHmiRT'];

    private _boxOptions: IBoxOptions;
    private _$box: JQuery<HTMLElement>;
    private _$body: JQuery<HTMLElement>;
    private _$footer: JQuery<HTMLElement>;

    static alertYPos: number = 0;
    static alertOpen: number = 0;


    //
    //
    //
    constructor(dbOptions: IBoxOptions) {

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
        this._$box.on('hidden.bs.modal', (e) => {
            this.close();
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
                window.setTimeout(() => {
                    //                    if (this)
                    this.close();
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
    private createBox() {
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
    }

    //
    //
    //
    private createDialog(_$b) {
        var $dialog = $('<div class="modal-dialog" role="document"></div>');

        $dialog.css('margin', '0px');
        $dialog.css('padding', '0px');
        $dialog.css('max-width', '3000px')

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
    }

    //
    //
    //
    private createContent(_$b) {
        var $content = $('<div class="modal-content"></div>');
        _$b.append($content);
        this.createHeader($content);


    }

    //
    //
    //
    private createHeader(_$b) {


        var $header = $('<div class="modal-header"></div>');
        $header.append(`<h5 class="modal-title" id ="exampleModalLabel" style='font-size: 14px; margin:5px; color:#FFFFFF'>${this._boxOptions.title}</h5>`);
        var $but = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>')
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
    }

    //
    //
    //
    private createBody(_$b) {
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

    }

    //
    //
    //
    private createFooter(_$b) {

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

    }

    //
    //
    //
    public close() {

        if (this._$box == null)
            return;

        // remove events
        this._$box.off('hidden.bs.modal');
        this._$box.draggable('destroy');
        this._$box.modal('dispose');    // !!!! mem-leak!!!

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

    }

    //
    //
    //
    public resetContent() {
        if (this._$body)
            this._$body.empty();

        if (this._boxOptions.onResetContent)
            this._boxOptions.onResetContent(this);

    }

    //
    //
    //
    public resetFooter() {

        if (this._$body)
            this._$body.empty();
    }


    //
    //
    //
    public setContent(content: string) {
        if (this._$body) {
            this._$body.html(content);
            if (this._boxOptions.onSetContent)
                this._boxOptions.onSetContent(this);
        }
    }

    //
    //
    //
    public hide() {
        if (this._$box) {
            this._$box.hide();
            if (this._boxOptions.onHide)
                this._boxOptions.onHide(this);
        }
    }

    //
    //
    //
    public show() {
        if (this._$box) {
            this._$box.show();
            if (this._boxOptions.onShow)
                this._boxOptions.onShow(this);
        }
    }

    //
    //
    //
    public setTitle(title: string) {

    }

    public resize(resize: string) {

    }

    public setId(pageNrIndex: number) {
        if (this._$box) {
            this._$box.attr('poPageActive', pageNrIndex);
            this._$box.attr('poPage', pageNrIndex);
        }
    }

    public get$() {
        return this._$box;
    }

    public setPos(left: number, top: number) {
        if (this._$box) {
            if (left)
                this._$box.css('left', left);
            if (top)
                this._$box.css('top', top);
        }        
    }

    public setZindexHigh() {
        if (this._$box) {
            this._$box.css('z-index', '99999');
        }
    }


}


