import React from "react";
import logo from "../assets/scaffolders-logo.png"; // adjust path if needed

function Contact() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#fff",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Scaffolders Education Logo"
        style={{ width: "110px", marginBottom: "20px" }}
      />

      {/* Heading */}
      <h1 style={{ color: "#6A1B9A", marginBottom: "10px" }}>Contact Us</h1>

      <p
        style={{
          color: "#444",
          fontSize: "16px",
          maxWidth: "700px",
          margin: "0 auto 30px auto",
        }}
      >
        Have questions, feedback, or need support?<br />
        We’re always here to help!
      </p>

      {/* Contact Box */}
      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "30px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
          textAlign: "left",
        }}
      >
        <h2 style={{ color: "#6A1B9A", marginBottom: "15px" }}>Reach Us At</h2>

        <p style={{ color: "#555", fontSize: "16px", marginBottom: "12px" }}>
          <strong>Email:</strong>{" "}
          <span style={{ color: "#6A1B9A", fontWeight: "bold" }}>
            scaffolders.education@gmail.com
          </span>
        </p>

        <p style={{ color: "#555", fontSize: "16px", marginBottom: "12px" }}>
          <strong>Phone:</strong> +91-XXXXXXXXXX
        </p>

        <p style={{ color: "#555", fontSize: "16px", marginBottom: "12px" }}>
          <strong>Address:</strong> Scaffolders Education, Jaipur, Rajasthan, India
        </p>

        <h3 style={{ color: "#6A1B9A", marginTop: "30px" }}>Working Hours</h3>
        <p style={{ color: "#555" }}>
          Monday – Saturday <br />
          10:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  );
}

export default Contact;
