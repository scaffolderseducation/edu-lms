import React from "react";
import CourseInterestForm from "../components/CourseInterestForm";

function AptitudePage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: "40px 20px" }}>
      <span
        style={{
          display: "inline-block",
          background: "#cfe2ff",
          color: "#084298",
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

      <h1 style={{ color: "#0d6efd", margin: "4px 0 16px 0" }}>
        Quantitative Aptitude Mastery
      </h1>

      <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.7" }}>
        Master Arithmetic, Algebra, Data Interpretation, Speed Maths, and Competitive
        Exam Aptitude through expert-led interactive classes and shortcut techniques.
      </p>

      <h2 style={{ marginTop: "35px", color: "#333" }}>What You Will Learn</h2>
      <ul style={{ color: "#555", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li>Number System & Vedic Speed Maths</li>
        <li>Percentage, Profit & Loss, Simple & Compound Interest</li>
        <li>Ratio, Proportion, Mixture & Alligation</li>
        <li>Time, Speed, Distance & Time & Work</li>
        <li>Data Interpretation (Bar, Pie, Tables & Caselets)</li>
        <li>Algebra & Geometry Fundamentals</li>
        <li>High-Speed Calculation Hacks</li>
      </ul>

      <h2 style={{ marginTop: "35px", color: "#333" }}>Course Features</h2>
      <ul style={{ color: "#555", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li>Interactive Learning & Doubt Clearing</li>
        <li>Full Recorded Sessions for Revision</li>
        <li>Topic-wise Practice Worksheets</li>
        <li>All-India Mock Test Series</li>
      </ul>

      {/* Embedded Pre-Registration Form */}
      <div style={{ marginTop: "40px" }}>
        <CourseInterestForm initialCourse="Quantitative Aptitude Mastery" />
      </div>
    </div>
  );
}

export default AptitudePage;
