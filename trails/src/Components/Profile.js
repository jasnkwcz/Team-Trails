import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

export default class Profile extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     recommend: {
        //         1: "easy",
        //         2: "intermediate",
        //         3: "challenging",
        //         4: "difficult",
        //         5: "impossible"
        //     }
        // };
        this.delClick = this.delClick.bind(this);
    }

    
    delClick(evt){
      this.props.deleteProfile();
      evt.preventDefault();
    }
    
    
    // calculateFitLevel(DA, age, kg, cm) {
    //     let result = parseInt(DA)
    //     let agePts = 0
    //     let BMIpts = 0
    
    //     if(age >= 6 && age <= 17){
    //         agePts = 5
    //         result += 5
    //     } 
    //     else if (age >= 18 && age <= 64) {
    //         agePts = 3
    //         result += 3
    //     } 
    //     else if (age >= 65) {
    //         agePts = 1
    //         result += 1
    //     } 
    //     else {
    //         agePts = 0
    //         result = 0
    //     }
    
    //     let BMI = kg / ((cm/100)**2)
    
    //     if (BMI >= 18.5 && BMI <= 24.9) {
    //         BMIpts = 2
    //         result += 2
    //     }
    
    //     let sum = result
    
    //     result = Math.round(result * 5 / 12);
    
    //     document.getElementById("showWork1").textContent = `${Math.round(BMI*10)/10} = ${kg} / (${cm}/100)^2`
    //     document.getElementById("showWork2").textContent = `${sum} = ${DA} + ${agePts} + ${BMIpts}`
    //     document.getElementById("showWork3").textContent = `${result} = round(${sum} * 5 / 12)`
    
    //     return result;
    // }
    

    componentDidMount() {
      this.props.calculateFitness();
    }
    
    render(){
      
      let name = this.props.userState.name;
      let gender = this.props.userState.gender;
      let age = this.props.userState.age;
      let city = this.props.userState.city;
      let state = this.props.userState.state;
      let zip = this.props.userState.zip;
      let height = this.props.userState.height;
      let weight = this.props.userState.weight;

      let fitness = this.props.userState.fitnessLevel

      let activities = [
        "Not Active",
        "Slightly Active",
        "Moderately Active",
        "Very Active",
        "A Marathon Runner Level!"
      ];

      let activityNum = this.props.userState.activity;
      let activity = activities[activityNum - 1];



      let recommendations = [
        "the easiest",
        "some easy",
        "some intermediate level",
        "some challenging",
        "the most challenging"
      ];

      let recommendation = recommendations[fitness - 1];


      function localCalc(activityNum, age, weight, height) {

        let result = parseInt(activityNum)
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
    
        let BMI = weight / ((height/100)**2)
    
        if (BMI >= 18.5 && BMI <= 24.9) {
            BMIpts = 2
            result += 2
        }
    
        let sum = result

        return [sum, activityNum, agePts, BMIpts];

      }

      let calcArr = localCalc(activityNum, age, weight, height);

      let sum = calcArr[0];
      let DA = calcArr[1];
      let agePts = calcArr[2];
      let BMIpts = calcArr[3];



      return (
        <div class="profilePages">
          <h2>My Profile</h2>
          Name: <span id="showName">{name}</span><br />
          Gender: <span id="showGender">{gender}</span><br />
          Age: <span id="showAge">{age}</span><br />
          City: <span id="showCity">{city}</span><br />
          State: <span id="showState">{state}</span><br />
          Zip Code: <span id="showZip">{zip}</span><br />
          Height: <span id="showHeight">{height}</span>cm<br />
          Weight: <span id="showWeight">{weight}</span>kg<br />
          Daily Activity: <span className="showActivity">{activity}</span><br />
          <p style={{color: 'green', fontWeight: 'bold'}}>Fitness Level: <span id="showActivityNum">{fitness}</span></p>
          <br />
          <p>
      Your Fitness Level has been calculated to <span className="level" style={{color: 'green'}}>{fitness}</span>. Here's the formula:<br />
          </p>
          <div class="points">
            <strong>Daily Activity:</strong><br /><table>
              <tbody><tr />
                <tr> <th>Not Active</th>            <td>+1 point</td>  </tr>
                <tr> <th>Slightly Active</th>       <td>+2 points</td> </tr>
                <tr> <th>Moderately Active</th>     <td>+3 points</td>  </tr>
                <tr> <th>Very Active</th>           <td>+4 points</td>  </tr>
                <tr> <th>A Marathon Runner!</th>    <td>+5 points</td> </tr>
              </tbody></table>
          </div>
          <div class="points">
            <strong>Age:</strong><br /><table>
              <tbody><tr />
                <tr> <th>6 ~ 17</th>  <td>+5 points</td> </tr>
                <tr> <th>18 ~ 64</th> <td>+3 points</td> </tr>
                <tr> <th>65 ~</th>    <td>+1 point</td>  </tr>
                <tr> <th>Other</th> <td>+0 points</td> </tr>
              </tbody></table>
          </div>
          <div class="points">
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
            <span id="showWork1">
              {Math.round(this.props.userState.weight/((height/100)**2)*10)/10} = {weight} / ({height}/100)^2
            </span><br />
            <span id="showWork2">
              {sum} = {DA} + {agePts} + {BMIpts}
            </span><br />
            <span id="showWork3">
              {fitness} = round({sum} * 5 / 12)
            </span><br />
          </p>
          <br />
          <p>This means that we will recommend you <span id="recommend" style={{color: 'green'}}>{recommendation}</span> trails available.</p>
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
            
          <Link  id="deleteButton" className="navitem" to="/profile/edit">Delete Profile</Link>
          
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