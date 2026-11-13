import React, { useState } from 'react'
import './App.css'
import heroImg from './assets/hero.png'



const App = () => {
    
  return (
    
    <main>
   

        
        <div className='back'>
                <img className="hero-img" src={heroImg} alt="img" />
    <div className="box">
        <h2>Sign in</h2>
        <h3>Using your ISO credentials</h3>
        <input type="text" placeholder="Username or email" />
        <button>Sign in</button>
        <div className="or"><span>Or</span>
        </div>
        <h3>Sign in using your credentials from another organization</h3>
        <button className="btn">Standardization Identity Federation</button>
    </div>
        </div>
    
    </main>
  )
}

export default App
