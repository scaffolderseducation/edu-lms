import React, { useState, useEffect } from "react";
import { auth, db, storage } from "./firebase";
import {
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export default function ProjectSubmission() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const user = auth.currentUser;

  // ✅ Load Razorpay script ONCE
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("❌ Please login first to submit your project.");
      return;
    }

    if (!title || !summary || !file) {
      setMessage("❌ Please fill all fields and upload a file.");
      return;
    }

    setSubmitting(true);
    setMessage("📤 Uploading file...");

    try {
      // 1️⃣ Upload file to Firebase Storage
      const storageRef = ref(
        storage,
        `projects/${user.uid}/${Date.now()}_${file.name}`
      );

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(prog);
        },
        (error) => {
          console.error(error);
          setMessage("❌ File upload failed.");
          setSubmitting(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // 2️⃣ Create Firestore project document
          const projectDoc = await addDoc(collection(db, "projects"), {
            uid: user.uid,
            userEmail: user.email,
            title,
            summary,
            fileUrl: downloadURL,
            fileName: file.name,
            createdAt: serverTimestamp(),
            status: "uploaded",
            paid: false,
            payment: null,
          });

          setMessage("💳 Creating payment order...");

          // 3️⃣ Call backend to create Razorpay order
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/create-order`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                amount: 59900, // ₹599 in paise
                currency: "INR",
                receipt: `project_${projectDoc.id}`,
                metadata: {
                  projectId: projectDoc.id,
                  userId: user.uid,
                  email: user.email,
                },
              }),
            }
          );

          const order = await response.json();

          if (!order || !order.id) {
            throw new Error("Order creation failed");
          }

          // 4️⃣ Razorpay checkout
          const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: "Scaffolders Education",
            description: "Certification – Project Evaluation",
            order_id: order.id,
            prefill: {
              email: user.email,
            },
            handler: async function (response) {
              setMessage("✅ Payment successful. Verifying...");

              // 5️⃣ Verify payment
              const verifyRes = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/verify-payment`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                    projectId: projectDoc.id,
                    userId: user.uid,
                  }),
                }
              );

              const verifyJson = await verifyRes.json();

              if (verifyRes.ok && verifyJson.success) {
                // 6️⃣ Update Firestore
                await updateDoc(doc(db, "projects", projectDoc.id), {
                  paid: true,
                  status: "paid",
                  payment: {
                    orderId: response.razorpay_order_id,
                    paymentId: response.razorpay_payment_id,
                    verifiedAt: serverTimestamp(),
                  },
                });

                setMessage("🎉 Project submitted successfully!");
                setSubmitting(false);
                navigate("/dashboard");
              } else {
                setMessage("❌ Payment verification failed.");
                setSubmitting(false);
              }
            },
            modal: {
              ondismiss: () => {
                setMessage(
                  "⚠ Payment cancelled. Your project is saved but not paid."
                );
                setSubmitting(false);
              },
            },
            theme: { color: "#008080" },
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        }
      );
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "30px auto", padding: 20 }}>
      <h2>Final Project Submission — Certification (₹599)</h2>

      <p>
        Upload your capstone project for mentor review. After submission, complete
        the ₹599 payment to receive your certificate.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Project Title</label>
          <input
            style={{ width: "100%", padding: 8 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Project Summary</label>
          <textarea
            style={{ width: "100%", padding: 8 }}
            rows={4}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Upload File (PDF / PPT / MP4 / ZIP)</label>
          <input type="file" onChange={handleFileChange} required />
          {uploadProgress > 0 && <p>Upload: {uploadProgress}%</p>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Processing..." : "Upload & Pay ₹599"}
        </button>
      </form>

      {message && <p style={{ marginTop: 16 }}>{message}</p>}
    </div>
  );
}
