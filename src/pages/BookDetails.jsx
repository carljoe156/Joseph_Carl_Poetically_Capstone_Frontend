import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams(); // Gets the book ID from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]); // Fetch book details when the book ID changes

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>No book found.</p>;

  const {
    title,
    authors,
    publishedDate,
    description,
    categories,
    pageCount,
    imageLinks,
    previewLink,
  } = book.volumeInfo;

  return (
    <div className="p-4">
      <div className="flex flex-wrap">
        {/* Our Book Image */}
        <div className="w-full sm:w-1/3 flex justify-center">
          <img
            src={imageLinks?.thumbnail || "https://via.placeholder.com/150"}
            alt={title}
            className="max-w-full h-auto rounded shadow-lg"
            style={{ maxHeight: "300px" }}
          />
        </div>

        {/*Our  Book Details */}
        <div className="w-full sm:w-2/3 pl-4 mt-4 sm:mt-0">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-lg text-gray-600">
            <strong>Authors:</strong> {authors?.join(", ")}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Published Date:</strong> {publishedDate}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Categories:</strong> {categories?.join(", ")}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Page Count:</strong> {pageCount} pages
          </p>
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Preview this book
          </a>

          {/*Our Description Card */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Description</h2>
            <div className="bg-white border rounded shadow p-4">
              <p
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
