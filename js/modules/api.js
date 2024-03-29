import { FetchError, DataError, ImageNotFoundError } from '../errors.js';
import { handleError } from './ui.js';
import { getIconImage } from './utils.js';

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
        handleError(error);
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
            character.imagesList = {};
            imagesList.forEach(image => {
                character.imagesList[image] = `${URL}/characters/${name}/${image}`;
            });
            return character;
        } else {
            return undefined;
        }
    } catch (error) {
        if (!error instanceof ImageNotFoundError) {
            throw error;
        }
        handleError(error);
    }
}

export { getCharacters, getIconImage };
