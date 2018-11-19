//***** PAROLA PALINDROMA *********//

//eseguiamo il programma
//L'utente digita una parola e controlliamo che sia palindroma
isPalindrome(prompt('Digita una sola parola, vediamo se al contrario rimane identica'));

//restituisce la parola al contrario con feedback in console
function reverse(word) {

  var reversedWord = '';

  for (var i = word.length; i >= 0; i--) {
    reversedWord = reversedWord.concat(word.charAt(i));
  }

  console.log('La tua parola è ' + word);
  console.log('La tua parola al contrario è ' + reversedWord);
  return reversedWord;
}

//Funzione che sfruttando la precedente reverse controlla
//se la parola in input è palindroma  con feedback in console

function isPalindrome(word) {
  if (word == reverse(word)) {
    console.log(word + ' è un parola palindroma');
    return true;
  }

  console.log(word + ' non è una parola palindroma');
  return false;
}
