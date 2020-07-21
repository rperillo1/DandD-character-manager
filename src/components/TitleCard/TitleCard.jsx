import React from 'react';

function TitleCard({ character }) {
    return (
        <div className='title-card'>
            <div className='flex-container'>
                <p>Name: <span className='player-text'>{character.name}</span></p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Race: <span className='player-text-2'>{character.race}</span></p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Class: <span className='player-text-2'>{character.class}</span></p>
            </div>
            <div className='flex-container'>
                <p>Level: <span className='player-text-2'>{character.level}</span></p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Alignment: <span className='player-text-2'>{character.alignment}</span></p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Player: <span className='player-text-2'>{character.user.name}</span></p>
            </div>
        </div>
    )
}


export default TitleCard;