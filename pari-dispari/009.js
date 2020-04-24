/*gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5.
Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno*/

/*chiedo all'utente un numero tra 1 e 5*/
var getHumanNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log('numero human: ' +getHumanNumber);

/*chiedo all'utente se vuole pari o dispari*/
var getNumberType = prompt('Scegli pari o dispari');
console.log('tipo human: ' + getNumberType);

/*genero un numero random tra 1 e 5*/
var getCompNumber = getRandomNumber(1,5);
console.log('numero pc: ' +getCompNumber);

/*faccio la somma dei due numeri*/
var sum = sum(getHumanNumber, getCompNumber);
console.log('somma: ' + sum);

/*controllo se la somma è pari o dispari*/
var sumTypeCheck = isEven(sum);
console.log('sum type is: ' + sumTypeCheck);

/*controllo se il risultato combacia con quanto scelto dall'utente e comunico il risultato*/
if ((sumTypeCheck == true && getNumberType == 'pari') || (sumTypeCheck == false && getNumberType == 'dispari')) {
  console.log('Hai vinto.');
} else {
  console.log('Hai perso.');
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function sum(value1, value2) {
  return value1 + value2;
}
