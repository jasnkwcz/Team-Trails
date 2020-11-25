import React, { Component } from "react";
import "../Styles/FormContent.css";

export default class FormContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle : false,
            difficulty: 0,
            save: false,
            options: {
                easy: -1,
                medium: 0,
                hard: 1
            }
        }
        
    }

    togglestate(event) {
        event.preventDefault();
        this.setState({toggle: !this.state.toggle});
        //this.props.filter();
    }

    saveChoice(event){
        event.preventDefault();
        this.setState({save: true});
    }

    hideModal(event){
        event.preventDefault();
        console.log("clicked");
    }

    handleDropdown(evt){
        evt.preventDefault();
        this.setState({difficulty: evt.target.value});
    }


    render() {

        return(
            <div className="FormContent">
                <form>
                    <label for="toggle">Get trails just for me: </label>
                    <button id="toggle" onClick={this.togglestate.bind(this)}>{(this.state.toggle ? <p>Off</p> : <p>On</p>)}</button>
                    <br>
                    </br><label for="difficulty">I want to feel: </label>
                    <select name="difficulty" id="difficulty" onChange={this.props.handleDiff}>
                        <option value={this.state.options.easy}>Chill and Easy</option>
                        <option value={this.state.options.medium}>On my level</option>
                        <option value={this.state.options.hard}>Challenged</option>
                    </select>
                    <br></br>
                    <button onClick={this.saveChoice.bind(this)}>Save</button>
                    <button onClick={this.props.closeModal.bind(this)}>Close</button>
                    {this.state.save === false ? null : <p>Preferences saved!</p>}
                </form>
            </div>
        )
    }
}