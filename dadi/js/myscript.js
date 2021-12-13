// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let utente = Math.floor(Math.random()*5+1);
let computer = Math.floor(Math.random()*5+1);

if(utente > computer){
    console.log('utente vincitore');
}else if(utente == computer){
    console.log('pareggio');
}else{
    console.log('computer vincitore');
}