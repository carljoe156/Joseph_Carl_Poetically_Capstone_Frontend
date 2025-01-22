import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router";

const PoemsTable = ({ poems }) => {
  if (!poems || poems.length === 0) {
    return <p>No poems available.</p>;
  }

  return (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-slate-400 rounded-full">
              No
            </th>
            <th className="px-4 py-2 border border-slate-200 rounded-full">
              Title
            </th>
            <th className="px-4 py-2 border border-slate-200 rounded-full max-md:hidden">
              Genre
            </th>
            <th className="px-4 py-2 border border-slate-200 rounded-full max-md:hidden">
              Author
            </th>
            <th className="px-4 py-2 border border-slate-200 rounded-full">
              Year
            </th>
            <th className="px-4 py-2 border border-slate-200 rounded-full">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {poems.map((poem, index) => (
            <tr key={poem._id}>
              <td className="border text-black-500 px-4 py-2">{index + 1}</td>
              <td className="border text-red-500 px-4 py-2">{poem.title}</td>
              <td className="border text-red-500 px-4 py-2 max-md:hidden">
                {poem.genre || "N/A"}
              </td>
              <td className="border text-red-500 px-4 py-2 max-md:hidden">
                {poem.author || "Anonymous"}
              </td>
              <td className="border text-red-500 px-4 py-2">
                {poem.publishYear || "N/A"}
              </td>
              <td className="border text-red-500 px-4 py-2 flex space-x-2">
                <Link to={`/update/${poem._id}`}>
                  <AiOutlineEdit className="text-2xl text-blue-700 hover:text-blue-900" />
                </Link>
                <Link to={`/poem/${poem._id}`}>
                  <FaInfoCircle className="text-2xl text-yellow-500 hover:text-yellow-700" />
                </Link>
                <Link to={`/delete/${poem._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-600" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PoemsTable;
