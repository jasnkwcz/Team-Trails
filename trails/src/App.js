import React , { Component } from "react";
import './Styles/App.css';
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Equipment from "./Components/Equipment";
import UserForm from "./Components/UserForm";
import Trails from "./Components/NeabyTrails/Trails";
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
        age: 0,
        city: "",
        state: "",
        zip: 0,
        height: 0,
        weight: 0,
        activity: 0,
        fitnessLevel: 0
      },
      location: {
        zip: 0,
        lat: 0,
        long: 0
      },
      currentTrail: {}

    }

  }




  updateText = (text) => {

    this.setState( text );

  }


  setCurrentTrail = (obj) => {
    this.setState({currentTrail: obj})
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


    let result = Math.round(calculatedFitness * 5 / 12);


    this.updateFitness(result);

    this.updateIsProfileCreated();


  }


  updateFitness(result) {

    let textWithFitness = prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        fitnessLevel: result
      }
    })

    this.setState(textWithFitness);

  };


  updateIsProfileCreated() {

    let textWithCreatedProf = prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        isProfileCreated: true
      }
    })

    this.setState(textWithCreatedProf);

  };


  deleteProfile(evt) {
    this.setState(
      {user: 
        {
        isProfileCreated : false,
        name: "",
        gender: "",
        age: 0,
        city: "",
        state: "",
        zip: 0,
        height: 0,
        weight: 0,
        activity: 0,
        fitnessLevel: 0
        }
      }
  );
    return;
  }

  getEquipment = (evt) => {
    evt.preventDefault();
    console.log(evt.target.value);
    this.setState({currentTrail: evt.target.value});
  }


  render() {
    return (
      <Router>
        <div>
          <h1 className="centerHeader"> 
            Hiking Trails Just For You!
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
              <Trails equipmentListener={this.getEquipment.bind(this)} userState={this.state.user} setCurrentTrail={this.setCurrentTrail.bind(this)}/>
            </Route>
            <Route exact path="/profile/edit">
              <UserForm 
              
              userState={this.state.user}
              calculateFitness={this.calculateFitness.bind(this)} 
              deleteProfile={this.deleteProfile.bind(this)} 
              updateText={this.updateText.bind(this)}

              />
            </Route>
            <Route path="/" component={Equipment}>
              <Equipment currentTrail={this.state.currentTrail}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

