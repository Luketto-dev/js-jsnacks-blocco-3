//Snack1
//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.



// creo array vuoto
let numeri = [];

// creo variabile somma = 0 
let somma = 0;

// ciclo while finchè la somma è minore di 50 fai il ciclo 
while (somma < 50) {

    // mi salvo in una variabile il numero inserito dall utente
    let numeroRichiesto = parseInt(prompt("inserisci un numero"))

    // se quello che ha inserito non è un numero stampo errore altrimenti popolo l array numeri e faccio la somma degli elementi che pusho dentro l array
    if (isNaN(numeroRichiesto)) {
        alert("inserisci un numero")
    }else{
        numeri.push(numeroRichiesto)

        somma += numeroRichiesto;
    }
    
}

console.log(somma)