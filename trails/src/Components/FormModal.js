import React, { Component } from "react";
import FormContent from "./FormContent";
import "../Styles/FormModal.css";

export default class FormModal extends Component {
  constructor(props){
    super(props);
    this.handleSwitch.bind(this);
  }

  handleSwitch = (evt) => {
    evt.preventDefault();
    this.props.handleModalSwitch();
  }

  changeDiff = (evt) => {
    evt.preventDefault();
    this.props.getDifficulty();
  }
/*
  handleFilter = (evt) => {
    evt.preventDefault();
    this.props.filter();
  }
*/


        render() {
          return (
            <div className="FormModal">
              {this.props.showModal ? <FormContent  filter={this.props.filter} handleDiff={this.props.changeDiff} closeModal={this.props.hideModalHandler} switch={this.handleSwitch}/> : null}
            </div>
        );
    }
}
