import React from "react";
import { Link } from "react-router-dom";
import blogData from "../blogs/blogData";
import "../Home.css";

function HomePage() {

  return (

    <div className="home-container">

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="hero">

        <div className="hero-left">

          <h1>

            Scaffolders Education

            <br />

            <span>From Doubts to Distinction</span>

          </h1>

          <p>

            Empowering teachers, educators, students and professionals
            through practical learning, AI-powered education,
            certification programmes and career-focused skill development.

          </p>

          <div className="hero-buttons">

            <Link
              to="/courses"
              className="hero-btn"
            >
              Explore Courses
            </Link>

            <Link
              to="/signup"
              className="hero-btn secondary"
            >
              Join Free
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

      {/* ======================================================
          TRUST SECTION
      ====================================================== */}

      <section className="credibility">

        <h2>

          Why Thousands of Learners Will Trust Scaffolders Education

        </h2>

        <p className="credibility-text">

          Built by an educator with expertise in Statistics,
          Business Analytics, Artificial Intelligence and
          modern teaching practices.

        </p>

        <div className="credibility-grid">

          <div className="credibility-card">

            <h3>Research Driven</h3>

            <p>

              Every course follows structured pedagogy,
              practical implementation and measurable outcomes.

            </p>

          </div>

          <div className="credibility-card">

            <h3>AI Integrated</h3>

            <p>

              Learn how Artificial Intelligence can improve
              productivity, lesson planning and classroom delivery.

            </p>

          </div>

          <div className="credibility-card">

            <h3>Self Paced</h3>

            <p>

              Learn anytime from anywhere with lifetime access.

            </p>

          </div>

          <div className="credibility-card">

            <h3>Professional Certification</h3>

            <p>

              Showcase your learning with industry-oriented
              certification.

            </p>

          </div>

        </div>

      </section>

      {/* ======================================================
          FLAGSHIP COURSE
      ====================================================== */}

      <section className="course-intro">

        <h2>

          AI for Educators

        </h2>

        <p className="course-subtitle">

          Live Now • Self Paced • Lifetime Access

        </p>

        <div className="home-course-card">

          <h3>

            AI for Educators — Foundations

          </h3>

          <p className="course-desc">

            Learn ChatGPT, AI lesson planning,
            AI assessment creation,
            classroom productivity,
            AI ethics and responsible classroom use.

          </p>

          <ul className="course-points">

            <li>✔ Beginner Friendly</li>

            <li>✔ No Coding Required</li>

            <li>✔ Lifetime Access</li>

            <li>✔ Practical Demonstrations</li>

            <li>✔ Completion Certificate</li>

            <li>✔ Continuous Updates</li>

          </ul>

          <div className="launch-offer">

            <h4>

              🚀 Launch Offer

            </h4>

            <p>

              First <strong>500 learners</strong> can enrol
              for only <strong>₹99</strong>.

              Afterwards the course fee will increase.

            </p>

          </div>

          <div className="hero-buttons">

            <Link
              to="/courses"
              className="hero-btn"
            >
              View Course
            </Link>

            <Link
              to="/payment?type=entry"
              className="hero-btn secondary"
            >
              Enrol Now ₹99
            </Link>

          </div>

        </div>

      </section>      {/* ======================================================
          FOUNDER SECTION
      ====================================================== */}

      <section className="founder-section">

        <div className="founder-container">

          <div className="founder-image">

            <img
              src="/founder.jpg"
              alt="Dr. Sarika Jain"
            />

          </div>

          <div className="founder-content">

            <h2>Meet the Founder</h2>

            <h3> Sarika Jain</h3>

<h4 style={{ marginTop: "10px", color: "#0f2c2c" }}>
  Founder & Lead Educator, Scaffolders Education
</h4>

<p>
  <strong>Educator • Researcher • Business Analytics Professional</strong>
</p>

<p style={{ lineHeight: "2" }}>
  ✔ UGC-NET Qualified <br />
  ✔ APS-CSB Qualified <br />
  ✔ Four-time CTET Qualified <br />
  ✔ Former Army Public School Teacher <br />
  ✔ An IIM Trichy Alumni <br />
  ✔ AI in Education Enthusiast
</p>

<p style={{ marginTop: "20px" }}>
  <strong>Mission</strong><br />
  Committed to transforming teacher education through practical,
  affordable, AI-powered learning experiences that prepare educators
  and students for the future.
</p>

            <p>

              Scaffolders Education was established with a vision to
              bridge the gap between traditional education and
              future-ready learning by combining AI, analytics,
              practical teaching methodologies and career-focused
              education.

            </p>

            <p>

              Our mission is simple —
              make quality education affordable,
              accessible and useful for every learner.

            </p>

          </div>

        </div>

      </section>

      {/* ======================================================
          FEATURES
      ====================================================== */}

      <section className="features">

        <h2>

          Why Join Now?

        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <h4>Launch Pricing</h4>

            <p>

              Join today for only ₹99.
              This offer is available only for the first
              500 learners.

            </p>

          </div>

          <div className="feature-card">

            <h4>Lifetime Access</h4>

            <p>

              Learn anytime.
              Future updates are included without
              additional charges.

            </p>

          </div>

          <div className="feature-card">

            <h4>Certificate</h4>

            <p>

              Earn a professional completion certificate
              after successfully completing the course.

            </p>

          </div>

          <div className="feature-card">

            <h4>Practical Learning</h4>

            <p>

              Real classroom examples,
              AI tools,
              assignments,
              demonstrations and implementation.

            </p>

          </div>

        </div>

      </section>

      {/* ======================================================
          BLOGS
      ====================================================== */}

      <section className="blog-section">

        <h2>

          Latest Learning Articles

        </h2>

        <p className="blog-subtitle">

          Explore practical articles on AI,
          teaching,
          analytics,
          career guidance and education.

        </p>

        <div className="blog-grid">

          {blogData.slice(0,8).map((blog)=>(

            <div
              key={blog.id}
              className="blog-card"
            >

              <img
                src={blog.image}
                alt={blog.title}
              />

              <div className="blog-content">

                <h3>

                  {blog.title}

                </h3>

                <p>

                  {blog.excerpt}

                </p>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="blog-read-btn"
                >

                  Read More →

                </Link>

              </div>

            </div>

          ))}

        </div>

        <div
          style={{
            textAlign:"center",
            marginTop:"45px"
          }}
        >

          <Link
            to="/blog"
            className="hero-btn"
          >

            View All Articles

          </Link>

        </div>

      </section>      {/* ======================================================
          LIVE & UPCOMING COURSES
      ====================================================== */}

      <section className="upcoming-courses">

        <h2>

          Explore Our Learning Programs

        </h2>

        <p className="course-subtitle">

          More career-focused programmes are being added continuously.

        </p>

        <div className="course-grid">

          <div className="course-box">

            <h3>AI for Educators</h3>

            <p>

              Master ChatGPT, AI lesson planning,
              assessment generation, classroom productivity
              and responsible AI usage.

            </p>

            <Link
              to="/payment?type=entry"
              className="hero-btn"
            >

              Enrol Now

            </Link>

          </div>

          <div className="course-box">

            <h3>CTET Complete Preparation</h3>

            <p>

              Complete preparation for Paper I & II with
              pedagogy, mock tests, previous papers and
              interview guidance.

            </p>

            <Link
              to="/contact"
              className="hero-btn"
            >

              Coming Soon

            </Link>

          </div>

          <div className="course-box">

            <h3>Career Guidance Programme</h3>

            <p>

              Career planning for students after Class X,
              XII and Graduation including government,
              private and international opportunities.

            </p>

            <Link
              to="/contact"
              className="hero-btn"
            >

              Coming Soon

            </Link>

          </div>

          <div className="course-box">

            <h3>Financial Literacy for Students</h3>

            <p>

              Learn budgeting, investing,
              taxation, digital payments,
              banking and wealth creation.

            </p>

            <Link
              to="/contact"
              className="hero-btn"
            >

              Coming Soon

            </Link>

          </div>

          <div className="course-box">

            <h3>Quantitative Aptitude Mastery</h3>

            <p>

              Arithmetic, Data Interpretation,
              Logical Reasoning and Competitive Exam
              Preparation.

            </p>

            <Link
              to="/contact"
              className="hero-btn"
            >

              Coming Soon

            </Link>

          </div>

          <div className="course-box">

            <h3>Sainik School Entrance Coaching</h3>

            <p>

              Complete preparation with
              Mathematics,
              English,
              Reasoning,
              Mock Tests
              and Interview Guidance.

            </p>

            <Link
              to="/contact"
              className="hero-btn"
            >

              Coming Soon

            </Link>

          </div>

        </div>

      </section>

      {/* ======================================================
          EDUCATIONAL LEADERSHIP
      ====================================================== */}

      <section className="testimonials">

        <h2>

          Our Vision

        </h2>

        <div className="test-grid">

          <div className="test-card">

            <p>

              Scaffolders Education aims to build India's
              most trusted practical learning ecosystem
              where technology meets quality education.

            </p>

          </div>

          <div className="test-card">

            <p>

              We believe learning should be affordable,
              practical, career-oriented and accessible
              to everyone.

            </p>

          </div>

        </div>

      </section>

      {/* ======================================================
          CALL TO ACTION
      ====================================================== */}

      <section className="cta">

        <h2>

          Ready to Future-Proof Your Career?

        </h2>

        <p>

          Join thousands of learners who are preparing
          themselves for the AI era through practical,
          structured and affordable education.

        </p>

        <div
          className="hero-buttons"
          style={{justifyContent:"center"}}
        >

          <Link
            to="/payment?type=entry"
            className="hero-btn"
          >

            Join AI for Educators — ₹99

          </Link>

          <Link
            to="/courses"
            className="hero-btn secondary"
          >

            Browse Courses

          </Link>

        </div>

      </section>

    </div>

  );

}

export default HomePage;