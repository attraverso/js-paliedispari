/*scrivere una funzione per capire se una parola è palindroma.
Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato*/
/*chiedo all'utente la parola*/

var getWord = prompt('Scrivi una parola');
console.log('La parola che hai scelto è: ' + getWord);
// var wordLength = getWord.length;
// console.log('la parola è lunga:' + wordLength);

if (checkIfPalindrome(getWord) == false) {
    console.log('Questa parola non è palindroma.');
  } else {
    console.log('Questa parola è palindroma.');
  }

function checkIfPalindrome(checkWord) {
  /*popolo un array con i singoli caratteri della stringa*/
  var getChars = checkWord.split('');
  // console.log(getChars);
  /*ciclo for in cui:*/
  for (var i = 0; i < getChars.length; i++) {
    /*1. leggo tutti i caratteri da sx a dx*/
    for (var a = 0; a < getChars.length; a++) {
      var charSample1 = getChars[a];
      // console.log('carattere 1:' + charSample1);
    }
    /*2. leggo tutti i caratteri da dx a sx*/
    for (var b = (getChars.length -1); b >= 0; b--) {
      var charSample2 = getChars[b];
      // console.log('carattere 2:' + charSample2);
    }
    /*3. guardo se le coppie nella stessa posizione sono uguali*/
    if (charSample1 != charSample2) {
      var charMatch = false;
      // console.log('cM inside for:' + charMatch);
    }
    return charMatch;
  }
}
