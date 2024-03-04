import { getCharacters,filterByName,filterByElement} from './modules/api.js';
import { createCard } from './modules/ui.js';

const characters = await getCharacters();
console.log(characters);

// Example of use:
const cardsContainer = document.getElementById('cards-container');
cardsContainer.innerHTML = '';

characters.forEach(character => {

    cardsContainer.appendChild(createCard(character));
});

let search=document.getElementById("byName");
let getNameBtn=document.getElementById("byNameBtn");
let pyro = document.getElementById("Pyro");


getNameBtn.addEventListener("click",() =>{
    let prueba=filterByName(search.value, characters);
    console.log(prueba)
    /*let pruebaElemento=filterByElement(search.value, characters);
    console.log(pruebaElemento)*/
    let checkPyro= pyro.checked;
    if(checkPyro){
        let pruebaElemento=filterByElement("Pyro", prueba);
        console.log(pruebaElemento)
    }
} );
