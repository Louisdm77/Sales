import { useState } from "react";
import Home from "./assets/Components/Home.jsx";
import Allrandom from "./assets/Components/Allrandom.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./assets/Components/Productdetails.jsx";
import Footer from "./assets/Components/Footer.jsx";
import Cart from "./assets/Components/Cart.jsx";
import Drinks from "./assets/Components/Drinks.jsx";
import Laptop from "./assets/Components/Laptop.jsx";
import Camera from "./assets/Components/Camera.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Allrandom" element={<Allrandom />} />
      <Route path="/Drinks" element={<Drinks />} />
      <Route path="/Laptop" element={<Laptop />} />
      <Route path="/Camera" element={<Camera />} />
    </Routes>
  );
}

export default App;
