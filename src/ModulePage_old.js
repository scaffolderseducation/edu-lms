// src/ModulePage.js
import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import LessonNotes from "./LessonNotes";
import Quiz from "./Quiz";

function ModulePage({ module }) {
  const [quizPassed, setQuizPassed] = useState(false);

  const handleQuizResult = (score) => {
    if (score >= 80) {
      alert(`✅ Congratulations! You scored ${score}%. Unlocking next module...`);
      setQuizPassed(true);
      // TODO: Save user progress in Firestore
    } else {
      alert(`❌ You scored ${score}%. Please try again.`);
    }
  };

  return (
    <div className="module-container">
      <h2>{module.title}</h2>

      {/* Video Lessons + Notes */}
      {module.videos.map((video, i) => (
        <div key={i} className="video-section">
          <h3>{video.title}</h3>
          <VideoPlayer videoUrl={video.url} />
          <LessonNotes notes={video.notes} />
        </div>
      ))}

      {/* Quiz */}
      <Quiz questions={module.quiz} onResult={handleQuizResult} />

      {/* Next Module Button */}
      <button
        disabled={!quizPassed}
        onClick={() => (window.location.href = module.nextModule)}
        className="next-button"
      >
        {quizPassed ? "Go to Next Module →" : "🔒 Pass Quiz to Continue"}
      </button>
    </div>
  );
}

export default ModulePage;
