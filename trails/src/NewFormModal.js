import React from "react";
import create from 'zustand';
import "./Styles/FormModal.css";

export default function NewFormModal() {
    const saveModal = useStore(state => state.modaSave);
    const closeModal = useState(state => state.modaOn);
    const filter = useState(state => state.modalToggleFilter);
    const save = useStore(state => state.modalSave);
    const close = useStore(state => state.modalOn);

    return(
        <div className="FormModal">
            <form>
                    <label for="toggle">Get trails just for me: </label>
                    <input type="checkbox" name="toggle" id="toggle" onClick={filter}></input>
                    <br>
                    </br><label for="difficulty">I want to feel: </label>
                    <select name="difficulty" id="difficulty" onChange={}>
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