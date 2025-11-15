import React, { useState } from 'react'
import axios from 'axios'
import Loader from './Loader'

export default function ContactPage(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const [status,setStatus] = useState('')
  const [loading,setLoading] = useState(false)

  async function submit(e){
    e.preventDefault(); setStatus(''); setLoading(true)
    try{
await axios.post((import.meta.env.VITE_API_BASE || '') + '/api/contact', form)


      setStatus('Sent — thank you!'); setForm({name:'',email:'',message:''})
    }catch(e){ setStatus('Failed to send — check server.') } finally { setLoading(false) }
  }

  return (
    <div className="page-card" style={{maxWidth:760}}>
      <h2 style={{marginTop:0}}>Contact</h2>
      <p className="small">Have a question or want to collaborate? Send a message.</p>
      <form onSubmit={submit} style={{display:'grid',gap:12}}>
        <input required placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <textarea required rows={5} placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}></textarea>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button className="btn-main" type="submit" disabled={loading}>{loading ? <Loader size={24}/> : 'Send'}</button>
          <div style={{color:'#475569'}}>{status}</div>
        </div>
      </form>
    </div>
  )
}
