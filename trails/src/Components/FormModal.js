import React, { Component } from "react";
import FormContent from "./FormContent";
import "../Styles/FormModal.css";

export default class FormModal extends Component {


        render() {
          return (
            <div className="FormModal">
              {this.props.showModal ? <FormContent  handleModalDifficulty={this.props.handleModalDifficulty} handleModalClose={this.props.handleModalClose} handleModalSave={this.props.handleModalSave} handleModalCheckbox={this.props.handleModalCheckbox}/> : null}
            </div>
        );
    }
}
