//chiedere all'utente un numero
var numero_utente = parseInt(prompt("Inserisci un numero"));


// var somma
var somma = 0;

for(var i = 1; i <= numero_utente; i++){
   
  console.log(Math.pow(i, 3))

  somma += Math.pow(i,3);
   
}

console.log("la somma dei cubi è " + somma)

