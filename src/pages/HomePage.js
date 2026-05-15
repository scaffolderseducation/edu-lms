import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">

      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        <div className="hero-left">

          <h1>
            Scaffolders Education <br />
            <span>From Doubts to Distinction</span>
          </h1>

          <p>
            A modern professional learning platform helping educators,
            teachers, and professionals build future-ready skills through
            structured courses, AI-integrated learning, certification,
            and practical education.
          </p>

          <div className="hero-buttons">

            <Link to="/login" className="hero-btn">
              Start Learning
            </Link>

            <Link to="/courses" className="hero-btn secondary">
              Explore Courses
            </Link>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="/logo192.png"
            alt="Scaffolders Education"
            className="hero-logo"
          />

        </div>

      </section>

      {/* ================= CREDIBILITY SECTION ================= */}

      <section className="credibility">

        <h2>Why Trust Scaffolders Education?</h2>

        <p className="credibility-text">
          Scaffolders Education is designed with an educator-first
          approach focused on practical learning, structured teaching,
          AI awareness, certification, and future-ready education.
        </p>

        <div className="credibility-grid">

          <div className="credibility-card">
            <h3>Qualified Academic Background</h3>

            <p>
              Academic specialization in Statistics and Business Analytics
              with national-level teaching and eligibility qualifications.
            </p>
          </div>

          <div className="credibility-card">
            <h3>Teaching Experience</h3>

            <p>
              Experience across structured educational environments
              including Army Public School with learner-centric teaching.
            </p>
          </div>

          <div className="credibility-card">
            <h3>AI & Modern Education</h3>

            <p>
              Focused on AI-integrated learning, digital education,
              analytics, and practical classroom innovation.
            </p>
          </div>

          <div className="credibility-card">
            <h3>Global Learning Vision</h3>

            <p>
              Built to support scalable online learning experiences
              for educators and professionals across countries.
            </p>
          </div>

        </div>

      </section>

      {/* ================= COURSE INTRO ================= */}

      <section className="course-intro">

        <h2>Our Flagship Certification Program</h2>

        <p className="course-subtitle">
          Structured learning. Practical application.
          Real certification.
        </p>

        <div className="home-course-card">

          <h3>Professional Certification Program</h3>

          <p className="course-desc">
            This program is designed to help learners develop strong
            conceptual understanding, practical application skills,
            and professional confidence through guided modules
            and assessment-based certification.
          </p>

          <ul className="course-points">
            <li>✔ Structured self-paced modules</li>
            <li>✔ Practical explanations & real examples</li>
            <li>✔ Assessment-based certification</li>
            <li>✔ Digitally verifiable certificate</li>
            <li>✔ AI-integrated future-ready learning</li>
            <li>✔ Lifetime access to course materials</li>
          </ul>

          <div className="hero-buttons">

            <Link to="/courses" className="hero-btn">
              View Course Details
            </Link>

            <Link
              to="/payment?type=entry"
              className="hero-btn secondary"
            >
              Enroll Now – ₹99
            </Link>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="features">

        <h2>Why Learners Choose Us</h2>

        <div className="feature-grid">

          <div className="feature-card">

            <h4>Structured Learning</h4>

            <p>
              Step-by-step modules designed for conceptual clarity
              and easy understanding.
            </p>

          </div>

          <div className="feature-card">

            <h4>Assessment-Based</h4>

            <p>
              Validate your learning through practical assessments
              before certification.
            </p>

          </div>

          <div className="feature-card">

            <h4>Recognized Certification</h4>

            <p>
              Receive digitally verifiable certificates that can
              be shared professionally.
            </p>

          </div>

          <div className="feature-card">

            <h4>Lifetime Access</h4>

            <p>
              Learn anytime, anywhere with unlimited access
              to purchased course content.
            </p>

          </div>

        </div>

      </section>

      {/* ================= EDUCATIONAL LEADERSHIP ================= */}

      <section className="testimonials">

        <h2>Educational Leadership</h2>

        <div className="test-grid">

          <div className="test-card">

            <p>
              Scaffolders Education combines educational experience,
              analytical thinking, and modern technology integration
              to create practical and future-focused learning systems.
            </p>

          </div>

          <div className="test-card">

            <p>
              The platform focuses on teacher development,
              AI awareness, certification programs,
              and scalable online education for modern learners.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta">

        <h2>
          Start Building Future-Ready Skills Today
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            color: "#555",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Learn practical skills, explore AI-integrated education,
          and earn professional certifications designed for
          modern educators and learners.
        </p>

        <div className="hero-buttons" style={{ justifyContent: "center" }}>

          <Link to="/signup" className="hero-btn">
            Join Scaffolders Education
          </Link>

        </div>

      </section>

    </div>
  );
}

export default HomePage;