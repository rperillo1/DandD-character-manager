import React from 'react';


function EquipmentCard({character}) {
    return (
        <div className='equipment-card'>
            <p>{character.equipment}</p>
        </div>
    )
}



export default EquipmentCard;