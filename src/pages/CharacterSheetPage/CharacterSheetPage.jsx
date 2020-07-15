import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddCharacterSheetPage from '../AddCharacterSheetPage/AddCharacterSheetPage'
import './CharacterSheetPage.css'
import * as characterService from '../../utils/characterService'

class CharacterSheet extends Component {
    state = {
        characters: [],
        name: '',
        class: ''
    }

    handleAddCharacter = async newCharacterData => {
        await characterService.createCharacterAPI(newCharacterData)
        this.getAllCharacters();
    }

    getAllCharacters = async () => {
        const characters = await characterService.getAllCharactersAPI();
        this.setState({
            characters
        }, () => this.props.history.push('/characters'))
    }

    render() {
        return (
            <div className='charPage-div'>
                <div className="flex-container">
                    <h1>Character Sheets!</h1>
                </div>
                <AddCharacterSheetPage handleAddCharacter={this.handleAddCharacter}/>
            </div>
        )
    }
}

export default CharacterSheet;