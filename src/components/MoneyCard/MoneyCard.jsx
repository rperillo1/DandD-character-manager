import React from 'react';


function MoneyCard({character}) {
    return (
        <div className='money-card'>
            Money:
            <p>CP: <span className="stat">{character.money.CP ? character.money.CP : 0}</span></p>
            <p>SP: <span className="stat">{character.money.SP ? character.money.SP : 0}</span></p>
            <p>EP: <span className="stat">{character.money.EP ? character.money.EP : 0}</span></p>
            <p>GP: <span className="stat">{character.money.GP ? character.money.GP : 0}</span></p>
            <p>PP: <span className="stat">{character.money.PP ? character.money.PP : 0}</span></p>
        </div>
    )
}



export default MoneyCard;