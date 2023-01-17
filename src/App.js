import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Single from "./components/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
