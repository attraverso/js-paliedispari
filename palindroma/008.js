/*scrivere una funzione per capire se una parola è palindroma.
Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato*/
/*chiedo all'utente la parola*/

var getWord = prompt('Scrivi una parola');
console.log('La parola che hai scelto è: ' + getWord);
var reversed = reverseWord(getWord);
// var wordLength = getWord.length;
// console.log('la parola è lunga:' + wordLength);

if (checkIfPalindrome(reversed) == false) {
    console.log('Questa parola non è palindroma.');
  } else {
    console.log('Questa parola è palindroma.');
  }

function reverseWord(word) {
  var wordArray = getWord.split('');
	console.log(wordArray);
  var wordArrayReverse = wordArray.reverse();
  var wordReverse = wordArrayReverse.join('');
	console.log(wordReverse);
  return wordReverse;
}

function checkIfPalindrome(reversed) {
  if (getWord == reversed) {
		return true;
  } else {
		return false;
	}
}


/** first version with less compartimentalization */
// function checkIfPalindrome(word) {
//   /*popolo un array con i singoli caratteri della stringa*/
//   var getChars = word.split('');
//   console.log(getChars);
//   /*ciclo for in cui:*/
//   for (var i = 0; i < getChars.length; i++) {
//     /*1. leggo tutti i caratteri da sx a dx*/
//     for (var a = 0; a < getChars.length; a++) {
//       var charSample1 = getChars[a];
//       // console.log('carattere 1:' + charSample1);
//     }
//     /*2. leggo tutti i caratteri da dx a sx*/
//     for (var b = (getChars.length -1); b >= 0; b--) {
//       var charSample2 = getChars[b];
//       // console.log('carattere 2:' + charSample2);
//     }
//     /*3. guardo se le coppie nella stessa posizione sono uguali*/
//     if (charSample1 != charSample2) {
//       var charMatch = false;
//       // console.log('cM inside for:' + charMatch);
//     }
//     return charMatch;
//   }
// }
