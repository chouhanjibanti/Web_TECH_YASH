import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function About() {
  const navigate =  useNavigate();
  const locatoion =useLocation();
  console.log(locatoion.state);

   function GoHome(){
    navigate("/")
 }

 function GoContact(){
    navigate("/contact")
 }

  return (
   <>
     <h1>I am About Page</h1>

      <Link to="/">Go Home</Link>
    <Link to="/contact">Go Contact</Link>


      <button onClick={GoHome}>Home</button>
    <button onClick={GoContact}>Contact</button>
   </>
  )
}

export default About