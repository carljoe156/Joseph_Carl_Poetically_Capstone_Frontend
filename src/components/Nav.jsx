import React from "react";
import { Link } from "react-router";

const Navbar = ({}) => {
  return (
    <div className="border-b-2 shadow-md border-gray-100 pb-5">
      <div className="max-w-7xl mx-auto my-5 px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row min-w-full py-6 space-y-8 justify-center md:justify-between md:space-x-10">
          <div className="flex-1 md:self-start">
            <div className="flex justify-center">
              <div className="flex justify-center items-center">
                <Link
                  to="/"
                  className="pt-1 mx-3 whitespace-nowrap text-4xl italic font-light text-red-700 hover:text-gray-900"
                >
                  P3
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-grow md:justify-center md:space-x-16">
        {" "}
        <Link to="/about" className="text-gray-900 hover:text-gray-500">
          About
        </Link>
        <Link to="/discover" className="text-gray-900 hover:text-gray-500">
          Discover
        </Link>
        <Link to="/booklist" className="text-gray-900 hover:text-gray-500">
          Lists
        </Link>
        {/*  W.I.P <Link
          to="/"
          onClick={handleLogOut}
          className="text-gray-900 hover:text-gray-500"
        >
          Sign In|Sign Out
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
