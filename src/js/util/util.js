import { REGEX_EXTRACT_POKEMON_NUMBER } from "../constants/constants.js";

export function extractPokemonNumber(url) {
    const match = url.match(REGEX_EXTRACT_POKEMON_NUMBER);
    if(match) {
        const number = match[1];
        return number;
    }
}
