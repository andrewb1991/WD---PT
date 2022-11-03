let arr = [1, "2", {three: 3}, [4,5]];

console.log(arr)

/* const è una costante, gli array si dichiarano così non con var o let */

const array = [1, 2, 3, 4, 5, 1]

console.log(array);
console.log(array.indexOf(1)); /* posizione dell'array (sempre i-n dove n è la lunghezza dell'array) */

console.log(array.concat(8,9)); /* aggiunge e concatena un altro vettore */

const val1 = [8,9];

console.log (array.concat(val1)); /* qua concateniamo un array a un altro */

console.log(array); /* la parte concatenata non è stata aggiunta all'array iniziale */
const array2 = array.concat(val1);
console.log(array2); /* dobbiamo creare una nuova const che comprende array e val1 (quindi creiamo const array2 e se lo stampiamo troviamo gli array uniti */

/* push permette di aggiungere elemnti a un array */

array.push(11);  /* qui aggiungiamo un elemento all'array */
console.log(array);  /* se stampiamo l'array verrà unito in automatico all'array di partenza */

array.pop() /*rimuove l'ultimo elemento e lo ritorna, se è vuoto viene identificato come undefined e non viene ritornato */
console.log(array);

// array.slice(1, 2); /* ritorna una copia della sezione, non modifica il vettore originale */
console.log(array.slice(1, 3));

/* includes  */
console.log(array.includes(3,2));

/* splice rimuove una porzione di un vettore */

console.log(array.splice(3,1)); /* 3 è la posizione, 1 è la quantità di elementi che voglio rimuovere dall'array, se voglio togliere tutto l'array (inizializzarlo): array [] non va utilizzato splice */
console.log(array);

/* join prende gli elementi e li fa diventare una stringa */
console.log (array.join(`|`))


/*come accedere all'elemento di un array */
console.log(array[2]);
array[2]= "ciccio";
console.log(array[2]);
array[5] = "6"; /* questo non si fa, si deve usare push o pop */

console.log(array[6]); /* è un elemento che non esiste, quindi undefined */
console.log(array);

/* scorrere gli elementi di un array , si usa un ciclo for o loop, meglio un for perchè c'è una partenza, la definizione e le successione
!!! 
QUELLO DI SEGUITO E' QUELLO PIU' UTILIZZATO PERCHE' IDENTICO IN TUTTI I LINGUAGGI DI PRGRAMMAZIONE
!!!! */

for (let i = 0; i < array.length; i++) {
    console.log(`index: = ${i} | value:= ${array[i]}`);
}   
/* da qui in poi la variabile i viene distrutta, perchè all'interno solo del ciclo, se viene dichiarata prima invece viene stampata e visibile in console */

for (let i of array){ /* of è una parola chiave, questo è un secondo modo per stampare gli elementi di un vettore */
    console.log(i);
}

for (let i in array){ /* in e of sono iterator: of restituisce il contenuto del vettore, mentre in ma itera sulle chiavi, sugli elementi del vettore, per stampare il valore dovrei utilizzare console.log(array[i]) */
    console.log(i);
}