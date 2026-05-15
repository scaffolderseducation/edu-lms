// src/Dashboard.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import { auth, db } from "./firebase";

import modulesList from "./modulesList";
import logo from "./assets/scaffolders-logo.png";

function Dashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  const [entryPaid, setEntryPaid] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [certificatePaid, setCertificatePaid] = useState(false);

  // ✅ LOAD USER DATA FROM FIRESTORE
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;

        if (!currentUser) {
          navigate("/login");
          return;
        }

        const userRef = doc(db, "users", currentUser.uid);

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();

          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            ...data,
          });

          setEntryPaid(data.entryPaid || false);

          setQuizCompleted(data.quizCompleted || false);

          setCertificatePaid(data.certificatePaid || false);
        } else {
          alert("User data not found");
        }
      } catch (error) {
        console.error(error);

        alert("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  // ✅ HANDLE MODULE ACCESS
  const handleModuleAccess = (id) => {
    if (!entryPaid) {
      alert("⚠️ Please pay the entry fee first.");

      navigate("/payment");
    } else {
      navigate(`/module/${id}`);
    }
  };

  // ✅ CERTIFICATE PAYMENT
  const handleCertificatePayment = () => {
    if (!quizCompleted) {
      alert("Complete all modules first.");
      return;
    }

    navigate("/payment?type=certificate");
  };

  // ✅ VIEW CERTIFICATE
  const handleViewCertificate = () => {
    navigate("/certificate");
  };

  // ✅ LOGOUT FIXED
  const handleLogout = async () => {
    try {
      await auth.signOut();

      localStorage.clear();

      sessionStorage.clear();

      navigate("/login", { replace: true });

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Logout failed");
    }
  };

  // ✅ LOADING SCREEN
  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        {/* HEADER */}
        <header style={styles.header}>
          <img
            src={logo}
            alt="Scaffolders Education"
            style={styles.logo}
          />

          <h1 style={styles.title}>
            Scaffolders Education Learning Portal
          </h1>

          <p style={styles.subtitle}>
            Where Learning Meets AI — Empowering Educators Worldwide
          </p>
        </header>

        {/* MAIN */}
        <main style={styles.card}>
          <h2 style={styles.welcome}>
            Welcome, {user?.name || "Learner"} 👋
          </h2>

          {user?.email && (
            <p style={styles.email}>
              Email: {user.email}
            </p>
          )}

          {user?.country && (
            <p style={styles.country}>
              🌍 Country: {user.country}
            </p>
          )}

          {/* ENTRY PAYMENT */}
          {!entryPaid && (
            <>
              <h3 style={styles.sectionTitle}>
                Entry Fee:{" "}
                {user?.country === "India"
                  ? "₹99"
                  : "$10"}
              </h3>

              <button
                style={styles.primaryButton}
                onClick={() => navigate("/payment")}
              >
                Pay Entry Fee
              </button>
            </>
          )}

          {/* MODULES */}
          {entryPaid && (
            <>
              <h3 style={styles.sectionTitle}>
                📘 Available Modules
              </h3>

              <div style={styles.moduleGrid}>
                {modulesList.map((mod) => (
                  <div
                    key={mod.id}
                    style={styles.moduleCard}
                    onClick={() =>
                      handleModuleAccess(mod.id)
                    }
                  >
                    <h4 style={styles.moduleTitle}>
                      {mod.title}
                    </h4>

                    <p style={styles.moduleDesc}>
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CERTIFICATE */}
          {quizCompleted && !certificatePaid && (
            <>
              <h3 style={styles.sectionTitle}>
                Certificate Fee
              </h3>

              <button
                style={styles.primaryButton}
                onClick={handleCertificatePayment}
              >
                Pay for Certificate
              </button>
            </>
          )}

          {/* VIEW CERTIFICATE */}
          {certificatePaid && (
            <button
              style={styles.viewButton}
              onClick={handleViewCertificate}
            >
              🎓 View Certificate
            </button>
          )}

          {/* LOGOUT */}
          <button
            style={styles.logoutButton}
            onClick={handleLogout}
          >
            Logout
          </button>
        </main>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <p style={styles.signature}>
            Scaffolders
          </p>

          <p style={styles.footerNote}>
            © {new Date().getFullYear()} Scaffolders Education
          </p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background:
      "linear-gradient(to bottom right, #f1f8e9, #e8f5e9)",
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
  },

  subtitle: {
    fontStyle: "italic",
    fontSize: "15px",
  },

  card: {
    padding: "40px",
    textAlign: "center",
  },

  welcome: {
    color: "#2e7d32",
  },

  email: {
    color: "#555",
  },

  country: {
    color: "#555",
    marginBottom: "20px",
  },

  sectionTitle: {
    color: "#1b5e20",
    marginTop: "25px",
  },

  primaryButton: {
    background: "#4caf50",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "10px",
    marginTop: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  moduleGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  moduleCard: {
    border: "2px solid #a5d6a7",
    borderRadius: "12px",
    padding: "20px",
    cursor: "pointer",
    background: "#fafafa",
  },

  moduleTitle: {
    color: "#1b5e20",
  },

  moduleDesc: {
    fontSize: "14px",
    color: "#333",
  },

  viewButton: {
    background: "#2e7d32",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    marginTop: "20px",
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
  },

  signature: {
    fontSize: "24px",
    color: "#388e3c",
  },

  footerNote: {
    fontSize: "13px",
    color: "#666",
  },

  loadingContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Dashboard;