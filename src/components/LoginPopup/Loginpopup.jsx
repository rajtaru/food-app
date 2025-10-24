import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowLogin}) => {
    const [currentState, setCurrentState]= useState('Sign up')
  return (
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="icon" />
            </div>
            <div className="login-popup-input">
                {currentState==='Login'?<></>:<input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type='password' placeholder='Password' required />
            </div>
            <button>{currentState==="Sign up" ? 'Create account':'login'}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currentState==='Login'?
            <p >create a new account? <span onClick={()=>setCurrentState('Sign up')}>Click here</span></p>:
            <p>Already have an account? <span onClick={()=>setCurrentState('Login')}  >Login here</span></p>
            }
            
        </form>
    </div>
  )
}

export default Loginpopup