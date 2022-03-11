console.log('JS OK');


// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.


// add array più lungo
var arrayLungo = [1,2,3,4,5,6,7,8,9];
console.log(arrayLungo);

// add array più corto
var arrayCorto =[10,11,12,13];
console.log(arrayCorto);

// add array con numeri casuali 
var arrayCasuali = [14,15,16,17,18,19,20,21];
console.log(arrayCasuali);

// creazione while: fintanto che gli elementi dell'array più lungo sono maggiori degli elementi dell'array più corto, allora in maniera randomica verranno aggiunti dei numeri presi da un terzo array.
while(arrayLungo.length > arrayCorto.length) {
    arrayCorto.push(arrayCasuali[Math.floor(Math.random()*arrayCasuali.length)])
  }
  
  console.log(arrayLungo);
  console.log(arrayCorto);