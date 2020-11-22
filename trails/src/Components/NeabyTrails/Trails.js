import React, { Component } from "react";
import FormModal from "../FormModal";
import "./NearbyTrailsStyle.css";

export default class Trails extends Component {

    constructor(props){
      super(props);
      this.state = {
        showModal : false,
        zip: 0,
        lat: 0,
        long: 0
      }

    }
  
    //modal is rendered on button click
    showModalHandler = (event) =>{
      this.setState({showModal:true});
    }
  
    //modal is hidden on button click inside modal
    hideModalHandler = (event) =>{
      this.setState({showModal:false});
    }
  
    handleZipInput = (event) => {
      this.setState({zip: event.target.value});
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
          <input type="text" name="zipCode" id="zip_input" size="30" maxlength="100" value={this.state.zip} onChange={this.handleZipInput.bind(this)}/>
        <span id="weatherLat"></span> <span>, </span> <span id="weatherLong"></span>
	<br />
	<button id="nearbyTrails" type="submit">See nearby trails</button>
      
    </form>
        <button type="button" className="modalButton" onClick={this.showModalHandler.bind(this)}>Get hiking trails just for me!</button>
        <FormModal showModal={this.state.showModal} hideModalHandler={this.hideModalHandler.bind(this)}></FormModal>
      </div>
    );
  }
    
  }