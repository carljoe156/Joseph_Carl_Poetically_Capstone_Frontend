// NOT NEED TO POST
import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2 mt-4 md:mt-0"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
        className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-red-300"
      />
      <button
        type="submit"
        className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
