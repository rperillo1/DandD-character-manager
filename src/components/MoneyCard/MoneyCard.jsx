import React from 'react';


function MoneyCard({character}) {
    return (
        <div className='money-card'>
            Money:
            <p>CP: {character.money.CP}</p>
            <p>SP: {character.money.SP}</p>
            <p>EP: {character.money.EP}</p>
            <p>GP: {character.money.GP}</p>
            <p>PP: {character.money.PP}</p>
        </div>
    )
}



export default MoneyCard;