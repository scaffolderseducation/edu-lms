import React from "react";

function SainikSchoolPage() {
  return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "40px" }}>
      <h1>Sainik School Entrance Coaching</h1>

      <h3>Batch Starts: 15 July 2026</h3>

      <p>
        Comprehensive preparation for Sainik School Entrance
        Examination including Mathematics, Reasoning,
        English and Interview Guidance.
      </p>

      <h2>Subjects Covered</h2>

      <ul>
        <li>Mathematics</li>
        <li>Reasoning</li>
        <li>English</li>
        <li>General Knowledge</li>
        <li>Interview Preparation</li>
      </ul>

      <h2>Course Features</h2>

      <ul>
        <li>Live Classes</li>
        <li>Recorded Sessions</li>
        <li>Mock Tests</li>
        <li>Practice Worksheets</li>
        <li>Parent Guidance Sessions</li>
      </ul>

      <a
        href="/contact"
        style={{
          padding: "12px 24px",
          background: "#00a295",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px"
        }}
      >
        Enroll Now
      </a>
    </div>
  );
}

export default SainikSchoolPage;