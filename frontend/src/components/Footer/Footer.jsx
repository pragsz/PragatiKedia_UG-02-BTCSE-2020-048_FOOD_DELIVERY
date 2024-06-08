import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div  className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Get Conected with us on Social Media</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li> Home</li>
                        <li> About Us</li>
                        <li> Delivery</li>
                        <li> Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH </h2>
                    <ul>
                        <li>+91 798-822-3281</li>
                        <li>contact@foodYatra.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copywrite">Copyright 2024 @ FoodYatra.com - All Right Reseved.</p>
        </div>

  )
}

export default Footer