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
        difficulty: -1,
        filter: false,
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

    //handler for when modal close button is clicked
    handleModalClose = (evt) => {
      //block standard event listener on button click
      evt.preventDefault();
      //check if the filter is active
      if (!this.state.filter)
      {
        //if the filter is off, set everything back to default
        this.setState({filter: -1, showModal: false})
      }
      //otherwise, just close the modal and allow filter to be applied
      else {
        this.setState({showModal: false});
      }

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
      if(zipInput != ""){
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

    /*
    filter = (evt) => {
      evt.preventDefault();
      this.setState({filter: !this.state.filter});
    }
*/
    //if return true, then the given trail should be rendered. otherwise if false, trail should not be rendered
    renderTrail = (traildiff) => {
      //calculate the desired difficulty based on user's fitness and filter preference
      //desired difficulty = userfitness + filteroption (min 0, max 5)
      let userdiff = this.props.userState.fitnessLevel + this.state.difficulty;
      if (userdiff < 0) { userdiff = 0; }
      if (userdiff > 5) { userdiff = 5; }
      //compare the objective difficulty of the trail (computed from state.levels) to the user's specified difficulty (as difficulty variable)
      if (this.state.levels[traildiff] === userdiff) { return true };
      return false;
    }

  
  render() {
    return (
      <div>
        <div className="topInfo">
        <h2>Nearby Trails:</h2>
        <p>Here, you can enter your zip code to see trails near you. If you've created a user profile, you can click the "Get trails just for me" button to filter the results based on your fitness level and desired challenege level.</p>
        <hr></hr>
        <p>Current difficulty is: {this.state.difficulty}</p>
        </div>
        <br></br>
        <form className="nearbyTrails" id="nearbyTrails" method="get">
          <label>
          Zip Code:
          <input type="text" name="zipCode" id="zip_input" size="30" maxlength="100" value={this.state.zip} onChange={this.handleZipInput.bind(this)}></input>
          </label>
          <br />
          <label>
          City Name:
          <input type="text" name="cityName" id="city_input" size="30" maxlength="100" value={this.state.inputCity} onChange={this.handleCityInput.bind(this)}></input>
          </label>
        
          <span id="weatherLat"></span> <span> </span> <span id="weatherLong"></span>
	        <br />
	        <button class="FormButton" id="nearbyTrails" onClick={this.handleZipButton.bind(this)}><span>See nearby trails</span></button>
          <span class="spacer">--</span>
          <button class="FormButton" type="button"  onClick={this.showModalHandler.bind(this)}><span>Get hiking trails just for me!</span></button>
          <span class="spacer">-</span>
        </form>

        <FormModal changeDiff={this.getDifficulty.bind(this)} modalSwitch={this.handleModalSwitch.bind(this)} showModal={this.state.showModal} hideModalHandler={this.hideModalHandler.bind(this)}></FormModal>
        <ul>
          {
            this.state.list.map((item) => {
              //check if the trail's difficulty is equal to the current filter difficulty
              if (!this.renderTrail(item.difficulty)) {
                console.log("will not render trail of this difficulty");
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