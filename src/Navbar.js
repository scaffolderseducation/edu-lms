import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/scaffolders-logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      {/* LEFT — LOGO + TITLE */}
      <div className="nav-left">
        <img src={logo} alt="Scaffolders" className="nav-logo" />
        <h2>Scaffolders Education</h2>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        <Link to="/blog">Blog</Link>
      </div>

    </nav>
  );
};

export default Navbar;
