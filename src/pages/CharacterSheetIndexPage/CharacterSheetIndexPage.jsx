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
                <h1>Character Sheets!</h1>
                <Link to='/add-character' className="btn btn-primary">Add New Character</Link>
                <div className="flex-container">
                    {this.state.characters.map((char, idx) =>
                        <Card className='char-card' key={idx}>
                            <Card.Body>
                                <Card.Title>{char.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Level: {char.level}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted"> {char.class} - {char.race}</Card.Subtitle>
                                <Card.Link href="/characters/:id">Enter Sheet</Card.Link>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        )
    }
}

export default CharacterSheet;