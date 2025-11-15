const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const Contact = require('./models/Contact')

const app = express()
app.use(cors())
app.use(express.json())

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/kalyani_final'
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error('Mongo connection error', err.message))

// POST contact
app.post('/api/contact', async (req, res) => {
  console.log('POST /api/contact', req.body)
  try {
    const c = await Contact.create(req.body)
    res.status(201).json({ ok: true, data: c })
  } catch (e) {
    console.error(e)
    res.status(500).json({ ok: false, error: e.message })
  }
})

// health
app.get('/api/health', (req, res) => res.json({ ok: true }))

// serve server public (optional)
app.use('/public', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log('Server running on', PORT))
