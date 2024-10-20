import { POKE_API } from "../constants/constants.js";
import { showError } from "../error/error.js";

export async function fetchPokemonBetween(first, last) {
    try {
        const request = `${POKE_API}?offset=${--first}&limit=${last}`;
        const data = await fetch(request);
        const response = await data.json();

        return response;
    }
    catch(error) {
        showError("Something went wrong with pokeapi. Please try again later.");
        console.error(error.message);
    }
}
