import React, { Component } from 'react';

import Accordion from './Accordion/Accordion'
import EquipmentManager from './EquipmentSorting/EquipmentManager'
import WeatherForecast from './Weather/WeatherForecast';
import GaugeHolder from './Gauges/GaugeHolder';
import styled from '@emotion/styled';
import './Equipment.css'

const background = "https://wallpaperaccess.com/full/208106.jpg"

export default class Equipment extends Component {
  Equipment = styled.div`
  background-image: url(${background}); 
  `
render() {
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
}

