import React from 'react';

function TitleCard({ character }) {
    return (
        <div className='title-card'>
            <div className='flex-container'>
                <p>Name: {character.name}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Race: {character.race}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Class: {character.class}</p>
            </div>
            <div className='flex-container'>
                <p>Level: {character.level}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Alignment: {character.alignment}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Player: {character.user.name}</p>
            </div>
        </div>
    )
}


export default TitleCard;