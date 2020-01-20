

import "lib_jqueryposition";
import "lib_jquerydraggable";
import "@andxor/jquery-ui-touch-punch-fix";
import "bootstrap";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.css";

import "../css/app.css";


import * as d3 from "d3";
import { Puzzel } from "./Puzzel";


export interface GlobalRT {
    RT: Puzzel
}


// create global var
let runtime: GlobalRT = {
    RT: null
};

window['WebHmiRT'] = runtime;               // before new PoRuntime !!!!

runtime.RT = new Puzzel();










// hr --------------------------------------------------------------------------->
//$('body').append('<hr>');























;

let $var = [];
let ii = 0;
for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 4; j++) {
        let name: string = '10_' + i + '_' + j;
        $var[ii] = $('<img>', {
            id: name,
            src: './src/img/foto10/' + name + '.png'
        });
        $var[ii].draggable();

        $('body').append($var[ii]);
        ii++;
    }
}


let w = 800.0;
let h = 533.0;
let wOffset = w / 4.0; 

let hOffset = h / 4.0; //hOffset += 0.5;

let x = 400;
let y = 600;
let xPos, yPos;
let xPos1, yPos1;

for (var i = 0; i < 16; i++) {

    let xRandom = Math.random() * 1000;
    let yRandom = Math.random() * 1000;
    
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
};






