// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Landingpage/Home";
import Navbar from "./Landingpage/Navbar";
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define more routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;