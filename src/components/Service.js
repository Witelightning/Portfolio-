/* 
  File Name: Service.js
  Student's Name: Yash Srivastava
  Student ID: 301382697
  Date: January 28, 2024
*/


import { Link } from "react-router-dom"
import "./ServicesStyles.css"
import React from 'react'

const Services = () => {
  return (
      <div className="services">
        <div className="card-container">
          <div className="card">
            <h3>Web Development</h3>
            <span className="bar"></span>
            <p class className="btc">$80</p>
            <p>- Front End Development -</p>
            <p>- Back End Development -</p>
            <p>- Mobile Responsive Design-</p>
            <Link to="/contact" className="btn" > Purchase Now 
            </Link>
          </div>
          <div className="card">
            <h3>Search Engine Optimization</h3>
            <span className="bar"></span>
            <p class className="btc">$60</p>
            <p>- Optimize Website For Search Engines -</p>
            <p>- Improving Online Visibility -</p>
            <p>- Link Building-</p>
            <Link to="/contact" className="btn" ><center>Purchase Now </center> 
            </Link>
          </div><div className="card">
            <h3>Web Hosting and Management</h3>
            <span className="bar"></span>
            <p class className="btc">$50</p>
            <p>- Web hosting Services -</p>
            <p>- Ongoing Maintanence Packages -</p>
            <p>- Hassle Free Website-</p>
            <Link to="/contact" className="btn" > Purchase Now 
            </Link>
          </div>
          
        </div>
      </div>    
  )
}

export default Services