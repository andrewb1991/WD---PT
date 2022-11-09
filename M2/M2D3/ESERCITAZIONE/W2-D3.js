// /* ESERCIZIO 1
//  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
// const e = 8;
// const f = 8;

// if (e > f) {
//   console.log(`${e} è maggiore di ${f}`);
// } else if (e < f) {
//   console.log(`${f} è maggiore di ${e}`);
// }
// else if (e === f) {
//   console.log(`I DUE NUMERI SONO UGUALI: ${e}`);
// }

// /* ESERCIZIO 2
//   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
// let a = 4;
// if (a != 5) {
//   console.log(`not equal`)
// }



// // function isNumber5(num) {
// //   if(num !== 5) {
// //     console.log(`not equal`)
// //   }
// // }
// // isNumber5(8)
// // isNumber5(5)
// // isNumber5(7)

// /* ESERCIZIO 3
//   Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */
// /* SCRIVI QUI LA TUA RISPOSTA */

// let b;
// b = 100000005;

// if (b % 5 === 0) {
//   console.log(`divisible by 5`);
// }


// /* ESERCIZIO 4
//   Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// */


// /* SCRIVI QUI LA TUA RISPOSTA */

// let c = 2;
// let d = 6;
// if (c === 8 || d === 8) {
//   console.log(`Uno dei due numeri è 8`)
// }
// else {
//   console.log(`Nessuno dei due numeri è 8`)
// }
// if (c + d === 8) {
//   console.log(`la somma di ${c} e ${d} è uguale a 8`);
// }
// else if (c - d === 8) {
//   console.log(`La differenza tra ${c} e ${d} è uguale a 8`);
// } else if (d - c === 8) {
//   console.log(`La differenza tra ${d} e ${c} è uguale a 8`);
// }
// else {
//   console.log(`NO`);
// }


// /* ESERCIZIO 5
//   Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
//   C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
//   Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// function getTotalCost(totalShoppingCart) {
//   let shippingCost = 10
//   if (totalShoppingCart > 50) {
//     shippingCost = 0;
//   }
//   return totalShoppingCart + shippingCost;
// }
// console.log(`Il carrello è di ${getTotalCost(400)}`);

// /* OPPURE */

// // function getTotalCost2(totalShoppingCart) {
// //   return totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10;
// // }

// // console.log(getTotalCost2(110));

// /* ESERCIZIO 6
//   Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
//   Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// function getTotalCost2(totalShoppingCart) {
//   let shippingCost = 10
//   if (totalShoppingCart > 50) {
//     shippingCost = 0;
//   }
//   return totalShoppingCart - (totalShoppingCart / 5) + shippingCost;
// }
// console.log(`Il carrello è di ${getTotalCost2(40)}`);

// /* ESERCIZIO 7
//   Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
//   Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
//   Alla fine mostra il risultato in console.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

// function sortSequence(g, h, i) {
//   let one, two, three;
//   if (g > h && g > i) {
//     one = g;
//   } else if (h > g && h > i) {
//     one = h;
//   } else {
//     one = i;
//   }

//   if (g > h && g < i) {
//     two = g;
//   } else if (h > g && h < i) {
//     two = h;
//   } else {
//     two = i;
//   }


//   if (g < h && g < i) {
//     three = g;
//   } else if (h < g && h < i) {
//     three = h;
//   } else {
//     three = i;
//   }
//   console.log(one, two, three);
// }
// return sortSequence(1, 2, 3);

// one = a > b > c ? a : b > a && b > c ? b : c

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function isNumeroIntero(num) {
//   return typeof num === 'number' && num % 1 === 0;
// }

// console.log(isNumeroIntero(10));
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function checkPari(num){
// if(!isNumeroIntero(num)){
//     console.log(`ERRORE!!!`); return}
//   if (num % 2 === 0) {
//   console.log(`PARI`)
// }    
// else {
//   console.log(`DISPARI`)
// }
// }
// checkPari(2)
// checkPari(3)


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let val = 10;

// if (val < 10 && val >= 6) {
//   console.log(`Meno di 10`)
// } else if (val < 5 && val !== 5) {
//   console.log(`Meno di 5`)
// }
// else if (val === 5) {
//   console.log(`Valore uguale a 5`)
// }
// else{
//     console.log(`Uguale a 10 o maggiore`)
//   }

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 20;

// if (num <5){
//   console.log(`Tiny`)
// }
// else if (num < 10) {
//   console.log(`Small`)
// }
// else if (num < 15) {
//   console.log(`Medium`)
// }
// else if (num < 20) {
//   console.log(`Large`)
// }
// else if (num >= 20) {
//   console.log(`Huge`)
// }

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let isMale = 0;
// let male = ("é un maschio!");
// let female = ("è una femmina!");
// let gender = isMale ? male : female;
// console.log(gender);


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let n = -1;
// while (n <= 4) {
//   n++;
//   console.log(n);
// }


/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// for (let num = 0; num <= 10; num++)
// console.log(num)


/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

// for (let num = 0; num <= 10; num++){
// if (num === 3){
//   continue;
// } else if (num === 8){
//   continue;
// }
// console.log(num);
// }


/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

// for (let num = 0; num <=15; num++)
// if(num % 2){
//   console.log(`${num} E' DISPARI`);
// }
// else {
//   console.log(`${num} E' PARI!`)
// }

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/



/* SCRIVI QUI LA TUA RISPOSTA */

// for (let num = 0; num <=100; num++){
//   {
//  console.log(`${num}`)
//  }
//  if (num % 3 === 0 && num % 5 === 0){
//      console.log(`${num} FizzBuzz`);  
//    }
//  else if (num % 5 === 0){
//  console.log(`${num} Buzz`);
//    }
// else if (num % 3 === 0){
//  console.log(`${num} Fizz`);
// }
// }

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let day = 7;

// for(day === 1; day <=7; day++){
//   if(day===1){
//   console.log(`Lunedì`);
//   break;
// }
// else if (day === 2) {
//   console.log(`Martedì`);
//   break;
// }
// else if (day === 3){
//   console.log(`Mercoledi`);
//   break;
// }
// else if (day === 4){
//   console.log(`Giovedì`);
//   break;
// }
// else if (day === 5){
//   console.log(`Venerdì`);
//   break;
// }
// else if (day === 6){
//   console.log(`Sabato`);
//   break;
// }
// else if (day === 7){
//   console.log(`Domenica`);
//   break;
// }
// }
//  console.log();
