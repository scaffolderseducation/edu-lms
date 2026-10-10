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
  const { id } = useParams();
  const location = useLocation();

  const [moduleData, setModuleData] = useState(null);
  const [quizPassed, setQuizPassed] = useState(false);
  const [loading, setLoading] = useState(true);

  // Detect Preview Mode (public access)
  const isPreview = location.pathname.includes("/preview-module/");

    useEffect(() => {
    if (isPreview) {
      const localModule = moduleDataLocal["module" + id] || moduleDataLocal[id];
      setModuleData(localModule || null);
      setLoading(false);
      return;
    }

    const fetchFromDB = async () => {
      try {
        const docRef = doc(db, "modules", String(id));
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setModuleData(docSnap.data());
        } else {
          alert("Module not found in database!");
        }
      } catch (error) {
        console.error("Error loading module:", error);
        alert("Error fetching module data.");
      } finally {
        setLoading(false);
      }
    };
    fetchFromDB();
  }, [id, isPreview]);

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
      <h2>{moduleData.title || id}</h2>

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
