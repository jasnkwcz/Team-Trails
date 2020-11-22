import React, { Component } from "react";

class Trails extends Component {

    constructor(props){
      super(props);
      this.state = {
        showModal : false
      }
    }
  
    showModalHandler = (event) =>{
      this.setState({showModal:true});
    }
  
    hideModalHandler = (event) =>{
      this.setState({showModal:false});
    }
  
  
  
  render() {
    return (
      <div>
        <h2>Nearby Trails:</h2>
        <hr></hr>
        <TrailCard />
        <button type="button" className="modalButton" onClick={this.showModalHandler.bind(this)}>Get hiking trails just for me!</button>
        <FormModal showModal={this.state.showModal} hideModalHandler={this.hideModalHandler.bind(this)}></FormModal>
      </div>
    );
  }
    
  }