import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {}
  render() {
    if (this.state.hasError) {
      return (
        <div className="relative h-[100vh] w-[100vw]">
        <div className="flex flex-col gap-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1>Oops, we done goofed up</h1>;<Link to="/">home</Link>
        </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;