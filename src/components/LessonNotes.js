import React, { useState } from "react";
import "./LessonNotes.css";

function LessonNotes({ notes }) {
  return (
    <div className="lesson-notes-container">
      <h3 className="notes-heading">📘 Lesson Notes</h3>

      {notes.map((note, index) => (
        <Accordion key={index} note={note} />
      ))}
    </div>
  );
}

function Accordion({ note }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4>{note.title}</h4>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <p>{note.content}</p>

          {note.caseStudy && (
            <div className="case-study">
              <h5>📖 Case Study</h5>
              <p><strong>Story:</strong> {note.caseStudy.story}</p>
              <p><strong>Dilemma:</strong> {note.caseStudy.dilemma}</p>
              <p><strong>AI Solution:</strong> {note.caseStudy.solution}</p>
              {note.caseStudy.image && (
                <div className="case-image">
                  <img src={note.caseStudy.image} alt="Case Study" />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LessonNotes;
