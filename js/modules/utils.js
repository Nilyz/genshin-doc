function getIconImage(character) {
    if (character.imagesList['icon-big']) {
        return character.imagesList['icon-big'];
    }
    return character.imagesList['icon'];
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
};
const nationDefault = {
    background: '',
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
