import { useState } from "react";
import Home from "./assets/Components/Home.jsx";
import Allrandom from "./assets/Components/Allrandom.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./assets/Components/Productdetails.jsx";
import Footer from "./assets/Components/Footer.jsx";
import Cart from "./assets/Components/Cart.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Allrandom" element={<Allrandom />} />
    </Routes>
  );
}

export default App;
