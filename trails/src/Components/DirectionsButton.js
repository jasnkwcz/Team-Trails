import React, { Component} from "react";

export default class DirectionsButton extends Component{


    getDirections(event){
        event.preventDefault();
        const url = "https://www.google.com/maps/dir/?api=1&origin=Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA";
        window.open(url, "_blank");
    }

    render() {
        return(
            <div>
                <button className="directionsButton" onClick={this.getDirections.bind(this)}> Directions </button>
            </div>
            
        )
    }
}