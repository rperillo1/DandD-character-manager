import React, { Component } from 'react';

class CharacterSheetPage extends Component {
    state = {
        formData: {
            name: '',
            class: ''
        }
    }

    handleChange = e => {
        const formDataAsUserTypes = {
            ...this.state.formData,
            [e.target.name]: e.target.value
        }

        this.setState({
            formData: formDataAsUserTypes
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddCharacter(this.state.formData);
    }

    render() {
        return (
            <>
                <div className='flex-container'>
                    <h1>Create Character Sheet</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Character Name:</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Class:</label>
                        <input
                            className="form-control"
                            name="class"
                            value={this.state.formData.class}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add Character
                    </button>
                </form>
            </>
        );
    }
}

export default CharacterSheetPage;