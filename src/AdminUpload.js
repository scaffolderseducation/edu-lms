// src/AdminUpload.js
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { storage, db } from "./firebase";

function AdminUpload() {
  const [moduleName, setModuleName] = useState("");
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async () => {
    if (!moduleName || files.length === 0) {
      alert("Please enter a module name and select files first.");
      return;
    }

    setUploading(true);
    const urls = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileRef = ref(storage, `modules/${moduleName}/video${i + 1}.mp4`);
      const uploadTask = uploadBytesResumable(fileRef, file);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(percent);
          },
          reject,
          async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            urls.push(url);
            resolve();
          }
        );
      });
    }

    // Save video URLs to Firestore
    await setDoc(doc(db, "modules", moduleName), {
      videos: urls.map((url, index) => ({
        title: `Video ${index + 1}`,
        url,
        notes: `Detailed writeup for video ${index + 1} of ${moduleName}.`,
      })),
      createdAt: new Date().toISOString(),
    });

    setUploading(false);
    alert("✅ All videos uploaded successfully!");
    setModuleName("");
    setFiles([]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>🎬 Admin: Upload Module Videos</h2>

        <input
          type="text"
          placeholder="Enter Module Name (e.g., Module1)"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          style={styles.input}
        />

        <input
          type="file"
          multiple
          accept="video/*"
          onChange={(e) => setFiles([...e.target.files])}
          style={styles.fileInput}
        />

        <button onClick={handleUpload} disabled={uploading} style={styles.button}>
          {uploading ? `Uploading... ${progress}%` : "Upload All"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5fff5",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "500px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  fileInput: {
    marginBottom: "20px",
  },
  button: {
    background: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default AdminUpload;
