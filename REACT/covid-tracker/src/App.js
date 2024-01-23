import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Covid from "./Components/Covid";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Covid Tracker</h2>
        <Covid/>
      </React.Fragment>
    );
  }
}

export default App;
