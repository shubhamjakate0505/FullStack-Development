import { useState } from 'react'

import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <>
      <h1>State in React</h1>
      <Counter/>
      <LikeButton/>
      
      </>
      
  )
}

export default App
