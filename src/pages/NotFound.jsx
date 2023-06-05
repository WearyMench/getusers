import "../styles/notFound.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="notFoundDiv">
      <h1>NotFound</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}

export default NotFound;
