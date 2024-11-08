import { useState } from "react";
import Header from "./assets/Components/Header";
import "./App.css";
import Hero from "./assets/Components/Hero";
import Side from "./assets/Components/Sidebar";
import Deals from "./assets/Components/Deals";
import Topproducts from "./assets/Components/Topproducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles.css";
function App() {
  const [sideShow, setSideShow] = useState(false);
  return (
    <div>
      <div className="absolute z-10 ">
        <Side sideShow={sideShow} setSideShow={setSideShow} />
      </div>
      <div className="overflow-hidden">
        <Header sideShow={sideShow} setSideShow={setSideShow} />
        <Hero />
        <Deals />
        <Topproducts />
      </div>
    </div>
  );
}

export default App;
