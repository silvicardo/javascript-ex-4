//***** PARI O DISPARI ******//

//Eseguiamo la funziona principale per giocare una volta
gioca(prompt('Vince pari o dispari?'), parseInt(prompt('Digita un numero da 1 a 5')));

//funzione che accetta una parola(parola) e un numero(da 1 a 5 )
//per eseguire il gioco del pari o dispari(contro la CPU)

function gioca(regolaUtente, numeroUtente) {

  var utenteVinceConPari = vincePariDa(regolaUtente);

  console.log('Hai scelto ' + numeroUtente);

  var numeroCpu = generaNumeroCasualePerCpuFinoA(5);

  //otteniamo il numero finale
  var sommaScelti = numeroUtente + numeroCpu;
  console.log('Il totale è ' + sommaScelti);

  //Valutiamo il vincitore
  if ((utenteVinceConPari && sommaScelti % 2 === 0) || (!utenteVinceConPari && sommaScelti % 2 != 0)) {
    console.log('Utente vince');
  } else {
    console.log('Cpu vince');
  }
}

function vincePariDa(regolaUtente) {

  if (regolaUtente == 'pari') {
    console.log("L'utente vincerà con Pari");
    return true;
  }

  console.log("L'utente vincerà con Dispari");
  return false;
}

function generaNumeroCasualePerCpuFinoA(numeroMassimo) {

  var numeroCpu = Math.ceil(Math.random() * numeroMassimo);
  console.log('La cpu sceglie ' + numeroCpu);
  return numeroCpu;
}
