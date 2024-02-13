import { FetchError, DataError, ImageNotFoundError } from '../errors.js';

const URL = 'https://genshin.jmp.blue';

async function getCharacters() {
    try {
        const idCharacters = await getCharactersNames();
        const characters = await Promise.all(
            idCharacters.map(async id => {
                return await getCharacter(id);
            }),
            );
            return characters.filter(character => character !== undefined);
        } catch (error) {
        // TODO: Check and implement correct error handling
        console.error(error);
    }
}

async function getCharactersNames() {
    try {
        const response = await fetch(`${URL}/characters/`);
        if (!response.ok || !response) throw new FetchError('Error fetching characters names');

        const data = await response.json();
        if (data.error) throw new DataError(data.message);
        return data;
    } catch (error) {
        throw error;
    }
}

async function getCharacter(name) {
    try {
        const response = await fetch(`${URL}/characters/${name}`);
        if (!response.ok || !response) throw new FetchError('Error fetching character info');
        const character = await response.json();
        if (character.error) throw new DataError(character.message);

        const responseImages = await fetch(`${URL}/characters/${name}/list`);
        if (!responseImages || !responseImages.ok) throw new ImageNotFoundError('Error image not found');
        const imagesList = await responseImages.json();

        if (imagesList.length > 0) {
            character.id = name;
            character.imagesList = imagesList;
            return character;
        } else {
            return undefined;
        }
    } catch (error) {
        if (!error instanceof ImageNotFoundError) {
            throw error;
        } 
    }
}

export { getCharacters };
