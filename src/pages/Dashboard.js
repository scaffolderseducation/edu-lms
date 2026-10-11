// src/Dashboard.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "../firebase";

import modulesList from "../modulesList";
import logo from "../assets/scaffolders-logo.png";

function resolveName(email, existingName) {
  if (existingName && existingName.trim()) return existingName.trim();
  if (!email) return "Learner";
  if (email.toLowerCase().includes("sarika")) {
    return "Sarika Jain";
  }
  const local = email.split("@")[0].replace(/[0-9]/g, "");
  const parts = local.split(/[._-]+/).filter(Boolean);
  if (parts.length > 0) {
    return parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
  }
  const rawPrefix = email.split("@")[0];
  return rawPrefix.charAt(0).toUpperCase() + rawPrefix.slice(1);
}

function Dashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [entryPaid, setEntryPaid] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [certificatePaid, setCertificatePaid] = useState(false);

  // ✅ LOAD USER DATA FROM FIRESTORE
  useEffect(() => {
    // Initial quick load from localStorage
    const stored = JSON.parse(localStorage.getItem("user") || "{}");
    if (stored.email) {
      const initialName = resolveName(stored.email, stored.name);
      const initialUser = { ...stored, name: initialName, country: stored.country || "India" };
      setUser(initialUser);
      if (stored.entryPaid) setEntryPaid(true);
      if (stored.quizCompleted) setQuizCompleted(true);
      if (stored.certificatePaid) setCertificatePaid(true);
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      const currentStored = JSON.parse(localStorage.getItem("user") || "{}");

      if (!currentUser && (!currentStored || !currentStored.email)) {
        navigate("/login");
        return;
      }

      if (currentUser) {
        try {
          const userRef = doc(db, "users", currentUser.uid);
          const userSnap = await getDoc(userRef);

          let data = {};
          if (userSnap.exists()) {
            data = userSnap.data();
          }

          const rawName =
            data.name ||
            data.displayName ||
            data.fullName ||
            currentUser.displayName ||
            currentStored.name ||
            "";

          const finalName = resolveName(currentUser.email, rawName);
          const finalCountry = data.country || currentStored.country || "India";

          const userObj = {
            uid: currentUser.uid,
            email: currentUser.email,
            ...currentStored,
            ...data,
            name: finalName,
            country: finalCountry,
            entryPaid: data.entryPaid !== undefined ? data.entryPaid : (currentStored.entryPaid || false),
            quizCompleted: data.quizCompleted !== undefined ? data.quizCompleted : (currentStored.quizCompleted || false),
            certificatePaid: data.certificatePaid !== undefined ? data.certificatePaid : (currentStored.certificatePaid || false),
          };

          setUser(userObj);
          setEntryPaid(userObj.entryPaid);
          setQuizCompleted(userObj.quizCompleted);
          setCertificatePaid(userObj.certificatePaid);

          localStorage.setItem("user", JSON.stringify(userObj));

          // Ensure document in Firestore has name and country saved
          if (!userSnap.exists() || !data.name) {
            await setDoc(
              userRef,
              {
                uid: currentUser.uid,
                email: currentUser.email,
                name: finalName,
                country: finalCountry,
                entryPaid: userObj.entryPaid,
                certificatePaid: userObj.certificatePaid,
                quizCompleted: userObj.quizCompleted,
              },
              { merge: true }
            );
          }
        } catch (error) {
          console.error("Dashboard error:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
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

  // ✅ LOADING SCREEN
  if (loading && !user) {
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
