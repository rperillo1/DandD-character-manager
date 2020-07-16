import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterSheetPage.css'
import * as characterService from '../../utils/characterService'

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
                    {this.state.characters.map((char, idx ) =>
                        <div key={idx}>
                            <p>{char.name}</p>
                            <p>{char.class}</p>
                        </div>
                    )}

                </div>
            </div>
        )
    }
}

export default CharacterSheet;