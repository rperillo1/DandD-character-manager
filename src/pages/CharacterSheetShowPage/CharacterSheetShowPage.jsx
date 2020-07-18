import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function CharacterSheetShowPage(props) {
    const character = props.location.state.char
    return (
        <h1>
            <Link to={{ pathname: `/characters/${character._id}/spells`, characterId:`${character._id}`, state:{character} }} className='btn btn-primary'>Spells</Link>
            <button
                className='btn btn-danger '
                onClick={() => props.handleDeleteCharacter(character._id)}
            >
                DELETE CHARACTER
            </button>
        </h1>
    )
}


export default CharacterSheetShowPage;