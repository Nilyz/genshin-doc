import { getCharacters, filterByName, filterByElement } from './modules/api.js';
import { createCard, createFilterCheckbox, filtersTypes } from './modules/ui.js';

const characters = await getCharacters();
console.log(characters);

// Example of use:
const cardsContainer = document.getElementById('cards-container');
cardsContainer.innerHTML = '';

const elements = [];
const nations = [];

characters.forEach(character => {
    cardsContainer.appendChild(createCard(character));
    if (!elements.includes(character.vision)) elements.push(character.vision);
    if (!nations.includes(character.nation)) nations.push(character.nation);
});

const checkboxElementContainer = document.getElementById('filter-element-container');
const checkboxNationContainer = document.getElementById('filter-nation-container');

elements.forEach(element => {
    checkboxElementContainer.appendChild(createFilterCheckbox(element, filtersTypes.ELEMENT));
});

nations.forEach(nation => {
    checkboxNationContainer.appendChild(createFilterCheckbox(nation, filtersTypes.NATION));
});

const filterForm = document.getElementById('cards-filter');

filterForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(filterForm);

    let result = characters;

    const search = formData.get('cards-filter__name');
    result = filterByName(search, result);

    const elements = formData.getAll(filtersTypes.ELEMENT);
    if (elements.length > 0) {
        console.log(elements);
    }

    const nations = formData.getAll(filtersTypes.NATION);
    if (nations.length > 0) {
        console.log(nations);
    }

    console.log(result);
});

/* getNameBtn.addEventListener("click",() =>{
    let prueba=filterByName(search.value, characters);
    console.log(prueba)
    /*let pruebaElemento=filterByElement(search.value, characters);
    console.log(pruebaElemento)*
    let checkPyro= pyro.checked;
    if(checkPyro){
        let pruebaElemento=filterByElement("Pyro", prueba);
        console.log(pruebaElemento)
    }
} ); */
