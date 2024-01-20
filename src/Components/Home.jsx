import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../Styles/Home.css";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Navbar/>
      <Slider/>
    </div>
  );
};

export default Home;
