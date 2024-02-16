import { getIconImage, getElementsImages, getNationImage } from './utils.js';

function createCard(character) {
    const card = document.createElement('a');
    card.classList.add('card');
    card.id = `card-${character.id}`;

    const backgroundNation = document.createElement('img');
    backgroundNation.classList.add('card__backgroundNation');
    backgroundNation.src = getNationImage(character.nation).emblem;
    backgroundNation.alt = `${character.nation} emblem`;

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
        star.src = './img/Icon_1_Star.webp';
        starsContainer.appendChild(star);
    }

    card.appendChild(backgroundNation);
    card.appendChild(elementContainer);
    card.appendChild(name);
    card.appendChild(imgContainer);
    card.appendChild(starsContainer);

    card.addEventListener('click', () => openCardsModal(character));

    return card;
}

function openCardsModal(character) {
    const modalElement = document.querySelector('.modal__main');
    const modalBackground = document.querySelector('.modal__background');
    const modalButton = document.querySelector('.modal__closeButton');

    modalElement.classList.add('modal__main--active');

    modalBackground.classList.add('modal__background--active');

    modalButton.classList.add('modal__closeButton--active');

    createModalContent(character);

    modalButton.addEventListener('click', closeCardsModal);
    modalBackground.addEventListener('click', closeCardsModal);
}

function closeCardsModal() {
    const modalElement = document.querySelector('.modal__main');
    const modalBackground = document.querySelector('.modal__background');
    const modalButton = document.querySelector('.modal__closeButton');

    modalElement.classList.remove('modal__main--active');
    modalBackground.classList.remove('modal__background--active');
    modalButton.classList.remove('modal__closeButton--active');
}

function createModalContent (character) {

}

function createModalCard(character) {

}

export { createCard };
