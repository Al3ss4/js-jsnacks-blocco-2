console.log('JS OK');

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.


// versione for

//creazione del let
let somma = 0;


//creazione del for 
for( let i=0; i < 5; i++){
    let nuovoNumero;
    

// prompt con parseInt per dichiarare un numero 
        nuovoNumero = parseInt(prompt(`${i+1} Inserisci un numero`))
    

}
