// import React from 'react'
import './App.css'
import About from './components/About'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Shop from './components/Shop'
import Subscription from './components/Subscription'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <main className="bg-white text-tertirary overflow-x-hidden">
      <Header/>
      <Nav/>
      <Hero/>
      <Feature/>
      <About/>
      <Shop/>
      <Subscription/>
      <Footer/>
    </main>
    </>
  )
}

export default App
