

import "lib_jqueryposition";
import "lib_jquerydraggable";
import "@andxor/jquery-ui-touch-punch-fix";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.css";

import "../css/app.css";


import * as d3 from "d3";


// create tekst ----------------------------------------------------------------->
let header = $(`<div class="alert alert-success" style="text-align:center; margin:0px;">
                <h1>OP <span class="badge badge-warning">21MAART</span> <span class="badge badge-warning">2020</span> VIEREN WIJ</br>
                ONS <span class="badge badge-warning">25JAAR</span> <span class="badge badge-warning">HUWELIJK</span>, </br>
                DIT
                </h1>
                </div>`);
$('body').append(header);

// hr --------------------------------------------------------------------------->
//$('body').append('<hr>');
let vrg = $('<div class="alert alert-primary" role="alert" style="text-align:center; margin:0px;"></div>');
$('body').append(vrg);

// hr --------------------------------------------------------------------------->
//$('body').append('<hr>');

// prev - next ------------------------------------------------------------------>
let answer = $(`
<form class="form-inline center alert alert-primary" style="text-align:center; margin:0px;">
  <button id="btnVorige" type="button" class="btn btn-primary mb-2">VORIGE</button>

  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">ANTWOORD</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="antwoord">
  </div>

  <button id="btnVolgende" type="button" class="btn btn-primary mb-2">VOLGENDE</button>
</form>`).css('text-align', 'center');
$('body').append(answer);


// hr ---------------------------------------------------------------------------->
$('body').append('<hr>');


let actief = {
    vrgNbr: 0,

};




let qArr = [];
let q = { vrg: 'DAG VAN HET FEEST', antw: '17maart'}; qArr.push(q);
q = { vrg: 'JAAR VAN HET FEEST', antw: '2020' }; qArr.push(q);
q = { vrg: 'h qsdjkfhhjklqshfjkqsh', antw: '2020' }; qArr.push(q);
q = { vrg: 'lj dfqsdlfqsdlflkqsjklfq', antw: '2020' }; qArr.push(q);
q = { vrg: 'kdfj sdjhfqsdhjkfhqsdklfhklqsfjkqs', antw: '2020' }; qArr.push(q);
q = { vrg: 'hfsd sdklfh kqsdjfjkqslhfjkl', antw: '2020' }; qArr.push(q);



// btn vorige
$('#btnVorige').click((e) => {
    actief.vrgNbr--;
    if (actief.vrgNbr < 0)
        actief.vrgNbr = 0;

    vrg.empty();
    vrg.append(`<h5>
                Vraag ${actief.vrgNbr+1} </br>
                ${qArr[actief.vrgNbr].vrg}</h5> </br>
                (maak puzzel, antwoord staat onderaan)
                `);
})

// btn volgende
$('#btnVolgende').click((e) => {
    actief.vrgNbr++;
    if (actief.vrgNbr > 10)
        actief.vrgNbr = 10;

    vrg.empty();
    vrg.empty();
    vrg.append(`<h5>
                Vraag ${actief.vrgNbr + 1} </br>
                ${qArr[actief.vrgNbr].vrg}</h5> </br>
                (maak puzzel, antwoord staat onderaan)
                `);

})


















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
