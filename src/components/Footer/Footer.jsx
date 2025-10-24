import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>Whether you’re craving a quick snack or a hearty meal, explore our menu and enjoy delicious food that’s made with love and delivered with care.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="icon" />
                    <img src={assets.twitter_icon} alt="icon" />
                    <img src={assets.linkedin_icon} alt="icon" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delevary</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 33356846</li>
                    <li>contact@tomato</li>
                </ul>
            </div>
        </div>
        <hr/>
            <p className="footer-copyright">
                Copyright 2024 @ Tomato.com - All Right Reserved
            </p>

    </div>
  )
}

export default Footer