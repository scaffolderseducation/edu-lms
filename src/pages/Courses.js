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

      <h1 className="page-title">
        Live Courses Now Open For Enrollment
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          marginBottom: "30px",
          color: "#555",
        }}
      >
        Join instructor-led live classes and accelerate your learning journey.
      </p>

      {/* AI FOR EDUCATORS */}

      <div
        style={{
          padding: "30px",
          background: "#E8F6F3",
          borderRadius: "16px",
          marginBottom: "30px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#198754" }}>
          AI for Educators – Certification Program
        </h2>

        <p style={{ lineHeight: "1.8" }}>
          Learn how to effectively use Artificial Intelligence in lesson
          planning, assessment design, content creation, classroom innovation,
          and professional productivity.
        </p>

        <p>
          <strong>Mode:</strong> Self-Paced + Assessment
        </p>

        <p>
          <strong>Fee:</strong> ₹99
        </p>

        <Link
          to="/payment"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#FFD700",
            color: "#000",
            borderRadius: "10px",
            marginTop: "15px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Enroll Now
        </Link>
      </div>

      {/* CTET */}

      <div
        style={{
          padding: "30px",
          background: "#FFF7E6",
          borderRadius: "16px",
          marginBottom: "30px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#d35400" }}>
          CTET Preparation Program
        </h2>

        <p style={{ lineHeight: "1.8" }}>
          Complete preparation for CTET Paper I & Paper II including Child
          Development & Pedagogy, Mathematics, Environmental Studies,
          Languages, Practice Tests and Doubt Clearing Sessions.
        </p>

        <p><strong>Batch Starts:</strong> 21 June 2026</p>
        <p><strong>Mode:</strong> Live Online Classes</p>
        <p><strong>Duration:</strong> 8 Weeks</p>
        <p><strong>Status:</strong> Admissions Open</p>

        <Link
          to="/ctet"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#00A295",
            color: "#fff",
            borderRadius: "10px",
            marginTop: "15px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View Course Details
        </Link>
      </div>

      {/* APTITUDE */}

      <div
        style={{
          padding: "30px",
          background: "#EEF6FF",
          borderRadius: "16px",
          marginBottom: "30px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#0d6efd" }}>
          Quantitative Aptitude Mastery
        </h2>

        <p style={{ lineHeight: "1.8" }}>
          Master Arithmetic, Algebra, Number System, Data Interpretation,
          Percentage, Profit & Loss, Ratio-Proportion and Speed Maths for
          competitive examinations.
        </p>

        <p><strong>Batch Starts:</strong> 30 June 2026</p>
        <p><strong>Mode:</strong> Live Online Classes</p>
        <p><strong>Duration:</strong> 10 Weeks</p>
        <p><strong>Status:</strong> Admissions Open</p>

        <Link
          to="/aptitude"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#00A295",
            color: "#fff",
            borderRadius: "10px",
            marginTop: "15px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View Course Details
        </Link>
      </div>

      {/* SAINIK SCHOOL */}

      <div
        style={{
          padding: "30px",
          background: "#F4F4FF",
          borderRadius: "16px",
          marginBottom: "30px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#6f42c1" }}>
          Sainik School Entrance Coaching
        </h2>

        <p style={{ lineHeight: "1.8" }}>
          Comprehensive preparation for AISSEE including Mathematics,
          Intelligence, English, General Knowledge, Mock Tests and Interview
          Guidance.
        </p>

        <p><strong>Batch Starts:</strong> 15 July 2026</p>
        <p><strong>Mode:</strong> Live Online Classes</p>
        <p><strong>Duration:</strong> 12 Weeks</p>
        <p><strong>Status:</strong> Admissions Open</p>

        <Link
          to="/sainik-school"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#00A295",
            color: "#fff",
            borderRadius: "10px",
            marginTop: "15px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View Course Details
        </Link>
      </div>

      {/* ROLLING BATCHES */}

      <div
        style={{
          background: "#f8f9fa",
          padding: "25px",
          borderRadius: "16px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2>Rolling Batches Available</h2>

        <p style={{ lineHeight: "1.8" }}>
          Missed a batch? Don't worry. New batches are launched regularly
          throughout the year. Contact us to know the next available start
          date.
        </p>
      </div>

    </div>
  );
}

export default Courses;