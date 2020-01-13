

import "lib_jqueryposition";
import "lib_jquerydraggable";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.css";

import "../css/app.css";


import * as d3 from "d3";


// create tekst
let header = $(`<h1>OP <span class="badge badge-warning">21MAART</span> <span class="badge badge-warning">2020</span> VIEREN WIJ</br>
                    ONS <span class="badge badge-warning">25JAAR</span> <span class="badge badge-warning">HUWELIJK</span>, </br>
                    DIT ......

                </h1>`).css('text-align', 'center');
$('body').append(header);


// hr
$('body').append('<hr>');

// prev - next ------------------------------------------------------------------>
let answer = $(`
<form class="form-inline center">
  <button type="button" class="btn btn-primary mb-2">VORIGE</button>

  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">ANTWOORD</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="antwoord">
  </div>

  <button type="button" class="btn btn-primary mb-2">VOLGENDE</button>
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
