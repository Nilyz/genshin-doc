import { getIconImage, getElementsImages, getNationImage, getPortraitImage, getCardImage } from './utils.js';

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
    const modalCharacter = document.createElement('div');
    modalCharacter.classList.add('modalCharacter');

    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modalCharacter__background');

    const card = getCardImage(character);
    const portraitImg = getPortraitImage(character);
    const icon = getIconImage(character);

    if (card) {
        const modalBackgroundImg = document.createElement('img');
        modalBackgroundImg.classList.add('modalCharacter__backgroundImg');
        modalBackgroundImg.src = card;
        modalBackground.appendChild(modalBackgroundImg);
    } 

    const modalBackgroundImgPc = document.createElement('img');
    modalBackgroundImgPc.classList.add('modalCharacter__backgroundImg', 'modalCharacter__backgroundImg--nation');
    modalBackgroundImgPc.src = `${getNationImage(character.nation).background}`;

    const modalBackgroundFilter = document.createElement('div');
    modalBackgroundFilter.classList.add('modalCharacter__backgroundFilter');

    const modalBackgroundBorder = document.createElement('div');
    modalBackgroundBorder.classList.add('modalCharacter__border');

    for (let i = 1; i <= 4; i++) {
        const modalBorderStar = document.createElement('img');
        modalBorderStar.classList.add('modalCharacter__borderStar', `modalCharacter__borderStar--${i}`);
        modalBorderStar.src = './img/star-2-svgrepo-com (1).svg';
        modalBackgroundBorder.appendChild(modalBorderStar);
    }

    modalBackground.appendChild(modalBackgroundImgPc);
    modalBackground.appendChild(modalBackgroundBorder);

    const modalCharacterImgContainer = document.createElement('div');
    modalCharacterImgContainer.classList.add('modalCharacter__imgContainer');

    const modalCharacterIcon = document.createElement('img');
    modalCharacterIcon.classList.add('modalCharacter__icon');
    modalCharacterIcon.src = icon;

    const modalCharacterImg = document.createElement('img');
    if (portraitImg) {
        modalCharacterImg.classList.add('modalCharacter__img');
        modalCharacterImg.src = portraitImg;
        modalCharacterImgContainer.appendChild(modalCharacterImg);

        modalCharacterIcon.classList.add('modalCharacter__icon--hidden');
    }

    const selectorImg = document.createElement('div');
    if (portraitImg && card) {
        selectorImg.classList.add('modalCharacter__selectorImg');
        let state = 0;
        selectorImg.addEventListener('click', () => {
            if (state === 0) {
                modalCharacterImg.classList.add('modalCharacter__img--hidden');
                modalCharacterIcon.classList.remove('modalCharacter__icon--hidden');
                state = 1;
            } else if (state === 1) {
                modalBackgroundFilter.classList.add('modalCharacter__backgroundFilter--hidden');
                modalCharacterIcon.classList.add('modalCharacter__icon--hidden');
                state = 2;
            } else {
                modalBackgroundFilter.classList.remove('modalCharacter__backgroundFilter--hidden');
                modalCharacterImg.classList.remove('modalCharacter__img--hidden');
                state = 0;
            }
        });

        modalCharacterImgContainer.appendChild(selectorImg);
    } else if (card) {
        selectorImg.classList.add('modalCharacter__selectorImg');
        let state = 0;
        selectorImg.addEventListener('click', () => {
            if (state === 0) {
                modalBackgroundFilter.classList.add('modalCharacter__backgroundFilter--hidden');
                modalCharacterIcon.classList.add('modalCharacter__icon--hidden');
                state = 1;
            } else {
                modalBackgroundFilter.classList.remove('modalCharacter__backgroundFilter--hidden');
                modalCharacterIcon.classList.remove('modalCharacter__icon--hidden');
                state = 0;
            }
        });
        modalCharacterImgContainer.appendChild(selectorImg);
    }

    modalBackground.appendChild(modalBackgroundFilter);
    modalCharacterImgContainer.appendChild(modalCharacterIcon);

    const modalNameContainer = document.createElement('div');
    modalNameContainer.classList.add('modalCharacter__nameContainer');

    const modalName = document.createElement('p');
    modalName.classList.add('modalCharacter__name');
    modalName.textContent = character.name;

    const modalCharacterTitle = document.createElement('p');
    modalCharacterTitle.classList.add('modalCharacter__title');
    modalCharacterTitle.textContent = character.title;

    const modalStarsContainer = document.createElement('div');
    modalStarsContainer.classList.add('modalCharacter__starsContainer');
    for (let i = 0; i < character.rarity; i++) {
        const modalStar = document.createElement('img');
        modalStar.classList.add('modalCharacter__star');
        modalStar.src = './img/Icon_1_Star.webp';
        modalStarsContainer.appendChild(modalStar);
    }

    modalNameContainer.appendChild(modalName);
    modalNameContainer.appendChild(modalCharacterTitle);
    modalNameContainer.appendChild(modalStarsContainer);

    const modalCharacterDescription = document.createElement('div');
    modalCharacterDescription.classList.add('modalCharacter__descriptionContainer');

    const description = document.createElement('p');
    description.classList.add('modalCharacter__description');
    description.textContent = character.description;

    modalCharacterDescription.appendChild(description);

    modalCharacter.appendChild(modalBackground);

    modalCharacter.appendChild(modalCharacterImgContainer);

    modalCharacter.appendChild(modalNameContainer);
    modalCharacter.appendChild(modalCharacterDescription);

    return modalCharacter;
}

export { createCard };
