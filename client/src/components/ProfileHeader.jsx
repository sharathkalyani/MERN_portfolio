import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function ProfileHeader(){
  return (
    <header style={{padding:18,display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="/profile.jpg" alt="avatar" className="cricket-profile" />
        <div>
          <div style={{color:'#0b6b2d',fontWeight:700}}>Kalyani Sharath</div>
          <div style={{color:'#475569',fontSize:13}}>MERN Developer • Information Science</div>
        </div>
      </div>

      <div style={{display:'flex',alignItems:'center',gap:14}}>
        <nav style={{display:'flex',gap:8}}>
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/about" className="nav-btn">About</Link>
          <Link to="/skills" className="nav-btn">Skills</Link>
          <Link to="/contact" className="nav-btn">Contact</Link>
        </nav>

      

        <ThemeToggle />
      </div>
    </header>
  )
}
