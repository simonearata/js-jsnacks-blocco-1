var numeri = []
var sum = 0

for( var i = 1; i < 11; i++){
  numeri.push(i)
}
console.log(numeri)

for(var i = 0; i < numeri.length; i++){
  sum += numeri[i]
}
console.log("la somma è " + sum)

var media = sum / numeri.length;
console.log("La media è "media)