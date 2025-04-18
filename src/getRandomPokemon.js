"use strict";

import { capitalize } from "./capitalize.js";
import { randInt } from "./randInt.js";

export async function getRandomPokemon() {
  const id = randInt(151) + 1;
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const { name, height, weight } = await res.json();
  return { id, name: capitalize(name), height, weight };
}
