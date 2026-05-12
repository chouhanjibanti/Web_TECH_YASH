import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
   const myName = "debugshala";
 const navigate =   useNavigate();

 function GoAbout(){
    navigate("/about", {state: {name: myName}})
 }

 function GoContact(){
    navigate("/contact")
 }
  return (
    <>
    <h1>i am Home Page</h1>

    <Link to="/about">Go About</Link>
    <Link to="/contact">Go Contact</Link>

    <button onClick={GoAbout}>About</button>
    <button onClick={GoContact}>Contact</button>

    </>
  )
}

export default Home