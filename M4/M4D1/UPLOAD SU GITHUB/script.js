// // <!-- # Esercizi

// 1. Crea una funziona che calcoli e ritorni la somma di due numeri interi. Se i due valori sono uguali, ritorna il triplo della somma.

// function sommaUguale(a, b) {

//     if(a === b){
//         console.log(`I due numeri sono uguali, il risutlato è triplo!`)
//         return (a+b)*3;

//     }
// else {
//     console.log(`I due numeri sono diversi, il risultato è`)
//    return a + b;
// }
// };



// 2. Crea una funzione che controlli sue numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

// function checkFifty(a, b){
// if(a + b == 50 || a === 50 || b === 50){
//     console.log(`il numero è 50!`)
// }
// else{
// console.log(`il numero non è 50!`)
// }
// }

// 3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.


// const str = `CIAO MONDO!`;
// const newstr = str.slice(0,1) + str.slice(2, str.length);
// console.log(newstr);

// 4. Crea una funzione che ritorni il valore più alto tra tre numeri interi.


// function highNum(a, b, c){
// if(a > b && a > c){
// console.log(`il numero più alto è: ${a}`);
// }
// else if(b > a && b > c){
//     console.log(`il numero più alto è ${b}`);
// }
// else if(c > a && c > b)
// {
//     console.log(`il numero più alto è ${c}!`)
// }};

// 5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

// function checkMiddle(a, b){
// if (a <= 60 && a >= 40 || b <= 60 && a >= 40 ){
// console.log(`true!`);
// }
// else{
//     console.log(`false!`);
// }
// };

// 6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. Sia la stringa che il numero devono essere passate come parametri.



// 7. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.




// 8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. L’array deve essere passato come parametro.

// const arr = [1, 2, 3];
// let somma = 0;

// for (let i = 0; i < arr.length; i++) {
//     somma += arr[i];
// }
// console.log(somma);

// 9. Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`.

// const arr = [2,4]

// function check1and3(){
// if(arr.includes(1,0)){
// console.log(`l'Array contiene il numero 1!`);
// }
// else if(arr.includes(3,0)){
// console.log(`l'Array contiene il numero 3!`);
// }
// else{
//     console.log(`l'Array non contiene il numero 1 e il numero 5`);
// }
// };


// 10. Crea una funzion che controlli che un array di due elementi NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

// let arr = [10,30];

// function check1not3(){
// if(arr.includes(1,0)){
// return false;
// }
// else if(arr.includes(3,0)){
// return false;
// }
// else{
// return true;
// }
// }

// 11. Crea una funzione per trovare la stringa più lunga in un array di stringhe. Passa l’array come parametro e tritorna la strtinga più lunga.


// 12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

function checkEdge(num){
if(num < 90){
console.log(`l'angolo è acuto!`);
}
else if(num > 90 && num < 180){
console.log(`l'angolo è ottuso!`)
}
else if(num === 90){
console.log(`l'angolo è retto!`);
}
else {
    console.log(`l'angolo è piatto!`);
}
};

// 13. Crea una funzione che trovi e ritorni **l’indice** di del numero più alto in un array passato come parametro.


// let arr = [1,3,5,13922929,842,323]

// function seeIndex(){
// let myArr = Math.max(...arr);
// console.log(arr.indexOf(myArr));
// }

// 14. Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro.

// let arr = [1,3,5,7,7,2]

// function seeMaxOven(){
// {
// let myArr = Math.max(...arr);
// if(myArr % 2 === 0){
// console.log(`il numero pari più alto è ${myArr}`);
// }
// else{
// console.log("prova")
// }
// }
// }

// 15. Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. Ritorna `true` se la condizione è applicata, `false` se non lo è.
// 16. Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro.
// 17. Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`.
// 18. Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
// Il numero è divisibile per 3 ⇒ ritorna “Diego”
// Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
// Il numero è divisibile per 7 ⇒ ritorna “Stefano”
// Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.
// ⚠️ Se il numero è divisibile per più di una di queste opzioni, ritorna l’unione delle due stringhe. Es. 15 è divisibile per 3 e per 5, quindi il valore ritornato sarebbe “DiegoRiccardo”.
// // 19. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”. -->