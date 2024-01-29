/* 
  File Name: HeroImg.js
  Student's Name: Yash Srivastava
  Student ID: 301382697
  Date: January 28, 2024
*/

import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assests/front image.jpg"
import { Link } from "react-router-dom";


const HeroImg = () => {
  return ( 
  <div className="hero">
        <div className="mask">
            <img className="into-img" 
            src={IntroImg} alt="IntroImg"/>
            </div>  
            <div className="content">
                <p>HI, I am Yash Srivastava</p>
                <h1>React Developer</h1>
                <divv>
                    <Link to="/Services" className="btn">Services</Link>
                </divv>
            </div>
        </div>
         );
};

export default HeroImg;