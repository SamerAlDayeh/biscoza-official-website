import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
      <p className="notFoundDesc">
        It looks like nothing was found at this location. Maybe try to go back
        to our Home Page or press back to go to the previous page.
      </p>
      <div className="notFoundLink">
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
}

export default NotFound;
