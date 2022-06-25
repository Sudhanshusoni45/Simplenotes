import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to={"/home"} className="navbar-logo-link">
        <h2 className="navbar-logo">SimpleNote</h2>
      </Link>
    </header>
  );
};

export { Navbar };
