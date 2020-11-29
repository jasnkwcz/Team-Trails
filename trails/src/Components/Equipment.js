import React, { Component } from 'react';

import Accordion from './Accordion/Accordion'
import EquipmentManager from './EquipmentSorting/EquipmentManager'
import WeatherForecast from './Weather/WeatherForecast';
import GaugeHolder from './Gauges/GaugeHolder';
import './Equipment.css'
import weather from './Weather/WeatherAPI.js'
import Delay from 'react-delay'

export default class Equipment extends Component {
  constructor(props) {
    super(props);
    this.searchCity("Snowmass Village")
    this.state = {
      data: [],
      city: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  searchCity = async city => {
    await weather
      .get(`daily?city=${city}&key=3f934c9db1cf4675b88fcf1eac2d738d`)
      .then(res => {
        const data = res.data.data;
        const city = res.data.city_name;

        this.setState({
          data,
          city
        });
      });
  };
render() {

  return (
    <div>
      <div className= "weatherContainer">
        <Delay wait={500}>
        <WeatherForecast  data={this.state.data}/>
        </Delay>
      </div>
      <div className = "gaugeContainer">
      <GaugeHolder id="gauge-chart1" width="40%" />
      </div>
      <Accordion title ="Recommended Equipment" active={true}> 
      <EquipmentManager/>
      </Accordion>
      <br></br>
      <Accordion title ="Optional Equipment"> 
      <EquipmentManager />
      </Accordion>
      <br></br>
      <Accordion title ="Unecessary Equipment"> 
      <EquipmentManager />
      </Accordion>
    </div>
  );
}
}

