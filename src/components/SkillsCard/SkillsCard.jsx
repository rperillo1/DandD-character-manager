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
            Skills:
            { character.skills.includes('acrobatics') ? <p>Acrobatics: <span className="stat">{modifierObj[character.stats.dex] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.dex] + character.profBonus}</span></p> : ''}
            { character.skills.includes('animal-handling') ? <p>Animal Handling: <span className="stat">{modifierObj[character.stats.wis] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</span></p> : ''}
            { character.skills.includes('arcana') ? <p>Arcana: <span className="stat">{modifierObj[character.stats.int] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</span></p> : ''}
            { character.skills.includes('athletics') ? <p>Athletics: <span className="stat">{modifierObj[character.stats.str] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.str] + character.profBonus}</span></p> : ''}
            { character.skills.includes('deception') ? <p>Deception: <span className="stat">{modifierObj[character.stats.char] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.char] + character.profBonus}</span></p> : ''}
            { character.skills.includes('history') ? <p>History: <span className="stat">{modifierObj[character.stats.int] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</span></p> : ''}
            { character.skills.includes('insight') ? <p>Insight: <span className="stat">{modifierObj[character.stats.wis] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</span></p> : ''}
            { character.skills.includes('intimidation') ? <p>Intimidation: <span className="stat">{modifierObj[character.stats.wis] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.char] + character.profBonus}</span></p> : ''}
            { character.skills.includes('investigation') ? <p>Investigation: <span className="stat">{modifierObj[character.stats.int] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</span></p> : ''}
            { character.skills.includes('medicine') ? <p>Medicine: <span className="stat">{modifierObj[character.stats.wis] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</span></p> : ''}
            { character.skills.includes('nature') ? <p>Nature: <span className="stat">{modifierObj[character.stats.int] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</span></p> : ''}
            { character.skills.includes('perception') ? <p>Perception: <span className="stat">{modifierObj[character.stats.wis] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</span></p> : ''}
            { character.skills.includes('performance') ? <p>Performance: <span className="stat">{modifierObj[character.stats.char] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.char] + character.profBonus}</span></p> : ''}
            { character.skills.includes('persuasion') ? <p>Persuasion: <span className="stat">{modifierObj[character.stats.char] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.char] + character.profBonus}</span></p> : ''}
            { character.skills.includes('religion') ? <p>Religion: <span className="stat">{modifierObj[character.stats.int] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</span></p> : ''}
            { character.skills.includes('sleight-of-hand') ? <p>Sleight of Hand: <span className="stat">{modifierObj[character.stats.dex] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.dex] + character.profBonus}</span></p> : ''}
            { character.skills.includes('stealth') ? <p>Stealth: <span className="stat">{modifierObj[character.stats.dex] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.dex] + character.profBonus}</span></p> : ''}
            { character.skills.includes('survival') ? <p>Survival: <span className="stat">{modifierObj[character.stats.wis] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</span></p> : ''}
        </div>
    )
}



export default SkillsCard;