import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
import UpdateBook from "./pages/UpdateBook";
import BookList from "./pages/BookList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/book/:id" element={<ShowBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
