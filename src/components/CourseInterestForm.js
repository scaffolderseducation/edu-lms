import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function CourseInterestForm({ initialCourse = "CTET Preparation Program", id = "pre-register-form" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(initialCourse);
  const [mode, setMode] = useState("Live Online Classes");

  // Conditional fields
  const [sainikClass, setSainikClass] = useState("Class 5 (for Class 6 Entrance)");
  const [aptitudeExam, setAptitudeExam] = useState("");
  const [aptitudeDate, setAptitudeDate] = useState("");
  const [ctetDate, setCtetDate] = useState("");
  const [questions, setQuestions] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-fill if user is logged in
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user") || "{}");
    if (stored.name) setName(stored.name);
    if (stored.email) setEmail(stored.email);
  }, []);

  useEffect(() => {
    if (initialCourse) {
      setCourse(initialCourse);
    }
  }, [initialCourse]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill in your Name, Email, and Phone Number.");
      return;
    }

    setLoading(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      course,
      mode,
      submittedAt: new Date().toISOString(),
      questions: questions.trim(),
    };

    if (course === "Sainik School Entrance Coaching") {
      payload.sainikClass = sainikClass;
    } else if (course === "Quantitative Aptitude Mastery") {
      payload.targetExam = aptitudeExam.trim();
      payload.targetExamDate = aptitudeDate.trim();
    } else if (course === "CTET Preparation Program") {
      payload.ctetTargetExamDate = ctetDate.trim();
    }

    try {
      // 1. Try sending to backend API
      try {
        await api.post("/api/course-inquiry", payload);
      } catch (apiErr) {
        console.warn("Backend API inquiry post notice:", apiErr.message);
      }

      // 2. Try saving to Firestore
      try {
        if (db) {
          await addDoc(collection(db, "courseInquiries"), {
            ...payload,
            userId: auth.currentUser?.uid || "guest",
            createdAt: new Date(),
          });
        }
      } catch (fsErr) {
        console.warn("Firestore direct write note:", fsErr.message);
      }

      // 3. Save to localStorage backup
      const existing = JSON.parse(localStorage.getItem("scaffolders_inquiries") || "[]");
      existing.push(payload);
      localStorage.setItem("scaffolders_inquiries", JSON.stringify(existing));

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission encountered an issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div id={id} style={styles.successContainer}>
        <div style={styles.successIcon}>🎉</div>
        <h3 style={styles.successTitle}>Pre-Registration Received!</h3>
        <p style={styles.successText}>
          Thank you, <strong>{name}</strong>! We have received your expression of interest for{" "}
          <strong>{course}</strong>.
        </p>
        <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
          Our academic counseling team will contact you at <strong>{phone}</strong> /{" "}
          <strong>{email}</strong> with batch schedules, syllabus outlines, and early-bird details.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setQuestions("");
          }}
          style={styles.submitAnotherBtn}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div id={id} style={styles.formContainer}>
      <div style={styles.formHeader}>
        <span style={styles.badge}>Upcoming Batches • Pre-Registration</span>
        <h3 style={styles.formTitle}>Express Interest & Get Early Access</h3>
        <p style={styles.formSubtitle}>
          These cohort courses are currently upcoming. Share your details below to receive batch
          timings, syllabus brochures, and priority enrollment.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Full Name */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Sarika Jain"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Email */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address *</label>
          <input
            type="email"
            required
            placeholder="e.g. student@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Phone Number */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mobile / WhatsApp Number *</label>
          <input
            type="tel"
            required
            placeholder="e.g. +91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Interested Course */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Interested Course *</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            style={styles.select}
          >
            <option value="CTET Preparation Program">CTET Preparation Program</option>
            <option value="Quantitative Aptitude Mastery">Quantitative Aptitude Mastery</option>
            <option value="Sainik School Entrance Coaching">Sainik School Entrance Coaching</option>
          </select>
        </div>

        {/* Learning Mode */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Preferred Learning Mode *</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            style={styles.select}
          >
            <option value="Live Online Classes">Live Online Classes</option>
            <option value="Recorded Sessions">Recorded Sessions</option>
          </select>
        </div>

        {/* CONDITIONAL: Sainik School (Class 5 or Class 9) */}
        {course === "Sainik School Entrance Coaching" && (
          <div style={styles.conditionalBox}>
            <label style={styles.label}>Target Student Class *</label>
            <select
              value={sainikClass}
              onChange={(e) => setSainikClass(e.target.value)}
              style={styles.select}
            >
              <option value="Class 5 (for Class 6 Entrance)">
                Class 5 (AISSEE Class 6 Entrance)
              </option>
              <option value="Class 9 (for Class 9 Entrance)">
                Class 9 (AISSEE Class 9 Entrance)
              </option>
            </select>
          </div>
        )}

        {/* CONDITIONAL: Quantitative Aptitude (Purpose & Target Exam Date) */}
        {course === "Quantitative Aptitude Mastery" && (
          <div style={styles.conditionalBox}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Purpose / Target Exam *</label>
              <input
                type="text"
                required
                placeholder="e.g. Bank PO, SSC CGL, CAT, Campus Placements"
                value={aptitudeExam}
                onChange={(e) => setAptitudeExam(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={{ ...styles.inputGroup, marginTop: "12px" }}>
              <label style={styles.label}>Target Exam Date / Month</label>
              <input
                type="text"
                placeholder="e.g. October 2026 / Dec 2026"
                value={aptitudeDate}
                onChange={(e) => setAptitudeDate(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>
        )}

        {/* CONDITIONAL: CTET (Target Exam Date / Session) */}
        {course === "CTET Preparation Program" && (
          <div style={styles.conditionalBox}>
            <label style={styles.label}>Target CTET Exam Session / Date</label>
            <input
              type="text"
              placeholder="e.g. CTET July 2026 / December 2026"
              value={ctetDate}
              onChange={(e) => setCtetDate(e.target.value)}
              style={styles.input}
            />
          </div>
        )}

        {/* Questions / Queries */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Any Questions or Specific Requirements?</label>
          <textarea
            rows="3"
            placeholder="Feel free to ask about syllabus, batch timings, or study materials..."
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            style={styles.textarea}
          />
        </div>

        <button type="submit" disabled={loading} style={styles.submitBtn}>
          {loading ? "Submitting..." : "Submit Pre-Registration"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  formContainer: {
    maxWidth: "750px",
    margin: "40px auto",
    padding: "35px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
    border: "1px solid #e0e0e0",
    textAlign: "left",
  },
  formHeader: {
    marginBottom: "25px",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: "700",
    color: "#00796b",
    background: "#e0f2f1",
    padding: "5px 14px",
    borderRadius: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "10px",
  },
  formTitle: {
    fontSize: "24px",
    color: "#1b5e20",
    margin: "4px 0 8px 0",
    fontWeight: "700",
  },
  formSubtitle: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
    width: "100%",
  },
  select: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    backgroundColor: "#fff",
    outline: "none",
    boxSizing: "border-box",
    width: "100%",
  },
  textarea: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    fontFamily: "inherit",
    resize: "vertical",
    boxSizing: "border-box",
    width: "100%",
  },
  conditionalBox: {
    padding: "18px",
    background: "#f7faf9",
    borderRadius: "10px",
    border: "1px solid #d4edda",
  },
  submitBtn: {
    padding: "14px 28px",
    background: "#1b5e20",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background 0.2s",
    marginTop: "10px",
  },
  successContainer: {
    maxWidth: "650px",
    margin: "40px auto",
    padding: "40px 30px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
    border: "1px solid #a5d6a7",
    textAlign: "center",
  },
  successIcon: {
    fontSize: "48px",
    marginBottom: "15px",
  },
  successTitle: {
    fontSize: "24px",
    color: "#1b5e20",
    marginBottom: "12px",
    fontWeight: "700",
  },
  successText: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  submitAnotherBtn: {
    marginTop: "20px",
    padding: "10px 22px",
    background: "#e8f5e9",
    color: "#1b5e20",
    border: "1px solid #a5d6a7",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default CourseInterestForm;
