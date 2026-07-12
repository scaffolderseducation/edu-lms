import React from "react";

function CTETPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "50px 20px",
      }}
    >
      <h1>CTET Preparation Program 2026</h1>

      <p>
        Prepare confidently for CTET Paper I and Paper II
        through live classes, study materials, practice tests,
        and expert guidance.
      </p>

      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Next Batch Starts</h3>

        <p>
          <strong>21 June 2026</strong>
        </p>

        <button
          style={{
            padding: "12px 24px",
            background: "#00a295",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Enroll Now
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Course Overview
      </h2>

      <p>
        This course is designed for aspiring teachers preparing
        for CTET Paper I and Paper II.
      </p>

      <h2 style={{ marginTop: "40px" }}>
        What You Will Learn
      </h2>

      <ul>
        <li>Child Development & Pedagogy</li>
        <li>Mathematics</li>
        <li>Environmental Studies</li>
        <li>Language I</li>
        <li>Language II</li>
        <li>Previous Year Papers</li>
        <li>Mock Tests</li>
      </ul>

      <h2 style={{ marginTop: "40px" }}>
        Frequently Asked Questions
      </h2>

      <p>
        <strong>
          Are classes live or recorded?
        </strong>
      </p>

      <p>
        Classes are conducted live online.
      </p>

      <p>
        <strong>
          Are rolling batches available?
        </strong>
      </p>

      <p>
        Yes. New batches are launched periodically
        throughout the year.
      </p>
    </div>
  );
}

export default CTETPage;