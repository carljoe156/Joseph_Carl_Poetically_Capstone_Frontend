import { Link } from "react-router";
import { BsArrowLeft } from "react-icons/bs";

// Our Back button for our Lists
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-red-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
