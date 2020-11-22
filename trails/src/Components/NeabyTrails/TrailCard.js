import React, { Component } from "react";
import "./NearbyTrailsStyle.css";

export default class TrailCard extends Component {

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
                    <p>Trailhead: ({this.props.latitude}, ${this.props.longitude})</p>
                    <p>Description: {this.props.summary}</p>
                    <br />
                    <button id="Equipment" type="submit">Equipment</button><button id="Navigate" type="submit">Directions</button>
                </ul>
            </div>
        </div>
        )
    }
}