
let userInputName = prompt("Qual è il tuo nome ?");
let userInputOld = prompt("Quanti anni hai ?");
let userInputColor = prompt("Qual è il tuo colore preferito?");

let userData = userInputName + userInputOld + userInputColor;
const number = 21;

let userPassoword = userData + number;

document.getElementById("user_pass").innerHTML = userPassoword;

