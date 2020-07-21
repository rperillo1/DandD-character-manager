import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as spellsAPI from '../../utils/d&d-api';
import { Button, Form, FormControl, Card } from 'react-bootstrap';
import './SpellsPage.css'



class SpellsPage extends Component {
    state = {
        spells: [],
        spell: '',
        character: this.props.location.state.character,
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = async e => {
        e.preventDefault();
        const spellFromAPI = await spellsAPI.getSpellInfoAPI(this.state.spell);
        this.props.handleAddSpellToCharacter(spellFromAPI, this.state.character._id)
        this.setState({ spells: [...this.state.spells, spellFromAPI] })
    }



    render() {
        let char = this.state.character
        return (
            <div><span id='spell-header'>Spells!</span>
                <div className='flex-container'>
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormControl name="spell" type="text" placeholder="Acid Arrow" className="mr-sm-2" onChange={this.handleChange} />
                        <br /> &nbsp;
                        <Button type="submit" variant="outline-info">Search</Button>
                    </Form>
                </div>
                <div className='flex-container spell-container'>
                    {this.state.character.spells ? this.state.character.spells.map((spell, idx) =>
                        <Card className='spell-card' key={idx}>
                            <Card.Body>
                                <button
                                    className='btn btn-danger delete-btn'
                                    onClick={() => this.props.handleDeleteSpell(this.state.character._id, spell._id)}
                                >
                                    X
                                </button>
                                <Card.Title>{spell.name}</Card.Title>
                                <Card.Subtitle className="mb-3 subtitle card-items">Casting Time: {spell.casting_time}</Card.Subtitle>
                                <Card.Subtitle className="mb-3 subtitle card-items">Range: {spell.range}</Card.Subtitle>
                                <Card.Subtitle className="mb-3 subtitle card-items">Duration: {spell.duration}</Card.Subtitle>
                                <Card.Subtitle className="mb-3 subtitle card-items">Components: {spell.components}</Card.Subtitle>
                                {spell.desc.map(text =>
                                    <Card.Subtitle className="mb-3 subtitle spell-desc" id="spell-desc">{text}</Card.Subtitle>
                                )}
                            </Card.Body>
                        </Card>
                    ) : null}
                    {this.state.spells ? this.state.spells.map((spell, idx) =>
                        <Card className='spell-card' key={idx}>
                            <Card.Body>
                                <button
                                    className='btn btn-danger delete-btn'
                                    onClick={() => this.props.handleDeleteSpell(this.state.character._id, spell._id)}
                                >
                                    X
                                </button>
                                <Card.Title>{spell.name}</Card.Title>
                                <Card.Subtitle className="mb-3 subtitle card-items">Casting Time: {spell.casting_time}</Card.Subtitle>
                                <Card.Subtitle className="mb-3 subtitle card-items">Range: {spell.range}</Card.Subtitle>
                                <Card.Subtitle className="mb-3 subtitle card-items">Duration: {spell.duration}</Card.Subtitle>
                                <Card.Subtitle className="mb-3 subtitle card-items">Components: {spell.components}</Card.Subtitle>
                                {spell.desc.map(text =>
                                    <Card.Subtitle className="mb-3 subtitle spell-desc" id="spell-desc">{text}</Card.Subtitle>
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