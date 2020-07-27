const BASE_URL = 'https://www.dnd5eapi.co/api/';


// function checkIfSpellExists(spell){
//     console.log(spell)
// }

export function getSpellInfoAPI(spell) {
    return fetch(`${BASE_URL}/spells/${spell}/`)
        // .then(res => checkIfSpellExists(res))
        // .then(finalRes => console.log(finalRes))
        .then(res => res.json())
}


