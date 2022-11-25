import './App.css';
import React from 'react'

const ColorInput = ({newColor, setColor}) => {
  return (
    <form className="colorForm" onSubmit={(e)=> e.preventDefault()}>
        <input
          autoFocus
          id="color"
          type="text"
          placeHolder="Type Color"
          required
          value={newColor}
          onChange = {(e) => setColor(e.target.value)}
        />

        <button>Enter</button>
      </form>
  )
}

export default ColorInput