import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Module1 = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Learning Objectives */}
      <Card>
        <CardContent>
          <Typography variant="h5" color="primary">Learning Objectives</Typography>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Understand what Artificial Intelligence (AI) is.</li>
            <li>Explore how AI is already being used in education.</li>
            <li>Recognize opportunities and challenges of AI in classrooms.</li>
            <li>Build awareness of ethical use of AI in education.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Video Lesson */}
      <Card>
        <CardContent>
          <Typography variant="h5" color="primary">Video Lesson</Typography>
          <Typography className="mt-2">
            Watch this short video explaining AI in Education with real-life
            examples.
          </Typography>
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Module 1 Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </CardContent>
      </Card>

      {/* AI Tools Demo */}
      <Card>
        <CardContent>
          <Typography variant="h5" color="primary">Demo of AI Tools</Typography>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><b>ChatGPT</b> – Create lesson plans instantly.</li>
            <li><b>Grammarly</b> – Correct grammar in student writing.</li>
            <li><b>Google Translate</b> – Support multilingual classrooms.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Detailed Write-up */}
      <Card>
        <CardContent>
          <Typography variant="h5" color="primary">Detailed Write-Up</Typography>
          <Typography className="mt-2">
            AI is transforming education worldwide. From automating routine tasks
            to enabling personalized learning, AI is a powerful assistant to
            educators. Teachers remain central — using AI responsibly to keep
            learning human-centered.
          </Typography>
        </CardContent>
      </Card>

      {/* Quiz */}
      <Card>
        <CardContent>
          <Typography variant="h5" color="primary">Quiz</Typography>
          <Typography className="mt-2">
            Test your knowledge from this module. You need at least 80% to move
            forward.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/quiz/1"
            className="mt-4"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>

      {/* Learning Outcomes */}
      <Card>
        <CardContent>
          <Typography variant="h5" color="primary">Learning Outcomes</Typography>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Explain AI basics in your own words.</li>
            <li>Identify at least 3 AI tools applicable in classrooms.</li>
            <li>Distinguish between myths and realities of AI in teaching.</li>
            <li>Build confidence to experiment with simple AI tools.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Module1;
