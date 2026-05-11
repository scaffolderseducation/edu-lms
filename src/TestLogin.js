import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // ✅ removed getAuth
import { auth } from "./firebase"; // ensure auth is exported from firebase.js

function TestLogin() {
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, "sarikakjjain@gmail.com", "test12345");
      alert("Login success!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <button onClick={handleLogin}>TEST LOGIN</button>
    </div>
  );
}

export default TestLogin;