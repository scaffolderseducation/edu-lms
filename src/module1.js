// src/module1.js
const module1 = {
  title: "Module 1: Introduction to AI in Education",
  videos: [
    {
      title: "Video 1: What is AI?",
      url: "", // placeholder, update later with your video link
      notes: {
        keyPoints: [
          "AI = Machines simulating human intelligence.",
          "Examples teachers already use: Google Translate, Grammarly, YouTube recommendations.",
          "We already rely on AI daily — why not in our classrooms?",
        ],
        caseStudy: {
          story: "A language teacher often struggled to explain difficult words to her students in real-time during class. She wanted to provide instant translations without breaking the flow of her lesson.",
          dilemma: "She had to either pause her lecture to look up translations or risk students losing focus by not explaining properly.",
          solution: "By integrating Google Translate (an AI tool) into her teaching, she quickly translated difficult words on the spot, keeping the class engaged and helping students grasp meaning instantly.",
          image: "", // add image path later (e.g., "/images/module1/casestudy1.png")
        },
      },
    },
    {
      title: "Video 2: AI in Education Today",
      url: "",
      notes: {
        keyPoints: [
          "Adaptive learning platforms personalize practice for students.",
          "Auto-grading systems save valuable teacher time.",
          "Language learning apps powered by AI enhance engagement.",
        ],
        caseStudy: {
          story: "A math teacher had a mixed-ability classroom where some students finished practice problems very quickly while others needed more time and support.",
          dilemma: "The teacher struggled to keep advanced students challenged while ensuring weaker students didn’t feel left behind.",
          solution: "By adopting an adaptive AI-powered platform, each student received customized practice. The stronger students got more challenging problems while weaker students got step-by-step guided practice.",
          image: "",
        },
      },
    },
    {
      title: "Video 3: Benefits & Risks of AI for Teachers",
      url: "",
      notes: {
        keyPoints: [
          "AI saves time through automation.",
          "Provides insights into student learning patterns.",
          "Helps design engaging content faster.",
          "Risks include over-reliance, bias in AI outputs, and ethical concerns like plagiarism.",
        ],
        caseStudy: {
          story: "An English teacher used AI to generate essay outlines for her students. While some students benefited, others copied the AI’s response without adding their own input.",
          dilemma: "The teacher faced the challenge of encouraging authentic learning while still making use of AI’s time-saving capabilities.",
          solution: "She redesigned assignments to require personal reflection and analysis in addition to AI-generated outlines, ensuring originality while leveraging AI as a support tool.",
          image: "",
        },
      },
    },
    {
      title: "Video 4: The Future of AI in Education",
      url: "",
      notes: {
        keyPoints: [
          "Predictions for AI in the next 5 years.",
          "Global guidelines from UNESCO & OECD on AI in education.",
          "Key insight: “AI won’t replace teachers, but teachers using AI will replace those who don’t.”",
        ],
        caseStudy: {
          story: "A school district was hesitant about investing in AI tools, fearing they would become obsolete or replace teachers.",
          dilemma: "They had to balance innovation with teacher trust, while ensuring students weren’t overly dependent on technology.",
          solution: "The district implemented AI tools gradually, pairing them with teacher training programs. This ensured teachers remained in control while using AI as an aid, not a replacement.",
          image: "",
        },
      },
    },
  ],
  quiz: [
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
  nextModule: "/module2", // unlocks after passing quiz
};

export default module1;
