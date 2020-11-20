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
    }


    render(){
        return(
            <div>
                <h2>Trail Name</h2>
                <h3>Location: lat/long</h3>
                <DirectionsButton />
                <Link to="/trails/equipment"><button>Equipment</button></Link>

                <div>
                    <h3> CITY {this.props.userState.city} STATE {this.props.userState.state} </h3>
                </div>

            </div>
        )
    }
}