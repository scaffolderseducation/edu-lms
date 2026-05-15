// src/ProtectedRoute.js

import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Wait until Firebase checks auth
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  // ✅ Redirect if not logged in
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;