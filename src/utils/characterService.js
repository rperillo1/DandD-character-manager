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

// show
// export function getSelectedCharacterAPI(characterId) {
//     return fetch(`${BASE_URL}/${characterId}`, {
//         headers: {
//             'Authorization': `Bearer ${tokenService.getToken()}`
//         }
//     }).then(selectedCharacter => selectedCharacter.json());
// }


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
    }).then(spell => spell.json());
}



export function deleteCharacterAPI(characterIdToDelete) {
    return fetch(`${BASE_URL}/${characterIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    }).then(deletedCharacter => deletedCharacter.json());
}


export function updateCharacterAPI(characterToUpdate, characterId) {
    return fetch(`${BASE_URL}/${characterId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(characterToUpdate)
    }).then(updatedCharacter => updatedCharacter.json)
}

export function deleteSpellAPI(characterId, spellId) {
    return fetch(`${BASE_URL}/${characterId}/spells/${spellId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    }).then(deletedSpell => deletedSpell.json());
}

