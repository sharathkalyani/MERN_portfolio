import React from 'react'
export default function Loader({size=56}){
  return (
    <svg className="cricket-loader" width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#d4af37" stroke="#8b5a2b" strokeWidth="6"></circle>
      <path d="M25 40 Q40 50 25 60" stroke="#8b5a2b" strokeWidth="4" fill="none"></path>
      <path d="M75 40 Q60 50 75 60" stroke="#8b5a2b" strokeWidth="4" fill="none"></path>
    </svg>
  )
}
