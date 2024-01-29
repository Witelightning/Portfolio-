/* 
  File Name: App.js
  Student's Name: Yash Srivastava
  Student ID: 301382697
  Date: January 28, 2024
*/

import React from "react"
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Services from "./routes/Services";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/project" element={<Project />}/>  
        <Route path="/about" element={<About/>}/>  
        <Route path="/contact" element={<Contact />}/> 
        <Route path="/services" element={<Services />}/> 

      </Routes>
    </>
  );
}

export default App;
