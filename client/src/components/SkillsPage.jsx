import React from 'react'
import Scoreboard from './Scoreboard'

const skills = [
  {name:'Java', level:85},
  {name:'MERN Stack', level:88},
  {name:'MongoDB', level:80},
  {name:'Git & GitHub', level:82},

]

export default function SkillsPage(){
  return (
    <div className="page-card">
      <h2 style={{marginTop:0}}>Skills</h2>
      <Scoreboard skills={skills} />
    </div>
  )
}
