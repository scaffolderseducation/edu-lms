// src/Signup.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");

    if (!name || !country || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      // ✅ Create Firebase account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // ✅ Update Firebase profile
      await updateProfile(user, {
        displayName: name,
      });

      // ✅ Save user in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        country,
        entryPaid: false,
        certificatePaid: false,
        quizCompleted: false,
        createdAt: new Date(),
      });

      // ✅ Save locally for existing LMS compatibility
      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          name,
          email,
          country,
          entryPaid: false,
          certificatePaid: false,
          quizCompleted: false,
        })
      );

      alert("Signup successful!");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      if (err.code === "auth/email-already-in-use") {
        setError("Email already registered.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="auth-title">Scaffolders Education</h2>

        <p className="auth-subtitle">
          Create Your Learning Account
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="auth-input"
          />

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="auth-input"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="auth-input"
          />

          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "SIGN UP"}
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;