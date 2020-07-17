import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as spellsAPI from '../../utils/d&d-api';
import * as characterService from '../../utils/characterService'
import { Button, Form, FormControl } from 'react-bootstrap';


class SpellsPage extends Component {
    state = {
        spells: [],
        spell: '',
        characterId: this.props.history.location.characterId,
        character: ''
    }

    async componentDidMount() {
        this.getCharacter()
        // this.setState({
        //     character: character
        // })
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getCharacter = async () => {
        const characters = await characterService.getAllCharactersAPI();
        let character = ''
        characters.forEach(char => {
            if (char._id === this.state.characterId) {
                character = char
            }
        })
        this.setState({
            character
        })
    }


    handleSubmit = async e => {
        e.preventDefault();
        // search for spell and add to the character spell array
        // two await calls. 2nd await call will take spell from api and pass it along with character id 
        // to a service called addSpellToCharacter
        // create appropraite routes/controlers to find the character, push spell into character & save character
        const spellFromAPI = await spellsAPI.getSpellInfoAPI(this.state.spell);
        characterService.addSpellToCharacter(spellFromAPI, this.state.characterId)
        this.setState({ spells: [...this.state.spells, spellFromAPI] })
    }




    render() {
        return (
            <h1>Spells!
                <Form inline onSubmit={this.handleSubmit}>
                    <FormControl name="spell" type="text" placeholder="Acid Arrow" className="mr-sm-2" onChange={this.handleChange} />
                    <Button type="submit" variant="outline-info">Search</Button>
                </Form>
                {this.state.spells.name}
                <Link to='/characters/' className='btn btn-primary'>Back to Character</Link>
            </h1>
        )
    }
}

export default SpellsPage;