import React, { useState } from "react";

const QuizCompletion = ({ score }) => {
  const [shareCount, setShareCount] = useState(
    parseInt(localStorage.getItem("sharedCount")) || 0
  );
  const [bonusUnlocked, setBonusUnlocked] = useState(
    localStorage.getItem("sharedBonus") === "true"
  );

  const handleShare = () => {
    const shareText = encodeURIComponent(
      "📚 I just completed my Scaffolders Education course! Learn and grow with me 🌱 https://scaffolderseducation.com"
    );
    const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;
    window.open(whatsappUrl, "_blank");

    const newCount = shareCount + 1;
    setShareCount(newCount);
    localStorage.setItem("sharedCount", newCount);

    if (newCount >= 5 && !bonusUnlocked) {
      setBonusUnlocked(true);
      localStorage.setItem("sharedBonus", "true");
      alert("🎁 Bonus unlocked! Extra 5% discount for your certificate.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🎓 Quiz Completed!</h2>
      <h3>Your Score: {score}%</h3>

      {score === 100 ? (
        <div>
          <p>✅ You’ve earned a 10% certificate discount!</p>

          {!bonusUnlocked ? (
            <>
              <p>
                Share this course with 5 teachers or groups to unlock extra 5%
                discount!
              </p>
              <button style={styles.shareButton} onClick={handleShare}>
                Share Now ({shareCount}/5)
              </button>
            </>
          ) : (
            <p>🎉 You’ve unlocked a total of 15% discount!</p>
          )}
        </div>
      ) : (
        <p>Keep learning! Score 100% next time to unlock rewards.</p>
      )}

      <button
        style={styles.continueButton}
        onClick={() => (window.location.href = "/dashboard")}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "30px" },
  shareButton: {
    background: "#00bfa6",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "15px",
  },
  continueButton: {
    background: "#333",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default QuizCompletion;
