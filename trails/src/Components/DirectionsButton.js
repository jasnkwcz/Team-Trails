import React, { Component} from "react";
import './DirectionsButton.css'

export default class DirectionsButton extends Component{
    constructor(props) {
        super(props);

        this.state = {
            city : this.props.userCity,
            state : this.props.userState,
            lat: this.props.latitude,
            long: this.props.longitude
        }
    }
    
    getDirections(event){
        event.preventDefault();

        const url = "https://www.google.com/maps/dir/?api=1&origin=" + this.state.city + "+" + this.state.state + "&destination=" + this.state.lat + "," + this.state.long;
        window.open(url, "_blank");
    }

    render() {
        return(
            <div>
                <button className="directionsButton" onClick={this.getDirections.bind(this)}><span>Directions</span></button>
            </div>
            
        )
    }
}