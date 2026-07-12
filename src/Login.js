// src/Login.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "./firebase";

import logo from "./assets/scaffolders-logo.png";

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

      // ✅ Store user locally

      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
        })
      );

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

  const handleForgotPassword = async () => {

    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      alert(
        "Password reset email sent ✅ Check inbox/spam."
      );

    } catch (error) {

      console.error(
        "Forgot Password Error:",
        error
      );

      alert(error.message);
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
            Forgot Password?
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