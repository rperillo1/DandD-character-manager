import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CharacterSheetShowPage extends Component {
    state = {
        character: this.props.history.location.character.char
    }


    render() {

        return (
            <h1>
                {this.state.character.name}
                {this.state.character.class}
                <Link to='/spells' className='btn btn-primary'>Spells</Link>
            </h1>
        )
    }
}

export default CharacterSheetShowPage;