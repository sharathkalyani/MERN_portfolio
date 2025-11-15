import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfileHeader from './components/ProfileHeader'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import SkillsPage from './components/SkillsPage'
import ContactPage from './components/ContactPage'

export default function App(){
  return (
    <BrowserRouter>
      <div style={{minHeight:'100vh'}}>
        <ProfileHeader />
        <div style={{maxWidth:1000,margin:'22px auto',padding:'0 16px'}}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>
        <footer style={{textAlign:'center',padding:20,color:'#fff',background:'#0b6b2d',marginTop:24}}>© {new Date().getFullYear()} Kalyani</footer>
      </div>
    </BrowserRouter>
  )
}
