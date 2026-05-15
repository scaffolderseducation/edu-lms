// src/App.js

import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Quiz from "./Quiz";
import ProtectedRoute from "./ProtectedRoute";
import Certificate from "./Certificate";
import PaymentPage from "./PaymentPage";
import PaymentSuccess from "./PaymentSuccess";
import ModulePage from "./ModulePage";
import conclusionData from "./modules/conclusion";

import "./loader.css";
import logo from "./assets/scaffolders-logo.png";

import AdminUpload from "./AdminUpload";
import ModuleWrapper from "./ModuleWrapper";
import TestLogin from "./TestLogin";

// Pages
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Policies
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";

// ✅ Dynamic Blog System
import Blog from "./blogs/Blog";
import BlogPost from "./blogs/BlogPost";

// ⭐ Home Page
function HomePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <img
        src={logo}
        alt="Scaffolders Education"
        style={{ width: "180px", marginBottom: "20px" }}
      />

      <h1 style={{ color: "#1b5e20" }}>
        Welcome to Scaffolders Education
      </h1>

      <p
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          fontSize: "18px",
        }}
      >
        A global LMS built for educators. Learn AI skills,
        teaching innovation, and future-forward classroom
        strategies — all in one place.
      </p>

      <a
        href="/signup"
        style={{
          marginTop: "20px",
          display: "inline-block",
          padding: "12px 25px",
          background: "#198754",
          color: "white",
          borderRadius: "8px",
          fontSize: "18px",
          textDecoration: "none",
        }}
      >
        Start Learning
      </a>

      <div style={{ marginTop: "40px", fontSize: "16px" }}>
        ⭐ Courses crafted by real educators <br />
        ⭐ Beginner-friendly AI training <br />
        ⭐ Earn shareable certificates
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />

      <Suspense
        fallback={
          <div className="loader-container">
            <img
              src={logo}
              alt="Scaffolders Education Logo"
              style={{ width: "120px", marginBottom: "20px" }}
            />

            <h2>Scaffolders Education</h2>

            <div className="spinner"></div>

            <p>Loading your learning experience...</p>
          </div>
        }
      >
        <Routes>

          {/* ⭐ Home */}
          <Route path="/" element={<HomePage />} />

          {/* ✅ Blog System */}
          <Route path="/blog" element={<Blog />} />

          <Route
            path="/blog/:slug"
            element={<BlogPost />}
          />

          {/* ⭐ Public Pages */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* ⭐ Policies */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          <Route
            path="/refund-policy"
            element={<RefundPolicy />}
          />

          {/* ⭐ Auth */}
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/admin-upload"
            element={<AdminUpload />}
          />

          <Route
            path="/test-login"
            element={<TestLogin />}
          />

          {/* ⭐ Public Module Preview */}
          <Route
            path="/preview-module/:moduleId"
            element={<ModuleWrapper />}
          />

          {/* ⭐ Payments */}
          <Route
            path="/payment"
            element={<PaymentPage />}
          />

          <Route
            path="/payment-success"
            element={<PaymentSuccess />}
          />

          {/* ⭐ Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/module/:id"
            element={
              <ProtectedRoute>
                <ModulePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/quiz/:id"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />

          <Route
            path="/conclusion"
            element={
              <ProtectedRoute>
                <ModulePage moduleData={conclusionData} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/certificate-payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/certificate"
            element={
              <ProtectedRoute>
                <Certificate />
              </ProtectedRoute>
            }
          />

          {/* ⭐ Fallback */}
          <Route path="*" element={<HomePage />} />

        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;