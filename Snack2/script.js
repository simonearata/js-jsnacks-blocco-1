var parola_1 = prompt('Inserisci una parola 1');
var parola_2 = prompt('Inserisci una parola 2');

if(parola_1.length > parola_2.length){
  console.log('la parola 1 è più lunga');
}else if(parola_1.length < parola_2.length){
  console.log('la parola 2 è più lunga');
}else{
  console.log('le parole hanno le stesse lettere');
}