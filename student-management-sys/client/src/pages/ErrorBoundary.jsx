import React, { Component } from 'react';
import FallbackPage from './FallbackPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error:', error);
    console.error('Info:', info);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;