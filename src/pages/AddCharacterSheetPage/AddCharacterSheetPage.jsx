import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddCharacterSheetPage.css';

class CharacterSheetPage extends Component {
    state = {
        formData: {
            name: '',
            class: '',
            stats: {},
        },
        savingThrows: []
    }


    handleChange = e => {
        if (e.target.type === 'checkbox') {
            this.setState({
                savingThrows: [...this.state.savingThrows, e.target.value]
            })
        }
        if (this.state.savingThrows.includes(e.target.value)) {
            let statIdx = this.state.savingThrows.indexOf(e.target.value)
            let tempSavingThrows = [...this.state.savingThrows.splice(statIdx, 1)]
            this.setState({
                savingThrows: [...this.state.savingThrows, tempSavingThrows]
            })
        }

        const formDataAsUserTypes = {
            ...this.state.formData,
            [e.target.name]: e.target.value
        }
        this.setState({
            formData: formDataAsUserTypes
        })
    }


    handleSubmit = e => {
        const objectToSubmit = (this.state.formData.savingThrows = this.state.savingThrows)
        console.log(objectToSubmit)
        e.preventDefault();
        this.props.handleAddCharacter(objectToSubmit);
        this.props.history.push('/characters');
    }

    render() {
        return (
            <>
                <div className='flex-container'>
                    <h1>Create Character Sheet</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='flex-container'>
                        <div className="CharPage-form-group">
                            <label>Name:</label>
                            <input
                                className="form-control"
                                name="name"
                                value={this.state.formData.name}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="CharPage-form-group">
                            <label>Class:</label>
                            <input
                                className="form-control"
                                name="class"
                                value={this.state.formData.class}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="CharPage-form-group">
                            <label>Level:</label>
                            <input
                                className="form-control"
                                name="level"
                                value={this.state.formData.level}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        {/* <div className="CharPage-form-group">
                            <label>Race:</label>
                            <input
                                className="form-control"
                                name="race"
                                value={this.state.formData.race}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="CharPage-form-group">
                            <label>Alignment:</label>
                            <input
                                className="form-control"
                                name="alignment"
                                value={this.state.formData.alignment}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex-container'>
                        <div className="CharPage-form-group">
                            <label>Hit Points:</label>
                            <input
                                className="form-control"
                                name="hitPoints"
                                value={this.state.formData.hitPoints}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="CharPage-form-group">
                            <label>Temp HP:</label>
                            <input
                                className="form-control"
                                name="hitPoints"
                                value={this.state.formData.tempHitPoints}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="CharPage-form-group">
                            <label>AC:</label>
                            <input
                                className="form-control"
                                name="ac"
                                value={this.state.formData.ac}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="CharPage-form-group">
                            <label>Speed:</label>
                            <input
                                className="form-control"
                                name="speed"
                                value={this.state.formData.speed}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex-container'>
                        <div className="CharPage-form-group">
                            <label>Proficiency Bonus:</label>
                            <input
                                className="form-control"
                                name="profBonus"
                                value={this.state.formData.profBonus}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="CharPage-form-group">
                            <label>Spellcasting Ability:</label>
                            <input
                                className="form-control"
                                name="spellCastingAbility"
                                value={this.state.formData.spellCastingAbility}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="CharPage-form-group">
                            <label>Spell Save DC:</label>
                            <input
                                className="form-control"
                                name="spellSaveDC"
                                value={this.state.formData.spellSaveDC}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="CharPage-form-group">
                            <label>Spell Attack Bonus:</label>
                            <input
                                className="form-control"
                                name="spellAtkBonus"
                                value={this.state.formData.spellAtkBonus}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex-container'>
                        <div className="CharPage-form-group">
                            <label>Stats:</label>
                            <input
                                placeholder="Strength"
                                className="form-control"
                                name="stats.str"
                                value={this.state.formData.stats.str}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                placeholder="Dexterity"
                                className="form-control"
                                name="stats.dex"
                                value={this.state.formData.stats.dex}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                placeholder="Constitution"
                                className="form-control"
                                name="stats.con"
                                value={this.state.formData.stats.con}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                placeholder="Intelligence"
                                className="form-control"
                                name="stats.int"
                                value={this.state.formData.stats.int}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                placeholder="Wisdom"
                                className="form-control"
                                name="stats.wis"
                                value={this.state.formData.stats.wis}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                placeholder="Charisma"
                                className="form-control"
                                name="stats.char"
                                value={this.state.formData.stats.char}
                                onChange={this.handleChange}
                                required
                            />
                        </div> */}
                        <div className="CharPage-form-group">
                            <label>Saving Throws (proficient):</label>
                            <label>Str:
                            <input type='checkbox' onChange={this.handleChange} value='strength' name='savingThrows' />
                            </label>
                            <label>Dex:
                            <input type='checkbox' onChange={this.handleChange} value='dexterity' name='savingThrows' />
                            </label>
                            <label>Con:
                            <input type='checkbox' onChange={this.handleChange} value='constitution' name='savingThrows' />
                            </label>
                            <label>Int:
                            <input type='checkbox' onChange={this.handleChange} value='intelligence' name='savingThrows' />
                            </label>
                            <label>Wis:
                            <input type='checkbox' onChange={this.handleChange} value='wisdom' name='savingThrows' />
                            </label>
                            <label>Char:
                            <input type='checkbox' onChange={this.handleChange} value='charisma' name='savingThrows' />
                            </label>
                            {/* <select multiple={true} value={['Str', 'Dex', 'Con', 'Int', 'Wis', 'Char']} onChange={this.handleChange}>
                                <option value="Str">Strength</option>
                                <option value="Dex">Dexterity</option>
                                <option value="Con">Constitution</option>
                                <option value="Int">Intelligence</option>
                                <option value="Wis">Wisdom</option>
                                <option value="Char">Charisma</option>
                            </select> */}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add Character
                    </button>
                    <Link to='/characters' className='btn btn-warning'>Cancel</Link>
                </form>
            </>
        );
    }
}

export default CharacterSheetPage;