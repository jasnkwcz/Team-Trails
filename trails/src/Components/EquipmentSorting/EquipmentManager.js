import React, {useState} from 'react'
import data1 from './TrailDatas/data1';
import Equipment from './EquipmentCard'

import data2 from './TrailDatas/data2';

class EquipmentManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherdata: this.props.weatherdata,
      city: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    this.setState({ isLoaded: true }, () => {
    })
  }
  render () {
    // Trail and Weather Variable Setup

    const temper = this.state.weatherdata.map(e => {
      return parseInt(e.temp) * 9 / 5 + 32;
    });

    // Base Case, if trail is of short length and weather is fair, bring basic equipment. Water, Snack, Hiking Shoes
    if (temper[3] > 20) {
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
      {data2.map(equipment => (
        <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
      ))}
        </div>
    )
  }
}
}

export default EquipmentManager
