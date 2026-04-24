import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ToggleButton() {
    const{theme, toggleTheme}=useContext(ThemeContext)

  return (
   <>
      <h2>Current Theme : {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
   </>
  )
}

export default ToggleButton