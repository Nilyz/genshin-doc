import { getIconImage, getElementsImages, getNationImage } from './utils.js';

function createCard(character) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = `card-${character.id}`;

    const backgroundNation = document.createElement('img');
    backgroundNation.classList.add('card__backgroundNation');
    backgroundNation.src = getNationImage(character.nation).emblem;
    backgroundNation.alt = `${character.nation} emblem`;

    /* const nameContainer = document.createElement('div');
    nameContainer.classList.add('card__nameContainer'); */

    const name = document.createElement('p');
    name.classList.add('card_name');
    name.textContent = character.name;

    const elementContainer = document.createElement('div');
    elementContainer.classList.add('card__elementContainer');
    const imgElement = document.createElement('img');
    imgElement.classList.add('card__element');
    imgElement.src = getElementsImages(character.vision);
    imgElement.alt = `${character.vision} element`;
    elementContainer.appendChild(imgElement);

    /* const urlImage = `url(${getElementsImages(character.vision)})`;
    elementContainer.style.backgroundImage = urlImage; */

    /* nameContainer.appendChild(name);
    nameContainer.appendChild(elementContainer); */

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('card__imgContainer');

    const img = document.createElement('img');
    img.classList.add('card__img');
    img.src = getIconImage(character);
    img.alt = `${character.name} icon`;

    imgContainer.appendChild(img);

    const starsContainer = document.createElement('div');
    starsContainer.classList.add('card__starsContainer');

    for (let i = 0; i < character.rarity; i++) {
        const star = document.createElement('img');
        star.classList.add('card__star');
        star.src = '../img/Icon_1_Star.webp';
        starsContainer.appendChild(star);
    }

    card.appendChild(backgroundNation);
    card.appendChild(elementContainer);
    card.appendChild(name);
    card.appendChild(imgContainer);
    card.appendChild(starsContainer);

    return card;
}

export { createCard };
