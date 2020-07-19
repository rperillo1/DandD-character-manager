import React from 'react';


function SpellStatCard({character}) {
    return (
        <div className='spell-stat-card'>
            <p>Spell Casting Ability:</p>
            <p>{character.spellCastingAbility}</p>
            <p>Spell Save DC:</p>
            <p>{character.spellSaveDC}</p>
            <p>Spell Attack Bonus:</p>
            <p>{character.spellAtkBonus}</p>
        </div>
    )
}



export default SpellStatCard;