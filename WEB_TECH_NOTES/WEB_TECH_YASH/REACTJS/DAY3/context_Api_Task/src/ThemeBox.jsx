import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeBox() {
    const {theme} = useContext(ThemeContext)


    const style = {
        padding:"30px",
        color : theme === "light" ? "black" :"white",
        backgroundColor : theme === "light" ?"white" : "black"
    }
  return (
   <>
      <h2 style={style}>This is Component is using global theme</h2>
   </>
  )
}

export default ThemeBox