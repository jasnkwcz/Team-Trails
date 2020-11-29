import React, { Component } from "react";
import FormModal from "../FormModal";
import "./NearbyTrailsStyle.css";
import axios from "axios";
import TrailCard from "./TrailCard";
import { useStore } from "../../App";

const TrailsStore = create(set => ({
  showModal : false,
        zip: "",
        lat: "",
        lon: "",
        list: [],
        newCity: this.props.userState.city,
        newState: this.props.userState.state,
        difficulty: 0,
        filter: false,
        levels: {
          green: 0,
          greenBlue: 1,
          blue: 2,
          blueBlack: 3,
          black: 4,
          dblack: 5
}))

export default function Trails(props) {
    const store = useStore();
    return(
        <div>

        <h2>Nearby Trails:</h2>
        <p>Here, you can enter your zip code to see trails near you. If you've created a user profile, you can click the "Get trails just for me" button to filter the results based on your fitness level and desired challenege level.</p>
        <hr></hr>
        <p>Current difficulty is: {this.state.difficulty}</p>
        
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

        <FormModal changeDiff={this.getDifficulty.bind(this)} modalSwitch={this.handleModalSwitch.bind(this)} showModal={this.state.showModal} hideModalHandler={this.hideModalHandler.bind(this)}></FormModal>
        <ul>
          {
            this.state.list.map((item) => {
              if (!this.renderTrail(item.difficulty)) {
                console.log("will not render trail of this difficulty");
                return null;
              }
              return (
                <TrailCard equipmentListener={this.props.equipmentListener} trailinfo={item} originCity={this.state.newCity} originState={this.state.newState} trailName={item.name} location={item.location} length={item.length} id={item.id} difficulty={item.difficulty} latitude={item.latitude} longitude={item.longitude} summary={item.summary} imgMedium={item.imgMedium} />
              )
            })
          }
        </ul>
      </div>
    )
}