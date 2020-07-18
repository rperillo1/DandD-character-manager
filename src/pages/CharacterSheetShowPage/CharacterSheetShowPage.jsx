import React, { Component } from 'react';
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


function CharacterSheetShowPage(props) {
    const character = props.location.state.char
    return (
        <div>
            <TitleCard character={character}/>
            <LifeCard character={character}/>
            <StatsCard character={character}/>
            <SavingThrowsCard character={character}/>
            <SkillsCard character={character}/>
            <SpellStatCard character={character}/>
            <MoneyCard character={character}/>
            <EquipmentCard character={character}/>
            <BackgroundCard character={character}/>
            <Link to={{ pathname: `/characters/${character._id}/spells`, characterId:`${character._id}`, state:{character} }} className='btn btn-primary'>Spells</Link>
            <button
                className='btn btn-danger '
                onClick={() => props.handleDeleteCharacter(character._id)}
            >
                DELETE CHARACTER
            </button>
        </div>
    )
}


export default CharacterSheetShowPage;