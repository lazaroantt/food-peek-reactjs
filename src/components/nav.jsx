import {useState} from 'react'

import { Link } from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

  return (
    <nav>
      <div className='logo'>
        <div>
          <h1><span>F</span>oo<span>D</span></h1>
          <h1><span>P</span>ee<span>K</span></h1>
        </div>
        <div id="icon">
           <GiHamburgerMenu className="icon" id="menu"/>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <BiSearch className='icon' />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

/*function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";*/