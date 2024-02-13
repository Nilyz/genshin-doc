import { APIError } from '../errors.js';

const URL = 'https://genshin.jmp.blue';

async function getCharacters() {
    try {
        // TODO: Implement errors and error handling
        const idCharacters = await getCharactersNames();
        const characters = await Promise.all(
            idCharacters.map(async id => {
                return await getCharacter(id);
            }),
        );
        return characters.filter(character => character !== undefined);
    } catch (error) {
        console.error(error);
    }
}

async function getCharactersNames() {
    try {
        // TODO: Implement errors and error handling
        const response = await fetch(`${URL}/characters/`);
        if (!response || !response.ok) throw new APIError('Error fetching data');
        const data = await response.json();
        if (data.error) throw new APIError(data.message);
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getCharacter(name) {
    try {
        // TODO: Implement errors and error handling
        const response = await fetch(`${URL}/characters/${name}`);

        const character = await response.json();

        const responseImages = await fetch(`${URL}/characters/${name}/list`);
        if (!responseImages || !responseImages.ok) throw new APIError('Error fetching data');

        const images = await responseImages.json();

        if (images.length > 0) {
            character.id = name;
            character.images = images;
            return character;
        } else {
            error = new APIError('Error fetching data');
            throw error;
        }
    } catch (error) {
        console.error(error);
    }
}

export { getCharacters };
