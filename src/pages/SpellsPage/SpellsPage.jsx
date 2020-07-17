import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as spellsAPI from '../../utils/d&d-api';
import { Button, Form, FormControl } from 'react-bootstrap';

class SpellsPage extends Component {
    state = {
        spells: []
    }

    // handleChange = e => {
    //     const formDataAsUserTypes = {
    //         ...this.state.formData,
    //         [e.target.name]: e.target.value
    //     }
    //     this.setState({
    //         formData: formDataAsUserTypes
    //     })
    // }


    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.handleAddCharacter(objectToSubmit);
    //     this.props.history.push('/spells');
    // }


    async componentDidMount() {
        const spellsFromAPI = await spellsAPI.getSpellInfoAPI('acid-arrow');
        this.setState({
            spells: spellsFromAPI
        })
    }


    render() {
        return (
            <h1>Spells!
                <Form inline onSubmit={this.handleSubmit}>
                    <FormControl type="text" placeholder="Acid Arrow" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                {/* {this.state.spell.name} */}
                <Link to='/characters/' className='btn btn-primary'>Back to Character</Link>
            </h1>
        )
    }
}

export default SpellsPage;