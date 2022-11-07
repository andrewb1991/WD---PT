// const obj = {};
// obj [`country:`] = "italy"
// obj.age = 31
// console.log (obj["country:"]) /* questo è per stampare una scrittura di un oggetto */
// console.log(obj.age)
// const obj2 = {
//     name: "andrea",
//     city: "fano",
// }
// console.log(obj2.name);

// /* un oggetto può contenere altri array (vettori) o altri oggetti che contengono a loro volta altri oggetti o arrray */

// let a = 3;
// let b = a;

// console.log (a);
// console.log(b);
// b = 5;
// console.log(b); /* copia per valore */


// const A1 = [1,2,3];
// const A2 = A1;
// console.log(A1);
// console.log(A2);
// A1[1] = `A`
// console.log(A1);
// console.log(A2);

/* GLI OGGETTI VENGONO COPIATI PER PUNTATORE, tra gli array non si fa mai con = si possono fare array = array, stiamo copiando solo il  valore di una nell'altra */

// const D1 = {name: `pippo`, city: `rome`};
// const D2 = {name: `pluto`, city: `naples`};
// console.log(D1);
// console.log(D2);
// D1.city = `Fano`;
// console.log(D1);
// console.log(D2);

/* SHALLOW COPY - UN OGGETTO NON COPIA REALMENTE IL CONTENUTO, COPIA L'INDIRIZZO IN CUI SI TROVA, SE INVECE VOGLIAMO COPIARE QUELLO CHE C'è ALL'ITNERNO DI UN OGGETTO SI FA UNA DEEP COPY */

// FUNZIONI

// SWITCH CASE, CASE BREAK E DEFAULT SONO LE FUNZIONI DELLO SWITCH CASE - sostituisce il cascading if/else, valuta un espressione e controlla i cases; il caso default corrisponde all'else finale (caso di controllo finale), il break invece esce dallo statement e passa agli step successivi.
 const expr = `terra`;
 switch (expr){
    case `Orange`:
        console.log(`Orange are orange`);
        break;
    case `Papayas`:
        console.log(`Nice`);
        break;
        default:
            console.log(`nothing to do`)
}

// break è importante per valutare tutti i casi.  senza break valuta anche gli altri e gli stampa tutti.

// funzioni: codice riutilizzabile! senza ripetere, console.log(.....) dentro le parentesi è già una funzione - hanno da 0 (da cui non passa niente) a molti paramentri input (arguments) e può restituire un valore (return)

// let screwdriver = makeCocktail(`Orange juice`, `Vodka`, 300);
// console.log(makeCocktail);

// function makeCocktail(fruit, liquor, quantity) {
//     console.log(fruit)
//     console.log(liquor)
//     console.log(quantity)
//     return 123;
// } 

// let x = makeCocktail(`orange`,`Vodka`, 300);
// console.log(`=> ${x}`)

//funzione - nome della funzione (argomenti) { return è il risultato aspettato} . con console.log invochiamo la funzione

function sum (n1, n2){
    // const s = n1+n2;
    // return s;  //return blocca la funzione, non viene più eseguito nulla di quella funzione...il secondo return non verrà mai eseguito (programmazione procedurale)
    return(n1 + n2);
}

let s1 = sum(10,"20"); //cosi concateniamo un numero alla stringa, non si fa la somma


console.log(s1);
let s2 = sum(10, 20);
console.log(s2);
function division(n1, n2){
    if(n1 === 0) {      //questo è un if di controllo prima di effettuare la divisione.
        return NaN;
    }
    return (n2/n1);
}

const d1 = division(0,10)

console.log(d1);

function createArray(size, multiplier) {
    console.log(createArray);
    const array =[];
    for (let i = 0; i<size; i++) {
        array[i] = i * multiplier;
    }
return array;
}

 
const a = createArray(8, 1.2);
console.log(a);