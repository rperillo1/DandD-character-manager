import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddCharacterSheetPage.css';

class CharacterSheetPage extends Component {
    state = {
        formData: {
            name: '',
            class: '',
            level: '',
            race: '',
            hitPoints: '',
            tempHitPoints: '',
            ac: '',
            speed: '',
            stats: {},
            equipment: '',
            money: {
                CP: '',
                SP: '',
                EP: '',
                GP: '',
                PP: ''
            },
            backstory: '',
            profBonus: '',
            alignment: '',
            spellCastingAbility: '',
            spellSaveDC: '',
            spellAtkBonus: ''
        },
        savingThrows: [],
        skills: []
    }


    handleChange = e => {
        if (e.target.type === 'checkbox' && e.target.name === 'savingThrows') {
            this.setState({
                savingThrows: [...this.state.savingThrows, e.target.value],
            })
        }

        if (e.target.type === 'checkbox' && e.target.name === 'skills') {
            this.setState({
                skills: [...this.state.skills, e.target.value]
            })
        }

        if (this.state.savingThrows.includes(e.target.value)) {
            let tempSavingThrows = this.state.savingThrows.filter(stat => stat !== e.target.value)
            this.setState({
                savingThrows: tempSavingThrows
            })
        }

        if (this.state.skills.includes(e.target.value)) {
            let tempSkills = this.state.skills.filter(skill => skill !== e.target.value)
            this.setState({
                skills: tempSkills
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
        const objectToSubmit = { ...this.state.formData, savingThrows: this.state.savingThrows, skills: this.state.skills }
        e.preventDefault();
        this.props.handleAddCharacter(objectToSubmit);
        this.props.history.push('/characters');
    }

    render() {
        return (
            <>
                <div className='flex-container'>
                    <h1 className='charPage-div'>Create Character Sheet</h1>
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
                        <div className="CharPage-form-group">
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
                                name="tempHitPoints"
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
                    <div className="CharPage-form-group skills-input">
                        <label id='skills-title'>Skills (proficient):</label>
                        <div className=''>
                            <label>Acrobatics:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='acrobatics' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Animal Handling:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='animal-handling' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Athletics:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='athletics' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Deception:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='deception' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>History:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='history' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Insight:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='insight' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Intimidation:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='intimidation' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Investigation:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='investigation' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Medicine:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='medicine' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Nature:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='nature' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Perception:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='perception' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Performance:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='performance' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Persuasion:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='persuasion' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Religion:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='religion' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Sleight of Hand:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='sleight-of-hand' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Stealth:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='stealth' name='skills' />
                            </label>
                                &nbsp;&nbsp;&nbsp;
                                <label>Survival:&nbsp;
                            <input type='checkbox' onChange={this.handleChange} value='survival' name='skills' />
                            </label>
                        </div>
                    </div>
                    <div className='flex-container'>
                        <div className="CharPage-form-group-stats">
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
                        </div>
                        <div className="CharPage-form-group-stats">
                            <label>Saving Throws (proficient):</label>
                            <div className='flex-container'>
                                <label>Str:
                            <input type='checkbox' onChange={this.handleChange} value='strength' name='savingThrows' />
                                </label>
                            </div>
                            <div className='flex-container'>
                                <label>Dex:
                            <input type='checkbox' onChange={this.handleChange} value='dexterity' name='savingThrows' />
                                </label>
                            </div>
                            <div className='flex-container'>
                                <label>Con:
                            <input type='checkbox' onChange={this.handleChange} value='constitution' name='savingThrows' />
                                </label>
                            </div>
                            <div className='flex-container'>
                                <label>Int:
                            <input type='checkbox' onChange={this.handleChange} value='intelligence' name='savingThrows' />
                                </label>
                            </div>
                            <div className='flex-container'>
                                <label>Wis:
                            <input type='checkbox' onChange={this.handleChange} value='wisdom' name='savingThrows' />
                                </label>
                            </div>
                            <div className='flex-container'>
                                <label>Char:
                            <input type='checkbox' onChange={this.handleChange} value='charisma' name='savingThrows' />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="CharPage-form-group-money">
                        <div className=''>
                            <label>CP:
                            <input
                                    placeholder="80"
                                    className="form-control"
                                    name="money.CP"
                                    // value={this.state.formData.money.CP}
                                    defaultValue='0'
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <label>SP:
                            <input
                                placeholder="80"
                                className="form-control"
                                name="money.SP"
                                // value={this.state.formData.money.SP}
                                defaultValue='0'
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>EP:
                            <input
                                placeholder="80"
                                className="form-control"
                                name="money.EP"
                                // value={this.state.formData.money.EP}
                                defaultValue='0'
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>GP:
                            <input
                                placeholder="80"
                                className="form-control"
                                name="money.GP"
                                // value={this.state.formData.money.GP}
                                defaultValue='0'
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>PP:
                            <input
                                placeholder="80"
                                className="form-control"
                                name="money.PP"
                                // value={this.state.formData.money.PP}
                                defaultValue='0'
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className='flex-container'>
                        <div className="CharPage-form-group-equipment">
                            <label>Equipment:</label>
                            <textarea
                                className="form-control"
                                name="equipment"
                                value={this.state.formData.equipment}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='flex-container'>
                        <div className="CharPage-form-group-backstory">
                            <label>Backstory:</label>
                            <input
                                className="form-control"
                                name="backstory"
                                value={this.state.formData.backstory}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='buttons'>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add Character
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <Link to='/characters' className='btn btn-warning'>Cancel</Link>
                    </div>
                </form>
            </>
        );
    }
}


export default CharacterSheetPage;