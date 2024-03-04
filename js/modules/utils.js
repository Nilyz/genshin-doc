function getIconImage(character) {
    if (character.name === 'Traveler') {
        if (!character.traveler) {
            character.traveler = getRandomTraveler();
            character.title = `(${character.vision} Element)`;
        }
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

function getCardImage(character) {
    if (character.name === 'Traveler' && character.traveler === 'aether') {
        character.imagesList['card'] = './img/cardTravelerAether.webp';
    }
    return character.imagesList['card'];
}

function getPortraitImage(character) {
    if (character.name === 'Traveler') {
        const travelerGender = character.traveler === 'lumine' ? 'f' : 'm';
        return character.imagesList[`portrait${travelerGender}`] || character.imagesList['portrait'];
    }
    return character.imagesList['portrait'];
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



function filterByName(search, characters) {
    search = search.toLowerCase().trim();
    const results = characters.filter(character => character.name.toLowerCase().trim().includes(search));
    return results;
}

function filterByElements(elements, characters) {
    const results = characters.filter(character => elements.includes(character.vision));
    return results;
}

function filterByNations(nations, characters) {
    const results = characters.filter(character => nations.includes(character.nation));
    return results;
}
export { getNationImage, getIconImage, getElementsImages, getPortraitImage, getCardImage,filterByName,filterByElements,filterByNations };
