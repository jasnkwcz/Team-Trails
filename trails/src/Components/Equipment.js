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
      items: [],
      trailid: 7001635,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
      fetch('https://www.hikingproject.com/data/get-trails-by-id?ids='+ this.state.trailid + '&key=200962200-a3f1d16081e9f29cfec2bd00a7bd1948')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  isLoaded: true,
                  items: json.trails,
              })
          }).catch((err) => {
              console.log(err);
          });
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
        <Delay wait={550}>
        <WeatherForecast  data={this.state.data}/>
        </Delay>
      </div>
      <div className = "gaugeContainer">
      <Delay wait={2000}>
      <GaugeHolder id="gauge-chart1" width="40%" items={this.state.items}/>
      </Delay>
      </div>
      <Delay wait={2000}>
      <Accordion title ="Recommended Equipment" active={true}> 
      <EquipmentManager weatherdata={this.state.data} items={this.state.items}/>
      </Accordion>
      </Delay>
    </div>
  );
}
}

