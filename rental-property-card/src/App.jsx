import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LocationCard from './LocationCard'
import './App.css'
import "./LocationCard.css"
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='cards-container'>
      {
        properties.map(({ id, name, rating, price }) => (
          <LocationCard 
            key={id} 
            locationName={name} 
            score={rating} 
            price={price} 
          />
        ))
      } 
    </div>
  )
}

export default App
