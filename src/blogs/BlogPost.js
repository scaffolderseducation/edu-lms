import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData, { authorInfo } from "./blogData";
import "./BlogPost.css";

function BlogPost() {

  const { slug } = useParams();

  const blog = blogData.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog Not Found</h2>
      </div>
    );
  }

  // ==============================
  // RELATED BLOGS
  // ==============================

  const relatedBlogs = blogData
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  return (
    <div className="blog-post">

      {/* ==============================
          HEADER
      ============================== */}

      <div className="blog-header">

        <span className="blog-category">
          {blog.category}
        </span>

        <h1>{blog.title}</h1>

        <div className="blog-author-box">

          <p className="author-name">
            By Sarika Jain
          </p>

          <p className="author-qualification">
            {authorInfo}
          </p>

        </div>

      </div>

      {/* ==============================
          FEATURED IMAGE
      ============================== */}

      <img
        src={blog.image}
        alt={blog.title}
        className="blog-main-image"
      />

      {/* ==============================
          BLOG CONTENT
      ============================== */}

      <div className="blog-content">

        {blog.content
          .split("\n")
          .filter((para) => para.trim() !== "")
          .map((para, index) => (
            <p key={index}>{para}</p>
          ))}

      </div>

      {/* ==============================
          INTERNAL LINKS
      ============================== */}

      <div className="related-posts">

        <h3>Recommended Reading</h3>

        {relatedBlogs.map((item) => (
          <Link
            key={item.slug}
            to={`/blog/${item.slug}`}
          >
            → {item.title}
          </Link>
        ))}

        <Link to="/courses">
          → Explore AI for Educators Certification Program
        </Link>

        <Link to="/">
          → Visit Scaffolders Education Homepage
        </Link>

      </div>

      {/* ==============================
          CTA SECTION
      ============================== */}

      <div className="blog-cta">

        <h2>
          Continue Learning with Scaffolders Education
        </h2>

        <p>
          Explore AI-integrated education, teacher
          development programs, CTET preparation,
          certification courses, and future-ready
          learning resources.
        </p>

        <div className="blog-cta-buttons">

          <Link
            to="/courses"
            className="cta-btn"
          >
            View Courses
          </Link>

          <Link
            to="/blog"
            className="cta-btn secondary"
          >
            Read More Blogs
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BlogPost;