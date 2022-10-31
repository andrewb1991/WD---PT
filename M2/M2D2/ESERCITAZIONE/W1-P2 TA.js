



const variabile = 'ciao';
console.log(typeof variabile)

const var2 = 33;
console.log(typeof var2)

/* QUESTI SI CHIAMANO PRIMITIVE TYPES */

let a = 10;
let b = a;

b = 35;

console.log (a,b);

/* SE INIZIALIZZO B CON A, STO CLONANDO QUEL VALORE, STO CREANDO UN NUOVO CONTENITORE INDIPENDENTE DA A. */

/* NUMBER NUMERI COMPRESI TRA -2 ALLA 53ESIMA E +2 ALLA 53ESIMA  */

const c = 93;
console.log(typeof c)

const d ='ciao marco';
console.log(parseInt(d));

/* Nan, si è dichiarata una variabile numerica ma dentro ha dei caratteri, come se dovessi sommare d con a: */

console.log(parseInt(a+d));

/* STRINGHE */

const e = 'l\'aquila';
const f = "l'aquila";
const g = `ciaoo`;

console.log(typeof e);
console.log(typeof f);
console.log(typeof g);


const saluto = "ciao";
const nome = 'Andrea';
const domanda ='come va?'

console.log(saluto + ' ' + nome + ' ' + domanda )

console.log(
    `${saluto} ${nome} ${domanda} ${a / b}`
    )
    
/* questo è un template, dentro ${stringa} si possono effettuare anche operazioni matematiche.
la back tip `` si fa con alt+reverse slash */


/* booleans: vero o falso */

const bool = false;
console.log(typeof bool);


const h = 10;
const i = 1000;
const isGreaterThan100 = !(h + i >= 100);

if (isGreaterThan100) {
    console.log("Complimenti")
    
}
else {
    console.log("Mi dispiace")
}
// console.log(isGreaterThan100); /*restituisce true in console il punto esclamativo davanti le parentesi ! = NOT */

// /* FUNZIONE */

function evaluateSum(h, i) {
    const isGreaterThan100 = !(h + i >= 100);
}

evaluateSum(5, 100);



/* OBJECTS e reference types // collezione di info di vario genere messe nello stesso contenitore */

const io = {
name: 'Andrea',
age: 31,
job: 'Commesso',
};
console.log(typeof io);
console.log(io.name); 
console.log(io.job);
console.log(typeof io.name);

if(io.age > 25) {
console.log('Hai fatto vecchio!');
}

let l = {
value: 10};

let m = l;
m.value = 100;
l.value = 1000;
console.log(l,m);

/* inequality */

const n = 22;
const o = '22';

console.log(n == o); 
/*uguaglianza di cifre inserite, quindi riposnderà true (22 numero uguale a 22 stringa) */
console.log(n === o); 
/* qua rilascierà false in quanto 22 numero non è 22 stringa*/
console.log(n != o);
/*meglio usare 3 uguali === */

const p = 0;
const q = false;

console.log(p == q); /* mai usare due uguali, il risultato sarà trye (che sono uguali) ma non lo sono */

/* AND / OR / NOT */

const r = 100;
const s = 40;
if(r > 10 && s < 300) { /* AND se le condizioni sono vere, il risultato stampato sarà il seguente: */
console.log('EVVIVA!')
}

if(r > 10 || s < 300) { /* OR se una delle condizioni sono vere, il risultato stampato sarà il seguente: */
console.log('SOLO UN EVVIVA!')
}

