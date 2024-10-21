import { REGEX_EXTRACT_POKEMON_NUMBER } from "../constants/constants.js";

export function extractPokemonNumber(url) {
    const match = url.match(REGEX_EXTRACT_POKEMON_NUMBER);
    if(match) {
        const number = match[1];
        return number;
    }
}

export function capitalizeFirstLetter(string) {
    if (!string) return ""; 
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getLastPokemonNumber() {
    const cards = document.querySelectorAll('.card'); 
    if (cards.length === 0) return null; 

    const lastCard = cards[cards.length - 1]; 
    const pokemonNumberElement = lastCard.querySelector('.pokemon-number');

    if (pokemonNumberElement) {
        return pokemonNumberElement.textContent; 
    }

    return null;
}
