// src/modules/Module2.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Module2() {
  const navigate = useNavigate();

  // Example quiz (replace with your actual questions for Module 2)
  const quizQuestions = [
    {
      question: "Which AI tool can help teachers create lesson plans faster?",
      options: ["Grammarly", "ChatGPT", "Photoshop", "Zoom"],
      answer: "ChatGPT",
    },
    {
      question: "AI can help in automating which of the following?",
      options: ["Classroom decorations", "Homework grading", "Field trips", "Manual attendance"],
      answer: "Homework grading",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Module 2: AI in Lesson Planning & Content Creation</h2>

      {/* Learning Objectives */}
      <section>
        <h3>Learning Objectives</h3>
        <ul>
          <li>Understand how AI can support educators in lesson planning.</li>
          <li>Explore tools for creating engaging teaching material.</li>
          <li>Apply AI to personalize content for diverse learners.</li>
        </ul>
      </section>

      {/* Video lesson */}
      <section>
        <h3>Video Lesson</h3>
        <video width="600" controls>
          <source src="/videos/module2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Demo */}
      <section>
        <h3>Tool Demo</h3>
        <p>Demo: ChatGPT for generating lesson outlines, Canva AI for educational graphics.</p>
      </section>

      {/* Write-up */}
      <section>
        <h3>Detailed Write-up</h3>
        <p>
          In this module, we explore how AI can assist educators in reducing workload
          and enhancing creativity. By using AI-based tools, teachers can generate
          lesson plans, design engaging presentations, and provide personalized
          learning resources for students with different learning needs.
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
          <li>Ability to integrate AI into lesson planning.</li>
          <li>Confidence in creating innovative classroom content.</li>
          <li>Preparedness to use AI for personalized learning support.</li>
        </ul>
      </section>

      {/* Next button */}
      <button onClick={() => navigate("/module3")} style={{ marginTop: "20px" }}>
        Go to Module 3
      </button>
    </div>
  );
}

export default Module2;
