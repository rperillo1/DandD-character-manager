import React from 'react';

function StatsCard({ character }) {
    return (
        <div className='stats-card'>
            <p>Strength:</p>
            <p>{character.stats.str}</p>
            <p>Dexterity:</p>
            <p>{character.stats.dex}</p>
            <p>Constitution:</p>
            <p>{character.stats.con}</p>
            <p>Intelligence:</p>
            <p>{character.stats.int}</p>
            <p>Wisdom:</p>
            <p>{character.stats.wis}</p>
            <p>Charisma:</p>
            <p>{character.stats.char}</p>
        </div>
    )
}


export default StatsCard;