// src/ModulePage.js
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import VideoPlayer from "../VideoPlayer";
import LessonNotes from "../LessonNotes";
import Quiz from "./Quiz";
import moduleDataLocal from "../moduleData";   // ✅ Local preview modules

function ModulePage({ moduleId: propModuleId }) {
  const { moduleId: routeModuleId, id } = useParams();
  const finalRouteId = routeModuleId || id;
  const location = useLocation();

  // Decide the moduleId source:
  const moduleId =
    propModuleId ||            // passed as a prop (old setup)
    finalRouteId ||           // coming from URL
    null;

  const [moduleData, setModuleData] = useState(null);
  const [quizPassed, setQuizPassed] = useState(false);
  const [loading, setLoading] = useState(true);

  // Detect Preview Mode (public access)
  const isPreview = location.pathname.includes("/preview-module/");

  useEffect(() => {
    // ---------------------------
    // USE LOCAL DATA FOR NOW
    // ---------------------------
    const localModule = moduleDataLocal[moduleId] || moduleDataLocal["module" + moduleId];
    if (localModule) {
      setModuleData(localModule);
    } else {
      console.error("Module not found locally for ID:", moduleId);
    }
    setLoading(false);
  }, [moduleId, isPreview]);

  const handleQuizResult = (score) => {
    if (score >= 80) {
      alert(`✅ Great! You scored ${score}%. Unlocking next module...`);
      setQuizPassed(true);
    } else {
      alert(`❌ You scored ${score}%. Try again to unlock next module.`);
    }
  };

  if (loading) return <h3>Loading module...</h3>;
  if (!moduleData) return <h3>❌ No module found.</h3>;

  return (
    <div className="module-container">
      <h2>{moduleData.title || moduleId}</h2>

      {/* Video Lessons */}
      {moduleData.videos?.map((video, i) => (
        <div key={i} className="video-section">
          <h3>{video.title}</h3>
          <VideoPlayer videoUrl={video.url} />
          <LessonNotes notes={video.notes} />
        </div>
      ))}

      {/* Quiz */}
      {moduleData.quiz ? (
        <Quiz questions={moduleData.quiz.questions} onResult={handleQuizResult} />
      ) : (
        <p style={{ marginTop: "20px" }}>🧠 Quiz coming soon.</p>
      )}

      {/* Next Module Button */}
      {!isPreview && (
        <button
          disabled={!quizPassed}
          onClick={() =>
            (window.location.href = moduleData.nextModule || "#")
          }
          className="next-button"
        >
          {quizPassed ? "Go to Next Module →" : "🔒 Pass Quiz to Continue"}
        </button>
      )}
    </div>
  );
}

export default ModulePage;
