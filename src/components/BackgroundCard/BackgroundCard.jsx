import React from 'react';


function BackgroundCard({character}) {
    return (
        <div className='background-card'>
            Backstory:
            <p>{character.backstory}</p>
        </div>
    )
}



export default BackgroundCard;