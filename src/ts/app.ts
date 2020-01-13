

import "lib_jqueryposition";
import "lib_jquerydraggable";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.css";

import "../css/app.css";


import * as d3 from "d3";


;

for (var i = 1; i < 10; i++) {


    let y: JQuery<HTMLElement> = $('<img>', {
        id: '100_' + i,
        src: './src/img/foto100/p' + i + '.png'
    });
    (<any>y).draggable();

    $('body').append(y);

}





//alert('carlk');

//let webHmiConfig = new WebHmiConfig();


// laden 
