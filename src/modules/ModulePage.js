import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import all modules + conclusion (go one level up because this file is inside /modules)
import module1 from "../module1";
import module2 from "../module2";
import module3 from "../module3";
import module4 from "../module4";
import module5 from "../module5";
import module6 from "../module6";
import conclusion from "./conclusion";

const modules = {
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  conclusion,
};

const ModulePage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const module = modules[moduleId];

  if (!module) {
    return (
      <div className="p-6 text-center text-red-500">
        <h2 className="text-xl font-semibold">Module not found</h2>
      </div>
    );
  }

  // ✅ Handle quiz submission
  const handleQuizResult = (score) => {
    if (score >= 80) {
      alert("🎉 Congratulations! You passed the quiz.");

      // Save completion status
      const progress = JSON.parse(localStorage.getItem("quizProgress")) || {};
      progress[moduleId] = "completed";
      localStorage.setItem("quizProgress", JSON.stringify(progress));

      // Unlock next module
      if (module.nextModule) {
        navigate(module.nextModule);
      }
    } else {
      alert("❌ Please try again. You need at least 80% to pass.");
    }
  };

  // ✅ Render quiz
  const renderQuiz = () => {
    if (!module.quiz) return null;

    let userAnswers = [];

    const submitQuiz = () => {
      let correct = 0;
      module.quiz.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) {
          correct++;
        }
      });

      const score = (correct / module.quiz.length) * 100;
      handleQuizResult(score);
    };

    return (
      <div className="mt-10 p-6 border rounded-xl bg-blue-50 shadow-inner">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Quiz</h2>
        <ul className="space-y-4">
          {module.quiz.map((q, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium text-gray-800 mb-2">
                {idx + 1}. {q.question}
              </p>
              <ul className="space-y-1 ml-4">
                {q.options.map((opt, i) => (
                  <li key={i}>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`q-${idx}`}
                        value={opt}
                        onChange={() => (userAnswers[idx] = opt)}
                      />
                      <span>{opt}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <button
          onClick={submitQuiz}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Submit Quiz
        </button>
      </div>
    );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{module.title}</h1>

      {/* Videos + Notes */}
      <div className="space-y-8">
        {module.videos &&
          module.videos.map((video, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                {video.title}
              </h2>

              {video.url ? (
                <iframe
                  src={video.url}
                  title={video.title}
                  className="w-full h-64 rounded-lg mb-4"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4 rounded-lg text-gray-500">
                  Video Placeholder
                </div>
              )}

              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: video.notes }}
              />
            </div>
          ))}
      </div>

      {/* Quiz */}
      {renderQuiz()}

      {/* Navigation OR Certificate Button */}
      {moduleId === "conclusion" ? (
        <div className="mt-8 text-center">
          {(() => {
            const progress =
              JSON.parse(localStorage.getItem("quizProgress")) || {};
            const allModules = [
              "module1",
              "module2",
              "module3",
              "module4",
              "module5",
              "module6",
            ];

            const allCompleted = allModules.every(
              (m) => progress[m] === "completed"
            );

            return allCompleted ? (
              <button
                onClick={() => navigate("/certificate")}
                className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-green-700 transition"
              >
                🎓 Download Your Certificate
              </button>
            ) : (
              <p className="text-red-500 font-medium">
                ⚠️ Complete all modules before unlocking your certificate.
              </p>
            );
          })()}
        </div>
      ) : (
        module.nextModule &&
        !module.quiz && (
          <div className="mt-8 text-right">
            <button
              onClick={() => navigate(module.nextModule)}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              {moduleId === "module6" ? "Go to Conclusion" : "Next Module"}
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default ModulePage;
