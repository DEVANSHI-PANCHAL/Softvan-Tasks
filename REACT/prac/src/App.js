import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/Users/AddUser";

class App extends Component {
  render() {
    return <React.Fragment>
      <AddUser/>
    </React.Fragment>;
  }
}

export default App;
