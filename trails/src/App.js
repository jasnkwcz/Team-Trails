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
        fname: "",
        lname: "",
        fitlevel: 0,
      },
      location: {
        lat: 0,
        long: 0
      }
    }

  }

  calculateFitness() {
    this.setState(
      {user: 
        {
        isProfileCreated : true,
        name: "",
        gender: "",
        age: null,
        city: "",
        state: "",
        zip: null,
        height: null,
        weight: null,
        activity: "",
        fitnessLevel: 0,
        }
      }
  );
    return;
  }


  deleteProfile() {
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
        activity: "",
        fitnessLevel: 0,
        }
      }
  );
    return;
  }


  render() {
    return (
      <Router>
        <div>
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
  
          <hr />
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile 
              
              calculateFitness={this.calculateFitness.bind(this)} 
              deleteProfile={this.deleteProfile.bind(this)} 

              />
            </Route>
            <Route exact path="/trails">
              <Trails />
            </Route>
            <Route exact path="/profile/edit">
              <UserForm 
              
              calculateFitness={this.calculateFitness.bind(this)} 
              deleteProfile={this.deleteProfile.bind(this)} 

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