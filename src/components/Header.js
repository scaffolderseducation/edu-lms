import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/scaffolders-logo.png";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Header() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="se-header">
      <div className="se-header-left">
        <Link to="/">
          <img src={logo} alt="Scaffolders Education" className="se-logo" />
        </Link>
        <div>
          <h1 className="se-title">Scaffolders Education</h1>
          <p className="se-tagline">Learn | Qualify | Succeed</p>
        </div>
      </div>

      <nav className="se-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/courses" className={location.pathname === "/courses" ? "active" : ""}>Courses</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        
        {user ? (
          <>
            <Link to="/dashboard" className="se-login-btn">Dashboard</Link>
            <button onClick={() => signOut(auth)} className="se-logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/login" className="se-login-btn">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;

