/* 
  File Name: Form.js
  Student's Name: Yash Srivastava
  Student ID: 301382697
  Date: January 28, 2024
*/


import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Subject</label>
        <textarea rows="6" placeholder="Type your message here"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form