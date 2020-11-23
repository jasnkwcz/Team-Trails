import React from 'react'
import data from '../EquipmentSorting/data';
import Equipment from './EquipmentCard'

function EquipmentManager() {
    return (
        <div className="wrapper">
      {data.map(equipment => (
        <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
      ))}
        </div>
    )
} 

export default EquipmentManager
