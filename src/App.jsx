import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './Component/Player/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Player></Player>     
    </div>
  )
}

export default App
