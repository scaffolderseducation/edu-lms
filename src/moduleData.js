// src/moduleData.js

// -------------------
// MODULE 1 (unchanged)
// -------------------
const module1 = {
  title: "Module 1: Introduction to AI in Education",
  videos: [
    {
      id: 1,
      title: "Video 1: What is AI?",
      url: "",
      notes: `
        <h4>Key Points</h4>
        <ul>
          <li>AI = Machines simulating human intelligence.</li>
          <li>Examples teachers already use: Google Translate, Grammarly, YouTube recommendations.</li>
          <li>We already rely on AI daily — why not in our classrooms?</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Video 2: AI in Education Today",
      url: "",
      notes: `
        <h4>Classroom Applications</h4>
        <ul>
          <li>Adaptive learning platforms (personalized practice).</li>
          <li>Auto-grading systems saving teacher time.</li>
          <li>Language learning apps powered by AI.</li>
        </ul>
        <p><b>Case Study:</b> A teacher uses AI to personalize math practice for students.</p>
      `,
    },
    {
      id: 3,
      title: "Video 3: Benefits & Risks of AI for Teachers",
      url: "",
      notes: `
        <h4>Benefits</h4>
        <ul>
          <li>Saves time through automation.</li>
          <li>Gives insights into student learning patterns.</li>
          <li>Helps design engaging content faster.</li>
        </ul>
        <h4>Risks</h4>
        <ul>
          <li>Over-reliance on AI tools.</li>
          <li>Bias in AI outputs.</li>
          <li>Ethical concerns like plagiarism.</li>
        </ul>
        <p><b>Scenario:</b> If AI writes an essay, what should be the teacher’s role?</p>
      `,
    },
    {
      id: 4,
      title: "Video 4: The Future of AI in Education",
      url: "",
      notes: `
        <h4>Looking Ahead</h4>
        <ul>
          <li>Predictions for AI in the next 5 years.</li>
          <li>Global guidelines: UNESCO & OECD on AI in education.</li>
          <li>Key insight: “AI won’t replace teachers, but teachers using AI will replace those who don’t.”</li>
        </ul>
      `,
    },
  ],

  quiz: {
    passScore: 80,
    questions: [
      {
        question: "What does AI stand for?",
        options: ["Artificial Innovation", "Artificial Intelligence", "Automated Input"],
        correct: "Artificial Intelligence",
      },
      {
        question: "Which is an AI tool for quiz creation?",
        options: ["Excel", "Quizizz", "PowerPoint"],
        correct: "Quizizz",
      },
      {
        question: "Which of the following is a risk of AI in education?",
        options: ["Better lesson planning", "Bias in responses", "Saving teacher time"],
        correct: "Bias in responses",
      },
      {
        question: "ChatGPT can be used to…",
        options: ["Grade physical assignments", "Generate lesson plans", "Print textbooks"],
        correct: "Generate lesson plans",
      },
      {
        question: "True or False: AI can completely replace teachers in the future.",
        options: ["True", "False"],
        correct: "False",
      },
    ],
  },

  nextModule: "/module2",
};

// -------------------------
// EXPORT AS MODULE OBJECT
// -------------------------
const moduleData = {
  module1,
  // module2: {},  // ← you can add these later
  // module3: {},
};

export default moduleData;
