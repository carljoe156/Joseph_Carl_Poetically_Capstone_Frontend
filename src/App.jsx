import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
import UpdateBook from "./pages/UpdateBook";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import Blog1 from "./pages/Blog/Blog1";
import Blog2 from "./pages/Blog/Blog2";
import Blog3 from "./pages/Blog/Blog3";
import Blog4 from "./pages/Blog/Blog4";
import Blog5 from "./pages/Blog/Blog5";
import Blog6 from "./pages/Blog/Blog6";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Discover from "./pages/Discover";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/book/:id" element={<ShowBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
        <Route path="/blog5" element={<Blog5 />} />
        <Route path="/blog6" element={<Blog6 />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
