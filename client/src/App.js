import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header"
// import Registration from "./components/Registration"
import LoginModal from "./components/LoginModal"
import HomePage from "./components/HomePage"
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer"
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
        <Header handleShow={this.handleShow}/>
        <LoginModal handleClose = {this.handleClose} show = {this.state.show} />
        <HomePage />
        <AutoSizer>
          {({ width }) => (
          
          <List
          height={150}
          itemCount={15}
          itemSize={100}
          layout="horizontal"
          width={width}
        >
          {Column}
          </List>)}
        </AutoSizer>

      </div>
    );
  }
}

export default App;
