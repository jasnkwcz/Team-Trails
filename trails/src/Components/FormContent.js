import React, { Component } from "react";
import "../Styles/FormContent.css";

export default class FormContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            options: {
                easy: -1,
                medium: 0,
                hard: 1
            }
        }
        
    }


    render() {

        return(
            <div className="FormContent">
                <form>
                    <label htmlFor="filterCheckBox">Get trails just for me: </label>
                    <input type="checkbox" name="filterCheckBox" onChange={this.props.handleModalCheckbox}></input>
                    <br>
                    </br><label for="difficulty">I want to feel: </label>
                    <select name="difficulty" id="difficulty" onChange={this.props.handleModalDifficulty}>
                        <option value={this.state.options.easy}>Chill and Easy</option>
                        <option value={this.state.options.medium}>On my level</option>
                        <option value={this.state.options.hard}>Challenged</option>
                    </select>
                    <br></br>
                    <button onClick={this.props.handleModalSave}>Save</button>
                    <button onClick={this.props.handleModalClose}>Close</button>
                </form>
            </div>
        )
    }
}
