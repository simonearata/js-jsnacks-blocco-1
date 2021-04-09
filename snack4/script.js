var invitati = ["marco", "francesco", "stefano", "michela" ];
var nome_utente = prompt("qual'è il tuo nome?");

var iscritto = false
for(var i = 0; i < invitati.length; i++){
  var nome = invitati[i];
  if(nome === nome_utente){
    iscritto = true
  }
}

if(iscritto){
  console.log("Il tuo nome è sulla lista puoi partecipare")
}else{
  console.log("Il tuo nome NON è sulla lista non puoi partecipare")
}
