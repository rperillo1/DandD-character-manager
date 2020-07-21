import React from 'react';


function MoneyCard({character}) {
    return (
        <div className='money-card'>
            Money:
            <p>CP: <span className="stat">{character.money.CP}</span></p>
            <p>SP: <span className="stat">{character.money.SP}</span></p>
            <p>EP: <span className="stat">{character.money.EP}</span></p>
            <p>GP: <span className="stat">{character.money.GP}</span></p>
            <p>PP: <span className="stat">{character.money.PP}</span></p>
        </div>
    )
}



export default MoneyCard;