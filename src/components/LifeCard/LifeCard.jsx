import React from 'react';


function LifeCard({ character }) {
    return (
        <div className='life-card'>
            <div className='flex-container'>
                <p>HP: {character.hitPoints}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Temp HP: {character.tempHitPoints}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Max HP:</p>
            </div>
            <div className='flex-container'>
                <p>Speed: {character.speed}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>AC: {character.ac}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Prof. Bonus: {character.profBonus}</p>
            </div>
        </div>
    )
}



export default LifeCard;