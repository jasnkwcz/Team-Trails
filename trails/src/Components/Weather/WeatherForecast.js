import React, {useState} from 'react'
import './WeatherForecast.css'
import weather from './WeatherAPI.js'


import WeatherCard from './WeatherCard.js'

class WeatherForecast extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      city: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    this.setState({ isLoaded: true }, () => {
      console.log(this.state.isLoaded)
    })
  }
  render() {
    // Methods

    const temper = this.state.data.map(e => {
      return parseInt(e.temp);
    });

    const wind = this.state.data.map(e => {
      return parseInt(e.wind_spd);
    });

    const condition = this.state.data.map(e => {
      return e.weather.description;
    });

    const time = this.state.data.map(e => {
      return e.datetime;
    });
    const winddir = this.state.data.map(e => {
      return e.wind_cdir;
    });
    return (
        <div className="forecast">
            <WeatherCard temp={temper[0]} condition={condition[0]} time={time[0]} wind={wind[0]} winddir={winddir[0]}/>
            <WeatherCard temp={temper[1]} condition={condition[1]} time={time[1]} wind={wind[1]} winddir={winddir[1]}/>
            <WeatherCard temp={temper[2]} condition={condition[2]} time={time[2]} wind={wind[2]} winddir={winddir[2]}/>
            <WeatherCard temp={temper[3]} condition={condition[3]} time={time[3]} wind={wind[3]} winddir={winddir[3]}/>
            <WeatherCard temp={temper[4]} condition={condition[4]} time={time[4]} wind={wind[4]} winddir={winddir[4]}/>
            <WeatherCard temp={temper[5]} condition={condition[5]} time={time[5]} wind={wind[5]} winddir={winddir[5]}/>
            <WeatherCard temp={temper[6]} condition={condition[6]} time={time[6]} wind={wind[6]} winddir={winddir[6]}/>
        </div>
    )
}}

export default WeatherForecast
