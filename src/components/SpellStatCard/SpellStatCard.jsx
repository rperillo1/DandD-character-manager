import React from 'react';


function SpellStatCard({character}) {
    return (
        <div className='spell-stat-card'>
            <p>Spell Casting Ability:</p>
            <p><span className="stat">+{character.spellCastingAbility}</span></p>
            <p>Spell Save DC:</p>
            <p><span className="stat">+{character.spellSaveDC}</span></p>
            <p>Spell Attack Bonus:</p>
            <p><span className="stat">+{character.spellAtkBonus}</span></p>
        </div>
    )
}



export default SpellStatCard;