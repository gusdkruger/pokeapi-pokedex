import { extractPokemonNumber } from "../util/util.js";
import { capitalizeFirstLetter } from "../util/util.js";
import { POKEMON_LIST } from "../constants/constants.js";

export function createCard(pokemon) {
    const index = extractPokemonNumber(pokemon.url);
    
    const capitalizedPokemonName = capitalizeFirstLetter(pokemon.name);


    const card = `<div class="card" style="width: 18rem;">
                    <img loading="lazy" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png" class="card-img-top" alt="${capitalizedPokemonName}">
                    <div class="card-body">
                        <h5 class="card-title">${capitalizedPokemonName}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="${pokemon.url}" class="btn btn-primary">Ver mais</a>
                        <span class="pokemon-number d-none">${index}</span>
                    </div>
                </div>`;

    POKEMON_LIST.innerHTML += card;
}
