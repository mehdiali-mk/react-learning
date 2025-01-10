import { useState } from 'react'
import './App.css'
import Game from './Game'
import Title from './Title'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
        <Title titleText={"Game"} fontSize={35} />
        <Game />
    </div>
  )
}

export default App
