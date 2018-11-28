import React, { useState } from 'react'
import './App.css';

function  App() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

  
    const handleMouseMove = (event) => {
      setX(event.clientX)
      setY(event.clientY)
    }
  
    return (
      <div style={{ height: 800 }} onMouseMove={(e) => handleMouseMove(e)}>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is ({x}, {y})</p>
      </div>
    )
  }


export default App;
