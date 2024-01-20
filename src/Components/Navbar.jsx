import React from 'react'
import { IoSearch } from "react-icons/io5";
import profile from"../assets/profile.jpg"
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="search">
        <input type="search" placeholder='Search' 
        />
        <label htmlFor=""><IoSearch/></label>
      </div>

      <div className="items">
        <ul className='ul-items'>
          <li className='nav-items'>Movies</li>
          <li className='navv-items'>Tv Shows</li>
          <li className='nav-itemss'>Animations</li>
        </ul>
      </div>

      <div className="profile">
        <img src={profile} alt="" className='profile-img' />
      </div>
    </div>
  )
}

export default Navbar