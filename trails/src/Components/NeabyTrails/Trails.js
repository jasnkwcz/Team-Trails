import React, { Component } from "react";
import FormModal from "../FormModal";
import "./NearbyTrailsStyle.css";
import axios from "axios";
import TrailCard from "./TrailCard";

export default class Trails extends Component {

    constructor(props){
      super(props);
      this.state = {
        showModal : false,
        zip: "",
        lat: "",
        lon: "",
        list: [],
        newCity: this.props.userState.city,
        newState: this.props.userState.state,
        difficulty: 0,
        filter: false
      }
      this.getTrails.bind(this);

    }
  
    //modal is rendered on button click
    showModalHandler = (event) =>{
      this.setState({showModal:true});
    }
  
    //modal is hidden on button click inside modal
    hideModalHandler = (event) =>{
      this.setState({showModal:false});
    }

    //handler for when modal filter is turned on
    handleModalSwitch = (evt) => {
      evt.preventDefault();
      this.setState({filter: !this.state.filter});
    }
  
    handleZipInput = (event) => {
      this.setState({zip: event.target.value});
    }

    getLatLong = () => {
      const weatherURL = "http://api.openweathermap.org/data/2.5/weather?";
      const apiKey = "&appid=c681a7fcd870c24ab1f104b8df9e9f7e";
      const buildURL = "zip=";
      const zip = this.state.zip;
      var setURL = weatherURL + buildURL + zip + apiKey + "&units=imperial";
      axios.get(setURL).then(res => {
        this.setState({lat: res.data.coord.lat, lon: res.data.coord.lon});
        this.getTrails();
      });
    }

    getTrails = () => {
      //build the trail API request URL
      var getLat = this.state.lat;
      var getLon = "&lon=" + this.state.lon;
      var apiURL = "https://www.hikingproject.com/data/get-trails?lat=";
      var apiKey = "&maxDistance=10&key=200969017-49dfe1c23872438379f0a1e5e5314b8e";
      var buildLink = apiURL + getLat + getLon + apiKey;
      //send request to hiking trails api
      axios.get(buildLink).then(res => {
        console.log(res);
        this.setState({list: res.data.trails});
      })
    }

    handleZipButton = (evt) => {
      evt.preventDefault();
      this.getLatLong();
    }
  
  render() {
    return (
      <div>

        <h2>Nearby Trails:</h2>
        <p>Here, you can enter your zip code to see trails near you. If you've created a user profile, you can click the "Get trails just for me" button to filter the results based on your fitness level and desired challenege level.</p>
        <hr></hr>
        
        <form id="nearbyTrails" method="get">
	        <label>
          Zip Code:
          </label>
          <input type="text" name="zipCode" id="zip_input" size="30" maxlength="100" value={this.state.zip} onChange={this.handleZipInput.bind(this)}></input>
          <span id="weatherLat"></span> <span> </span> <span id="weatherLong"></span>
	        <br />
	        <button id="nearbyTrails" onClick={this.handleZipButton.bind(this)}>See nearby trails</button>
                  <button type="button"  onClick={this.showModalHandler.bind(this)}>Get hiking trails just for me!</button>

        </form>
        <FormModal modalSwitch={this.handleModalSwitch.bind(this)} showModal={this.state.showModal} hideModalHandler={this.hideModalHandler.bind(this)}></FormModal>
        <ul>
          {
            this.state.list.map((item) => {
              return (
                <TrailCard originCity={this.state.newCity} originState={this.state.newState} trailName={item.name} location={item.location} length={item.length} id = {item.id} difficulty={item.difficulty} latitude={item.latitude} longitude={item.longitude} summary={item.summary} imgMedium={item.imgMedium} />
              )
            })
          }
        </ul>
      </div>
    );
  }
    
  }