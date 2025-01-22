import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router";

const BooksTable = ({ books }) => {
  if (!books || books.length === 0) {
    return <p>No books available.</p>;
  }

  // using tailwind css styling
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
            <th className="px-4 py-2 border border-slate-200 rounded-full max-md:hidden">
              Pages
            </th>
            <th className="px-4 py-2 border border-slate-200 rounded-full max-md:hidden">
              Publisher
            </th>
            <th className="px-4 py-2 border border-slate-200 rounded-full">
              EDIT
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td className="border text-black-500 px-4 py-2">{index + 1}</td>
              <td className="border text-red-500 px-4 py-2">{book.title}</td>
              <td className="border text-red-500 px-4 py-2 max-md:hidden">
                {book.genre}
              </td>
              <td className="border text-red-500 px-4 py-2 max-md:hidden">
                {book.author}
              </td>
              <td className="border text-red-500 px-4 py-2">{book.year}</td>
              <td className="border text-red-500 px-4 py-2 max-md:hidden">
                {book.pages}
              </td>
              <td className="border text-red-500 px-4 py-2 max-md:hidden">
                {book.publisher}
              </td>
              <td className="border text-red-500 px-4 py-2">
                <Link to={`/update/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-gray-700 hover:text-gray-900" />
                </Link>
                <Link to={`/book/${book._id}`}>
                  <FaInfoCircle className="text-2xl text-yellow-600 hover:text-yellow-700" />
                </Link>
                <Link to={`/delete/${book._id}`}>
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

export default BooksTable;
