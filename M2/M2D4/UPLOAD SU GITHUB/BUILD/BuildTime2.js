// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/


function calculateFinalPrice(buyer, prices, shippingCost) {
  //sommo i prezzi e trovo il totale;
  let total = 0;
  for(const price of prices){
    total += prices;
  } //applico sconto 30% per gli ambassador
if(buyer.isAmbassador){
  //applico il discount (lo sconto) dal totale;
const discount = (total / 100)*30;
total -= discount;
}
  if(total < 100){//applico shipping cost su ordini totale < 100; (giro la domanda al contrario)
    total += shippingCost;
  }
return total; //restituisco il totale con sconto su shippingcost se il totale è maggiore di 100, con l'aggiunta di shippingcost
console.log(`Il prezzo finale per` + buyer.name + ` ` + buyer.lastName + `è: ` + total);
}


const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [340, 327, 220]
const shippingCost = 50


function calculateFinalPrice(buyer, prices, shippingCost) {
  //sommo i prezzi e trovo il totale;
  let total = 0;
  for(const price of prices){
    total += price;
  } //applico sconto 30% per gli ambassador
  if(buyer.isAmbassador){
  //applico il discount (lo sconto) dal totale;
      const discount = (total / 100) * 30;
      total -= discount;
}
  if(total < 100){//applico shipping cost su ordini totale < 100; (giro la domanda al contrario)
    total += shippingCost;
  }
console.log(`Il prezzo finale per ` + buyer.name + ` ` + buyer.lastName + ` è: ` + total);
}


calculateFinalPrice(marco, prices, shippingCost);
calculateFinalPrice(paul, prices, shippingCost);
calculateFinalPrice(amy, prices, shippingCost);