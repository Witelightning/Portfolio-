/* 
  File Name: About.js
  Student's Name: Yash Srivastava
  Student ID: 301382697
  Date: January 28, 2024
*/

import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="ABOUT."/>
        <AboutContent/>
    </div>
  )
}

export default About