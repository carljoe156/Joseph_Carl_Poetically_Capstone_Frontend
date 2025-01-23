import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "../components/Spinner";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/Home/BooksTable";
import Layout from "../components/Layout/Layout";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("card");
  const LOCAL_URL = "http://localhost:5000";
  const DEPLOY_URL =
    "https://joseph-carl-poetically-capstone-backend.onrender.com";

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${DEPLOY_URL}/api/v1/allbooks`, {
          withCredentials: true,
        });
        setBooks(res.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Layout>
      <div className="p-4">
        <header className="text-center py-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Literary Registry: Share Your Reads
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            <span className="italic text-gray-700">
              PASS ON A BOOK, PASS ON A STORY
            </span>
          </h2>
          <Link to="/create">
            <button className="bg-red-800 hover:bg-red-900 text-white font-semibold px-4 py-2 rounded-lg">
              <MdOutlineAddBox className="text-xl mr-2" />
              Add Book
            </button>
          </Link>
        </header>

        <div className="mt-4 flex justify-center items-center gap-x-4">
          <button
            className={`${
              showType === "table"
                ? "bg-sky-600"
                : "bg-sky-300 hover:bg-sky-600"
            } px-4 py-1 rounded-lg text-white font-semibold`}
            onClick={() => setShowType("table")}
          >
            Table View
          </button>
          <button
            className={`${
              showType === "card" ? "bg-sky-700" : "bg-sky-300 hover:bg-sky-400"
            } px-4 py-1 rounded-lg text-white font-semibold`}
            onClick={() => setShowType("card")}
          >
            Card View
          </button>
        </div>

        {loading ? (
          <Spinner />
        ) : showType === "card" ? (
          <BooksCard books={books} />
        ) : (
          <BooksTable books={books} />
        )}
      </div>
    </Layout>
  );
};

export default BookList;
