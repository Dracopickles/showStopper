import React, { Component } from "react";
// import tv from "./tv-icon.png";
import "./App.css";
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          [login form]
        </div>
        <div>
          [footer]
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
