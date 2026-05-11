import React, { useEffect, useState } from "react";
import "./Certificate.css";
import logo from "./assets/scaffolders-logo.png";
import signature from "./assets/signature.png";

const Certificate = () => {
  const [name, setName] = useState("");
  const [date] = useState(new Date().toLocaleDateString());
  const [toast, setToast] = useState("");
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    const learnerName = localStorage.getItem("learnerName") || "Learner";
    const quizCompleted = localStorage.getItem("quizCompleted") === "true";
    const certificatePaid = localStorage.getItem("certificatePaid") === "true";

    setName(learnerName);

    // Allow sharing only if both conditions are met
    if (quizCompleted && certificatePaid) {
      setCanShare(true);
    }
  }, []);

  const handleDownload = () => window.print();

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  const handleShare = (platform) => {
    const encodedName = encodeURIComponent(name);
    const certificateUrl = `https://scaffolderseducation.com/certificate/${encodedName}`;
    const shareText = `🎓 I earned my Scaffolders Education Certificate in AI in Education Mastery Course! 🌱 Check it out: ${certificateUrl}`;

    switch (platform) {
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${certificateUrl}`,
          "_blank"
        );
        showToast("🎉 Shared successfully on LinkedIn!");
        break;
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
          "_blank"
        );
        showToast("🎉 Shared successfully on WhatsApp!");
        break;
      case "instagram":
        window.open("https://www.instagram.com/", "_blank");
        showToast("🎉 Ready to post on Instagram!");
        break;
      default:
        break;
    }
  };

  return (
    <div className="certificate-wrapper">
      <div className="certificate">
        <img src={logo} alt="Scaffolders Logo" className="cert-logo" />
        <div className="watermark">SCAFFOLDERS</div>

        <h1 className="cert-title">Certificate of Completion</h1>
        <p className="cert-subtitle">This is proudly presented to</p>
        <h2 className="cert-name">{name}</h2>
        <p className="cert-text">
          For successfully completing the{" "}
          <span className="cert-course">AI in Education Mastery Course</span> under Scaffolders Education.
        </p>
        <p className="cert-date">Issued on {date}</p>

        <div className="cert-signatures">
          <div>
            <img src={signature} alt="Signature" className="signature" />
            <p>Issued by Scaffolders Education</p>
          </div>
        </div>
      </div>

      <button onClick={handleDownload} className="download-btn">
        Download Certificate
      </button>

      {/* Show Share section only if quiz completed & paid */}
      {canShare && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>Share your achievement:</p>
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => handleShare("linkedin")}
              style={styles.linkedin}
            >
              LinkedIn
            </button>
            <button
              onClick={() => handleShare("whatsapp")}
              style={styles.whatsapp}
            >
              WhatsApp
            </button>
            <button
              onClick={() => handleShare("instagram")}
              style={styles.instagram}
            >
              Instagram
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && <div style={styles.toast}>{toast}</div>}
    </div>
  );
};

const styles = {
  linkedin: {
    backgroundColor: "#0077b5",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    margin: "5px",
    cursor: "pointer",
  },
  whatsapp: {
    backgroundColor: "#25D366",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    margin: "5px",
    cursor: "pointer",
  },
  instagram: {
    background:
      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    margin: "5px",
    cursor: "pointer",
  },
  toast: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: "#4caf50",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    animation: "fadeInOut 3s ease",
  },
};

export default Certificate;
