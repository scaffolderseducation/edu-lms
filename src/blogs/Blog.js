import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "./blogData";

function Blog() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <div style={styles.heroSection}>
        <h1 style={styles.heading}>
          Scaffolders Education Blog
        </h1>

        <p style={styles.subheading}>
          AI • Teacher Development • CTET • Future Education • EdTech
        </p>

        <div style={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>

      {/* BLOG GRID */}
      <div style={styles.grid}>

        {filteredBlogs.map((blog) => (
          <div key={blog.id} style={styles.card}>

            {/* BLOG IMAGE */}
            <img
              src={blog.image}
              alt={blog.title}
              style={styles.image}
            />

            {/* CARD CONTENT */}
            <div style={styles.cardContent}>

              <span style={styles.category}>
                {blog.category}
              </span>

              <h2 style={styles.title}>
                {blog.title}
              </h2>

              <p style={styles.excerpt}>
                {blog.excerpt}
              </p>

              <Link
                to={`/blog/${blog.slug}`}
                style={styles.button}
              >
                Read Full Article
              </Link>

            </div>
          </div>
        ))}

      </div>

      {/* EMPTY RESULT */}
      {filteredBlogs.length === 0 && (
        <div style={styles.noResult}>
          No blogs found.
        </div>
      )}

    </div>
  );
}

const styles = {

  container: {
    padding: "50px 20px",
    background: "#f4f8fb",
    minHeight: "100vh",
    fontFamily: "'Source Serif Pro', serif",
  },

  heroSection: {
    textAlign: "center",
    marginBottom: "50px",
  },

  heading: {
    fontSize: "52px",
    color: "#1b5e20",
    marginBottom: "12px",
    fontWeight: "700",
  },

  subheading: {
    fontSize: "19px",
    color: "#555",
    marginBottom: "35px",
    lineHeight: "1.7",
  },

  searchWrapper: {
    textAlign: "center",
    marginBottom: "20px",
  },

  searchInput: {
    width: "90%",
    maxWidth: "550px",
    padding: "15px 22px",
    borderRadius: "14px",
    border: "1px solid #d0d7de",
    fontSize: "16px",
    outline: "none",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },

  /* 4 BLOGS PER ROW */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "28px",
    maxWidth: "1500px",
    margin: "0 auto",
  },

  card: {
    background: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
    transition: "0.3s ease",
    display: "flex",
    flexDirection: "column",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  cardContent: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },

  category: {
    background: "#e8f5e9",
    color: "#1b5e20",
    padding: "6px 14px",
    borderRadius: "30px",
    fontSize: "13px",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  title: {
    marginTop: "18px",
    fontSize: "24px",
    color: "#1b5e20",
    lineHeight: "1.4",
    minHeight: "85px",
  },

  excerpt: {
    marginTop: "12px",
    color: "#555",
    lineHeight: "1.8",
    fontSize: "16px",
    flexGrow: 1,
  },

  button: {
    display: "inline-block",
    marginTop: "24px",
    background: "#1b5e20",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "15px",
    textAlign: "center",
  },

  noResult: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "22px",
    color: "#777",
  },
};

export default Blog;