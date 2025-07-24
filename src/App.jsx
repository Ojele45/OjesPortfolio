import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <Hero />
     <Aboutme />
     <Skills />
     <Projects />
     <Contact />
    </>
  )
}

export default App
