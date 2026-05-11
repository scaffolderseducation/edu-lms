// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./AuthContext";   // ✅ import AuthProvider
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4da6ff", // Light blue
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Source Serif Pro, serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>              {/* ✅ provide auth context here */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
