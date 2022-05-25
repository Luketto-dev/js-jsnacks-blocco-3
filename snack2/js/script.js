//Snack2
//Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
//Ogni volta che ne crei uno, stampalo.

// dichiaro variabile n che è uguale al numero che inserisce l utente
let n = parseInt(prompt("inserisci un numero"));

let i = 0;

// ciclo while finchè i è minore di n
while (i < n) {

    // ogni ciclo creo un array
    let arrayDaGenerare = [];
    

    // faccio un ciclo per popolare l array, il ciclo si ripeterà per 10 volte perchè vogliamo creare un array formato da 10 elementi
    for (let j = 0; j < 10; j++) {
        
        // creo elemento da inserire nell array
        numeroDaInserire = Math.floor((Math.random()*100)+1)

        // pusho l elemento creato all interno dell array
        arrayDaGenerare.push(numeroDaInserire)
        
        
    }

    console.log("array generato: " , arrayDaGenerare)

    i ++
}

