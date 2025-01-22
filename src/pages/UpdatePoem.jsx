import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { SnackbarProvider, useSnackbar } from "notistack";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const UpdatePoem = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [content, setContent] = useState(""); // Changes pages to content
  const [publisher, setPublisher] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchPoem = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/poems/${id}`);
        const { title, genre, author, year, content, publisher } = res.data;
        setTitle(title);
        setGenre(genre);
        setAuthor(author);
        setYear(year);
        setContent(content);
        setPublisher(publisher);
      } catch (error) {
        enqueueSnackbar("Error fetching poem", { variant: "error" });
        console.error("Error fetching poem:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPoem();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  const handleEditPoem = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/v1/poems/${id}`, {
        title,
        genre,
        author,
        year,
        content,
        publisher,
      });
      navigate("/"); // Redirect to home page or list of poems
      enqueueSnackbar("Poem updated successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Error updating poem", { variant: "error" });
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Update Poem</h1>
      <form onSubmit={handleEditPoem}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="text-xl text-gray-500">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-slate-400 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="genre" className="text-xl text-gray-500">
              Genre
            </label>
            <input
              type="text"
              name="genre"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="border-2 border-slate-400 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="author" className="text-xl text-gray-500">
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-slate-400 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="year" className="text-xl text-gray-500">
              Publish Year
            </label>
            <input
              type="text"
              name="year"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border-2 border-slate-400 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="content" className="text-xl text-gray-500">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border-2 border-slate-400 rounded-md p-2 w-full"
              rows="4"
            />
          </div>
          <div>
            <label htmlFor="publisher" className="text-xl text-gray-500">
              Publisher
            </label>
            <input
              type="text"
              name="publisher"
              id="publisher"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              className="border-2 border-slate-400 rounded-md p-2 w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePoem;
