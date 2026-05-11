import React from "react";
import logo from "../assets/scaffolders-logo.png";
import "../App.css";

function Courses() {
  return (
    <div className="page-container">
      <img src={logo} className="page-logo" alt="Scaffolders Education" />

      <h1 className="page-title">Our Courses</h1>

      <div
        style={{
          padding: "25px",
          background: "#E8F6F3",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <h2 style={{ color: "#198754" }}>
          AI for Educators – Certification Program
        </h2>

        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          A structured and beginner-friendly certification course designed
          to help educators understand, apply, and confidently use AI
          tools in teaching, planning, assessments, and content creation.
        </p>

        <p style={{ fontSize: "15px", marginTop: "10px" }}>
          This program focuses on concept clarity, real-world application,
          and assessment-based learning to ensure meaningful outcomes.
        </p>

        <h4 style={{ marginTop: "15px" }}>What you will get:</h4>
        <ul style={{ marginTop: "8px" }}>
          <li>✔ Clear understanding of AI fundamentals</li>
          <li>✔ Practical classroom & workflow applications</li>
          <li>✔ Assessment to test real learning</li>
          <li>✔ Digital Certificate on successful completion</li>
        </ul>

        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          Entry Fee: ₹99 (India)
        </p>

        <span
          style={{
            display: "inline-block",
            padding: "6px 12px",
            background: "#FFD700",
            borderRadius: "6px",
            marginTop: "10px",
          }}
        >
          🔔 Enrollment Open
        </span>
      </div>
    </div>
  );
}

export default Courses;
