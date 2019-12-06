import tv from "../tv-icon.png";
import React from "react";
// import "./App.css";

// By extending the React.Component class, Counter inherits functionality from it
class Header extends React.Component {
  // Setting the initial state of the Counter component
  // The render method returns the JSX that should be rendered
  render() {
    return (
<div className="App-header">
<img src={tv} className="App-logo" alt="tv" />
<h2>Welcome to Watcher</h2>
</div>
    );
  }
}

export default Header;
