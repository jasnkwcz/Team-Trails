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

        render() {
          return (
            <div className="FormModal">
              {this.props.showModal ? <FormContent  closeModal={this.props.hideModalHandler} switch={this.handleSwitch}/> : null}
            </div>
        );
    }
}
