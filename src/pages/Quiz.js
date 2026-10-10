// src/Quiz.js
import React, { useState } from "react";

function Quiz({ questions, onResult }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });

    const percentage = (correct / questions.length) * 100;
    setScore(percentage);
    setSubmitted(true);

    if (onResult) onResult(percentage);
  };

  return (
    <div className="quiz-container">
      <h4>📝 Quiz</h4>
      {questions.map((q, i) => (
        <div key={i} className="quiz-question">
          <p><b>{i + 1}.</b> {q.question}</p>
          {q.options.map((opt, j) => (
            <label key={j} style={{ display: "block" }}>
              <input
                type="radio"
                name={`q-${i}`}
                value={opt}
                onChange={() => handleChange(i, opt)}
                disabled={submitted}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted && (
        <button className="submit-button" onClick={handleSubmit}>
          Submit Quiz
        </button>
      )}

      {submitted && (
        <div className="quiz-result">
          <p>
            Your Score: <b>{score}%</b>
          </p>
          {score >= 80 ? (
            <p style={{ color: "green" }}>✅ Congratulations! You passed this module.</p>
          ) : (
            <p style={{ color: "red" }}>❌ You did not pass. Please review the lessons and try again.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
