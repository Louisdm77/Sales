import { useState } from "react";
import Home from "./assets/Components/Home.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./assets/Components/Productdetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
