import React from 'react';


function EquipmentCard({character}) {
    return (
        <div className='equipment-card'>
            Equipment:
            <p>{character.equipment}</p>
        </div>
    )
}



export default EquipmentCard;