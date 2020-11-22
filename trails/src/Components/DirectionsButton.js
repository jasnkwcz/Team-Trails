import React, { Component} from "react";

export default class DirectionsButton extends Component{
    constructor(props) {
        super(props);

        this.state = {
            city : this.props.userCity,
            state : this.props.userState
        }
    }
    
    provideLatLong() {
        return (this.state);

        
        
    }


    getDirections(event){
        event.preventDefault();

        const url = "https://www.google.com/maps/dir/?api=1&origin=" + this.state.city + "+" + this.state.state + "&destination=Pike+Place+Market+Seattle+WA";
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