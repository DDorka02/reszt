import { getAdat } from "./async.js";

console.log("Róka Rudi");

getAdat("adatok.json", megjelenit)
getAdat("https://pokeapi.co/api/v2/pokemon/ditto", megjelenitPokemon)

console.log("Baletttáncos");


function megjelenit(adatok){
    console.log(adat)
    console.log(adaet.termek)
    $("body").append(`<h2>${adat.termek}</h2>`)
}

// a callback füvgvény olyan függvény amelyk csak aszinkoron esetén csak mi esete

function megjelenitPokemon(adat) {
    $("body").append(`<h1>pokemonok<h1>`)    
    $("body").append(`<h1>${adat.name}<h1>`) 
    $("body").append(`<img src="${adat.sprites.front_default} alt=${adat.name}">`) 
}