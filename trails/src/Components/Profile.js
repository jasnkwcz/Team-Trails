import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            recommend: {
                1: "easy",
                2: "intermediate",
                3: "challenging",
                4: "difficult",
                5: "impossible"
            }
        };
        this.delClick = this.delClick.bind(this);
    }

    
    delClick(evt){
      this.props.deleteProfile();
      evt.preventDefault();
    }
    
    
    calculateFitLevel(DA, age, kg, cm) {
        let result = parseInt(DA)
        let agePts = 0
        let BMIpts = 0
    
        if(age >= 6 && age <= 17){
            agePts = 5
            result += 5
        } 
        else if (age >= 18 && age <= 64) {
            agePts = 3
            result += 3
        } 
        else if (age >= 65) {
            agePts = 1
            result += 1
        } 
        else {
            agePts = 0
            result = 0
        }
    
        let BMI = kg / ((cm/100)**2)
    
        if (BMI >= 18.5 && BMI <= 24.9) {
            BMIpts = 2
            result += 2
        }
    
        let sum = result
    
        result = Math.round(result * 5 / 12);
    
        document.getElementById("showWork1").textContent = `${Math.round(BMI*10)/10} = ${kg} / (${cm}/100)^2`
        document.getElementById("showWork2").textContent = `${sum} = ${DA} + ${agePts} + ${BMIpts}`
        document.getElementById("showWork3").textContent = `${result} = round(${sum} * 5 / 12)`
    
        return result;
    }
    
    
    render(){
      return (
        <div>
          <h2>My Profile</h2>
          Name: <span id="showName">"?"</span><br />
          Gender: <span id="showGender">"?"</span><br />
          Age: <span id="showAge">"?"</span><br />
          City: <span id="showCity">"?"</span><br />
          State: <span id="showState">"?"</span><br />
          Zip Code: <span id="showZip">"?"</span><br />
          Height: <span id="showHeight">"?"</span>cm<br />
          Weight: <span id="showWeight">"?"</span>kg<br />
          Daily Activity: <span className="showActivity">"?"</span><br />
          <p style={{color: 'green', fontWeight: 'bold'}}>Fitness Level: <span id="showActivityNum">"?"</span></p>
          <br />
          <p>
            Your Fitness Level has been calculated to <span className="level" style={{color: 'green'}}>{this.state.recommend[1]}</span>.. Here's the formula:<br />
          </p><div>
            <strong>Daily Activity:</strong><br /><table>
              <tbody><tr />
                <tr> <th>Not Active</th>            <td>+1 point</td>  </tr>
                <tr> <th>Slightly Active</th>       <td>+2 points</td> </tr>
                <tr> <th>Moderately Active</th>     <td>+3 points</td>  </tr>
                <tr> <th>Very Active</th>           <td>+4 points</td>  </tr>
                <tr> <th>A Marathon Runner!</th>    <td>+5 points</td> </tr>
              </tbody></table>
          </div>
          <div>
            <strong>Age:</strong><br /><table>
              <tbody><tr />
                <tr> <th>6 ~ 17</th>  <td>+5 points</td> </tr>
                <tr> <th>18 ~ 64</th> <td>+3 points</td> </tr>
                <tr> <th>65 ~</th>    <td>+1 point</td>  </tr>
                <tr> <th>Other</th> <td>+0 points</td> </tr>
              </tbody></table>
          </div>
          <div>
            <strong>BMI (kg/m^2):</strong><br /><table>
              <tbody><tr />
                <tr> <th>18.5 ~ 24.9</th>  <td>+2 points</td> </tr>
                <tr> <th>Other</th> <td>+0 points</td> </tr>
              </tbody></table>
          </div>
          <p />
          <p>
            <strong>Formula:</strong><br />
            BMI = kg / (cm/100)^2<br />
            Sum = Daily Activity Points + Age Points + BMI Points<br />
            Fitness Level = round(Sum * 5 / 12)
          </p>
          <p style={{color: 'green'}}>
            <span id="showWork1" /><br />
            <span id="showWork2" /><br />
            <span id="showWork3" />
          </p>
          <br />
          <p>This means that we will recommend you <span id="recommend" style={{color: 'green'}} /> trails available.</p>
          <p>
            But as your Fitness Level changes, your recommentations will also change. <br />
            It may increase as you become more active and have the right weight, <br />
            or it may decrease as you become less active, fall off the healthy weight, or age really old. <br />
            So make sure to keep updating your profile info by clicking "Edit Profile" below!
          </p>
          <Link className="editprofile" exact to="/profile/edit">Edit profile</Link>
          <br />
          <br />
          <button id="delete" onClick={this.delClick}>
            
          <Link id="deleteButton" className="navitem" to="/profile/edit">Delete Profile</Link>
          
          </button>
          <br/ >
          <br/ >
          <Link className="home" exact to="/">Back to First Page</Link>
          <br />
          <br />
        </div>
      );
    }
  };