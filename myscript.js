
let userInputName = prompt("Qual è il tuo nome?");
let userInputSurname = prompt("Qual è il tuo cognome?");
let userInputColor = prompt("Qual è il tuo colore preferito?");

let userData = userInputName + userInputSurname + userInputColor;
const number = 21;

let userPassoword = userData + number;

document.getElementById("user_pass").innerHTML = userPassoword;

