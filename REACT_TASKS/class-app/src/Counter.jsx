import React, { Component } from 'react';
import ErrorComponent from './ErrorComponent';

const ErrorComp = (props) => {
  return <div>{props.ignore}</div>;
};

export default class    Counter extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
      error: null,
      initializing: true,
    };
    this.increment = () => this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    this.decrement = () => this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("component did mount");
    console.log("_________________");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get snapshot before update");
    return null;
  }

  render() {
    console.log("Render");
    if(this.state.initializing){
        return <div>"Initializing..."</div>
    }
    if (this.props.showErrorComponent && this.state.error) {
      return <div>We have encountered an error {this.state.error.message}</div>;
    }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
        {this.props.showErrorComponent ? <ErrorComp/> : null}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component did update");
    console.log("_____________________");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.ignoreProp && this.state.ignoreProp !== nextProps.ignoreProp) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    console.log("_____________________");
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }
}
