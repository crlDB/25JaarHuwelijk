"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("lib_jqueryposition");
require("lib_jquerydraggable");
require("../../node_modules/bootstrap/dist/css/bootstrap.css");
require("../../node_modules/font-awesome/css/font-awesome.css");
require("../css/app.css");
;
for (var i = 1; i < 10; i++) {
    var y = $('<img>', {
        id: '100_' + i,
        src: './src/img/foto100/p' + i + '.png'
    });
    y.draggable();
    $('body').append(y);
}
//alert('carlk');
//let webHmiConfig = new WebHmiConfig();
// laden 
//# sourceMappingURL=app.js.map