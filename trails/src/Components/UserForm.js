import React, { Component } from "react";
import {
  Link
} from "react-router-dom";


export default class UserForm extends Component{
  constructor(props){
    super(props);
    
    this.calculateClick = this.calculateClick.bind(this);
    this.updateInfo = this.updateInfo.bind(this);

  }



  calculateClick(evt){

    evt.preventDefault();
  } 


  updateInfo(event) {
    let value = event.target.value;
    let name = event.target.name;

    this.props.updateText(prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value
      }
    })
    )
  }




    render(){

      let nameEdit = this.props.userState.name;
      let genderEdit = this.props.userState.gender;
      let ageEdit = this.props.userState.age;
      let cityEdit = this.props.userState.city;
      let stateEdit = this.props.userState.state;
      let zipEdit = this.props.userState.zip;
      let heightEdit = this.props.userState.height;
      let weightEdit = this.props.userState.weight;


      return (
        <div class="profilePages">
          <h2>Create Profile</h2>
          <h3>And calculate Your Fitness Level:</h3> 
          <form>
            Name: <input onChange={this.updateInfo} type="text" id="inputName" name="name" placeholder="e.g. Kevin (optional)" value={nameEdit} />
            <br />
            Gender: 
            <input onChange={this.updateInfo} type="radio" name="gender" Value="Male"  />Male
            <input onChange={this.updateInfo} type="radio" name="gender" Value="Female"  />Female
            <br />
            Age: <input onChange={this.updateInfo} type="number" id="inputAge" name="age" placeholder="e.g. 29" value={ageEdit} />
            <br />
            City Name: <input onChange={this.updateInfo} type="text" id="inputCity" name="city" placeholder="e.g. Corvallis" value={cityEdit} />
            <br />
            State (e.g. "OR"): <input onChange={this.updateInfo} type="text" id="inputState" name="state" placeholder="e.g. OR" value={stateEdit} />
            <br />
            Zip Code: <input onChange={this.updateInfo} type="number" id="inputZip" name="zip" placeholder="e.g. 97333" value={zipEdit} />
            <br />
            Height(in cm): <input onChange={this.updateInfo} type="number" id="inputHeight" name="height" placeholder="e.g. 160" value={heightEdit} />
            <br />
            Weight(in kg): <input onChange={this.updateInfo} type="number" id="inputWeight" name="weight" placeholder="e.g. 60.2" value={weightEdit} />
            <br />
            Daily Activity: 
            <select onChange={this.updateInfo} name="activity" id="activity">
              <option value={0}>Choose One Below:</option>
              <option value={1}>Not Active</option>
              <option value={2}>Slightly Active</option>
              <option value={3}>Moderately Active</option>
              <option value={4}>Very Active</option>
              <option value={5}>A Marathon Runner Level!</option>
            </select><br />

            {/* <span id="req" style={{color: 'red'}} /> */}

            <br />
            <button type="submit" id="calculateButton" >
              
              <Link id="calculateButton" className="navitem" to="/profile">Calculate</Link>

            </button>

          </form>

          <br />
          <br />
          <br />
          <Link className="home" exact to="/">Back to First Page</Link>
        </div>
      );
    }
  };