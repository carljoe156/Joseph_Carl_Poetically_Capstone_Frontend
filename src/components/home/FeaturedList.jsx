import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const FeaturedList = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch featured books from API or use static data
    const fetchFeaturedBooks = async () => {
      try {
        setLoading(true);
        // Replace with your backend API endpoint for featured books
        const res = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=featured&maxResults=5"
        );
        setFeaturedBooks(res.data.items);
      } catch (error) {
        console.error("Error fetching featured books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBooks();
  }, []);

  if (loading) return <p>Loading featured books...</p>;

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">📚 Featured Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredBooks.map((book) => (
          <div
            key={book.id}
            className="flex flex-col bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">
              {book.volumeInfo.title}
            </h3>
            <p className="text-sm text-gray-600">
              {book.volumeInfo.authors?.join(", ")}
            </p>
            <p className="text-gray-700 mt-2">
              {book.volumeInfo.description?.slice(0, 100)}...
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedList;
