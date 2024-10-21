import { fetchPokemonBetween } from "./api/fetchPokeApi.js";
import { createCard } from "./card/card.js";
import { POKEMON_CARDS_LIMIT } from "./constants/constants.js";

let offset = 1;
const { count, results } = await fetchPokemonBetween(offset, POKEMON_CARDS_LIMIT);

results.forEach((pokemon) => {
    createCard(pokemon);
});

let canLoadMore = true;
window.addEventListener("scroll", async () => {
    if(canLoadMore) {
        const pixelsFromEnd = 400;
        const scrollPosition = window.innerHeight + window.scrollY;
        const documentHeight = document.body.offsetHeight;

        if (documentHeight - scrollPosition <= pixelsFromEnd) {
            canLoadMore = false;
            offset += POKEMON_CARDS_LIMIT;
            
            const { results } = await fetchPokemonBetween(offset, POKEMON_CARDS_LIMIT);

            results.forEach((pokemon) => {
                createCard(pokemon);
            });
            canLoadMore = true;
        }
    }
});
