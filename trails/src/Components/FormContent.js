import React, { Component } from "react";
import "../Styles/FormContent.css";

export default class FormContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle : false,
            difficulty: null,
            save: false
        }
    }

    togglestate(event) {
        event.preventDefault();
        this.setState({toggle: !this.state.toggle});
    }

    saveChoice(event){
        event.preventDefault();
        this.setState({save: true});
    }

    hideModal(event){
        event.preventDefault();
        console.log("clicked");
    }

    render() {
        return(
            <div className="FormContent">
                <form>
                    <label for="toggle">Get trails just for me: </label>
                    <button id="toggle" onclick={this.togglestate.bind(this)}>{(this.state.toggle ? <p>Off</p> : <p>On</p>)}</button>
                    <br>
                    </br><label for="difficulty">I want to feel: </label>
                    <select name="difficulty" id="difficulty">
                        <option value="easy">Chill and Easy</option>
                        <option value="medium">On my level</option>
                        <option value="hard">Challenged</option>
                    </select>
                    <br></br>
                    <button onClick={this.saveChoice.bind(this)}>Save</button>
                    <button onClick={this.props.closeModal.bind(this)}>Close</button>
                </form>
            </div>
        )
    }
}