// src/modules/Module5.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Module5() {
  const navigate = useNavigate();

  // Example quiz (replace with actual questions for Module 5)
  const quizQuestions = [
    {
      question: "Which AI tool can assist in evaluating student writing?",
      options: ["Grammarly", "Spotify", "Google Drive", "Zoom"],
      answer: "Grammarly",
    },
    {
      question: "AI-powered grading tools help teachers by:",
      options: [
        "Reducing manual workload",
        "Replacing teachers",
        "Making timetables",
        "Supervising exams",
      ],
      answer: "Reducing manual workload",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Module 5: AI in Student Assessment & Feedback</h2>

      {/* Learning Objectives */}
      <section>
        <h3>Learning Objectives</h3>
        <ul>
          <li>Understand how AI can automate grading.</li>
          <li>Learn about AI tools that provide real-time feedback.</li>
          <li>Explore the benefits and limitations of AI in assessment.</li>
        </ul>
      </section>

      {/* Video Lesson */}
      <section>
        <h3>Video Lesson</h3>
        <video width="600" controls>
          <source src="/videos/module5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Demo */}
      <section>
        <h3>Tool Demo</h3>
        <p>
          Demo: Grammarly for AI-based writing feedback, Gradescope for automated grading, 
          and Turnitin for plagiarism detection.
        </p>
      </section>

      {/* Write-up */}
      <section>
        <h3>Detailed Write-up</h3>
        <p>
          Assessment and feedback are vital in education. With AI tools, teachers can reduce 
          repetitive tasks like grading essays or checking for plagiarism. Grammarly helps 
          students refine their writing with instant suggestions, while Gradescope can speed 
          up evaluation for large classes. However, teachers must oversee AI-generated 
          feedback to ensure fairness, accuracy, and alignment with learning goals.
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
          <li>Ability to integrate AI tools into assessment processes.</li>
          <li>Confidence in using AI for providing real-time student feedback.</li>
          <li>Awareness of limitations and teacher’s role in AI-assisted grading.</li>
        </ul>
      </section>

      {/* Next button */}
      <button onClick={() => navigate("/module6")} style={{ marginTop: "20px" }}>
        Go to Module 6
      </button>
    </div>
  );
}

export default Module5;
