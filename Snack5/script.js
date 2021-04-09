var numeri_dispari = [];

for (var i = 0; i < 6; i++){
  var numeri_player = parseInt(prompt("Scegli un numero"));

  if(numeri_player % 2){
    numeri_dispari.push(numeri_player);
  }
}

console.log(numeri_dispari);