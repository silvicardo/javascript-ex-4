//***** PARI O DISPARI ******//

//L'utente decide se vince pari, si parte dalla situazione in cui vince dispari
var utenteVinceConPari = false;

var regolaUtente = prompt('Vince pari o dispari?');

if (regolaUtente == 'pari') {
  utenteVinceConPari = true;
}

//Stampiamo in console il risultato della scelta dell'utente
if (utenteVinceConPari) {
  console.log('Vince Pari');
} else {
  console.log('Vince Dispari');
}

//Otteniamo un numero scelto dall'utente e dalla Cpu
var numeroUtente = parseInt(prompt('Digita un numero da 1 a 5'));
console.log('Hai scelto ' + numeroUtente);
var numeroCpu = Math.ceil(Math.random() * 5);
console.log('La cpu sceglie ' + numeroCpu);

//otteniamo il numero finale
var sommaScelti = numeroUtente + numeroCpu;
console.log('Il totale è ' + sommaScelti);

//Valutiamo il vincitore
if ((utenteVinceConPari && sommaScelti % 2 === 0) || (!utenteVinceConPari && sommaScelti % 2 != 0)){
  console.log('utente vince');
} else {
  console.log('vince la cpu');
}
