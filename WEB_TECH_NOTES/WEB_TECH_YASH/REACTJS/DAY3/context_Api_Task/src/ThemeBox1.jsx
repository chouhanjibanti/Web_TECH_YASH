import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeBox1() {
 const {theme , toggleTheme}=useContext(ThemeContext)

   const style = {
        padding:"30px",
        color : theme === "light" ? "orange" :"purple",
        backgroundColor : theme === "light" ?"purple" : "orange"
    }

  return (
    <>
        <h3 style={style}>This is ThemeBox 1 using thhe global state manage</h3>
    </>
  )
}

export default ThemeBox1