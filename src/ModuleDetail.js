// src/ModuleDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";

function ModuleDetail() {
  const { id } = useParams(); // get module id from URL

  // For now, dummy content
  const lessons = [
    { id: 1, title: "Introduction to Module " + id },
    { id: 2, title: "Core Concepts of Module " + id },
    { id: 3, title: "Practical Example in Module " + id },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Module {id} - Details</h2>
      <p>Welcome to Module {id}. Complete the lessons before taking the quiz.</p>

      {lessons.map((lesson) => (
        <Card key={lesson.id} style={{ margin: "10px 0" }}>
          <CardContent>{lesson.title}</CardContent>
        </Card>
      ))}

      <br />
      <Link to={`/quiz/${id}`}>
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}

export default ModuleDetail;
