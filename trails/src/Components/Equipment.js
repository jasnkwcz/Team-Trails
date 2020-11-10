import React from 'react';

import Accordion from './components/Accordion/Accordion.js'
import EquipmentManager from './components/EquipmentSorting/EquipmentManager'
import WeatherForecast from './components/Weather/WeatherForecast';
import GaugeHolder from './components/Gauges/GaugeHolder';



export default function Equipment = () => {
  return (
    <div>
      <h1>Equipment Page</h1>
      <div className= "weatherContainer">
        <WeatherForecast  />
      </div>
      <div className = "gaugeContainer">
      <GaugeHolder id="gauge-chart1" width="40%"/>
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

