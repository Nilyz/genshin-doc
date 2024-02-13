import { getCharacters } from './modules/api.js';

const characters = await getCharacters();
console.log(characters);
