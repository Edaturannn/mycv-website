import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar'
import Card from './components/card'
import Project from './components/project'
import Contact from './components/contact'

import './css/navbar.css'
import './css/card.css'
import './css/project.css'
import './css/contact.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Card />
    <Project />
    <Contact />
  </StrictMode>
)
