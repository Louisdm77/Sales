import { useState } from "react";
import Header from "./Header";
import "../../../src/App.css";
import Hero from "./Hero";
import Side from "./Sidebar";
import Deals from "./Deals";
import Topproducts from "./Topproducts";
import Discount from "./Discount.jsx";
import "../../assets/styles.css";
function Home() {
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
        <Discount />
      </div>
    </div>
  );
}

export default Home;
