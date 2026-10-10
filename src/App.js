import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./ProtectedRoute";
import conclusionData from "./modules/conclusion";
import "./loader.css";
import logo from "./assets/scaffolders-logo.png";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";

import HomePage from "./pages/HomePage";

// src/App.js



const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Quiz = React.lazy(() => import("./pages/Quiz"));
const Certificate = React.lazy(() => import("./pages/Certificate"));
const PaymentPage = React.lazy(() => import("./pages/PaymentPage"));
const PaymentSuccess = React.lazy(() => import("./pages/PaymentSuccess"));
const ModulePage = React.lazy(() => import("./pages/ModulePage"));
const CTETPage = React.lazy(() => import("./pages/CTETPage"));
const AptitudePage = React.lazy(() => import("./pages/AptitudePage"));
const SainikSchoolPage = React.lazy(() => import("./pages/SainikSchoolPage"));


const AdminUpload = React.lazy(() => import("./AdminUpload"));
const ModuleWrapper = React.lazy(() => import("./pages/ModuleWrapper"));
const TestLogin = React.lazy(() => import("./TestLogin"));

// Pages
const Courses = React.lazy(() => import("./pages/Courses"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

// Policies

// ✅ Dynamic Blog System
const BlogPost = React.lazy(() => import("./blogs/BlogPost"));

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
          

          <Route
            path="/blog/:slug"
            element={<BlogPost />}
          />

          {/* ⭐ Public Pages */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/ctet" element={<CTETPage />} />

<Route
  path="/courses/aptitude"
  element={<AptitudePage />}
/>

<Route
  path="/courses/sainik-school"
  element={<SainikSchoolPage />}
/>
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


