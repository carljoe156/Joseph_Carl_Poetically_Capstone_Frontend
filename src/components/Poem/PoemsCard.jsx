import React from "react";
import PoemSingleCard from "./PoemSingleCard";

const PoemsCard = ({ poems }) => {
  // Check if poems is an array and has items
  if (!Array.isArray(poems) || poems.length === 0) {
    return <p>No poems available</p>; // Display a message or return null
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {poems.map((item) => (
        <PoemSingleCard key={item._id} poem={item} />
      ))}
    </div>
  );
};

export default PoemsCard;
