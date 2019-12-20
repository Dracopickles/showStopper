import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header"
// import Registration from "./components/Registration"
import LoginModal from "./components/LoginModal"
import HomePage from "./components/HomePage"
// import ShowGrid from "./components/ShowGrid"
import { FixedSizeList as List } from 'react-window';
import 'bootstrap/dist/css/bootstrap.min.css';

const Column = ({ index, style }) => (
  <div style={style}>Column {index}</div>
);

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
        <List
    height={75}
    itemCount={1000}
    itemSize={100}
    layout="horizontal"
    width={300}
  >
    {Column}
  </List>

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
