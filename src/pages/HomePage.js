import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <h1>
          Scaffolders Education <br />
          <span>From Doubts to Distinction</span>
        </h1>

        <p>
          A professional learning platform designed to help educators
          and professionals upskill through structured courses,
          practical learning, and certification.
        </p>

        <div className="hero-actions">
          <Link to="/login" className="hero-btn">
            Start Learning
          </Link>
          <Link to="/course" className="hero-btn secondary">
            View Course
          </Link>
        </div>
      </section>

      {/* ================= COURSE INTRO ================= */}
      <section className="course-intro">
        <h2>Our Flagship Certification Course</h2>
        <p className="subtitle">
          One powerful course. Practical learning. Real certification.
        </p>

        <div className="course-card">
          <h3>Professional Certification Program</h3>

          <p className="course-desc">
            This course is carefully designed to help learners
            build strong conceptual understanding, apply knowledge
            practically, and validate learning through assessment.
          </p>

          <ul className="course-points">
            <li>✔ Self-paced structured modules</li>
            <li>✔ Practical explanations & examples</li>
            <li>✔ Final assessment to test understanding</li>
            <li>✔ Digitally verifiable certificate</li>
            <li>✔ Lifetime access to course content</li>
          </ul>

          <div className="course-actions">
            <Link to="/course" className="hero-btn">
              View Course Details
            </Link>
            <Link to="/payment?type=entry" className="hero-btn secondary">
              Enroll Now – ₹99
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="features">
        <h2>Why Choose Scaffolders Education?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h4>Structured Learning</h4>
            <p>
              Step-by-step modules designed for clarity
              and easy understanding.
            </p>
          </div>

          <div className="feature-card">
            <h4>Assessment-Based</h4>
            <p>
              Validate your learning through a final assessment
              before certification.
            </p>
          </div>

          <div className="feature-card">
            <h4>Recognized Certification</h4>
            <p>
              Receive a digital certificate that can be
              shared and verified.
            </p>
          </div>

          <div className="feature-card">
            <h4>Lifetime Access</h4>
            <p>
              Learn anytime, anywhere with lifetime access
              to course materials.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="testimonials">
        <h2>What Learners Say</h2>

        <p className="testimonial">
          “This course gave me clarity, confidence,
          and a structured way to improve professionally.”
        </p>

        <strong>— Early Access Learner</strong>
      </section>

      {/* ================= DATA & PRIVACY ================= */}
      <section className="privacy">
        <h2>Your Data is Safe</h2>
        <p>
          We collect only the information required for course access
          and certification. Your data is never shared with
          third parties.
        </p>
      </section>

    </div>
  );
}

export default HomePage;
