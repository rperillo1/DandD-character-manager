import React from 'react';



function SavingThrowsCard({ character }) {

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
        <div className="saving-throws-card">
            Saving Throws:
            <p>Strength: <span className="stat">{character.savingThrows.includes('strength') ? <span>{modifierObj[character.stats.str] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.str] + character.profBonus}</span> : <span>{modifierObj[character.stats.str] > 0 ? '+' : ''}{modifierObj[character.stats.str]}</span> }</span></p>
            <p>Dexterity: <span className="stat">{character.savingThrows.includes('dexterity') ? <span>{modifierObj[character.stats.dex] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.dex] + character.profBonus}</span> : <span>{modifierObj[character.stats.dex] > 0 ? '+' : ''}{modifierObj[character.stats.dex]}</span> }</span></p>
            <p>Constitution: <span className="stat">{character.savingThrows.includes('constitution') ? <span>{modifierObj[character.stats.con] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.con] + character.profBonus}</span> : <span>{modifierObj[character.stats.con] > 0 ? '+' : ''}{modifierObj[character.stats.con]}</span> }</span></p>
            <p>Intelligence: <span className="stat">{character.savingThrows.includes('intelligence') ? <span>{modifierObj[character.stats.int] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.int] + character.profBonus}</span> : <span>{modifierObj[character.stats.int] > 0 ? '+' : ''}{modifierObj[character.stats.int]}</span>}</span></p>
            <p>Wisdom: <span className="stat">{character.savingThrows.includes('wisdom') ? <span>{modifierObj[character.stats.wis] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.wis] + character.profBonus}</span> : <span>{modifierObj[character.stats.wis] > 0 ? '+' : ''}{modifierObj[character.stats.wis]}</span>}</span></p>
            <p>Charisma: <span className="stat">{character.savingThrows.includes('charisma') ? <span>{modifierObj[character.stats.char] + character.profBonus > 0 ? '+' : ''}{modifierObj[character.stats.char] + character.profBonus}</span> : <span>{modifierObj[character.stats.char] > 0 ? '+' : ''}{modifierObj[character.stats.char]}</span> }</span></p>
        </div>
    )
}


export default SavingThrowsCard;