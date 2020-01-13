"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("lib_jqueryposition");
require("lib_jquerydraggable");
require("../../node_modules/bootstrap/dist/css/bootstrap.css");
require("../../node_modules/font-awesome/css/font-awesome.css");
require("../css/app.css");
// create tekst ----------------------------------------------------------------->
var header = $("<div class=\"alert alert-success\" style=\"text-align:center; margin:0px;\">\n                <h1>OP <span class=\"badge badge-warning\">21MAART</span> <span class=\"badge badge-warning\">2020</span> VIEREN WIJ</br>\n                ONS <span class=\"badge badge-warning\">25JAAR</span> <span class=\"badge badge-warning\">HUWELIJK</span>, </br>\n                DIT\n                </h1>\n                </div>");
$('body').append(header);
// hr --------------------------------------------------------------------------->
//$('body').append('<hr>');
var vrg = $('<div class="alert alert-primary" role="alert" style="text-align:center; margin:0px;"></div>');
$('body').append(vrg);
// hr --------------------------------------------------------------------------->
//$('body').append('<hr>');
// prev - next ------------------------------------------------------------------>
var answer = $("\n<form class=\"form-inline center alert alert-primary\" style=\"text-align:center; margin:0px;\">\n  <button id=\"btnVorige\" type=\"button\" class=\"btn btn-primary mb-2\">VORIGE</button>\n\n  <div class=\"form-group mx-sm-3 mb-2\">\n    <label for=\"inputPassword2\" class=\"sr-only\">ANTWOORD</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"antwoord\">\n  </div>\n\n  <button id=\"btnVolgende\" type=\"button\" class=\"btn btn-primary mb-2\">VOLGENDE</button>\n</form>").css('text-align', 'center');
$('body').append(answer);
// hr ---------------------------------------------------------------------------->
$('body').append('<hr>');
var actief = {
    vrgNbr: 0,
};
var qArr = [];
var q = { vrg: 'DAG VAN HET FEEST', antw: '17maart' };
qArr.push(q);
q = { vrg: 'JAAR VAN HET FEEST', antw: '2020' };
qArr.push(q);
q = { vrg: 'h qsdjkfhhjklqshfjkqsh', antw: '2020' };
qArr.push(q);
q = { vrg: 'lj dfqsdlfqsdlflkqsjklfq', antw: '2020' };
qArr.push(q);
q = { vrg: 'kdfj sdjhfqsdhjkfhqsdklfhklqsfjkqs', antw: '2020' };
qArr.push(q);
q = { vrg: 'hfsd sdklfh kqsdjfjkqslhfjkl', antw: '2020' };
qArr.push(q);
// btn vorige
$('#btnVorige').click(function (e) {
    actief.vrgNbr--;
    if (actief.vrgNbr < 0)
        actief.vrgNbr = 0;
    vrg.empty();
    vrg.append("<h5>\n                Vraag " + (actief.vrgNbr + 1) + " </br>\n                " + qArr[actief.vrgNbr].vrg + "</h5> </br>\n                (maak puzzel, antwoord staat onderaan)\n                ");
});
// btn volgende
$('#btnVolgende').click(function (e) {
    actief.vrgNbr++;
    if (actief.vrgNbr > 10)
        actief.vrgNbr = 10;
    vrg.empty();
    vrg.empty();
    vrg.append("<h5>\n                Vraag " + (actief.vrgNbr + 1) + " </br>\n                " + qArr[actief.vrgNbr].vrg + "</h5> </br>\n                (maak puzzel, antwoord staat onderaan)\n                ");
});
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