var numeri_utente = [];
var somma = 0;

for(var i = 0; i<10; i++){
  numeri_utente.push(parseInt(prompt('inserisci un numero')));
  somma += numeri_utente[i];
}

console.log(somma);