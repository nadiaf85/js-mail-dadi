// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const ArrayMail=['mario.rossi@libero.it', 'luca.bianchi@gmail.com', 'giuseppe.verdi@yahoo.it']; //creo array mail

const mail = prompt("inserisci la tua mail");
let controlloMail = false;

for(let index=0; index < ArrayMail.length; index++){
    if( mail == ArrayMail[index]){
        controlloMail = true;
    }
    console.log(ArrayMail[index], controlloMail);
}

if(controlloMail){
    console.log ("mail verificata");
} else{
    console.log ("mail non verificata");
}