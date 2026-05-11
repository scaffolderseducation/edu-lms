// src/LessonNotes.js
import React from "react";

function LessonNotes({ notes }) {
  return (
    <div className="lesson-notes">
      <h4>📘 Lesson Notes</h4>
      <div dangerouslySetInnerHTML={{ __html: notes }} />
    </div>
  );
}

export default LessonNotes;
