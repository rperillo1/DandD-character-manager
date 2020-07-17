import tokenService from './tokenService';

const BASE_URL = /*localhost:3001*/'/api/characters';

// index
export function getAllCharactersAPI() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    })
        .then(allCharacters => allCharacters.json());
}


// create
export function createCharacterAPI(characterToCreate) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(characterToCreate)
    })
        .then(newCharacter => newCharacter.json());
}


export function addSpellToCharacter(spell, characterId) {
    return fetch(`${BASE_URL}/${characterId}/spells`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(spell)
    }).then(updatedCharacter => updatedCharacter.json());
}


