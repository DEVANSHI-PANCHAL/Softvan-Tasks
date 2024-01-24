import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Greetings from './Components/Greetings';
import classCounter from './Hooks/classComp';
import UseState from './Hooks/UseState';
import ToDoList from './miniProjects/ToDoList';
import BasicForm from './forms/BasicForm';
import UseEffectComp from './Hooks/UseEffectComp.jsx';
import WindowSize from './miniProjects/WindowSize.jsx';
import ApiCall from './miniProjects/ApiCall.jsx';
import UseRefComp from './Hooks/UseRefComp.jsx';
import UseReducerComp from './Hooks/UseReducerComp.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter/> */}

        {/* <Greetings/> */}
        {/* <classCounter/> */}
        {/* <Props/> */}
        {/* <UseState/> */}
        {/* <ToDoList/> */}
        {/* <BasicForm/> */}
      {/* <UseEffectComp/> */}
      {/* <WindowSize/> */}
      {/* <ApiCall/> */}
      {/* <UseRefComp/> */}
      <UseReducerComp/>
      </div>
    );
  }
}

export default App;
