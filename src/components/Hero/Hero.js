import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../Navbar'
import "./Hero.css"

function Hero({isAuth}) {
  return (
    
    
    <div className="hero_cont">
   
  <div className="hero_wrapper">
    <h1>Welcome to Lofi Gallery</h1>
    {isAuth && ( <Link style={{textDecoration:"none"}} to="/works"><button > Browse</button></Link>)}
    {!isAuth &&(<Link style={{textDecoration:"none"}} to="/signin"><button > SignIn</button></Link>)}
    
   
  </div>

    </div>
    
  )
}

export default Hero