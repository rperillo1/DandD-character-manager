const BASE_URL = 'https://www.dnd5eapi.co/api/';


export function getSpellInfoAPI(spell) {
    return fetch(`${BASE_URL}/spells/${spell}/`)
        .then(res => res.json());
}


