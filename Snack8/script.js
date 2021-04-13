var numero_utente = parseInt(prompt("Inserisci un numero a quattro cifre"));
var sum = 0;

while(numero_utente){
  
  sum += numero_utente % 10;
  numero_utente = Math.floor(numero_utente / 10);
  
}

console.log(sum)


