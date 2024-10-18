import { fetchAllPokemon } from "./api/fetchPokeApi.js";
import { createCard } from "./card/card.js";

const {count, results, next, previous} = await fetchAllPokemon();

results.forEach((pokemon, index) => {
    createCard(pokemon, index + 1);
});
