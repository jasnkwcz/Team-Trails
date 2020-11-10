import React, { Component } from "react";
import DirectionsButton from "./DirectionsButton";

export default class TrailCard extends Component
{
    render(){
        return(
            <div>
                <h2>Trail Name</h2>
                <h3>Location: lat/long</h3>
                <DirectionsButton />
                <button>Equipment</button>
            </div>
        )
    }
}