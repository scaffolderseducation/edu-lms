import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/scaffolders-logo.png";
import "../App.css";

function Courses() {
  return (
    <div className="page-container">

      <img
        src={logo}
        className="page-logo"
        alt="Scaffolders Education"
      />

      <h1 className="page-title">Our Courses</h1>

      <div
        style={{
          padding: "30px",
          background: "#E8F6F3",
          borderRadius: "16px",
          marginTop: "25px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >

        <h2
          style={{
            color: "#198754",
            marginBottom: "18px",
          }}
        >
          AI for Educators – Certification Program
        </h2>

        <p
          style={{
            fontSize: "16px",
            marginTop: "10px",
            lineHeight: "1.8",
          }}
        >
          A structured and beginner-friendly certification
          course designed to help educators understand,
          apply, and confidently use AI tools in teaching,
          planning, assessments, and content creation.
        </p>

        <p
          style={{
            fontSize: "15px",
            marginTop: "10px",
            lineHeight: "1.8",
          }}
        >
          This program focuses on concept clarity,
          real-world application, and assessment-based
          learning to ensure meaningful outcomes.
        </p>

        <h4 style={{ marginTop: "22px" }}>
          What you will get:
        </h4>

        <ul
          style={{
            marginTop: "12px",
            lineHeight: "2",
          }}
        >
          <li>✔ Clear understanding of AI fundamentals</li>
          <li>✔ Practical classroom & workflow applications</li>
          <li>✔ Assessment to test real learning</li>
          <li>✔ Digital Certificate on successful completion</li>
          <li>✔ Lifetime access to learning materials</li>
        </ul>

        <p
          style={{
            marginTop: "18px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Entry Fee: ₹99 (India)
        </p>

        {/* ENROLL BUTTON */}

        <Link
          to="/payment"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#FFD700",
            color: "#000",
            borderRadius: "10px",
            marginTop: "18px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "0.3s ease",
          }}
        >
          🔔 Enrollment Open
        </Link>

      </div>
    </div>
  );
}

export default Courses;