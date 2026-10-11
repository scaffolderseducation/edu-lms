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
            maxWidth: "920px",
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

          {/* Instructor & Founder Section */}
          <div
            style={{
              maxWidth: "850px",
              margin: "35px auto",
              padding: "35px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #ffffff 0%, #f4fbf7 100%)",
              border: "1px solid #c8e6c9",
              boxShadow: "0 6px 20px rgba(46, 125, 50, 0.08)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                marginBottom: "22px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2e7d32, #1b5e20)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  boxShadow: "0 4px 12px rgba(46, 125, 50, 0.25)",
                  flexShrink: 0,
                }}
              >
                SJ
              </div>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#2e7d32",
                    background: "#e8f5e9",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    marginBottom: "4px",
                  }}
                >
                  Founder & Lead Instructor
                </span>
                <h2
                  style={{
                    color: "#1b5e20",
                    margin: "2px 0 0 0",
                    fontSize: "28px",
                  }}
                >
                  Sarika Jain
                </h2>
              </div>
            </div>

            {/* Academic Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "22px",
              }}
            >
              <span
                style={{
                  background: "#e8f5e9",
                  color: "#1b5e20",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid #c8e6c9",
                }}
              >
                🎓 MSc (Statistics)
              </span>
              <span
                style={{
                  background: "#e8f5e9",
                  color: "#1b5e20",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid #c8e6c9",
                }}
              >
                🎓 MBA
              </span>
              <span
                style={{
                  background: "#e3f2fd",
                  color: "#0d47a1",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid #bbdefb",
                }}
              >
                🏛️ IIM Trichy (Business Analytics)
              </span>
              <span
                style={{
                  background: "#fff3e0",
                  color: "#e65100",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid #ffe0b2",
                }}
              >
                ⭐ 10+ Years Teaching Experience (incl. Army Public School)
              </span>
            </div>

            {/* Competitive Exam Honors Card */}
            <div
              style={{
                background: "#ffffff",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #e0e0e0",
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  color: "#2e7d32",
                  fontSize: "16px",
                  margin: "0 0 14px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>🏆</span> National Teaching & Competitive Qualifications:
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    padding: "12px 14px",
                    background: "#f9fbf9",
                    borderRadius: "8px",
                    borderLeft: "4px solid #2e7d32",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "700",
                      color: "#1b5e20",
                      fontSize: "14px",
                    }}
                  >
                    4x CTET Qualified
                  </div>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    Both Paper I & Paper II Qualified
                  </div>
                </div>
                <div
                  style={{
                    padding: "12px 14px",
                    background: "#f9fbf9",
                    borderRadius: "8px",
                    borderLeft: "4px solid #1565c0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "700",
                      color: "#0d47a1",
                      fontSize: "14px",
                    }}
                  >
                    UGC NET Qualified
                  </div>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    National Eligibility Test
                  </div>
                </div>
                <div
                  style={{
                    padding: "12px 14px",
                    background: "#f9fbf9",
                    borderRadius: "8px",
                    borderLeft: "4px solid #e65100",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "700",
                      color: "#bf360c",
                      fontSize: "14px",
                    }}
                  >
                    APS-CSB Qualified
                  </div>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    Both Papers Qualified
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Bio */}
            <p
              style={{
                color: "#374151",
                lineHeight: "1.8",
                fontSize: "15px",
                margin: "0 0 16px 0",
              }}
            >
              With more than a decade of rich educational leadership—including extensive
              classroom experience at institutions such as Army Public School—Sarika Jain
              bridges the gap between deep mathematical rigor and future-ready educational tools.
              Having cleared India’s premier teaching eligibility examinations multiple times,
              she brings proven clarity, test-tested strategies, and actionable mentorship to every learner.
            </p>

            <p
              style={{
                color: "#2e7d32",
                fontWeight: "600",
                fontSize: "15px",
                margin: "0",
                fontStyle: "italic",
              }}
            >
              "Passionate about AI-driven learning, analytics, and future-ready education — empowering educators and students with confidence and clarity."
            </p>
          </div>

          {/* Mission Section */}
          <div
            style={{
              maxWidth: "850px",
              margin: "30px auto",
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
