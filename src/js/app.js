"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("lib_jqueryposition");
require("lib_jquerydraggable");
require("@andxor/jquery-ui-touch-punch-fix");
require("bootstrap");
require("../../node_modules/bootstrap/dist/css/bootstrap.css");
require("../../node_modules/font-awesome/css/font-awesome.css");
require("../css/app.css");
var Puzzel_1 = require("./Puzzel");
// create global var
var runtime = {
    RT: null
};
window['WebHmiRT'] = runtime; // before new PoRuntime !!!!
runtime.RT = new Puzzel_1.Puzzel();
// hr --------------------------------------------------------------------------->
//$('body').append('<hr>');
;
var $var = [];
var ii = 0;
for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 4; j++) {
        var name_1 = '10_' + i + '_' + j;
        $var[ii] = $('<img>', {
            id: name_1,
            src: './src/img/foto10/' + name_1 + '.png'
        });
        $var[ii].draggable();
        $('body').append($var[ii]);
        ii++;
    }
}
var w = 800.0;
var h = 533.0;
var wOffset = w / 4.0;
alert('wOffset > ' + wOffset);
var hOffset = h / 4.0; //hOffset += 0.5;
alert('hOffset > ' + hOffset);
var x = 400;
var y = 600;
var xPos, yPos;
var xPos1, yPos1;
for (var i = 0; i < 16; i++) {
    var xRandom = Math.random() * 1000;
    var yRandom = Math.random() * 1000;
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
}
;
//# sourceMappingURL=app.js.map