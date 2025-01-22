import React from "react";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  // Check if books is an array and has items
  if (!Array.isArray(books) || books.length === 0) {
    return <p>No books available</p>; // Displays a message or return null
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
