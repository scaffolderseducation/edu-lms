import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    {
      title: "How to Become a Certified Teacher in India",
      link: "/blog/teacher-certification",
    },
    {
      title: "Best Online Teaching Courses in 2026",
      link: "/blog/online-teaching-courses",
    },
    {
      title: "Why Teacher Certification is Important",
      link: "/blog/importance-of-certification",
    },
  ];

  return (
    <div style={{ padding: 40 }}>
      <h1>Our Blog</h1>
      {posts.map((post, index) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <Link to={post.link}>
            <h3>{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;