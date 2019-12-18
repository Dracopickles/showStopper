import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header"
import Registration from "./components/Registration"
import LoginModal from "./components/LoginModal"
import HomePage from "./components/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    show: false
  }
  handleClose = () => {
    this.setState ({
      show: false
    })
  }
  handleShow = () => {
    this.setState ({
      show: true
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <LoginModal handleClose = {this.handleClose} show = {this.state.show} />
        <HomePage />
        <div>
          [footer] karl was here
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
