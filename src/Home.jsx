import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './Components/Hero.jsx'

function Home() {


  return (
    <main className="App px-6 space-y-8 my-8">
      <Hero />
    </main>
  )
}

export default Home