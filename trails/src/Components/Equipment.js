import React, { Component } from 'react';

import Accordion from './Accordion/Accordion'
import EquipmentManager from './EquipmentSorting/EquipmentManager'
import WeatherForecast from './Weather/WeatherForecast';
import GaugeHolder from './Gauges/GaugeHolder';
import './Equipment.css'

export default class Equipment extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 7001635,
      zipcode: 81611
    }
  }



render() {
  return (
    <div>
      <div className= "weatherContainer">
        <WeatherForecast  />
      </div>
      <div className = "gaugeContainer">
      <GaugeHolder id="gauge-chart1" width="40%" trailid={this.state.id}/>
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

