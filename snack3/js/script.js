//Snack3
//Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//Il programma stampa la somma di tutti i numeri inseriti.

//dichiaro variabile somma = 0
let somma = 0

// ciclo che si ripete 5 volte in quanto noi vogliamo chiedere all utente un numero per 5 volte
for (let i = 0; i < 5; i++) {
    
    // richiedo il numero da inserire e lo salvo in una variabile
    let numeroInserito = parseInt(prompt("inserisci un numero"))

    // popolo variabile somma ad ogni ciclo
    somma += numeroInserito;
    
}

// stampo la variabile somma popolata
console.log("somma numeri inseriti: " , somma)