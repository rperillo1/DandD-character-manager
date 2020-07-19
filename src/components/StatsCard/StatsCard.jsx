import React from 'react';

function StatsCard({ character }) {
    return (
        <div className='stats-card'>
            <div className='flex-container'>
                <p>Str: {character.stats.str}</p>
            </div>
            <div className='flex-container'>
                <p>Dex: {character.stats.dex}</p>
            </div>
            <div className='flex-container'>
                <p>Con: {character.stats.con}</p>
            </div>
            <div className='flex-container'>
                <p>Int: {character.stats.int}</p>
            </div>
            <p>Wis: {character.stats.wis}</p>
            <div className='flex-container'>
                <p>Char: {character.stats.char}</p>
            </div>
        </div>
    )
}


export default StatsCard;