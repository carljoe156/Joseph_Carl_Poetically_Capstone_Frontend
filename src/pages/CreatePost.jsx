import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import Layout from "../components/Layout/Layout";

const CreatePost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleFileChange = (event) => {
    setNewPost({ ...newPost, file: event.target.files[0] });
  };

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    if (!newPost.title || !newPost.content) {
      enqueueSnackbar("Title and content are required", { variant: "error" });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("file", newPost.file);

    try {
      const response = await axios.post(
        "https://joseph-carl-poetically-capstone-backend.onrender.com/api/v1/createpost",
        // "http://localhost:5000/api/v1/createpost", //Our localhost webserver
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      enqueueSnackbar("Post created successfully!", { variant: "success" });
      navigate("/posts"); // Redirect to posts list page or dashboard
    } catch (error) {
      enqueueSnackbar("Error creating post", { variant: "error" });
      console.error("Error creating post:", error.response || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Share to the World Create a Post !
        </h2>
        <form onSubmit={handlePostSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-600 font-semibold"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-gray-600 font-semibold"
            >
              Content
            </label>
            <textarea
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="p-2 border border-gray-300 rounded-lg"
            />
            {newPost.file && <p>File: {newPost.file.name}</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full mt-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-700 transition-all"
            >
              {loading ? "Creating..." : "Create Post"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePost;
