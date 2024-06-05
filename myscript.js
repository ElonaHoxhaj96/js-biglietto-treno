// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio secondo queste regole: -il prezzo del biglietto è definito in base ai km (0.21 € al km), va applicato uno sconto del 20% per i minorenni,va applicato uno sconto del 40% per gli over 65;

//Ask the users: how many km their have to travel ?;
let km = prompt("Enter the kilometers you have to travel");
document.getElementById ('km-travel').innerHTML = 'Quanti chilometri devi percorrere? '+km+'km';

// Aske the users their ages!;
let ageUser = parseInt(prompt("Enter your age from 0 to 99"));
// let minorenne = (ageUser < 18);
//let over65 = (ageUser > 65 ) ;
document.getElementById ('human-age').innerHTML = 'Quanti anni hai? '+ ageUser;

// Knowing the price per km, calculate the price by €/km;
const europerkmorario = 0.21;

// normal price of tickets;
let price = (km * 0.21).toFixed(2);
document.getElementById ('price-ticket').innerHTML = 'Prezzo del biglietto: '+ price+'€';

console.log(ageUser, price);

// discount 
let discountminorenni;
let discountover65;
if ( ageUser < 18){
    discountminorenni = price - ((price * 20) /100).toFixed(2);
    
} else if ( ageUser > 65 ){
    discountover65 = price -((price * 40) /100).toFixed(2);

} else {
    price
}
// Show the price to the users;
document.getElementById('discount20').innerHTML ='Essendo minorenne, hai diritto ad uno sconto del 20%, il prezzo del tuo biglietto è dunque: '+ (price - discountminorenni).toFixed(2) +'€';
document.getElementById('discount40').innerHTML = 'Essendo over 65, hai diritto ad uno sconto del 20%, il prezzo del tuo biglietto è dunque: '+ (price - discountover65).toFixed(2)+'€';