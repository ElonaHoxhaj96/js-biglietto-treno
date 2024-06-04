// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio secondo queste regole: -il prezzo del biglietto è definito in base ai km (0.21 € al km), va applicato uno sconto del 20% per i minorenni,va applicato uno sconto del 40% per gli over 65;

//Ask the users: how many km their have to travel ?;
let km = prompt("Enter the kilometers you have to travel");

// Aske the users their ages!;
let ageUser = parseInt(prompt("Enter your age from 0 to 99"));
let minorenne = (ageUser < 18);
let over65 = (ageUser > 65 ) ;

// Knowing the price per km, calculate the price by €/km;
const europerkmorario = 0.21;

// normal price of tickets;
let price = km * 0.21;

console.log(ageUser, price);

// discount 
if ( ageUser < 18){
    price =  (price *20/100 )
    
} else if ( ageUser > 65 ){
    price = (price *40/100)

} else {
    price
}


// Show the price to the users;


