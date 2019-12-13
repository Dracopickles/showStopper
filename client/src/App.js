import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header"
import Login from "./components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
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
