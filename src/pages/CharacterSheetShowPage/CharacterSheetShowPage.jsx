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
                {this.state.character._id}
                <Link to={{ pathname: `/${this.state.character._id}/spells`, characterId:`${this.state.character._id}` }} className='btn btn-primary'>Spells</Link>
            </h1>
        )
    }
}

export default CharacterSheetShowPage;