import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/scaffolders-logo.jpeg";

const LandingPage = () => (
  <div style={{ textAlign: "center", paddingTop: "80px" }}>
    <img src={logo} alt="Scaffolders Logo" width="120" />
    <h1>Welcome to Scaffolders Education</h1>
    <p>Empowering learners through practical, project-based courses.</p>
    <Link to="/signup">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
