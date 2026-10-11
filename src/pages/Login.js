// src/Login.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

import logo from "../assets/scaffolders-logo.png";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // ==============================
  // LOGIN FUNCTION
  // ==============================

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;
        let userData = { uid: user.uid, email: user.email, name: user.displayName || "" };
        try {
          let userDocSnap = await getDoc(doc(db, "users", user.uid));
          if (!userDocSnap.exists() && user.email) {
            userDocSnap = await getDoc(doc(db, "users", user.email));
          }
          if (userDocSnap.exists()) {
            const docData = userDocSnap.data();
            userData = {
              ...userData,
              ...docData,
              name: docData.name || docData.displayName || docData.fullName || user.displayName || "",
            };
          }
        } catch (e) {
          console.error("Could not fetch user doc", e);
        }

        if (!userData.name && user.email) {
          if (user.email.toLowerCase().includes("sarika")) {
            userData.name = "Sarika Jain";
          } else {
            const local = user.email.split("@")[0].replace(/[0-9]/g, "");
            const parts = local.split(/[._-]+/).filter(Boolean);
            userData.name = parts.length > 0
              ? parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ")
              : user.email.split("@")[0];
          }
        }
        if (!userData.country) {
          userData.country = "India";
        }
        localStorage.setItem("user", JSON.stringify(userData));
        
        alert("Login Successful ✅");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert(error.message);

    } finally {

      setLoading(false);
    }
  };

  // ==============================
  // FORGOT PASSWORD
  // ==============================

  const [resetLoading, setResetLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email address in the field above first.");
      return;
    }

    if (resetLoading) return;

    try {
      setResetLoading(true);
      await sendPasswordResetEmail(auth, email);

      alert(
        "Password reset email sent successfully ✅\n\nImportant:\n1. Please check your latest email (inbox or spam folder).\n2. If multiple emails arrived, click ONLY the link from the most recent email (older links expire automatically).\n3. Click the link once and enter your new password."
      );
    } catch (error) {
      console.error("Forgot Password Error:", error);
      alert(error.message);
    } finally {
      // Cooldown to prevent multiple simultaneous clicks that invalidate links
      setTimeout(() => setResetLoading(false), 5000);
    }
  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <img
          src={logo}
          alt="Scaffolders Logo"
          style={styles.logo}
        />

        <h1 style={styles.title}>
          Scaffolders Education
        </h1>

        <p style={styles.subtitle}>
          Login to continue your learning journey
        </p>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
        >

          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.button}
          >
            {loading
              ? "Please wait..."
              : "Login"}
          </button>

          <p
            style={styles.forgotPassword}
            onClick={handleForgotPassword}
          >
            {resetLoading ? "Sending reset email..." : "Forgot Password?"}
          </p>

          <p style={styles.signupText}>
            Don’t have an account?{" "}
            <Link to="/signup">
              Create Account
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to bottom, #e3f2fd, #bbdefb)",
    fontFamily:
      "'Source Serif Pro', serif",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow:
      "0 8px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
    width: "380px",
  },

  logo: {
    width: "160px",
    marginBottom: "15px",
  },

  title: {
    fontSize: "26px",
    color: "#1565c0",
    fontWeight: "700",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "25px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  input: {
    width: "80%",
    padding: "10px 15px",
    marginBottom: "15px",
    border: "1px solid #90caf9",
    borderRadius: "8px",
    fontSize: "15px",
  },

  button: {
    backgroundColor: "#1565c0",
    color: "#fff",
    border: "none",
    padding: "10px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },

  forgotPassword: {
    marginTop: "15px",
    color: "#1565c0",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "14px",
  },

  signupText: {
    marginTop: "20px",
    fontSize: "14px",
  },
};

export default Login;