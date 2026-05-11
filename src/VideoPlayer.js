// src/VideoPlayer.js
import React from "react";

function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-container">
      {videoUrl ? (
        <video controls width="100%">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="video-placeholder">
          🎥 Video coming soon (AI-generated content placeholder)
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
