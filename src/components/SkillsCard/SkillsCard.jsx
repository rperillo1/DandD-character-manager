import React from 'react';


function SkillsCard({character}) {

    const modifierObj = {
        1: -5,
        2: -4,
        3: -4,
        4: -3,
        5: -3,
        6: -2,
        7: -2,
        8: -1,
        9: -1,
        10: 0,
        11: 0,
        12: 1,
        13: 1,
        14: 2,
        15: 2,
        16: 3,
        17: 3,
        18: 4,
        19: 4,
        20: 5,
        21: 5,
        22: 6,
        23: 6,
        24: 7,
        25: 7,
        26: 8,
        27: 8,
        28: 9,
        29: 9,
        30: 10
    }


    return (
        <div className='skills-card'>
            { character.skills.includes('acrobatics') ? <p>Acrobatics: {modifierObj[character.stats.dex] > 0 ? '+' : ''}{modifierObj[character.stats.dex] + character.profBonus}</p> : ''}
            { character.skills.includes('animal-handling') ? <p>Animal Handling: {modifierObj[character.stats.wis] > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</p> : ''}
            { character.skills.includes('arcana') ? <p>Arcana: {modifierObj[character.stats.int] > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</p> : ''}
            { character.skills.includes('athletics') ? <p>Athletics: {modifierObj[character.stats.str] > 0 ? '+' : ''}{modifierObj[character.stats.str] + character.profBonus}</p> : ''}
            { character.skills.includes('deception') ? <p>Deception: {modifierObj[character.stats.char] > 0 ? '+' : ''}{modifierObj[character.stats.char] + character.profBonus}</p> : ''}
            { character.skills.includes('history') ? <p>History: {modifierObj[character.stats.int] > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</p> : ''}
            { character.skills.includes('insight') ? <p>Insight: {modifierObj[character.stats.wis] > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</p> : ''}
            { character.skills.includes('intimidation') ? <p>Intimidation: {modifierObj[character.stats.char] > 0 ? '+' : ''}{modifierObj[character.stats.char] + character.profBonus}</p> : ''}
            { character.skills.includes('investigation') ? <p>Investingation: {modifierObj[character.stats.int] > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</p> : ''}
            { character.skills.includes('medicine') ? <p>Medicine: {modifierObj[character.stats.wis] > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</p> : ''}
            { character.skills.includes('nature') ? <p>Nature: {modifierObj[character.stats.int] > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</p> : ''}
            { character.skills.includes('perception') ? <p>Perception: {modifierObj[character.stats.wis] > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</p> : ''}
            { character.skills.includes('performance') ? <p>Performance: {modifierObj[character.stats.char] > 0 ? '+' : ''}{modifierObj[character.stats.char] + character.profBonus}</p> : ''}
            { character.skills.includes('persuasion') ? <p>Persuasion: {modifierObj[character.stats.char] > 0 ? '+' : ''}{modifierObj[character.stats.char] + character.profBonus}</p> : ''}
            { character.skills.includes('religion') ? <p>Religion: {modifierObj[character.stats.int] > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</p> : ''}
            { character.skills.includes('sleight-of-hand') ? <p>Sleight of Hand: {modifierObj[character.stats.dex] > 0 ? '+' : ''}{modifierObj[character.stats.dex] + character.profBonus}</p> : ''}
            { character.skills.includes('stealth') ? <p>Stealth: {modifierObj[character.stats.dex] > 0 ? '+' : ''}{modifierObj[character.stats.dex] + character.profBonus}</p> : ''}
            { character.skills.includes('survival') ? <p>Survival: {modifierObj[character.stats.wis] > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</p> : ''}
        </div>
    )
}



export default SkillsCard;