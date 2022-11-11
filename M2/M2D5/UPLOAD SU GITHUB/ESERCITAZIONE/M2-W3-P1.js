/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function calculateArea(l1, l2){
//     return l1*l2;
// }
// console.log( `Area is: ` + calculateArea(40,54))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazySum(a, b){
//     const sum = a + b;
//     return  a === b ? sum * 3 : sum;
// }
// console.log(
//     crazySum(10,20),
//     crazySum(10,10),
    // )
/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function crazyDiff(a){
//     const diff = Math.abs(a -19); //Math.abs è la differenza assoluta tra un numero inserito e 19 (già assegnato);
//     // if(diff > 19){
//     //     return diff * 3;
//     // }
//     // return diff;

//     return diff > 19 ? diff * 3 : diff; //alternativa con il ternario.
// }
// console.log( crazyDiff(55),
// crazyDiff(0),
// );


/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function boundary(a){
// // return (a>=20 && a <= 100) || a === 400;      
// if((a >= 20 && a <= 100 )|| a === 400);
// return true;  
//     }
// console.log(
//     boundary(400),
//     boundary(10),
//     )

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function codify(theString){
//     const codeString = `code`;
//     const beginning = theString.substr(0, codeString.length);
//     if(beginning === codeString){
//         theString.includes(codeString);
//         return theString;
//     }
//     return codeString + theString;
//     }
// console.log(
//     codify(`Mario`),
//     codify(`Lucacodeluca`),
//     codify(`codeMario`)
//     );

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function check3and7(value){
//     if(value % 3 === 0 || value % 7 === 0){
//         return true;
//     }
// else{
//     return false;
// }
// }

// console.log(
//     check3and7(17)
//     )


/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function reverseString(myString){
//     let reversed = " ";
//     for(let i = myString.length -1; i >=0; i--){
//     reversed += myString[i];
//     }
//     return reversed;
// }
// console.log( reverseString("ANDREA"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
//str.split e str.join

function upperFirst(upperString){
    const words = upperString.split(` `);
for(i = 0; i < words.length; i++ ){
     const word = words[i];
     const upperWord = word[0].toUpperCase() + word.substr(1, word.length -1);
     words[i] = upperWord;
}
return words.join(` `);
}
const str = "ciao mi chiamo andrea bramucci";
console.log(
    upperFirst(str));

    
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
