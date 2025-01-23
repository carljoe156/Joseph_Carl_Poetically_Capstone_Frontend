import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowPoem = () => {
  const [poem, setPoem] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://joseph-carl-poetically-capstone-backend.onrender.com/api/v1/poems/${id}`
      )
      //   .get(`http://localhost:5000/api/v1/poems/${id}`)
      .then((resp) => {
        setPoem(resp.data);
        setLoading(false);
        console.log("poem data response:", resp.data);
      })
      .catch((error) => {
        console.error("Error fetching poem:", error);
        setLoading(false);
      });
  }, [id]);

  console.log("poem object:", poem);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Poem Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {Object.keys(poem).length === 0 ? (
            <p className="text-gray-500 text-xl">No data available</p>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-gray-600 text-xl font-semibold">
                  Title:
                </label>
                <p className="text-xl text-gray-800">{poem.title}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-xl font-semibold">
                  Genre:
                </label>
                <p className="text-xl text-gray-800">{poem.genre}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-xl font-semibold">
                  Author:
                </label>
                <p className="text-xl text-gray-800">{poem.author}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-xl font-semibold">
                  Publish Year:
                </label>
                <p className="text-xl text-gray-800">{poem.year}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-xl font-semibold">
                  Publisher:
                </label>
                <p className="text-xl text-gray-800">{poem.publisher}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-xl font-semibold">
                  Last Update Time:
                </label>
                <p className="text-xl text-gray-800">
                  {new Date(poem.updatedAt).toLocaleString()}
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowPoem;
