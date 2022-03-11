console.log('JS OK');

// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.


// creazione array numeri interi
var arrayInteri = [ 0,1,2,3,4,5,6,7,8,9]
// crezione let somma 
let somma = 0;

// creazione for 
for(let i=0; i < arrayInteri.length; i++){

// prendiamo solo i numeri dispari     
    if(arrayInteri[i] & 2!==0){

// andiamo a sommare solo i dispari        
     somma += arrayInteri[i];
    }
 }
 
 
 console.log(somma);


