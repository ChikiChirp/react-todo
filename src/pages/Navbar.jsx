import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        About
      </Link>
      <Link to="/todo" className="nav-link">
        Todo
      </Link>
    </nav>
  );
};

export default Navbar;
