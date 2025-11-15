import React, { useEffect } from 'react'
export default function Scoreboard({skills}){
  useEffect(()=>{
    const fills = document.querySelectorAll('.skill-fill')
    fills.forEach(el=>{
      const w = el.getAttribute('data-width') || '0%'
      setTimeout(()=> el.style.width = w, 120)
    })
  },[])
  return (
    <div style={{display:'grid',gap:10}}>
      {skills.map(s=> (
        <div key={s.name} className="scoreboard">
          <div style={{width:110}}><strong>{s.name}</strong></div>
          <div className="skill-bar"><div className="skill-fill" data-width={s.level + '%'} style={{width:'6%'}}></div></div>
          <div style={{width:48,textAlign:'right'}}>{s.level}%</div>
        </div>
      ))}
    </div>
  )
}
