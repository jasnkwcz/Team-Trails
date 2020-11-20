import React, { Component } from "react";
import DirectionsButton from "./DirectionsButton";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class TrailCard extends Component
{
    constructor(props){
        super(props);

        this.state = {
            startCity : this.props.userState.city,
            startState : this.props.userState.state
        }


    }


    render(){
        return(
            <div>
                <h2>Trail Name</h2>
                <h3>Location: lat/long</h3>
                <DirectionsButton userCity={this.state.startCity} userState={this.state.startState}/>
                <Link to="/trails/equipment"><button>Equipment</button></Link>

            </div>
        )
    }
}