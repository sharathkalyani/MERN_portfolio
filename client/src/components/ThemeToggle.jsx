// client/src/components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react'

export default function ThemeToggle(){
  // initialize from localStorage (runs only on client)
  const [dark, setDark] = useState(false)

  // on first mount, read saved value and apply immediately
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = saved === 'dark' ? true : (saved === 'light' ? false : prefersDark)
      setDark(initial)
      // apply attribute right away on mount
      if (initial) document.documentElement.setAttribute('data-theme', 'dark')
      else document.documentElement.removeAttribute('data-theme')
    } catch (e) {
      // safe fallback
      console.warn('Theme init error', e)
    }
  }, [])

  // whenever `dark` changes, sync attribute + localStorage
  useEffect(() => {
    try {
      if (dark) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.setItem('theme', 'light')
      }
      // small transition for smoothness
      document.documentElement.style.transition = 'background 0.3s ease, color 0.3s ease'
    } catch (e) {
      console.warn('Theme apply error', e)
    }
  }, [dark])

  return (
    <button
      className="btn-main"
      onClick={() => setDark(d => !d)}
      aria-pressed={dark}
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      style={{ minWidth: 88 }}
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}
