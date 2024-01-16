import React, { Component } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import menuData from "./data/data";
import MenuCard from "./components/Card";

class App extends Component {
  render() {
    const breakfastItems = menuData.breakfast;
    const lunchItems = menuData.lunch;
    const dinnerItems = menuData.dinner;
    return (
      <Router>
        <div className="App"> 
          <NavbarComponent />
          <Routes>
            <Route path= "/breakfast" element={<MenuCard menuItems={breakfastItems} />} />
            <Route path="/lunch" element={<MenuCard menuItems={lunchItems} />} />
            <Route path="/dinner" element={<MenuCard menuItems={dinnerItems} />} />

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
