import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Todo from "./Todo";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
