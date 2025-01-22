import React from "react";
import { Link } from "react-router";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <header>
        <h1 className="text-3xl font-bold text-center my-8"></h1>
      </header> */}
      <main className="flex-grow p-6">{children}</main>
      <footer className="text-center py-4 bg-gray-100">
        <p className="text-sm text-gray-600">
          © 2025 Poetically, All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Layout;
