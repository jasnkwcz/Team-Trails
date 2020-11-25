import React from 'react'
import data1 from './TrailDatas/data1';
import Equipment from './EquipmentCard'

const EquipmentManager = (props) => {
    const info = {
      rain: true,
      traillength: 9
    }
    if (info.rain && info.traillength < 10) {
      return (
        <div className="wrapper">
        {data1.map(equipment => (
        <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
      ))}
        </div>
      )
    } else {

    return (
      <div className="wrapper">
      {data1.map(equipment => (
        <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
      ))}
        </div>
    )
  }
} 

export default EquipmentManager
