import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/scaffolders-logo.png";

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={logo}
          alt="Scaffolders Education"
          style={styles.logo}
        />

        <h1 style={styles.heading}>
          Payment Successful 🎉
        </h1>

        <p style={styles.text}>
          Thank you for enrolling with Scaffolders Education.
        </p>

        <p style={styles.subtext}>
          Your payment has been verified successfully.
          You can now continue your learning journey.
        </p>

        <button
          style={styles.button}
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to bottom right, #e8f5e9, #c8e6c9)",
    fontFamily: "'Source Serif Pro', serif",
    padding: "20px",
  },

  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    maxWidth: "500px",
    width: "100%",
  },

  logo: {
    width: "140px",
    marginBottom: "20px",
  },

  heading: {
    color: "#2e7d32",
    marginBottom: "15px",
    fontSize: "32px",
  },

  text: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "10px",
  },

  subtext: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "30px",
  },

  button: {
    background: "#43a047",
    color: "#fff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default PaymentSuccess;