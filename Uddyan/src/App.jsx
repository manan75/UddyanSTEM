import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Cards from './components/Cards'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection/>
      <Carousel/>
      <Cards/>
      

    </>
  )
}

export default App
