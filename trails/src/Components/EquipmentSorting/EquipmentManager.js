import React, {useState} from 'react'
import data1 from './TrailDatas/data1';
import Equipment from './EquipmentCard'

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
    const temper = this.state.weatherdata.map(e => {
      return parseInt(e.temp);
    });

    if (temper[3] > -203) {
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
}

export default EquipmentManager
