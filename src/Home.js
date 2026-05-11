import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "./assets/scaffolders-logo.png";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Empowering Educators with <span>AI Skills</span>
          </h1>
          <p>
            Scaffolders Education brings world-class AI training for teachers—simple,
            practical, and job-ready. Learn at your own pace and get certified.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="primary-btn">Explore Courses</Link>
            <Link to="/signup" className="secondary-btn">Join for Free</Link>
          </div>
        </div>

        <div className="hero-right">
          <img src={logo} alt="Scaffolders Logo" className="hero-logo" />
        </div>
      </section>

      {/* Course Intro Section (Scalable) */}
<section className="course-intro">
  <h2>Our Flagship Course</h2>
  <p className="course-subtitle">
    Currently available • More coming soon
  </p>

  <div className="course-card">
    <h3>AI in Education — Foundations</h3>

    <p className="course-desc">
      A practical, beginner-friendly course designed for teachers to confidently
      use AI tools in classrooms, lesson planning, assessments, and productivity.
    </p>

    <ul className="course-points">
      <li>✔ No technical background required</li>
      <li>✔ Hands-on tools like ChatGPT, Quizizz, AI planners</li>
      <li>✔ Self-paced learning</li>
      <li>✔ Certificate on completion</li>
    </ul>

    <div className="course-actions">
      <Link to="/courses" className="primary-btn">
        View Course Details
      </Link>
      <Link to="/signup" className="secondary-btn">
        Enroll Free
      </Link>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="features">
        <h2>Why Scaffolders Education?</h2>
        <div className="feature-grid">

          <div className="feature-card">
            <h3>AI-Powered Curriculum</h3>
            <p>Designed especially for teachers to implement AI in classrooms.</p>
          </div>

          <div className="feature-card">
            <h3>Beginner Friendly</h3>
            <p>No technical background required. Learn step-by-step.</p>
          </div>

          <div className="feature-card">
            <h3>Self-Paced Learning</h3>
            <p>Continue anytime, anywhere — on your schedule.</p>
          </div>

          <div className="feature-card">
            <h3>Certification</h3>
            <p>Get recognized credentials to enhance your teaching portfolio.</p>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Educators Say</h2>
        <div className="test-grid">

          <div className="test-card">
            <p>“The best AI training for teachers I’ve seen. Practical and powerful.”</p>
            <span>- Priya Sharma, Educator</span>
          </div>

          <div className="test-card">
            <p>“Scaffolders Education helped me bring AI tools into my classroom easily.”</p>
            <span>- Rahul Verma, Senior Teacher</span>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your AI Journey Today</h2>
        <p>Learn, grow, and transform your teaching with AI.</p>
        <Link to="/signup" className="primary-btn">Get Started</Link>
      </section>

    </div>
  );
}

export default Home;
