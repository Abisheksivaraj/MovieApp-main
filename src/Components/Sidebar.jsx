import React from 'react'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png"
import { IoLanguageSharp } from "react-icons/io5";
import '../Styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="icons">
        <ul>
          <li>
            <IoHomeOutline />
          </li>
          <li>
            <MdOutlineFavoriteBorder />
          </li>
          <li>
            <IoLanguageSharp />
          </li>
          <li>
            <CgProfile />
          </li>
        </ul>
      </div>

      <div className="logout">
        <FiLogOut />
      </div>
    </div>
  );
}

export default Sidebar