import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterSheetIndexPage.css'
import * as characterService from '../../utils/characterService'
import { Card } from 'react-bootstrap';

class CharacterSheet extends Component {
    state = {
        characters: [],
    }

    getAllCharacters = async () => {
        const characters = await characterService.getAllCharactersAPI();
        this.setState({
            characters
        }, () => this.props.history.push('/characters'))
    }


    async componentDidMount() {
        this.getAllCharacters();
    }

    render() {
        return (
            <div className='charPage-div'>
                <h1 id='sheets-title'>Character Sheets!</h1>
                <Link to='/add-character' className="btn btn-primary sheets-btn">Add New Character</Link>
                <div className="flex-container card-container">
                    {this.state.characters.map((char, idx) =>
                        <Card className='char-card' key={idx}>
                            <Card.Body>
                                <Card.Title>{char.name}</Card.Title>
                                <Card.Subtitle className="mb-2 subtitle">Level: {char.level}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 subtitle"> {char.class} - {char.race}</Card.Subtitle>
                                {/* <button onClick={() => this.props.handleSelectedCharacter(char._id)} className='btn btn-outline-warning'>ENTER</button> */}
                                {/* <Link onClick={() => this.props.handleSelectedCharacter(char._id)} className='btn btn-outline-warning'>Enter Sheet</Link> */}
                                <Link className='btn btn-outline-warning' to={{ pathname: `characters/${char._id}`, state:{char}, charId:`${char._id}` }}>Enter Sheet</Link>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        )
    }
}

export default CharacterSheet;