import React from 'react'

export default function AboutPage(){
  return (
    <div className="page-card">
      <h2 style={{marginTop:0}}>About Me</h2>
      <p><strong>Name:</strong> Kalyani Sharath</p>
      <p><strong>Education:</strong> B.E. Information Science — CGPA 8.92</p>

      <h3>Achievements</h3>
      <ul>
        <li>Represented college in cricket tournaments</li>
        <li>Lead a team in national level Hackathon (Oct 2024)</li>
        <li>Strong academic performance and project experience</li>
      </ul>

      <h3>Certifications</h3>
      <ul>
        <li>MERN Full-Stack Certification</li>
      </ul>

      <h3>Involvements</h3>
      <ul>
        <li>Student Volunteer for coding clubs</li>
        <li>Contributor to college tech events</li>
      </ul>
    </div>
  )
}
