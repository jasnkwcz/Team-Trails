import React from 'react'
import data from './data';
import Equipment from './Equipment'

function EquipmentManager() {
    return (
        <div className="wrapper">
      {data.map(equipment => (
        <Equipment 
        key={equipment.name}
        name={equipment.name}
        image={equipment.image}
        description={equipment.description}
        />
      ))}
        </div>
    )
} 

export default EquipmentManager
