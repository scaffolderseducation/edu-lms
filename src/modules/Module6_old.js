// src/modules/Module6.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Module6() {
  const navigate = useNavigate();

  // Example quiz for Module 6
  const quizQuestions = [
    {
      question: "What is one ethical concern with using AI in education?",
      options: [
        "AI can reduce workload",
        "AI may introduce bias",
        "AI gives instant feedback",
        "AI personalizes learning",
      ],
      answer: "AI may introduce bias",
    },
    {
      question: "Which of these is important when integrating AI in classrooms?",
      options: [
        "Ignoring student privacy",
        "Balancing AI with teacher judgment",
        "Letting AI replace teachers",
        "Avoiding feedback",
      ],
      answer: "Balancing AI with teacher judgment",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Module 6: Responsible & Ethical Use of AI in Education</h2>

      {/* Learning Objectives */}
      <section>
        <h3>Learning Objectives</h3>
        <ul>
          <li>Understand ethical issues in AI applications for education.</li>
          <li>Learn how to address bias, privacy, and data concerns.</li>
          <li>Explore the balance between human educators and AI systems.</li>
        </ul>
      </section>

      {/* Video Lesson */}
      <section>
        <h3>Video Lesson</h3>
        <video width="600" controls>
          <source src="/videos/module6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Demo */}
      <section>
        <h3>Tool Demo</h3>
        <p>
          Demo: ClassPoint AI (responsible classroom AI tool), ChatGPT 
          with safety filters, and Turnitin’s AI writing detection.
        </p>
      </section>

      {/* Write-up */}
      <section>
        <h3>Detailed Write-up</h3>
        <p>
          With the rise of AI in education, responsible use is critical. 
          Educators must be aware of issues like bias in algorithms, 
          student data privacy, and over-reliance on technology. AI should 
          not replace teachers but empower them to provide better guidance. 
          Ethical practices ensure students benefit from AI without being 
          disadvantaged or misrepresented.
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
          <li>Ability to evaluate AI use with ethical considerations.</li>
          <li>Confidence in protecting student privacy and fairness.</li>
          <li>Readiness to integrate AI responsibly into teaching.</li>
        </ul>
      </section>

      {/* Certificate button */}
      <button
        onClick={() => navigate("/certificate")}
        style={{ marginTop: "20px", backgroundColor: "#4da6ff", color: "#fff", padding: "10px 15px", border: "none", borderRadius: "6px", cursor: "pointer" }}
      >
        🎓 Get Your Certificate
      </button>
    </div>
  );
}

export default Module6;
