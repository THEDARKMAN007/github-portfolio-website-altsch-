import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
  
  }
  render() {
    if (this.state.hasError) {
      return(<div className="flex flex-col items-center justify-center bg-blue-500 gap-6">
        <h1>Oops, we done goofed up</h1>;
        <Link to='/'>home</Link>
      </div>);
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
