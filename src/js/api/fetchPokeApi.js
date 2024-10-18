import { POKE_API } from "../constants/constants.js";
import { showError } from "../error/error.js";

export async function fetchAllPokemon() {
    try {
        const data = await fetch(POKE_API);
        const response = await data.json();

        return response;
    }
    catch(error) {
        showError("ERRO");
        console.error(error.message);
    }
}
