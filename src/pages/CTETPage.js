import React from "react";
import CourseInterestForm from "../components/CourseInterestForm";

function CTETPage() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          background: "#ffe8cc",
          color: "#d35400",
          padding: "5px 14px",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: "bold",
          marginBottom: "12px",
          textTransform: "uppercase",
        }}
      >
        Upcoming Cohort • Pre-Registration Open
      </span>

      <h1 style={{ color: "#d35400", margin: "4px 0 16px 0" }}>
        CTET Preparation Program
      </h1>

      <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
        Prepare confidently for CTET Paper I and Paper II through structured lessons,
        study materials, practice tests, and expert faculty guidance.
      </p>

      <h2 style={{ marginTop: "35px", color: "#333" }}>Course Overview</h2>
      <p style={{ color: "#555", lineHeight: "1.7" }}>
        This course is designed for aspiring teachers preparing for the Central Teacher
        Eligibility Test (CTET) across primary and upper-primary stages.
      </p>

      <h2 style={{ marginTop: "35px", color: "#333" }}>What You Will Learn</h2>
      <ul style={{ color: "#555", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li>Child Development & Pedagogy (CDP)</li>
        <li>Mathematics & Pedagogy</li>
        <li>Environmental Studies (EVS)</li>
        <li>Language I & Language II (Hindi / English)</li>
        <li>Science & Social Science options</li>
        <li>Previous 10 Years Solved Papers</li>
        <li>Exam-Pattern Mock Tests & Time Management</li>
      </ul>

      <h2 style={{ marginTop: "35px", color: "#333" }}>Frequently Asked Questions</h2>
      <p style={{ marginTop: "10px" }}>
        <strong>Will classes be live or recorded?</strong>
      </p>
      <p style={{ color: "#555" }}>
        We offer both Live Interactive cohorts and Recorded Self-Study modules. You can select
        your preferred mode in the pre-registration form below.
      </p>

      {/* Embedded Pre-Registration Form for CTET */}
      <div style={{ marginTop: "40px" }}>
        <CourseInterestForm initialCourse="CTET Preparation Program" />
      </div>
    </div>
  );
}

export default CTETPage;
