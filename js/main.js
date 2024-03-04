import { NotFoundError } from './errors.js';
import { getCharacters } from './modules/api.js';
import { setCardsContainer, createCard, createFilterCheckbox, filtersTypes } from './modules/ui.js';
import { filterByName, filterByElements, filterByNations } from './modules/utils.js';

const characters = await getCharacters();
console.log(characters);

const cardsContainer = document.getElementById('cards-container');

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
    try {
        const formData = new FormData(filterForm);

        if (
            formData.get('cards-filter__name') === '' &&
            formData.getAll(filtersTypes.ELEMENT).length === 0 &&
            formData.getAll(filtersTypes.NATION).length === 0
        ) {
            throw new EmptyFormError('Empty form');
        }

        let result = characters;
        const search = formData.get('cards-filter__name');

        result = filterByName(search, result);

        const elements = formData.getAll(filtersTypes.ELEMENT);
        if (elements.length > 0) {
            console.log(elements);
            result = filterByElements(elements, result);
        }

        const nations = formData.getAll(filtersTypes.NATION);
        if (nations.length > 0) {
            console.log(nations);
            result = filterByNations(nations, result);
        }

        if (result.length === 0) {
            throw new NotFoundError('No characters found');
        }

        setCardsContainer(result);
        console.log(result);
    } catch (error) {
        // TODO: Implement error handling
    }
});
