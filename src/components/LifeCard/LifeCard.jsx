import React from 'react';


function LifeCard({ character }) {
    return (
        <div className='life-card'>
            <div className='flex-container'>
                <p>HP: <span className="stat">{character.hitPoints}</span></p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Temp HP: <span className="stat">{character.tempHitPoints}</span></p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Max HP: <span className="stat">{character.hitPoints + character.tempHitPoints}</span></p>
            </div>
            <div className='flex-container'>
                <p>Speed: <span className="stat">{character.speed}</span></p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>AC: <span className="stat">{character.ac}</span></p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Prof. Bonus: <span className="stat">{character.profBonus}</span></p>
            </div>
        </div>
    )
}



export default LifeCard;