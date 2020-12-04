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
        inputCity: "",
        newCity: this.props.userState.city,
        newState: this.props.userState.state,
        difficulty: null,
        filter: false,
        filterSave: false,
        levels: {
          green: 0,
          greenBlue: 1,
          blue: 2,
          blueBlack: 3,
          black: 4,
          dblack: 5
        }
      }
      this.getTrails.bind(this);
      this.renderTrail.bind(this);

    }
  
    // Functions to handle Zip and City input from the user.
    handleZipInput = (event) => {
      this.setState({zip: event.target.value});
    }

    handleCityInput = (event) => {
      this.setState({inputCity: event.target.value});
    }    

    // function for getting lat and long of the trail
    getLatLong = () => {
      const weatherURL = "http://api.openweathermap.org/data/2.5/weather?";
      const apiKey = "&appid=c681a7fcd870c24ab1f104b8df9e9f7e";

      const buildZipURL = "zip=";
      const zipInput = this.state.zip;

      const buildCityURL = "q=";
      const cityInput = this.state.inputCity;

      // Determining if the user input a zip code or city name.
      if(zipInput !== ""){
        var setURL = weatherURL + buildZipURL + zipInput + apiKey + "&units=imperial";
      }
      else{
        var setURL = weatherURL + buildCityURL + cityInput + apiKey + "&units=imperial";
      }


      axios.get(setURL).then(res => {
        this.setState({lat: res.data.coord.lat, lon: res.data.coord.lon});
        this.getTrails();
      });
    }

    //handle modal open button
    handleModalOpen = (evt) => {
      evt.preventDefault();
      this.setState({showModal: true});
    }

    //handle modal close button
    //when modal is closed, check if settings have been saved. if yes, then no action needed except to close the modal. if no, then reset the filter save state to false and the difficulty to null
    handleModalClose = (evt) => {
      evt.preventDefault();
      if (!this.state.filterSave)
      {
        this.setState({difficulty: null});
        this.setState({filter: false});
      }
      else{
      }
        this.setState({showModal: false});
      
      
    }

    //handle modal save button
    //if the save button is clicked, then set the filter save state to true, which will be checked by the modal close function
    handleModalSave = (evt) => {
      evt.preventDefault();
      this.setState({filterSave: true});
    }

    //handle filter on/off checkbox
    handleModalCheckbox = (evt) => {
      this.setState({filter: !this.state.filter});    
      console.log(this.state); 
    }

    //handle modal difficulty change
    handleModalDifficulty = (evt) => {
      this.setState({difficulty: Number(evt.target.value)});
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

    getDifficulty = (evt) => {
      evt.preventDefault();
      this.setState({difficulty: evt.target.value});
    }

    
    //if return true, then the given trail should be rendered. otherwise if false, trail should not be rendered
    renderTrail = (trail) => {
      //if user filter is off, return true (render all trails)
      if (!this.state.filter) return true;
      //get difficulty of given trail
      let trailDifficulty = trail.difficulty;
      console.log("the difficulty of this trail is: ", trail.difficulty);
      //get user filter settings
      let filterDifficulty = this.state.difficulty;
      console.log("the user's filter difficulty setting is: ", this.state.difficulty);
      //get user fitness data
      let userFitness = this.props.userState.fitnessLevel;
      console.log("the user's fitness level is: ", this.props.userState.fitnessLevel);
      if (userFitness === null)
      {
        userFitness = 0;
      }
      //compute the filter based on the user fitness + filter setting
      let filterSetting = Number(filterDifficulty) + Number(userFitness);
      console.log("current filter setting is ", filterSetting);
      //compare the filter setting to the trail difficulty
      if (filterSetting !== trailDifficulty)
      {
        return false;
      }
      return true;
    }

  
  render() {
    return (
      <div>
        <div className="topInfo">
        <h2>Nearby Trails:</h2>
        <p>Here, you can enter your zip code to see trails near you. If you've created a user profile, you can click the "Get trails just for me" button to filter the results based on your fitness level and desired challenege level.</p>
        <hr></hr>
        </div>
        <br></br>
        <div></div>
        <form className="nearbyTrails" id="nearbyTrails" method="get">
          <label htmlFor="zipCode">
          Zip Code:
          <input type="text" name="zipCode" id="zip_input" size="30" maxlength="100" value={this.state.zip} onChange={this.handleZipInput.bind(this)}></input>
          </label>
          <br />
          <label className="nearbyInput">
          City Name:
          <input type="text" name="cityName" id="city_input" size="30" maxlength="100" value={this.state.inputCity} onChange={this.handleCityInput.bind(this)}></input>
          </label>
        
          <span id="weatherLat"></span> <span> </span> <span id="weatherLong"></span>
	        <br />
	        <button class="FormButton" id="nearbyTrails" onClick={this.handleZipButton.bind(this)}><span>See nearby trails</span></button>
          <span class="spacer">--</span>
          <button class="FormButton" type="button"  onClick={this.handleModalOpen.bind(this)}><span>Get hiking trails just for me!</span></button>
          <span class="spacer">-</span>
        </form>


        <FormModal showModal={this.state.showModal} handleModalClose={this.handleModalClose.bind(this)} handleModalCheckbox={this.handleModalCheckbox.bind(this)} handleModalSave={this.handleModalSave.bind(this)} handleModalDifficulty={this.handleModalDifficulty.bind(this)}></FormModal>
        <ul>
          {
            this.state.list.map((item) => {
              //check if the trail's difficulty is equal to the current filter difficulty
              if (!this.renderTrail(item)) {
                return null;
              }
              return (
                <TrailCard handleEquipmentButton={this.props.setCurrentTrail} equipmentListener={this.props.equipmentListener} trailinfo={item} originCity={this.state.newCity} originState={this.state.newState} trailName={item.name} location={item.location} length={item.length} id={item.id} difficulty={item.difficulty} latitude={item.latitude} longitude={item.longitude} summary={item.summary} imgMedium={item.imgMedium} />
              )
            })
          }
        </ul>
      </div>
    );
  }
    
}