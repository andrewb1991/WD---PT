// ESERCIZIO 7 M2D6 --> Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro 
    function changeH1(newH1) {
        let Ch1 = document.querySelector("h1");
        Ch1.innerText = newH1;
        Ch1.addEventListener(`click`, () => {
            Ch1.innerHTML = ("LA BOTTEGA DI ANDREW IN MAIUSCOLO");
            console.log(newH1);
        })
      }

// ESERCIZIO 8 M2D6 ---> Scrivi una funzione per cambiare il colore di background della pagina

function changeBg(newBg){
    let bodyBg = document.querySelector(`body`);
    bodyBg.style.background = (`green`);
}

// ES.9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeInd(newInd){
    let ind = document.querySelector(`footer`);
    ind.innerHTML = newInd;
    ind.innerText = "La Bottega di Andrew del Futuro, Via Lattea 12348654 Mondo";
}

// ES.10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function changeLink(newLink){
const alink = document.querySelectorAll(`a`);
for(const al of alink){
al.style.color = `red`;
al.style.fontWeight = `bold`; 
}
alink = newLink;
}
// ES.11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function changeCSS = (){
    document.querySelectorAll(`img`).style.display = `none`;
};

// //       const firstUlDisappear = function () {
// document.getElementById(`firstList`).style.display = `none`;
// };
