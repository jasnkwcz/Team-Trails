import React, { Component } from "react";
import "../Styles/FormContent.css";

export default class FormContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle : false,
            difficulty: null
        }
    }

    togglestate(event) {
        event.preventDefault();
        this.setState({toggle: !this.state.toggle});
    }
    render() {
        return(
            <div>
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
                    <button>Save</button>
                    <button>Close</button>
                </form>
            </div>
        )
    }
}