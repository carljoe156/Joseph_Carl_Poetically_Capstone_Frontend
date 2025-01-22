import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategory] = useState("fiction");
  const booksPerPage = 20;

  // I predfined some categories for our filter function
  const categories = [
    "art",
    "biography",
    "business",
    "children",
    "computers",
    "cooking",
    "history",
    "health",
    "hobbies",
    "home",
    "humor",
    "literature",
    "medical",
    "music",
    "mystery",
    "non-fiction",
    "philosophy",
    "politics",
    "religion",
    "science",
    "sports",
  ];

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&startIndex=${
          (page - 1) * booksPerPage
        }&maxResults=${booksPerPage}`
      );
      const newBooks = res.data.items;
      setBooks(newBooks);
      setTotalPages(Math.ceil(res.data.totalItems / booksPerPage));
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page, category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setBooks([]);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading && page === 1) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4" aria-label="Discover Books">
        Discover Books
      </h1>

      {/* Our  Category Dropdown */}
      <label htmlFor="category" className="sr-only">
        Select book category
      </label>
      <select
        id="category"
        value={category}
        onChange={handleCategoryChange}
        className="mb-4 border p-2"
        aria-label="Select book category"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      {/* Book Listings */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
      >
        {books.map((book) => (
          <div
            key={book.id}
            className="border p-4 rounded shadow hover:shadow-lg transition flex items-center space-x-4"
            role="listitem"
            aria-labelledby={`book-title-${book.id}`}
            aria-describedby={`book-description-${book.id}`}
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              className="w-1/3 h-auto"
              aria-hidden="true"
            />
            <div className="w-2/3">
              <h2
                id={`book-title-${book.id}`}
                className="text-xl font-semibold"
              >
                <Link
                  to={`/book/${book.id}`}
                  aria-label={`Go to details of ${book.volumeInfo.title}`}
                >
                  {book.volumeInfo.title}
                </Link>
              </h2>
              <p
                id={`book-description-${book.id}`}
                className="text-gray-600"
                aria-live="polite"
              >
                {book.volumeInfo.authors?.join(", ")}
              </p>
              <p>{book.volumeInfo.publishedDate}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Our Pagination */}
      <div
        className="flex justify-center mt-6"
        role="navigation"
        aria-label="Pagination"
      >
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
          aria-disabled={page === 1}
          aria-label="Go to previous page"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded mx-2 ${
              page === index + 1
                ? "bg-red-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-current={page === index + 1 ? "page" : undefined}
            aria-label={`Go to page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
          aria-disabled={page === totalPages}
          aria-label="Go to next page"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
