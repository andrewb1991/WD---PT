// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min +1) - min);
}

function giveMeRandom(lenght){
    const randomArr = [];
    for( let i = 0; i < lenght; i++){
        randomArr.push(randomInt(0,10))
    }
return randomArr;
}
// console.log(
//     giveMeRandom(10),
//     )


// function checkArray(arrayToCheck){
//     let sum = 0;
// for(const num of arrayToCheck){
//     if(num >5){
//     console.log(true);
//     sum += num;
//     }
// else{
//     console.log(false);
// }
// }
// return sum;
// }
// const random = giveMeRandom(10);
// const sum = checkArray(random);

// console.log(random, sum);

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// price, id, name, quantity;
const generateRandomId = () => new Date().getTime().toString();
const generateProduct = () => {
  const productDb = [
    'Panino col salame',
    'Kebab',
    'Nduja di Spilinga',
    'Pastiera',
    'Ravioli del plin',
    'Pizza',
    'Pasta con le sarde',
    'Caprese',
    'Nu Bell Babà',
    'Pane e acqua'
  ];
  const randomIndex = randomInt(0, productDb.length - 1);
  return productDb[randomIndex];
}

const generateRandomCartItem = () => {
  const price = randomInt(10, 200);
  const id = generateRandomId();
  const name = generateProduct();
  const quantity = randomInt(1, 10);
  cart.push({
    id,
    name,
    price,
    quantity});
}

const generateRandomCart = () => {
  const cartLength = randomInt(5, 10);
  const cart = [];
  for(let i = 0; i < cartLength; i++) {
    cart.push(generateRandomCartItem())
  }
  return cart;
}


const totalCartPrice = cart => {
  let total = 0;
  for(const cartItem of cart) {
    total += cartItem.price * cartItem.quantity;
  }
  return total;
}


/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const addToShoppingCart = (cart, newCartItem) => {
  cart.push(newCartItem);
  let totalQuantity = 0;
  for(const item of cart) {
    totalQuantity += item.quantity;
  }
  return totalQuantity;
}


/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const longest = (stringArr) => {
//     let max = null; //variabile d'appoggio;
//     for(let i = 0; i < stringArr.length; i++){
//         const element = stringArr[i];
//         if(max === null || max.length < element.length){
//         max = element;
//         }
//     }
// return max;
// }
// console.log(longest([`ciao`, `evviva`, `vercingetorige` ]))
/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const mailFilter = emailContent => !emailContent.toUpperCase().includes(`SCAM`) && !emailContent.toUpperCase().includes(`SPAM`);

// console.log(
//     mailFilter(`QUesto non è uno ScAM!`)
//     )

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const daysToToday = (date) => { 
//     const now = new Date();
//     const diffMs = Math.abs(now.getTime() - date.getTime());
//     return Math.floor(diffMs /1000 /60 /60 /24); 
//     //una data è codificata in javascript con date, n di millisecondi dal 1/1/1970 fino a questo preciso momento. ogni data è convertibile in millisecondi.
// }
// console.log(
//     daysToToday(new Date(`2021-11-11`))
    
//     );
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//matrice in javascript = array di un array

// const matrixGenerator = (x, y) => {
//     const matrix = []; // prima costruisco un array
//     for(let i = 0; i < y; i++){
//         const row = [];
//         for(let j = 0; j < x; j++){
//             row.push(j.toString() + i.toString())
//         }

//     matrix.push(row);
//     }
// return matrix;

// }
// console.log(matrixGenerator(6,7));


