/* 
  File Name: AboutContent.js
  Student's Name: Yash Srivastava
  Student ID: 301382697
  Date: January 28, 2024
*/


import "./AboutContentStyles.css"
import { Link } from "react-router-dom";


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="para">
            <h1>Who am I?</h1>
            <p>Hello, I'm Yash Srivastava from India. I completed my Bachelor's in Computer and Communication and am currently pursuing a postgraduate degree in Software Engineering Technology AI Fast Track at Centennial College in Canada.

Passionate about technology, my academic journey is a deliberate step into software engineering and Artificial Intelligence. Centennial College's dynamic environment provides hands-on experiences and exposure to the latest tech.

Studying in Canada enhances my education with cultural diversity and a global perspective. I aim to leverage my skills to contribute to the tech industry, fostering innovation and pushing boundaries.

In essence, my journey signifies a commitment to knowledge, personal growth, and a passion for the transformative power of technology. I'm excited about the challenges ahead in Software Engineering Technology and Artificial Intelligence. </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent