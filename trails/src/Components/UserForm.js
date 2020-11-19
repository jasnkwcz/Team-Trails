import React, { Component } from "react";

export default class UserForm extends Component{
    render(){
      return (
        <div>
          <h2>User Profile</h2>
          <h3>Calculate Your Fitness Level:</h3> 
          <form action="nowhere">
            Name: <input type="text" id="inputName" name="name" placeholder="e.g. Kevin (optional)" />
            <br />
            Gender: 
            <input type="radio" name="gender" defaultValue="Male" />Male
            <input type="radio" name="gender" defaultValue="Female" />Female
            <br />
            Age: <input type="number" id="inputAge" name="age" placeholder="e.g. 29" />
            <br />
            City Name: <input type="text" id="inputCity" name="city" placeholder="e.g. Corvallis" />
            <br />
            State (e.g. "OR"): <input type="text" id="inputState" name="state" placeholder="e.g. OR" />
            <br />
            Zip Code: <input type="number" id="inputZip" name="zip" placeholder="e.g. 97333" />
            <br />
            Height(in cm): <input type="number" id="inputHeight" name="height" placeholder="e.g. 160" />
            <br />
            Weight(in kg): <input type="number" id="inputWeight" name="weight" placeholder="e.g. 60.2" />
            <br />
            Daily Activity: 
            <select name="activity" id="activity">
              <option value={0}>Choose One Below:</option>
              <option value={1}>Not Active</option>
              <option value={2}>Slightly Active</option>
              <option value={3}>Moderately Active</option>
              <option value={4}>Very Active</option>
              <option value={5}>A Marathon Runner Level!</option>
            </select><br />
            <span id="req" style={{color: 'red'}} />
          </form>
          <br />
          <button id="calculateButton">Calculate</button>
          <br />
          <br />
          <br />
          <Link className="home" exact to="/">Back to First Page</Link>
        </div>
      );
    }
  };