import React, { Component } from "react";
import FormContent from "./FormContent";
import "../Styles/FormModal.css";

export default class FormModal extends Component {
        render() {
          return (
            <div className="FormModal">
              {this.props.showModal ? <FormContent  closeModal={this.props.hideModalHandler} /> : null}
            </div>
        );
    }
}
