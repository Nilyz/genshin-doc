import { getIconImage, getElementsImages, getNationImage } from './utils.js';

function createCard(character) {
    const card = document.createElement('a');
    card.classList.add('card');
    card.id = `${character.id}`;
    card.href = `#${character.id}`;

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

    const modalContent = document.getElementById('modal__content');
    modalContent.innerHTML = '';
    modalContent.appendChild(createModalContent(character));

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
    history.replaceState({}, document.title, window.location.pathname);
}

function createModalContent(character) {
    const modalCharacterCard = document.createElement('div');
    modalCharacterCard.classList.add('modalCharacterCard');

    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modalBackground');

    const modalBackgroundImg = document.createElement('img');
    modalBackgroundImg.classList.add('modalBackground__img');
    modalBackgroundImg.src = character.imagesList['card'];

    const modalBackgroundImgPc = document.createElement('div');
    modalBackgroundImgPc.classList.add('modalBackground__imgPc');
    modalBackgroundImgPc.style.backgroundImage = `url(${getNationImage(character.nation).background})`;
    console.log(`url(${getNationImage(character.nation).background})`);

    const modalBackgroundFilter = document.createElement('div');
    modalBackgroundFilter.classList.add('modalBackground__filter');

    const modalBackgroundBorder = document.createElement('div');
    modalBackgroundBorder.classList.add('modalBackground__border');

    for (let i = 0; i < 4; i++) {
        const modalBorderStar = document.createElement('img');
        modalBorderStar.classList.add('modalBackground__borderStar' + i);
        modalBorderStar.src = './img/star-2-svgrepo-com (1).svg';
        modalBackgroundBorder.appendChild(modalBorderStar);
    }

    modalBackground.appendChild(modalBackgroundImg);
    modalBackground.appendChild(modalBackgroundBorder);
    modalBackground.appendChild(modalBackgroundFilter);

    const modalCharacterImg = document.createElement('img');
    modalCharacterImg.classList.add('modalCharacterCard__img');
    modalCharacterImg.src = character.imagesList['portrait'];

    const modalNameContainer = document.createElement('div');
    modalNameContainer.classList.add('modalCharacterCard__nameContainer');
    const modalName = document.createElement('p');
    modalName.classList.add('modalCharacterCard__name');
    modalName.textContent = character.name;
    const modalCharacterTitle = document.createElement('p');
    modalCharacterTitle.classList.add('modalCharacterCard__title');
    modalCharacterTitle.textContent = character.title;

    const modalStarsContainer = document.createElement('div');
    modalStarsContainer.classList.add('modalCharacterCard__StarContainer');
    for (let i = 0; i < character.rarity; i++) {
        const modalStar = document.createElement('img');
        modalStar.classList.add('modalCharacterCard_star');
        modalStar.src = './img/Icon_1_Star.webp';
        modalStarsContainer.appendChild(modalStar);
    }

    modalNameContainer.appendChild(modalName);
    modalNameContainer.appendChild(modalCharacterTitle);
    modalNameContainer.appendChild(modalStarsContainer);

    const modalCharacterDescription = document.createElement('div');
    modalCharacterTitle.classList.add('modalCharacterCard__descriptionContainer');
    const description = document.createElement('p');
    description.classList.add('modalCharacterCard__description');
    description.textContent = character.description;

    modalCharacterDescription.appendChild(description);

    modalCharacterCard.appendChild(modalCharacterImg);
    modalCharacterCard.appendChild(modalBackground);
    modalCharacterCard.appendChild(modalBackgroundImgPc);
    modalCharacterCard.appendChild(modalNameContainer);
    modalCharacterCard.appendChild(modalCharacterDescription);

    return modalCharacterCard;
}

export { createCard };
