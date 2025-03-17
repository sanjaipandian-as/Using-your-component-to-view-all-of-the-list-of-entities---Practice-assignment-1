// write the book component code here

import React from "react";

const BookCard = ({ book }) => {
  return (
    <div style={styles.card}>
      <img src={book.image} alt={book.name} style={styles.image} />
      <h2 style={styles.title}>{book.name}</h2>
      <p style={styles.genre}>Genre: {book.genre}</p>
      <p style={styles.author}>Author: {book.author}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  genre: {
    fontSize: "14px",
    color: "#555",
  },
  author: {
    fontSize: "14px",
    color: "#888",
  },
};

export default BookCard;