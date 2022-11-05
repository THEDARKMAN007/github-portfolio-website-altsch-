import { Link } from "react-router-dom";
import "./404.css";
export default function NotFound() {
  return (
    <div className="container_404">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
    </div>
  );
}
