import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </>
  );
};

export default App;
