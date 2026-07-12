// src/components/Header.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/scaffolders-logo.png";

function Header() {
  const location = useLocation();

  return (
    <header className="se-header">

      <div className="se-header-left">

        <Link to="/">
          <img
            src={logo}
            alt="Scaffolders Education"
            className="se-logo"
          />
        </Link>

        <div>
          <h1 className="se-title">
            Scaffolders Education
          </h1>

          <p className="se-tagline">
            Learn • Qualify • Succeed
          </p>
        </div>

      </div>

      <nav className="se-nav">

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/courses"
          className={location.pathname === "/courses" ? "active" : ""}
        >
          Courses
        </Link>

        <Link
          to="/blog"
          className={location.pathname.startsWith("/blog") ? "active" : ""}
        >
          Blogs
        </Link>

        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>

        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>

        <Link
          to="/login"
          className="se-login-btn"
        >
          Login
        </Link>

        <Link
          to="/courses"
          className="se-enroll-btn"
        >
          Enroll Now
        </Link>

      </nav>

    </header>
  );
}

export default Header;