function getIconImage(character) {
    if (character.name === 'Traveler') {
        character.traveler = getRandomTraveler();
        return character.imagesList[`icon-big-${character.traveler}`];
    }
    if (character.imagesList['icon-big']) {
        return character.imagesList['icon-big'];
    }
    return character.imagesList['icon'];
}

function getRandomTraveler() {
    const randomNumber = Math.floor(Math.random() * 2) + 1; 
    return randomNumber === 1 ? 'lumine' : 'aether';
}

function getNationImage(nation) {
    return nationImages[nation.toLowerCase()] || nationDefault;
}
const nationImages = {
    mondstadt: {
        background: './img/mondstad.jpg',
        emblem: './img/mondstadt_emb.webp',
    },
    liyue: {
        background: './img/liyue.webp',
        emblem: './img/liyue_emb.webp',
    },
    inazuma: {
        background: './img/inazuma.jpg',
        emblem: './img/inazuma_emb.webp',
    },
    sumeru: {
        background: './img/sumeru.jpg',
        emblem: './img/sumeru_emb.webp',
    },
    fontaine: {
        background: './img/fontaine.jpg',
        emblem: './img/fontaine_emb.webp',
    },
    snezhnaya: {
        background: './img/snezhnaya.webp',
        emblem: './img/snezhnaya_emb.webp',
    },
};
const nationDefault = {
    background: './img/celestia.jpg',
    emblem: './img/domain_emb.webp',
};

function getElementsImages(vision) {
    return elementsImages[vision.toLowerCase()];
}
const elementsImages = {
    pyro: './img/pyro.svg',
    hydro: './img/hydro.svg',
    cryo: './img/cryo.svg',
    anemo: './img/anemo.svg',
    dendro: './img/dendro.svg',
    electro: './img/electro.svg',
    geo: './img/geo.svg',
};

export { getNationImage, getIconImage, getElementsImages };
