import { fetchPokemonBetween } from "./api/fetchPokeApi.js";
import { createCard } from "./card/card.js";

const {count, results, next, previous} = await fetchPokemonBetween(1, 30);

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

            const {count, results, next, previous} = await fetchPokemonBetween(31, 60);

            results.forEach((pokemon) => {
                createCard(pokemon);
            });
            canLoadMore = true;
        }
    }
});
