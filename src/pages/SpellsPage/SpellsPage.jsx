import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as spellsAPI from '../../utils/d&d-api';
import * as characterService from '../../utils/characterService'
import { Button, Form, FormControl } from 'react-bootstrap';


class SpellsPage extends Component {
    state = {
        spells: [],
        spell: '',
        character: this.props.location.state.character,
    }

    refreshPage = () => {
        window.location.reload(false);
      }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = async e => {
        e.preventDefault();
        const spellFromAPI = await spellsAPI.getSpellInfoAPI(this.state.spell);
        characterService.addSpellToCharacter(spellFromAPI, this.state.character._id)
        this.setState({ spells: [...this.state.spells, spellFromAPI] })
        this.refreshPage()
    }

    // this.setState(state => ({
    //     puppies: state.puppies.filter(puppy => puppy._id !== idOfPuppyToDelete)
    //   }), () => this.props.history.push('/'));
    // }



    // async componentDidMount() {
    //     const character = characterService.getSelectedCharacterAPI(this.props.location.characterId)
    //     this.setState({
    //         character: character
    //     })
    // }


    render() {
        let char = this.state.character
        return (
            <h1>Spells!
                <Form inline onSubmit={this.handleSubmit}>
                    <FormControl name="spell" type="text" placeholder="Acid Arrow" className="mr-sm-2" onChange={this.handleChange} />
                    <Button type="submit" variant="outline-info">Search</Button>
                </Form>
                {this.state.character.spells ? this.state.character.spells.map(spell => 
                    <div>{spell.name}</div>
                ) : null }
                {/* {this.state.spells ? this.state.spells.map(spell => 
                    <div>{spell.name}</div>
                ) : null } */}
                <Link to={{ pathname:`/characters/${this.state.character._id}`, state:{char} }} className='btn btn-primary'>Back to Character</Link>
            </h1>
        )
    }
}

export default SpellsPage;