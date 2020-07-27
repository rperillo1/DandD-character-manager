import React from 'react';
import { Link } from 'react-router-dom';
import TitleCard from '../../components/TitleCard/TitleCard'
import LifeCard from '../../components/LifeCard/LifeCard'
import StatsCard from '../../components/StatsCard/StatsCard'
import SpellStatCard from '../../components/SpellStatCard/SpellStatCard'
import SkillsCard from '../../components/SkillsCard/SkillsCard'
import SavingThrowsCard from '../../components/SavingThrowsCard/SavingThrowsCard'
import MoneyCard from '../../components/MoneyCard/MoneyCard'
import EquipmentCard from '../../components/EquipmentCard/EquipmentCard'
import BackgroundCard from '../../components/BackgroundCard/BackgroundCard'
import './CharacterSheetShowPage.css'


function CharacterSheetShowPage(props) {
    const character = props.location.state.char

    return (
        <>
            <Link to={{ pathname: `/characters/${character._id}/spells`, state: { character } }} className='btn btn-primary spell-btn'>CHARACTERS SPELLS</Link>
            {character.name ?
                <div className='sheet-grid'>
                    <TitleCard character={character} />
                    <LifeCard character={character} />
                    <StatsCard character={character} />
                    <SavingThrowsCard character={character} />
                    <SkillsCard character={character} />
                    <SpellStatCard character={character} />
                    <MoneyCard character={character} />
                    <EquipmentCard character={character} />
                    <BackgroundCard character={character} />
                    <div className='sheet-btns'>
                        <button
                            className='btn btn-danger '
                            onClick={() => props.handleDeleteCharacter(character._id)}
                        >
                            DELETE SHEET
                        </button>
                        &nbsp;&nbsp;
                        <Link className='btn btn-warning' to={{ pathname: `${character._id}/edit`, state: { character } }}>EDIT SHEET</Link>
                    </div>
                </div>
                : null}
        </>
    )
}


export default CharacterSheetShowPage;