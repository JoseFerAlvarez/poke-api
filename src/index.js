import { createPokemon } from "./modules/createPokemon.js";
import VanillaTilt from "vanilla-tilt";

const URL = "https://pokeapi.co/api/v2/pokemon/";
const promises = [];
const POKEMON_NUMBER = 152;

for (let i = 1; i < POKEMON_NUMBER; i++) {
  const url = URL + i;
  const promise = fetch(url)
    .then(response => response.json())
    .then(data => createPokemon(data));

  promises.push(promise);
};

Promise.all(promises)
  .then(responses => {
    VanillaTilt.init(document.querySelectorAll(".card"));
  });
