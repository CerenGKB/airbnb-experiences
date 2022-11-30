import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data'
function App() {
  const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })

  return (
    <div className="App">
     <Nav />
     <Hero />
     <section className="cards-list">
                {cards}
            </section>
    </div>
  )
}

export default App
