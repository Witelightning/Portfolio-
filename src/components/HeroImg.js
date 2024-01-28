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
                <div>
                    <Link to="/project"
                    className="btn">PROJECTS</Link>
                    <Link to="/contact"
                    className="btn-light">CONTACT</Link>
                </div>
            </div>
        </div>
         );
};

export default HeroImg;