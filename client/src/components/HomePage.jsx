import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(){
  return (
    <div className="page-card">
      <h2 style={{marginTop:0}}>🏏 Welcome to My Cricket-Inspired Portfolio</h2>
      <p>I'm <strong>Kalyani Sharath</strong>, a MERN Stack Developer and Information Science student with a passion for building clean, realistic apps.</p>
      <div style={{marginTop:16}}>
        <Link to="/about" className="nav-btn" style={{marginRight:8}}>About</Link>
        <Link to="/skills" className="nav-btn" style={{marginRight:8}}>Skills</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
      </div>
      <div style={{marginTop:18}}>
        <a href="/Kalyani_Sharath_Resume.pdf" download className="btn-main">Download My Resume</a>
      </div>
    </div>
  )
}
