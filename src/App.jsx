import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Stocks Metrics</h1>
      <p className="read-the-docs">
         Vite and React
      </p>
    </>
  )
}

export default App;
