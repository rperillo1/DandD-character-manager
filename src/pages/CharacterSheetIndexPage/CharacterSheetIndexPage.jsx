import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterSheetIndexPage.css'
import { Card } from 'react-bootstrap';


function CharacterSheet({ characters }) {

    return (
        <div className='charPage-div'>
            <h1 id='sheets-title'>Character Sheets!</h1>
            <Link to='/add-character' className="btn btn-primary sheets-btn">Add New Character</Link>
            <div className="flex-container card-container">
                {characters.map((char, idx) =>
                    <Card className='char-card' key={idx}>
                        <Card.Body>
                            <Card.Title>{char.name}</Card.Title>
                            <Card.Subtitle className="mb-2 subtitle">Level: {char.level}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 subtitle"> {char.class} - {char.race}</Card.Subtitle>
                            <Link className='btn btn-outline-warning' to={{ pathname: `characters/${char._id}`, state: { char } }}>Enter Sheet</Link>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    )
}


export default CharacterSheet;

