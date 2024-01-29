/* 
  File Name: Navbar.js
  Student's Name: Yash Srivastava
  Student ID: 301382697
  Date: January 28, 2024
*/

import "./NavbarStyles.css"
import { Link } from "react-router-dom"

import React from 'react'

const Navbar = () => {
  return (
    <div className="header">
        <Link to="/"> 
        <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to="/">Home</Link>
                </li>
                <li><Link to="/project">Project</Link></li>
               <li> <Link to="/about">About</Link> </li>
               <li> <Link to="/contact">Contact</Link></li>
               <li> <Link to="/services">Services</Link></li>

               
           
        </ul>
    </div>
  )
}

export default Navbar