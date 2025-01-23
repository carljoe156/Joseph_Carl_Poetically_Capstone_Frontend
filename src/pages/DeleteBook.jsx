import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { SnackbarProvider, useSnackbar } from "notistack";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout/Layout";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.delete(
        `https://joseph-carl-poetically-capstone-backend.onrender.com/api/v1/delete/${id}`
        // `http://localhost:5000/api/v1/delete/${id}`// our local web server
      );
      enqueueSnackbar("Book deleted successfully", { variant: "success" });
      navigate("/booklist"); // After deletion,  we navigate to Book list page
    } catch (error) {
      enqueueSnackbar("Error deleting book", { variant: "error" });
      console.error("Error deleting book:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Layout>
        <div className="p-4">
          <BackButton />
          <h1 className="text-3xl my-4">Delete Book</h1>
          {loading ? (
            <Spinner />
          ) : (
            <div className="bg-white shadow-md rounded p-4">
              <h3 className="text-2xl mb-4">
                Are you sure you want to delete book with ID: {id}?
              </h3>
              <button
                onClick={handleDeleteBook}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default DeleteBook;
