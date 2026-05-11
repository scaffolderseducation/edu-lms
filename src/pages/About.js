import React from "react";
import logo from "../assets/scaffolders-logo.png";

function About() {
  return (
    <div className="page-container">
      <div className="content-wrap">

        <div
          style={{
            padding: "40px",
            backgroundColor: "white",
            borderRadius: "12px",
            maxWidth: "900px",
            margin: "40px auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Scaffolders Education Logo"
            style={{
              width: "120px",
              marginBottom: "20px",
              filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))",
            }}
          />

          {/* Title */}
          <h1 style={{ color: "#005B82", marginBottom: "10px" }}>
            About Us
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "#333",
              fontSize: "16px",
              maxWidth: "800px",
              margin: "0 auto 30px auto",
              lineHeight: "1.6",
            }}
          >
            At Scaffolders Education, we empower learners with high-quality,
            affordable and accessible courses designed to build real skills
            and real confidence. Whether you’re a student, working professional
            or a lifelong learner — we bring structured learning that creates impact.
          </p>

          {/* Mission Section */}
          <div
            style={{
              maxWidth: "850px",
              margin: "40px auto",
              padding: "30px",
              borderRadius: "10px",
              backgroundColor: "#f9fcff",
              border: "1px solid #d0e6f5",
              boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
              textAlign: "left",
            }}
          >
            <h2 style={{ color: "#005B82", marginBottom: "15px" }}>
              Our Mission
            </h2>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Our mission is to provide structured, simplified and skill-based
              learning that helps individuals grow academically and professionally.
              We focus on practical knowledge, real-world skill-building and
              quality content.
            </p>

            <h2
              style={{
                color: "#005B82",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              Why Choose Us?
            </h2>

            <ul
              style={{
                color: "#444",
                lineHeight: "1.8",
                paddingLeft: "20px",
              }}
            >
              <li>High-quality courses designed by experts</li>
              <li>Easy-to-understand teaching style</li>
              <li>Affordable and accessible learning</li>
              <li>Structured curriculum for better clarity</li>
              <li>Student-first approach</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
