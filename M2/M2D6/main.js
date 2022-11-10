

// let div1 = document.getElementsByTagName(`div1`); // richiama un elemento dall'html.
let counter = 0;

let px; 

function initID(id){
    console.log(`func.initID->onclick: {id: ${id}}`);
    px = document.getElementById(id);
}
// let p1 = document.getElementsByTagName(`p1`);
// console.log(div1); // stampa l'elemento richiamato da html.
// console.log(p1); // stampa l'elemento richiamato da html.
//da qua possiamo modificare o leggere un oggetto, un nodo è un tag!!
//definiamo myFunction inserita su html nel tag button

function changeValue(value){
    console.log('func.initID->onclick: {value: ${value}}');
    px.innerHTML = value;
    //alert(`HAI PREMUTO?!`) (appare un pop up nella pagina html!)
}
// con le parentesi tonde dopo una funzione la stiamo invocando, senza parentesi ci va vedere in stampa quello che c'è all'interno della nostra funzione.

// si possono creare anche nuovi elementi tramite javascript, come i div.
function createDiv (){
    let newDiv = document.createElement(`div`);
    newDiv.innerText = "Hello!";
    newDiv.style.color ="red";   
    newDiv.id = "id"+ counter;
    counter++;

let p2 = document.getElementById(`p2`);
p2.appendChild(newDiv);

}
createDiv();
function removeDiv(id){
    let removeDiv = document.getElementById(`id`+ id);
    p2.removeChild(`id`+ id)
}
// newDiv.id = "div"
// let body = document.getElementsByTagName(`body`)[0];
// console.log(`body`, body);
// body.appendChild(newDiv);
