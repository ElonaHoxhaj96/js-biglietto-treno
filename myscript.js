// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio secondo queste regole: -il prezzo del biglietto è definito in base ai km (0.21 € al km), va applicato uno sconto del 20% per i minorenni,va applicato uno sconto del 40% per gli over 65;

//Ask the users: how many km their have to travel ?;
let km = prompt("Enter the kilometers you have to travel");

// Aske the users their ages!;
let ageUser = parseInt(prompt("Enter your age from 0 to 99"));
const minorenne = "age from 0 to 17";
const over65 = "age from 65 to 99" ;

// Knowing the price per km, calculate the price by €/km;
const europerkmorario = 0.21;

// normal price of tickets
let somma = km * 0.21;
console.log =(ageUser, somma)

// discount 
if (somma===minorenne){
   let discount_20 = "- 20%"
} else if ( somma ===over65){
    let discount_40 = "- 40%"
} else {
    let somma = km * 0.21
}

// Show the price to the users;


