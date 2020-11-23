import React, { Component } from 'react';

import Accordion from './Accordion/Accordion'
import EquipmentManager from './EquipmentSorting/EquipmentManager'
import WeatherForecast from './Weather/WeatherForecast';
import GaugeHolder from './Gauges/GaugeHolder';
import './Equipment.css'

export default class Equipment extends Component {

render() {
  const trailid = 7001635;
  return (
    <div>
      
      <div className= "weatherContainer">
        <WeatherForecast  />
      </div>
      <div className = "gaugeContainer">
      <GaugeHolder id="gauge-chart1" width="40%" trailid={trailid}/>
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

