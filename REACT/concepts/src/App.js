import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Greetings from './Components/Greetings';
import classCounter from './Hooks/classComp';
import UseState from './Hooks/UseState';
import ToDoList from './miniProjects/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter/>*/}

        {/* <Greetings/> */}
        {/* <classCounter/> */}
        {/* <Props/> */}
        {/* <UseState/> */}
        <ToDoList/>
      </div>
    );
  }
}

export default App;
