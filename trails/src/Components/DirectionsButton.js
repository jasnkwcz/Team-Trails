import React, { Component} from "react";

export default class DirectionsButton extends Component{
    /*constructor(props) {
        super(props);
        this.state = {
            lat : xdescribe,
            long : y,
        }
    }
    provideLatLong() {
        return (this.state);
    }
*/

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