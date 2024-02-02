// App.js
import React, { Component } from 'react';
import './App.css'; 

export default class App extends Component {
  state = {
    advice: '',
    loading: false,
  };
  api = "https://api.adviceslip.com/advice";

  fetchAdvice = () => {
    this.setState({ loading: true }); 
    fetch(this.api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { advice } = data.slip;
        this.setState({ advice, loading: false }); 
      });
  };

  render() {
    const { advice, loading } = this.state;
    return (
      <div>
        <button className="button" onClick={this.fetchAdvice} disabled={loading}>
          Get Advice
        </button>
        {loading && <div className="loader"></div>}
        {advice && !loading && <p className="advice">{advice}</p>}
      </div>
    );
  }
}
