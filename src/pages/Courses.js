import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/scaffolders-logo.png";
import CourseInterestForm from "../components/CourseInterestForm";
import "../App.css";

function Courses() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("CTET Preparation Program");

  const handlePreRegisterClick = (e, courseName) => {
    e.stopPropagation(); // prevent card click navigation
    setSelectedCourse(courseName);
    const element = document.getElementById("pre-register-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-container">
      <div className="courses-container">
        {/* HEADER / HERO */}
        <div className="courses-hero-banner">
          <img
            src={logo}
            className="page-logo"
            alt="Scaffolders Education"
            style={{ height: "65px", width: "auto", marginBottom: "15px" }}
          />

          <h1 className="page-title" style={{ fontSize: "32px", marginBottom: "12px", color: "#004D40" }}>
            Explore Our Courses & Learning Programs
          </h1>

          <p
            style={{
              textAlign: "center",
              fontSize: "17px",
              maxWidth: "760px",
              margin: "0 auto 20px",
              color: "#555",
              lineHeight: "1.7",
            }}
          >
            Empowering educators, school students, and competitive aspirants with structured,
            concept-first pedagogy led by experienced instructors.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
              background: "#E0F2F1",
              padding: "8px 20px",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#004D40",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span>✨ Live & Self-Paced Modules</span>
            <span>•</span>
            <span>🎯 Exam-Oriented Pedagogy</span>
            <span>•</span>
            <span>💡 1-on-1 Doubt Clarification</span>
          </div>
        </div>

        {/* 1. FEATURED ACTIVE WORKSHOP: AI FOR EDUCATORS */}
        <div
          style={{
            background: "linear-gradient(135deg, #E8F6F3 0%, #D1E7DD 100%)",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "45px",
            border: "1px solid #A3E0D8",
            boxShadow: "0 10px 28px rgba(0, 162, 149, 0.12)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div style={{ flex: "1 1 560px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
                <span
                  style={{
                    background: "#198754",
                    color: "#ffffff",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  🟢 Live & Enrolling Now
                </span>
                <span
                  style={{
                    background: "rgba(25, 135, 84, 0.12)",
                    color: "#0f5132",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Self-Paced Certification
                </span>
              </div>

              <h2
                style={{
                  color: "#0f5132",
                  fontSize: "26px",
                  marginTop: "0",
                  marginBottom: "12px",
                  fontWeight: "700",
                }}
              >
                AI for Educators – Professional Certification Program
              </h2>

              <p
                style={{
                  lineHeight: "1.7",
                  color: "#2C3E50",
                  fontSize: "15px",
                  marginBottom: "16px",
                }}
              >
                Transform your teaching practice with hands-on AI tools. Master prompt engineering,
                automated lesson planning, personalized assessments, AI-driven slides, and interactive
                classroom activities designed for 21st-century teachers.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                  fontSize: "14px",
                  color: "#1d4734",
                  fontWeight: "500",
                }}
              >
                <div>✓ Lifetime LMS & Resource Access</div>
                <div>✓ Verifiable Completion Certificate</div>
                <div>✓ Practical Class-Ready Templates</div>
              </div>
            </div>

            <div
              style={{
                flex: "0 0 280px",
                background: "#ffffff",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "1px solid #E2E8F0",
              }}
            >
              <div style={{ fontSize: "13px", color: "#64748B", fontWeight: "600", textTransform: "uppercase" }}>
                Special Enrollment Fee
              </div>
              <div style={{ fontSize: "36px", fontWeight: "800", color: "#004D40", margin: "6px 0 2px" }}>
                ₹99
              </div>
              <div style={{ fontSize: "12px", color: "#16A34A", fontWeight: "600", marginBottom: "16px" }}>
                Complete Workshop & Certificate Included
              </div>

              <Link
                to="/payment"
                style={{
                  display: "block",
                  padding: "14px 20px",
                  background: "#FFD700",
                  color: "#000000",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "16px",
                  boxShadow: "0 4px 12px rgba(255, 215, 0, 0.4)",
                  transition: "all 0.2s ease",
                }}
              >
                Enroll Now & Access LMS →
              </Link>
            </div>
          </div>
        </div>

        {/* 2. UPCOMING INTERACTIVE BATCHES SECTION HEADER */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <span
            style={{
              display: "inline-block",
              background: "#E8F0FE",
              color: "#1A73E8",
              padding: "5px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginBottom: "10px",
            }}
          >
            Upcoming Batches • Pre-Registration Open
          </span>

          <h2 style={{ fontSize: "28px", color: "#0f2c2c", margin: "0 0 10px" }}>
            Comprehensive Academic & Competitive Programs
          </h2>

          <p style={{ color: "#666", fontSize: "15px", maxWidth: "680px", margin: "0 auto" }}>
            Click any course card to explore the full curriculum, topics, and pedagogy.
            Express your interest below to secure early-access admission and schedule notifications.
          </p>
        </div>

        {/* 3. THREE COURSES IN A ROW (RESPONSIVE GRID) */}
        <div className="courses-grid-3">
          {/* COURSE 1: CTET PREPARATION */}
          <div
            className="course-card-modern"
            style={{ cursor: "pointer", borderTop: "4px solid #d35400" }}
            onClick={() => navigate("/courses/ctet")}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    background: "#ffe8cc",
                    color: "#d35400",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  Upcoming Cohort
                </span>
                <span style={{ fontSize: "12px", color: "#888", fontWeight: "600" }}>Paper I & II</span>
              </div>

              <h3
                style={{
                  color: "#d35400",
                  fontSize: "21px",
                  marginTop: "0",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                CTET Preparation Program
              </h3>

              <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6", marginBottom: "16px" }}>
                Targeted preparation designed by a 4-time CTET qualified instructor covering Paper I & II pedagogy,
                concepts, and mock strategy.
              </p>

              <ul className="course-feature-list">
                <li>
                  <span style={{ color: "#d35400" }}>✓</span>
                  <span><strong>Child Development & Pedagogy (CDP)</strong> in-depth</span>
                </li>
                <li>
                  <span style={{ color: "#d35400" }}>✓</span>
                  <span>Mathematics, EVS, Science & Languages</span>
                </li>
                <li>
                  <span style={{ color: "#d35400" }}>✓</span>
                  <span>Chapter-wise Mock Tests & Previous Years Papers</span>
                </li>
                <li>
                  <span style={{ color: "#d35400" }}>✓</span>
                  <span>Interactive Live Doubt Resolution Sessions</span>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #f0f0f0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  to="/courses/ctet"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    textAlign: "center",
                    padding: "11px 16px",
                    background: "#00A295",
                    color: "#ffffff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                    display: "block",
                  }}
                >
                  View Course Details →
                </Link>

                <button
                  type="button"
                  onClick={(e) => handlePreRegisterClick(e, "CTET Preparation Program")}
                  style={{
                    width: "100%",
                    padding: "10px 16px",
                    background: "#FFF4E6",
                    color: "#d35400",
                    border: "1px solid #FFD8A8",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Pre-Register / Inquire
                </button>
              </div>
            </div>
          </div>

          {/* COURSE 2: QUANTITATIVE APTITUDE MASTERY */}
          <div
            className="course-card-modern"
            style={{ cursor: "pointer", borderTop: "4px solid #0d6efd" }}
            onClick={() => navigate("/courses/aptitude")}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    background: "#cfe2ff",
                    color: "#084298",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  Upcoming Cohort
                </span>
                <span style={{ fontSize: "12px", color: "#888", fontWeight: "600" }}>Competitive / Jobs</span>
              </div>

              <h3
                style={{
                  color: "#0d6efd",
                  fontSize: "21px",
                  marginTop: "0",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                Quantitative Aptitude Mastery
              </h3>

              <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6", marginBottom: "16px" }}>
                Build crystal-clear mathematical foundations, speed calculation tricks, and rigorous
                logical problem solving for all exams.
              </p>

              <ul className="course-feature-list">
                <li>
                  <span style={{ color: "#0d6efd" }}>✓</span>
                  <span><strong>Speed Maths & Vedic Calculation</strong> methods</span>
                </li>
                <li>
                  <span style={{ color: "#0d6efd" }}>✓</span>
                  <span>Arithmetic, Algebra, Percentages & Ratios</span>
                </li>
                <li>
                  <span style={{ color: "#0d6efd" }}>✓</span>
                  <span>Data Interpretation (DI) & Logical Reasoning</span>
                </li>
                <li>
                  <span style={{ color: "#0d6efd" }}>✓</span>
                  <span>Targeted for Bank PO, SSC, CAT & Campus Drives</span>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #f0f0f0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  to="/courses/aptitude"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    textAlign: "center",
                    padding: "11px 16px",
                    background: "#00A295",
                    color: "#ffffff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                    display: "block",
                  }}
                >
                  View Course Details →
                </Link>

                <button
                  type="button"
                  onClick={(e) => handlePreRegisterClick(e, "Quantitative Aptitude Mastery")}
                  style={{
                    width: "100%",
                    padding: "10px 16px",
                    background: "#E7F1FF",
                    color: "#0d6efd",
                    border: "1px solid #B6D4FE",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Pre-Register / Inquire
                </button>
              </div>
            </div>
          </div>

          {/* COURSE 3: SAINIK SCHOOL ENTRANCE */}
          <div
            className="course-card-modern"
            style={{ cursor: "pointer", borderTop: "4px solid #6f42c1" }}
            onClick={() => navigate("/courses/sainik-school")}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    background: "#e2d9f3",
                    color: "#59359a",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  Upcoming Cohort
                </span>
                <span style={{ fontSize: "12px", color: "#888", fontWeight: "600" }}>Class 5 & 9 (AISSEE)</span>
              </div>

              <h3
                style={{
                  color: "#6f42c1",
                  fontSize: "21px",
                  marginTop: "0",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                Sainik School Entrance Coaching
              </h3>

              <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6", marginBottom: "16px" }}>
                Structured mentorship tailored for school children aiming for prestigious All India Sainik
                Schools and military school academies.
              </p>

              <ul className="course-feature-list">
                <li>
                  <span style={{ color: "#6f42c1" }}>✓</span>
                  <span><strong>Comprehensive AISSEE Syllabus</strong> coverage</span>
                </li>
                <li>
                  <span style={{ color: "#6f42c1" }}>✓</span>
                  <span>Mathematics, Intelligence & General Knowledge</span>
                </li>
                <li>
                  <span style={{ color: "#6f42c1" }}>✓</span>
                  <span>OMR Sheet Practice & Timed Mock Test series</span>
                </li>
                <li>
                  <span style={{ color: "#6f42c1" }}>✓</span>
                  <span>Student confidence building & interview tips</span>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #f0f0f0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  to="/courses/sainik-school"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    textAlign: "center",
                    padding: "11px 16px",
                    background: "#00A295",
                    color: "#ffffff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                    display: "block",
                  }}
                >
                  View Course Details →
                </Link>

                <button
                  type="button"
                  onClick={(e) => handlePreRegisterClick(e, "Sainik School Entrance Coaching")}
                  style={{
                    width: "100%",
                    padding: "10px 16px",
                    background: "#F3EBFF",
                    color: "#6f42c1",
                    border: "1px solid #D8B4FE",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Pre-Register / Inquire
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. PRE-REGISTRATION INTEREST FORM */}
        <CourseInterestForm initialCourse={selectedCourse} />
      </div>
    </div>
  );
}

export default Courses;
