// Palindroma:
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

/**
 * ### Rovescia la stringa  
 * @param {*} s parametro
 * @returns ritorna la stringa rovesciata
 */
function reverse(s){
    return s.split("").reverse().join("");
}

/**
 * ### Analizza la parola (palindroma o non palindroma)
 * @param {*}
 * @returns La parola è palindroma o no
 */
function wordPalindrome () {
    var question = prompt("Type a word");
    if (question == reverse(s = question)) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

var result = wordPalindrome();
document.getElementById("word_palindrome").innerHTML = result;



// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri e stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


var user = prompt("even or odd?");
document.getElementById("user_choice").innerHTML = user;
var computer = "";

if (user == "even") {
    computer = "odd" 
} else {
    computer = "even"
}

document.getElementById("comp_choice").innerHTML = computer;

var userNumb = Number(prompt("Choose a number between 1 and 5"));
document.getElementById("user_number").innerHTML = userNumb;

/**
 * ### Genera un numero random da 1 a 5 
 * @param {*}
 * @returns Numero casuale da 1 a 5
 */
function computerNumb () { 
    return Math.floor(Math.random() * 5) + 1;
}

var compNumb = computerNumb();
document.getElementById("comp_number").innerHTML = compNumb;

/**
 * ### Calcola se la somma è pari o dispari
 * @param {*} userNumb
 * @param {*} compNumb
 * @returns pari o dispari
 */
function evenOdd(userNumb, compNumb) {
    var sum = compNumb + userNumb;
    if (sum % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

var finalResult = evenOdd(userNumb, compNumb);
console.log(finalResult);

/**
 * ### Definisce la vittoria dell'utente o del computer
 * @param {*} user
 * @param {*} finalResult
 * @returns Vittoria o sconfitta
 */
function winner(user, finalResult) {
    if (user == finalResult) {
        return "You win"
    } else {
        return "You lose"
    }
}

var outcome = winner(user, finalResult);

if (outcome == "You win") {
    document.getElementById("outcome").style.color = 'green';
} else {
    document.getElementById("outcome").style.color = 'red';
}

document.getElementById("outcome").innerHTML = outcome;