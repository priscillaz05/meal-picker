// src/Navbar.jsx

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navitem"> Home </Link>
      <Link to="/weekly-plan" className="navitem">Weekly Plan</Link>
    </nav>
  );
}

export default Navbar;