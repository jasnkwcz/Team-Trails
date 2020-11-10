import React , { Component } from "react";
import './App.css';
import TrailCard from "./Components/TrailCard";
import FormModal from "./Components/FormModal";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import UserForm from "./Components/UserForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  

  render() {
    return (
      <Router>
        <div>
          <ul className="navlist">
            <li>
              <Link className="navitem" to="/">Home</Link>
            </li>
            <li>
              <Link className="navitem" to="/profile">User Profile</Link>
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
              <Profile />
            </Route>
            <Route exact path="/trails">
              <Trails />
            </Route>
            <Route exact path="/profile/edit">
              <UserForm />
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