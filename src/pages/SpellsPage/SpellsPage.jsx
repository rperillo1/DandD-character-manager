import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as spellsAPI from '../../utils/d&d-api';
import { Button, Form, FormControl, Card } from 'react-bootstrap';
import * as characterService from '../../utils/characterService'
import './SpellsPage.css'



class SpellsPage extends Component {
    state = {
        character: {},
    }

    getCharacter = async () => {
        const characterId = this.props.match.params.id
        const character = await characterService.getOneCharacter(characterId)
        this.setState({
            character,
        })
    }

    componentDidMount() {
        this.getCharacter()
    }

    handleSubmit = async e => {
        e.preventDefault();
        const currentChar = { ...this.state.character }
        const spellFromAPI = await spellsAPI.getSpellInfoAPI(this.state.spell);

        if (spellFromAPI.error === undefined) {
            this.props.handleAddSpellToCharacter(spellFromAPI, currentChar._id)
            this.setState({
                character: {
                    ...this.state.character,
                    spells:
                        [...this.state.character.spells, spellFromAPI]
                }
            })
        } else {
            alert('That spell doesnt exist')
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value.toLowerCase().replace(/ /g, "-")
        })
    }

    removeSpell(spellId) {
        let idx = this.state.character.spells.findIndex(x => x._id === spellId)
        const spellsWithoutSpell = [...this.state.character.spells]
        spellsWithoutSpell.splice(idx, 1)
        this.setState({
            character: {
                ...this.state.character,
                spells: spellsWithoutSpell
            }
        })
    }

    
    render() {
        let char = this.state.character
        return (
            <div><span id='spell-header'>Spells!</span>
                <div className='flex-container'>
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormControl name="spell" type="text" placeholder="Acid Arrow" className="mr-sm-2" onChange={this.handleChange} />
                        <br /> &nbsp;
                        <Button type="submit" id="spell-submit-btn" variant="outline-info">Search</Button>
                    </Form>
                </div>
                <div className='flex-container spell-container'>
                    {this.state.character.spells ? this.state.character.spells.map((spell, idx) =>
                        <Card className='spell-card' key={idx}>
                            <Card.Body>
                                <button
                                    className='btn btn-danger delete-btn'
                                    onClick={() => {
                                        this.props.handleDeleteSpell(this.state.character._id, spell._id)
                                        this.removeSpell(spell._id)
                                    }}
                                >
                                    X
                                </button>
                                <Card.Title>{spell.name}</Card.Title>
                                <Card.Subtitle className="mb-3 subtitle card-items">Casting Time: {spell.casting_time}</Card.Subtitle>
                                <Card.Subtitle className="mb-3 subtitle card-items">Range: {spell.range}</Card.Subtitle>
                                <Card.Subtitle className="mb-3 subtitle card-items">Duration: {spell.duration}</Card.Subtitle>
                                <Card.Subtitle className="mb-3 subtitle card-items">Components: {spell.components}</Card.Subtitle>
                                {spell.desc.map((text, idx) =>
                                    <Card.Subtitle className="mb-3 subtitle spell-desc" id="spell-desc" key={idx}>{text}</Card.Subtitle>
                                )}
                            </Card.Body>
                        </Card>
                    ) : null}
                </div>
                <Link to={{ pathname: `/characters/${this.state.character._id}`, state: { char } }} className='btn btn-primary back-btn'>Back to Character</Link>
            </div>
        )
    }
}

export default SpellsPage;