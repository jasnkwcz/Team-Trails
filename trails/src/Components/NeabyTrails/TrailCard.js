import React, { Component } from "react";
import DirectionsButton from "../DirectionsButton";
import "./NearbyTrailsStyle.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class TrailCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            localCity: this.props.originCity,
            localState: this.props.originState
        }
    }

    render() {
        return(
        <div className="TrailCard">
          <div>
            <img src={this.props.imgMedium} alt={this.props.name} />
          </div>
            <div>
                <ul>
                    <p><h1>{this.props.trailName}</h1></p>
                    <p>Location: {this.props.location}</p>
                    <p>Length: {this.props.length} miles</p>
                    <p>Difficulty: {this.props.difficulty}</p>
                    <p>Trailhead: ({this.props.latitude}, {this.props.longitude})</p>
                    <p>Description: {this.props.summary}</p>
                    <br />
                    <Link to ={"trails/Equipment/"}>Equipment</Link>
                    <button id="Equipment">Equipment{this.props.id}</button>
                    <DirectionsButton userCity={this.state.localCity} userState={this.state.localState} latitude={this.props.latitude} longitude={this.props.longitude}/>
                </ul>
            </div>
        </div>
        )
    }
}