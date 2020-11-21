import React , { Component } from "react";
import './App.css';
import TrailCard from "./Components/TrailCard";
import FormModal from "./Components/FormModal";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Equipment from "./Components/Equipment";
import UserForm from "./Components/UserForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      user: {
        isProfileCreated : false,
        name: "",
        gender: "",
        age: null,
        city: "",
        state: "",
        zip: null,
        height: null,
        weight: null,
        activity: null,
        fitnessLevel: null
      },
      location: {
        lat: 0,
        long: 0
      }
    }

  }


  calculateFitness() {

    let calcDA = parseInt(this.state.user.activity);
    let calcAge = parseInt(this.state.user.age)
    let calcWeight =  parseInt(this.state.user.weight)
    let calcHeight = parseInt(this.state.user.height)

    let agePts = 0;
    let BMIpts = 0;

    let calculatedFitness = calcDA

    if(calcAge >= 6 && calcAge <= 17){
      agePts = 5
      calculatedFitness += 5
  } 
  else if (calcAge >= 18 && calcAge <= 64) {
      agePts = 3
      calculatedFitness += 3
  } 
  else if (calcAge >= 65) {
      agePts = 1
      calculatedFitness += 1
  } 
  else {
      agePts = 0
      calculatedFitness = 0
  }

  let BMI = calcWeight / ((calcHeight/100)**2)

  if (BMI >= 18.5 && BMI <= 24.9) {
      BMIpts = 2
      calculatedFitness += 2
  }

  let sum = calculatedFitness

  let result = Math.round(calculatedFitness * 5 / 12);




    let textWithFitness = prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        fitnessLevel: result
      }
    })
    this.setState(textWithFitness);




    let textWithCreatedProf = prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        isProfileCreated: true
      }
    })
    this.setState(textWithCreatedProf);

  }




  updateText = (text) => {

    this.setState( text );

  }




  deleteProfile(evt) {
    this.setState(
      {user: 
        {
        isProfileCreated : false,
        name: "",
        gender: "",
        age: null,
        city: "",
        state: "",
        zip: null,
        height: null,
        weight: null,
        activity: null,
        fitnessLevel: null
        }
      }
  );
    return;
  }


  render() {
    return (
      <Router>
        <div>
          <h1 className="centerHeader"> 
            Hiking Trails Just For You
          </h1>
          <nav> 
            <ul className="navlist">
              <li>
                <Link className="navitem" to="/">Home</Link>
              </li>
              <li>
              {
                this.state.user.isProfileCreated ?
                <Link className="navitem" to="/profile">My Profile</Link> :
                <Link className="navitem" to="/profile/edit">Create Profile</Link>
              } 
              </li>
              <li>
                <Link className="navitem" to="/trails">Nearby Trails</Link>
              </li>
            </ul>
          </nav>
        <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile 
              
              userState={this.state.user}
              calculateFitness={this.calculateFitness.bind(this)} 
              deleteProfile={this.deleteProfile.bind(this)}
              updateText={this.updateText.bind(this)}

              />
            </Route>
            <Route exact path="/trails">
              <TrailCard userState={this.state.user}/>
            </Route>
            <Route exact path="/profile/edit">
              <UserForm 
              
              userState={this.state.user}
              calculateFitness={this.calculateFitness.bind(this)} 
              deleteProfile={this.deleteProfile.bind(this)} 
              updateText={this.updateText.bind(this)}

              />
            </Route>
            <Route exact path="/trails/equipment">
              <Equipment />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}



class Trails extends Component {

  constructor(props){
    super(props);
    this.state = {
      showModal : false
    }
  }

  showModalHandler = (event) =>{
    this.setState({showModal:true});
  }

  hideModalHandler = (event) =>{
    this.setState({showModal:false});
  }



render() {
  return (
    <div>
      <h2>Nearby Trails:</h2>
      <hr></hr>
      <TrailCard />
      <button type="button" className="modalButton" onClick={this.showModalHandler.bind(this)}>Get hiking trails just for me!</button>
      <FormModal showModal={this.state.showModal} hideModalHandler={this.hideModalHandler.bind(this)}></FormModal>
    </div>
  );
}
  
}