import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Navbar/>
    </div>
  );
};

export default Home;
