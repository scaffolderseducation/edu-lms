import React from "react";
import CourseInterestForm from "../components/CourseInterestForm";

function SainikSchoolPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: "40px 20px" }}>
      <span
        style={{
          display: "inline-block",
          background: "#e2d9f3",
          color: "#59359a",
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

      <h1 style={{ color: "#6f42c1", margin: "4px 0 16px 0" }}>
        Sainik School Entrance Coaching (AISSEE)
      </h1>

      <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
        Comprehensive preparation for All India Sainik Schools Entrance Examination
        for Class 6 (Class 5 students) and Class 9 entrance.
      </p>

      <h2 style={{ marginTop: "35px", color: "#333" }}>Subjects Covered</h2>
      <ul style={{ color: "#555", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li>Mathematics (Foundational to Advanced)</li>
        <li>Intelligence & Logical Reasoning</li>
        <li>English Language & Comprehension</li>
        <li>General Knowledge & General Science</li>
        <li>Personality Development & Interview Guidance</li>
      </ul>

      <h2 style={{ marginTop: "35px", color: "#333" }}>Program Features</h2>
      <ul style={{ color: "#555", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li>Specialized Focus on Class 5 and Class 9 Entrance</li>
        <li>Interactive Daily Practice Problems</li>
        <li>OMR-based Mock Tests for Exam Conditioning</li>
        <li>Dedicated Parent-Teacher Progress Reviews</li>
      </ul>

      {/* Embedded Pre-Registration Form */}
      <div style={{ marginTop: "40px" }}>
        <CourseInterestForm initialCourse="Sainik School Entrance Coaching" />
      </div>
    </div>
  );
}

export default SainikSchoolPage;
