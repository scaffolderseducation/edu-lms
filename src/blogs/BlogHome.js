// src/blogs/BlogHome.js

import React from "react";
import { Link } from "react-router-dom";
import blogData from "./blogData";

function BlogHome() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>
        Scaffolders Education Blog
      </h1>

      <p style={styles.subheading}>
        Insights on AI, Education, Analytics & Career Growth
      </p>

      <div style={styles.grid}>
        {blogData.map((blog) => (
          <div key={blog.id} style={styles.card}>
            <img
              src={blog.image}
              alt={blog.title}
              style={styles.image}
            />

            <div style={styles.content}>
              <p style={styles.category}>
                {blog.category}
              </p>

              <h2 style={styles.title}>
                {blog.title}
              </h2>

              <p style={styles.excerpt}>
                {blog.excerpt}
              </p>

              <p style={styles.author}>
                By {blog.author}
              </p>

              <Link
                to={`/blogs/${blog.slug}`}
                style={styles.button}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "40px",
    background: "#f5f7f2",
    minHeight: "100vh",
    fontFamily: "'Source Serif Pro', serif",
  },

  heading: {
    textAlign: "center",
    color: "#1b5e20",
    fontSize: "42px",
    marginBottom: "10px",
  },

  subheading: {
    textAlign: "center",
    color: "#555",
    marginBottom: "40px",
    fontSize: "18px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  content: {
    padding: "20px",
  },

  category: {
    color: "#4caf50",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  title: {
    fontSize: "24px",
    color: "#222",
    marginBottom: "15px",
  },

  excerpt: {
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "20px",
  },

  author: {
    color: "#888",
    marginBottom: "20px",
  },

  button: {
    display: "inline-block",
    padding: "10px 18px",
    background: "#4caf50",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default BlogHome;