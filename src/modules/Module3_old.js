// src/modules/Module3.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Module3() {
  const navigate = useNavigate();

  // Example quiz (replace with your actual questions for Module 3)
  const quizQuestions = [
    {
      question: "Which AI tool can automatically grade multiple-choice questions?",
      options: ["Kahoot", "ChatGPT", "Gradescope", "Canva"],
      answer: "Gradescope",
    },
    {
      question: "How can AI assist in giving feedback to students?",
      options: [
        "By decorating classrooms",
        "By generating personalized comments",
        "By planning school events",
        "By recording attendance manually",
      ],
      answer: "By generating personalized comments",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Module 3: AI in Assessment & Feedback</h2>

      {/* Learning Objectives */}
      <section>
        <h3>Learning Objectives</h3>
        <ul>
          <li>Understand how AI can streamline assessments.</li>
          <li>Explore tools for automated grading.</li>
          <li>Learn how AI provides personalized feedback.</li>
        </ul>
      </section>

      {/* Video lesson */}
      <section>
        <h3>Video Lesson</h3>
        <video width="600" controls>
          <source src="/videos/module3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Demo */}
      <section>
        <h3>Tool Demo</h3>
        <p>Demo: Gradescope for grading, ChatGPT for generating detailed student feedback.</p>
      </section>

      {/* Write-up */}
      <section>
        <h3>Detailed Write-up</h3>
        <p>
          AI in assessment and feedback helps educators save time while ensuring
          accuracy. Tools like Gradescope automate grading for objective-type
          questions, while AI-based writing assistants can generate constructive,
          personalized feedback for essays and projects. This empowers teachers to
          focus more on student growth rather than administrative tasks.
        </p>
      </section>

      {/* Quiz */}
      <section>
        <h3>Quiz</h3>
        {quizQuestions.map((q, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <p><b>{q.question}</b></p>
            {q.options.map((option, i) => (
              <button key={i} style={{ display: "block", margin: "5px 0" }}>
                {option}
              </button>
            ))}
          </div>
        ))}
      </section>

      {/* Learning Outcomes */}
      <section>
        <h3>Learning Outcomes</h3>
        <ul>
          <li>Ability to integrate AI into grading processes.</li>
          <li>Skills to provide personalized student feedback with AI tools.</li>
          <li>Reduced administrative workload in assessment.</li>
        </ul>
      </section>

      {/* Next button */}
      <button onClick={() => navigate("/module4")} style={{ marginTop: "20px" }}>
        Go to Module 4
      </button>
    </div>
  );
}

export default Module3;
