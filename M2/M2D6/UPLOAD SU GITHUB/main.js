// ESERCIZIO 7 M2D6 --> Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro 
    function changeH1(newH1) {
        let Ch1 = document.querySelector("h1");
        Ch1.innerText = newH1;
        Ch1.innerHTML = ("LA BOTTEGA DI ANDREW IN MAIUSCOLO");
        console.log(newH1);
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
let alink = document.querySelector(`a`);
    alink.style.color = (`red`);
    alink.style.fontWeight = (`bold`);
    alink = newLink;
}

//si cambia solo il primo <a> non gli altri

