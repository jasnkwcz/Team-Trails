import React from 'react'
import data1 from './TrailDatas/data1';
import Equipment from './EquipmentCard'

import data2 from './TrailDatas/data2';
import data3 from './TrailDatas/data3';
import data4 from './TrailDatas/data4';
import data5 from './TrailDatas/data5';
import data6 from './TrailDatas/data6';
import data7 from './TrailDatas/data7';
import data8 from './TrailDatas/data8';
import data9 from './TrailDatas/data9';
import data10 from './TrailDatas/data10';
import data11 from './TrailDatas/data11';
import data12 from './TrailDatas/data12';
import data13 from './TrailDatas/data13';
import data14 from './TrailDatas/data14';
import data15 from './TrailDatas/data15';
import base from './TrailDatas/default';

class EquipmentManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherdata: this.props.weatherdata,
      items: this.props.items,
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

    var condition = this.state.weatherdata.map(e => {
      return e.weather.description;
    });

    const altitude = this.state.items.map(e => {
      return e.high;
    });

    const length = this.state.items.map(e => {
      return e.length;
    });

    var cond = ''
    switch (condition[3]) {
      case "Clear Sky":
        cond = 'Clear';
          break;
      case "Cloudy":
        cond ='Rain';
          break;
      case "Rain":
        cond ='Rain'
          break;
      case "Scattered clouds":
        cond ='Clear'
          break;
      case "Broken clouds":
        cond ='Clear'
          break;
      case "Overcast clouds":
        cond='Rain'
          break;
      case "Few clouds":
        cond='Clear'
          break;
      case "Flurries":
        cond='Snow'
          break;
      case "Snow":
        cond='Snow'
            break;
      default:
        cond ='Clear'
          break;
    }

    // !- Cases below, LENGTH < 5mi, ALTITUDE < 5000

    // Basic Case, if trail is of short length and low altitude and weather is fair, bring basic equipment. Water, Snack, Backpack
    if ((temper[3] > 40) && (cond === 'Clear') && (altitude < 5000) && (length < 5)) {
      return (
        <div className="wrapper">
        {data1.map(equipment => (
        <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
      ))}
        </div>
      )
    // Cold Case, if trail is of short length and low altitude and weather is colder, bring basic equipment. Water, Snack, Backpack, Warm Gear
    } else if ((temper[3] < 40) && (cond === 'Clear') && (altitude < 5000) && (length < 5)){
    return (
      <div className="wrapper">
      {data2.map(equipment => (
        <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
      ))}
        </div>
    )
    // Warm Rain Case, if trail is of short length and low altitude and weather is raining, bring basic equipment. Water, Snack, Backpack, Rain Gear
    } else if ((temper[3] > 40) && (cond === 'Rain') && (altitude < 5000) && (length < 5)){
        return (
          <div className="wrapper">
          {data3.map(equipment => (
            <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
          ))}
            </div>
        )
    // Cold Rain Case, if trail is of short length and low altitude and weather is raining, bring basic equipment. Water, Snack, Backpack, Rain Gear, Warm Gear
    } else if ((temper[3] < 40) && (cond === 'Rain') && (altitude < 5000) && (length < 5)){
      return (
      <div className="wrapper">
      {data4.map(equipment => (
        <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
      ))}
        </div>
    )
      // Snow! Case, if trail is of short length and low altitude and weather is snowing, bring basic equipment. Water, Snack, Backpack, Warm Clothes, Warm Food, Hiking Shoes
      } else if ((temper[3] < 40) && (cond === 'Snow') && (altitude < 5000) && (length < 5)){
        return (
        <div className="wrapper">
        {data5.map(equipment => (
          <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
        ))}
          </div>
      )

    // !- Cases Below, LENGTH > 5mi, ALTITUDE < 5000ft

    // Base Long Trail case, if trail is of long length and low altitude and weather is fair
    } else if ((temper[3] > 40) && (cond === 'Clear') && (altitude < 5000) && (length > 5)){
      return (
        <div className="wrapper">
        {data6.map(equipment => (
          <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
        ))}
          </div>
      )
      // Warm Rain Case, if trail is of long length and low altitude and weather is raining, bring basic equipment. Water, Snack, Backpack, Rain Gear
      } else if ((temper[3] > 40) && (cond === 'Rain') && (altitude < 5000) && (length > 5)){
          return (
            <div className="wrapper">
            {data7.map(equipment => (
              <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
            ))}
              </div>
          )
      // Cold Rain Case, if trail is of long length and low altitude and weather is raining, bring basic equipment. Water, Snack, Backpack, Rain Gear, Warm Gear
      } else if ((temper[3] < 40) && (cond === 'Rain') && (altitude < 5000) && (length > 5)){
        return (
        <div className="wrapper">
        {data8.map(equipment => (
          <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
        ))}
          </div>
      )
        // Snow! Case, if trail is of long length and low altitude and weather is snowing, bring basic equipment. Water, Snack, Backpack, Warm Clothes, Warm Food, Hiking Shoes
        } else if ((temper[3] < 40) && (cond === 'Snow') && (altitude < 5000) && (length > 5)){
          return (
          <div className="wrapper">
          {data9.map(equipment => (
            <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
          ))}
            </div>
        )
        // Cold fair weather case if trail is of long length and low altitude and weather is clear, bring basic equipment. Water, Snack, Backpack, Warm Clothes, Warm Food, Hiking Shoes
      } else if ((temper[3] < 40) && (cond === 'Clear') && (altitude < 5000) && (length > 5)){
        return (
        <div className="wrapper">
        {data10.map(equipment => (
          <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
        ))}
          </div>
      )


       // !- Cases Below, LENGTH > 5mi, ALTITUDE > 5000ft

    // Base Long Trail case, if trail is of long length and high altitude and weather is fair
    } else if ((temper[3] > 40) && (cond === 'Clear') && (altitude > 5000) && (length > 5)){
      return (
        <div className="wrapper">
        {data11.map(equipment => (
          <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
        ))}
          </div>
      )
      // Warm Rain Case, if trail is of long length and high altitude and weather is raining, bring basic equipment. Water, Snack, Backpack, Rain Gear
      } else if ((temper[3] > 40) && (cond === 'Rain') && (altitude > 5000) && (length > 5)){
          return (
            <div className="wrapper">
            {data12.map(equipment => (
              <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
            ))}
              </div>
          )
      // Cold Rain Case, if trail is of long length and high altitude and weather is raining, bring basic equipment. Water, Snack, Backpack, Rain Gear, Warm Gear
      } else if ((temper[3] < 40) && (cond === 'Rain') && (altitude > 5000) && (length > 5)){
        return (
        <div className="wrapper">
        {data13.map(equipment => (
          <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
        ))}
          </div>
      )
        // Snow! Case, if trail is of long length and high altitude and weather is snowing, bring basic equipment. Water, Snack, Backpack, Warm Clothes, Warm Food, Hiking Shoes
        } else if ((temper[3] < 40) && (cond === 'Snow') && (altitude > 5000) && (length > 5)){
          return (
          <div className="wrapper">
          {data14.map(equipment => (
            <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
          ))}
            </div>
        )
        // Cold fair weather case if trail is of long length and high altitude and weather is clear, bring basic equipment. Water, Snack, Backpack, Warm Clothes, Warm Food, Hiking Shoes
      } else if ((temper[3] < 40) && (cond === 'Clear') && (altitude > 5000) && (length > 5)){
        return (
        <div className="wrapper">
        {data15.map(equipment => (
          <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
        ))}
          </div>
      )
    

  } else {
    return (
      <div className="wrapper">
      {base.map(equipment => (
        <Equipment key={equipment.name} name={equipment.name} image={equipment.image} description={equipment.description} />
      ))}
        </div>
    )
  }
}
}

export default EquipmentManager
