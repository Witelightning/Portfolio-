import "./WorkCardStyles.css";
import ecommerce from "../assests/ecommerce.jpg"
import otherimage from "../assests/otherimage.jpg"
import pawfect from "../assests/pawfect.jpg"

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
        <div className="project-card">
            <img src={ecommerce} alt="image"/>
            <h2 className="project-title">Ecommerce Website</h2>
            <div className="pro-details">
                <p>Designed a basic e-commerce website in a 24hr hackathon during the first year of Bachelors</p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>

     <div className="project-container1"> 
        <div className="project-card1">
        <img src={otherimage} alt="image"/>
         <h2 className="project-title">Reworck</h2>
        <div className="pro-details">
         <p>Task Management Website with integrated AI chat bot</p>
         <div className="pro-btns">
         <NavLink to="url.com" className="btn">View</NavLink>
         <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
        </div>
        </div>
      
        <div className="project-card2">
            <div className="project-card2">
            <img src={pawfect} alt="image"/>
            <h2 className="project-title">Pawfect</h2>
            <div className="pro-details">
                <p>A website to buy products for dogs and also provide information about the nearest animal center </p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default WorkCard