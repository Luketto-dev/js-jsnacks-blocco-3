//Snack4 (Bonus)
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 
//Interrompi il ciclo appena il nome è stato trovato.

let invitati = ["Luca", "Marco", "Ludovica", "Giovanni", "Paolo", "Martina"];

let nomeUtente = prompt("inserisci il tuo nome")

let canPartecipate = false
/*
for (let i = 0; i < invitati.length; i++) {

    if (nomeUtente === invitati[i]) {
        canPartecipate = true
    }

    if (canPartecipate) {
        console.log("puoi partecipare")
    }else{
        console.log("non puoi partecipare")
    }
    
}*/


let i = 0



while (i < invitati.length) {
    
    let invitato = invitati[i]

    if (nomeUtente === invitato) {
        canPartecipate = true
    }

    i++
}

if (canPartecipate) {
    console.log("puoi partecipare")
}else{
    console.log("non puoi partecipare")
}