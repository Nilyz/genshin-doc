import { getCharacters, getIconImage } from './modules/api.js';
import { createCard } from './modules/ui.js';

const characters = await getCharacters();
console.log(characters);

// Example of use:
const cardsContainer = document.getElementById('cards-container');
cardsContainer.innerHTML = '';
cardsContainer.style.display = 'flex';
cardsContainer.style.flexWrap = 'wrap';

characters.forEach(character => {
    /*const img = document.createElement('img');
    img.style.width = '100px';
    //console.log(getIconImage(character));
    img.src = getIconImage(character);

    img.alt = character.name;
    hero.appendChild(img);

    console.log(character); */
    cardsContainer.appendChild(createCard(character));
});

console.log(characters[0].imagesList['icon-big']);
console.log(characters[0].imagesList[Object.keys(characters[0].imagesList)[0]]);
