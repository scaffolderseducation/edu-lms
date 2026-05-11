// src/ModuleWrapper.js
import React from "react";
import { useParams } from "react-router-dom";
import ModulePage from "./ModulePage";
import moduleData from "./moduleData";

function ModuleWrapper() {
  const { moduleId } = useParams();

  // Get module info from database / JSON
  const module = moduleData[moduleId];

  if (!module) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>❌ Module not found!</h2>
        <p>The content you're looking for doesn't exist or was removed.</p>
        <a href="/courses" style={{ color: "#198754", fontWeight: "bold" }}>
          Go back to Courses
        </a>
      </div>
    );
  }

  return <ModulePage module={module} />;
}

export default ModuleWrapper;
