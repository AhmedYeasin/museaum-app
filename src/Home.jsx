import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './Components/Hero.jsx'
import Products from './Components/Products.jsx'
import { useLoaderData } from 'react-router'

function Home() {
  const products = useLoaderData()

  return (
    <main className="App px-6 space-y-8 my-8">
      <Hero />
      <Products products={products} />
    </main>
  )
}

export default Home