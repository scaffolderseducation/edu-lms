// src/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import modulesList from "./modulesList";
import logo from "./assets/scaffolders-logo.png";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [entryPaid, setEntryPaid] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [certificatePaid, setCertificatePaid] = useState(false);

  // ✅ Load user info from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")); // fixed key
    if (storedUser) {
      setUser(storedUser);
      setEntryPaid(storedUser.entryPaid || false);
      setQuizCompleted(storedUser.quizCompleted || false);
      setCertificatePaid(storedUser.certificatePaid || false);
    } else {
      navigate("/"); // redirect if not logged in
    }
  }, [navigate]);

  // ✅ Handle module access
  const handleModuleAccess = (id) => {
    if (!entryPaid) {
      alert("⚠️ Please pay the entry fee first to start learning.");
      navigate("/payment");
    } else {
      navigate(`/module/${id}`);
    }
  };

  const handleCertificatePayment = () => {
    if (!quizCompleted) {
      alert("Complete all modules and quiz first!");
    } else {
      navigate("/certificate-payment");
    }
  };

  const handleViewCertificate = () => navigate("/certificate");

  // ✅ Logout properly
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        {/* HEADER */}
        <header style={styles.header}>
          <img src={logo} alt="Scaffolders Education" style={styles.logo} />
          <h1 style={styles.title}>Scaffolders Education Learning Portal</h1>
          <p style={styles.subtitle}>
            Where Learning Meets AI — Empowering Educators Worldwide
          </p>
        </header>

        {/* MAIN CONTENT */}
        <main style={styles.card}>
          <h2 style={styles.welcome}>
            Welcome, {user?.name || "Learner"} 👋
          </h2>
          {user?.email && <p style={styles.email}>Email: {user.email}</p>}
          {user?.country && (
            <p style={styles.country}>🌍 Country: {user.country}</p>
          )}

          {/* Entry Fee Section */}
          {!entryPaid && (
            <>
              <h3 style={styles.sectionTitle}>
                Entry Fee:{" "}
                {user?.country === "India"
                  ? "₹99 (India)"
                  : "$10 (International)"}
              </h3>
              <button
                style={styles.primaryButton}
                onClick={() => navigate("/payment")}
              >
                Pay Entry Fee to Start Learning
              </button>
            </>
          )}

          {/* Modules Section */}
          {entryPaid && (
            <>
              <h3 style={styles.sectionTitle}>📘 Available Modules</h3>
              <div style={styles.moduleGrid}>
                {modulesList.map((mod) => (
                  <div
                    key={mod.id}
                    style={styles.moduleCard}
                    onClick={() => handleModuleAccess(mod.id)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.02)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <h4 style={styles.moduleTitle}>{mod.title}</h4>
                    <p style={styles.moduleDesc}>{mod.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Certificate Payment */}
          {quizCompleted && !certificatePaid && (
            <>
              <h3 style={styles.sectionTitle}>
                Certificate Fee:{" "}
                {user?.country === "India"
                  ? "₹599 (India)"
                  : "$100 (International)"}
              </h3>
              <p style={styles.discountText}>
                💡 Use promo code <b>EDUCATE21</b> or get 10% off for 100% quiz
                score.
              </p>
              <button
                style={styles.primaryButton}
                onClick={handleCertificatePayment}
              >
                Pay for Certificate
              </button>
            </>
          )}

          {/* Certificate View */}
          {certificatePaid && (
            <button style={styles.viewButton} onClick={handleViewCertificate}>
              🎓 View / Download Certificate
            </button>
          )}

          {/* LOGOUT BUTTON */}
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </main>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <p style={styles.signature}>Scaffolders</p>
          <p style={styles.footerNote}>
            © {new Date().getFullYear()} Scaffolders Education. All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "linear-gradient(to bottom right, #f1f8e9, #e8f5e9)",
    minHeight: "100vh",
    fontFamily: "'Source Serif Pro', serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
  wrapper: {
    width: "100%",
    maxWidth: "900px",
    background: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    overflow: "hidden",
  },
  header: {
    textAlign: "center",
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "30px 20px",
  },
  logo: {
    width: "90px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "24px",
    margin: "5px 0",
  },
  subtitle: {
    fontStyle: "italic",
    fontSize: "15px",
    opacity: 0.9,
  },
  card: {
    padding: "40px",
    textAlign: "center",
  },
  welcome: {
    color: "#2e7d32",
    marginBottom: "8px",
  },
  email: {
    color: "#555",
    marginBottom: "5px",
  },
  country: {
    color: "#555",
    marginBottom: "20px",
  },
  sectionTitle: {
    color: "#1b5e20",
    marginBottom: "10px",
  },
  primaryButton: {
    background: "#4caf50",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "10px",
    marginTop: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
  moduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  moduleCard: {
    border: "2px solid #a5d6a7",
    borderRadius: "12px",
    padding: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    background: "#fafafa",
  },
  moduleTitle: {
    color: "#1b5e20",
    marginBottom: "10px",
  },
  moduleDesc: {
    fontSize: "14px",
    color: "#333",
  },
  discountText: {
    color: "#4e342e",
    fontSize: "15px",
    marginBottom: "10px",
  },
  viewButton: {
    background: "#2e7d32",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  logoutButton: {
    background: "#c62828",
    color: "#fff",
    padding: "10px 22px",
    border: "none",
    borderRadius: "8px",
    marginTop: "30px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    backgroundColor: "#f1f8e9",
    padding: "20px",
    borderTop: "1px solid #c8e6c9",
  },
  signature: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "26px",
    color: "#388e3c",
    marginBottom: "5px",
  },
  footerNote: {
    fontSize: "13px",
    color: "#666",
  },
};

export default Dashboard;
