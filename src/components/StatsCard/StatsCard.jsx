import React from 'react';

function StatsCard({ character }) {

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
        <div className='stats-card'>
            <p>Strength:</p>
            <p><span className="stat">{character.stats.str} ({modifierObj[character.stats.str] > 0 ? '+' : ''}{modifierObj[character.stats.str]})</span></p>
            <p>Dexterity:</p>
            <p><span className="stat">{character.stats.dex} ({modifierObj[character.stats.dex] > 0 ? '+' : ''}{modifierObj[character.stats.dex]})</span></p>
            <p>Constitution:</p>
            <p><span className="stat">{character.stats.con} ({modifierObj[character.stats.con] > 0 ? '+' : ''}{modifierObj[character.stats.con]})</span></p>
            <p>Intelligence:</p>
            <p><span className="stat">{character.stats.int} ({modifierObj[character.stats.int] > 0 ? '+' : ''}{modifierObj[character.stats.int]})</span></p>
            <p>Wisdom:</p>
            <p><span className="stat">{character.stats.wis} ({modifierObj[character.stats.wis] > 0 ? '+' : ''}{modifierObj[character.stats.wis]})</span></p>
            <p>Charisma:</p>
            <p><span className="stat">{character.stats.char} ({modifierObj[character.stats.char] > 0 ? '+' : ''}{modifierObj[character.stats.char]})</span></p>
        </div>
    )
}


export default StatsCard;