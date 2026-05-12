import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
   <>
     <h1>I am Contact Page</h1>

      <Link to="/about">Go About</Link>
    <Link to="/">Go Home</Link>
   </>
  )
}

export default Contact