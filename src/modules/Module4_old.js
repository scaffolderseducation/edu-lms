// src/modules/Module4.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Module4() {
  const navigate = useNavigate();

  // Example quiz (replace with your actual questions for Module 4)
  const quizQuestions = [
    {
      question: "Which AI tool can help in creating lesson plans quickly?",
      options: ["ChatGPT", "YouTube", "Excel", "Google Maps"],
      answer: "ChatGPT",
    },
    {
      question: "AI can assist teachers by:",
      options: [
        "Automating lesson planning",
        "Cleaning classrooms",
        "Supervising recess",
        "Designing uniforms",
      ],
      answer: "Automating lesson planning",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Module 4: AI in Lesson Planning & Content Creation</h2>

      {/* Learning Objectives */}
      <section>
        <h3>Learning Objectives</h3>
        <ul>
          <li>Learn how AI can support lesson planning.</li>
          <li>Explore AI tools for content generation.</li>
          <li>Understand ethical considerations in AI-assisted content.</li>
        </ul>
      </section>

      {/* Video lesson */}
      <section>
        <h3>Video Lesson</h3>
        <video width="600" controls>
          <source src="/videos/module4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Demo */}
      <section>
        <h3>Tool Demo</h3>
        <p>
          Demo: ChatGPT for lesson plan ideas, Canva’s Magic Design for visual content,
          and SlidesAI for creating engaging presentations.
        </p>
      </section>

      {/* Write-up */}
      <section>
        <h3>Detailed Write-up</h3>
        <p>
          AI is transforming how educators prepare classroom materials. Teachers can now
          generate lesson plans, quizzes, and presentations with AI assistance. Tools like
          ChatGPT provide draft lesson structures, Canva helps with attractive visual aids,
          and SlidesAI can instantly create slides. However, educators must ensure that AI-generated
          content is fact-checked, customized, and aligned with the curriculum.
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
          <li>Ability to generate lesson plans using AI tools.</li>
          <li>Confidence in creating engaging content with AI support.</li>
          <li>Understanding of balancing AI use with teacher creativity.</li>
        </ul>
      </section>

      {/* Next button */}
      <button onClick={() => navigate("/module5")} style={{ marginTop: "20px" }}>
        Go to Module 5
      </button>
    </div>
  );
}

export default Module4;
